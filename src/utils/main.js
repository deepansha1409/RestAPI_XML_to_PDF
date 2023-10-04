// Import XML to JSON parser
import { xmlToJson } from './xmlParser/xmlParser.js';

// Import HTML to PDF conversion functions
import { htmlConverter } from './convertToHtml/convertToHtml.js';
import { generatePdf } from './convertToPdf/convertToPdf.js';

import fs from 'fs/promises';

// Main function for XML to PDF conversion
const main = async (xmlData) => {
  try {
    // Convert XML to JSON
    const jsonData = await xmlToJson(xmlData);

    // Read HTML template from file
    const templatePath = 'src/views/employeeTemplate.hbs';
    const template = await fs.readFile(templatePath, 'utf-8');

    // Convert JSON to HTML
    const htmlData = htmlConverter(jsonData, template);

    // Generate PDF from HTML
    const pdfGenerated = await generatePdf(htmlData);

    // Return the generated PDF
    return pdfGenerated;
  } catch (error) {
    console.log(error);
    throw new Error('Error converting XML to PDF');
  }
};

export { main };
