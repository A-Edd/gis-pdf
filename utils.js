const {
  buildBiodata,
  buildGuardian,
  buildOtherCert,
  buildParent,
  buildShortInfo,
  buildTertiary,
  buildWaecExam,
} = require("./components");

const blocks = [
  "__shortInfo",
  "__bio",
  "__bece",
  "__wassce",
  "__tertiary",
  "__certificate",
  "__nvti",
  "__parents",
  "__guardians",
  "__other",
];

const { sampleData } = require("./sample");
const fs = require("fs");
let html = fs.readFileSync("./blank.html", { encoding: "utf-8" });

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

  !data.educationalLevel.includes("NVTI")
    ? (newData["__wassce"] = data.educationInfo.wassce.schools.map(result =>
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
      ))
    : (newData["__nvti"] = buildTertiary({
        schoolName: data.educationInfo.nvti.nvtiProgramme,
        indexNo: data.educationInfo.nvti.nvtiCertificateNumber,
        year: data.educationInfo.nvti.nvtiYear,
        pragramme: data.educationInfo.nvti.nvtiProgramme,
        class: data.educationInfo.nvti.nvtiClass,
      }));

  newData["__tertiary"] = buildTertiary({
    schoolName: data.educationInfo.tetiary.nvtiProgramme,
    indexNo: data.educationInfo.tetiary.nvtiCertificateNumber,
    year: data.educationInfo.tetiary.nvtiYear,
    pragramme: data.educationInfo.tetiary.nvtiProgramme,
    class: data.educationInfo.tetiary.nvtiClass,
  });

  newData["__certificate"] = buildOtherCert(data.educationInfo.others);

  return newData;
};

const buildTemplate = (template, newData) => {
  // console.log(blocks);
  blocks.forEach(block => {
    template = template.replace(block, newData[block]);
  });
  return template;
};

module.exports.buildTemplate = buildTemplate;
module.exports.buildComponents = buildComponents;

console.log(buildTemplate(html, buildComponents(sampleData)));
