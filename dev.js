const fs = require("fs");
const {
  buildBiodata,
  buildOtherCert,
  buildParent,
  buildShortInfo,
  buildTertiary,
  buildWaecExam,
} = require("./components");

const blocks = [
  "__image",
  "__refNumber",
  "__shortInfo",
  "__bio",
  "__bece",
  "__parents",
  "__EDUCATION",
];

const {
  hndBlocks,
  ntviBlocks,
  officerBlocks,
  wassceBlocks,
} = require("./blocks");

const buildComponents = data => {
  let newData = {};

  newData["__shortInfo"] = buildShortInfo({
    fullName:
      data.personalInfo.firstName +
      " " +
      data.personalInfo.otherNames +
      " " +
      data.personalInfo.surname,
    phone: data.personalInfo.phoneNumber,
    applicationType: data.type,
    reference: data.referenceNumber,
    special: data.special ? "YES" : "NO",
    status: data.status.name,
  });

  newData["__bio"] = buildBiodata(data.personalInfo);

  newData["__parents"] = buildParent(data.familyInfo);

  newData["__bece"] = buildWaecExam(
    {
      indexNo: data.educationInfo.bece.indexNumber,
      schoolName: data.educationInfo.bece.nameOfSchool,
      year: "N/A",
      aggregate: "N/A",
      subject1: data.educationInfo.bece.grades[0].name,
      subject1Grade: data.educationInfo.bece.grades[0].grade,
      subject2: data.educationInfo.bece.grades[1].name,
      subject2Grade: data.educationInfo.bece.grades[1].grade,
      subject3: data.educationInfo.bece.grades[2].name,
      subject3Grade: data.educationInfo.bece.grades[2].grade,
      subject4: data.educationInfo.bece.grades[3].name,
      subject4Grade: data.educationInfo.bece.grades[3].grade,
      subject5: data.educationInfo.bece.grades[4].name,
      subject5Grade: data.educationInfo.bece.grades[4].grade,
      subject6: data.educationInfo.bece.grades[5].name,
      subject6Grade: data.educationInfo.bece.grades[5].grade,
    },
    "BECE"
  );

  let buildEduComponents = () => {
    const educationComponents = {};
    if (data.educationInfo.wassce)
      educationComponents.wassce = data.educationInfo.wassce.schools.map(
        result =>
          buildWaecExam(
            {
              indexNo: result.indexNumber,
              schoolName: result.nameOfSchool,
              year: "N/A",
              aggregate: "N/A",
              subject1Grade: result.grade1,
              subject1: result.subject1,
              subject2Grade: result.grade2,
              subject2: result.subject2,
              subject3Grade: result.grade3,
              subject3: result.subject3,
              subject4Grade: result.grade4,
              subject4: result.subject4,
              subject5Grade: result.grade5,
              subject5: result.subject5,
              subject6Grade: result.grade6,
              subject6: result.subject6,
            },
            "WASSCE"
          )
      );

    if (data.educationInfo.nvti)
      educationComponents.nvti = buildTertiary({
        schoolName: data.educationInfo.nvti.nvtiProgramme,
        indexNo: data.educationInfo.nvti.nvtiCertificateNumber,
        year: data.educationInfo.nvti.nvtiYear,
        pragramme: data.educationInfo.nvti.nvtiProgramme,
        class: data.educationInfo.nvti.nvtiClass,
      });

    if (data.educationInfo.tetiary)
      educationComponents.tetiary = buildTertiary({
        schoolName: data.educationInfo.tetiary.nvtiProgramme,
        indexNo: data.educationInfo.tetiary.nvtiCertificateNumber,
        year: data.educationInfo.tetiary.nvtiYear,
        pragramme: data.educationInfo.tetiary.nvtiProgramme,
        class: data.educationInfo.tetiary.nvtiClass,
      });

    if (data.educationInfo.nss)
      educationComponents.nss = buildOtherCert({
        otherInstitution: data.educationInfo.nss.nameOfNssInstitution,
        referenceNumber: data.educationInfo.nss.nssCertificateNumber,
        course: "NATIONAL SERIVICE",
        durationNumber: `${
          data.educationInfo.nss.nssStartDate.split("-")[0]
        } - ${data.educationInfo.nss.nssEndDate.split("-")[0]}`,
      });

    if (data.educationInfo.others)
      educationComponents.certificate = buildOtherCert(
        data.educationInfo.others
      );

    if (data.educationalLevel === "WASSCE") {
      return wassceBlocks.map(block => educationComponents[block]).join("\n");
    } else if (data.educationalLevel === "HND") {
      return hndBlocks.map(block => educationComponents[block]).join("\n");
    } else if (data.educationalLevel === "NVTI") {
      return ntviBlocks.map(block => educationComponents[block]).join("\n");
    } else
      return officerBlocks.map(block => educationComponents[block]).join("\n");
  };

  newData["__EDUCATION"] = buildEduComponents();

  newData["__refNumber"] = data.referenceNumber;
  newData["__image"] = data.pictureUrl;
  return newData;
};

const buildTemplate = (template, newData) => {
  blocks.forEach(block => {
    template = template.replace(block, newData[block]);
  });
  console.log(template);
  return template;
};

module.exports.buildTemplate = buildTemplate;
module.exports.buildComponents = buildComponents;
