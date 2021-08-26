const html_to_pdf = require("html-pdf-node");
const fs = require("fs");
const { buildTemplate, buildComponents } = require("./utils");
const { sampleData } = require("./sample");

let options = { format: "A4" };
let html = fs.readFileSync("./blank.html", { encoding: "utf-8" });

let file = { content: buildTemplate(html, buildComponents(sampleData)) };

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
  // console.log("PDF Buffer:-", pdfBuffer);
  fs.writeFileSync("./res-test.pdf", pdfBuffer);
});
