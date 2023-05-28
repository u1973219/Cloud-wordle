// Importar el SDK de cliente de Azure Translator
import { AzureCognitiveTranslator } from 'azure-cognitiveservices-translator';

// Inicializar el cliente de Azure Translator
const translatorClient = new AzureCognitiveTranslator.TextTranslatorClient('948738bc08c14cb9b5af370695204fc6', 'https://westeurope.api.cognitive.microsofttranslator.com/');

// Función para realizar la traducción
async function translateText(text, sourceLanguage, targetLanguage) {
  try {
    // Configurar los parámetros de la solicitud de traducción
    const translationRequest = {
      text: text,
      from: sourceLanguage,
      to: targetLanguage
    };

    // Realizar la llamada al servicio de Azure Translator
    const translationResult = await translatorClient.translate([translationRequest]);

    // Obtener la traducción del resultado
    const translatedText = translationResult[0].translations[0].text;

    // Retornar la traducción
    return translatedText;
  } catch (error) {
    console.error('Error al realizar la traducción:', error);
    throw error;
  }
}

// Ejemplo de uso de la función de traducción
async function exampleTranslation() {
    const sourceLanguage = 'en'; // Idioma de origen (inglés)
    const targetLanguage = 'es'; // Idioma de destino (español)
  
    try {
      // Obtener el elemento de texto a traducir por su id
      const elementToTranslate = document.getElementById('text-to-translate');
      const textToTranslate = elementToTranslate.textContent;
  
      // Realizar la traducción
      const translatedText = await translateText(textToTranslate, sourceLanguage, targetLanguage);
  
      // Actualizar el contenido del elemento con la traducción
      elementToTranslate.textContent = translatedText;
      console.log(translateText);
    } catch (error) {
      console.error('Error en el ejemplo de traducción:', error);
    }
  }
  
  // Llamar al ejemplo de traducción
  exampleTranslation();