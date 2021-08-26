const blocks = [
  "__image",
  "__refNumber",
  "__shortInfo",
  "__bio",
  "__bece",
  "__parents",
  "__EDUCATION",
];

const buildTemplate = (template, newData) => {
  blocks.forEach(block => {
    template = template.replace(block, newData[block]);
  });
  console.log(template);
  return template;
};

module.exports = buildTemplate;
