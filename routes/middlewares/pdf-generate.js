const Write = require("../../models/WriteReport");
const Technical = require("../../models/Technical");
const Finantial = require("../../models/Finantial");
const Final = require("../../models/FinalReport");
const Company = require("../../models/Company");
const Installation = require("../../models/Installation");

const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm 3px solid black"
};

const generatePDF = async (req, res) => {
    try{
        const finalReport = await Final.findById(req.params.id);
        const technicalReport = await Technical.findById(finalReport.idTechnical);
        const finantialReport = await Finantial.findById(finalReport.idFinantial);
        const companyInfo = await Company.findById(finantialReport.idCompany);
        const installationNumber = await Installation.findById(technicalReport.idInstallationNumber);

        const document = {
            html: html,
            data: {
                month: technicalReport.months,
                name: companyInfo.name,
                email: companyInfo.email,
                phone: companyInfo.phone,
                cnpj: companyInfo.cnpj,
                street: companyInfo. street,
                number:companyInfo. number,
                neighborhood: companyInfo. neighborhood,
                city: companyInfo.city,
                state: companyInfo.state,
                installationNumber: installationNumber.installationNumber,
                previousBalance: technicalReport.previousBalance,
                actualBalance: technicalReport.actualBalance,
                injected: technicalReport.injected,
                totalInjected:technicalReport.totalInjected,
                valueEnergy: finantialReport.valueEnergy,
                discount: finantialReport.discount,
                valueDiscount: finantialReport.valueDiscount,
                date: finantialReport.date,
                payment: finantialReport.payment,
        },
            path: "./output.pdf",
            type: "",
        };

        pdf
            .create(document, options)
            .then((pdfres) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify(pdfres));
                res.end();
            })
            .catch((error) => {
                console.error(error);
            });
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

module.exports = {
    generatePDF
}