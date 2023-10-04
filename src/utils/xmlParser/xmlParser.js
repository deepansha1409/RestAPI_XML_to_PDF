import { parseString } from 'xml2js';

// Convert XML to JS Object using a Promise
const xmlToJson = (xmlData) =>
  new Promise((resolve, reject) =>
    parseString(xmlData, (err, result) =>
      err ? reject(err) : resolve(result),
    ),
  );

// Export the xmlToJson function
export { xmlToJson };
