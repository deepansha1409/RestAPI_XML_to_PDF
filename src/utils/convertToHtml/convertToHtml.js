import handlebars from 'handlebars';

// Function for converting JSON data to HTML
const htmlConverter = async (jsonData, template) => {
  
  // Compile the Handlebars template
  const compiledTemplate = handlebars.compile(template);

  // Use the compiled template to generate HTML using the provided JSON data
  return compiledTemplate(jsonData);
};

export { htmlConverter };
