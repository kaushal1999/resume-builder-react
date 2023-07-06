const resumeTemplate = require("../resumeTemplate");
const resumeHtmlGenerator = require("../resumeTemplate");
const pdf = require("html-pdf");
const options = {
  height: "42cm",
  width: "35.7cm",
    timeout: "6000",
};

async function createAndSendPdf(req, res) {
  const formData = req.body;
  const htmlTemplate = resumeHtmlGenerator(formData);
    pdf.create(htmlTemplate, {
        options,
      childProcessOptions: {
        env: {
          OPENSSL_CONF: "/dev/null",
        },
      },
    }).toFile(
      "/home/kaushal/Documents/js-projects/resume-builder-react/resume.pdf",
      function (err, res) {
        if (err) return console.log(err);
        console.log("done"); // { filename: '/app/businesscard.pdf' }
      }
    );

  res.send(htmlTemplate);
}

module.exports = createAndSendPdf;
