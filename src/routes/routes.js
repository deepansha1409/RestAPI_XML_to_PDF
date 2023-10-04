import express from 'express';
import { main } from '../utils/main.js';

const router = express.Router();

// Define a POST route for converting XML to PDF
router.post('/convert', async (req, res) => {
  try {
    // Extract XML data from the request body
    const { xmlData } = req.body;

    // Call the main function for PDF conversion
    const pdfData = await main(xmlData);

    // Set response headers for file download
    res.setHeader('content-Disposition', 'attachment; filename=pdf_file.pdf');

    // Set the content type as PDF and send the PDF data in the response
    res.type('application/pdf').send(pdfData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
