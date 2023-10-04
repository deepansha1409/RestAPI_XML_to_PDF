import puppeteer from 'puppeteer';
import { pdfConfig } from '../../config.js';

// Function for generating PDF from HTML
const generatePdf = async (htmlData) => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set HTML content
  await page.setContent(htmlData);

  // Generate PDF buffer with specified format
  const pdfBuffer = await page.pdf({ format: pdfConfig.pdfFormat });

  await browser.close();

  // Return the generated PDF buffer
  return pdfBuffer;
};

export { generatePdf };
