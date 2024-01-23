import React, { useState } from 'react';
import axios from 'axios';

const OCRComponent = () => {
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleOCRRequest = async () => {
    const apiUrl = "https://api.edenai.run/v2/ocr/identity_parser";
    const apiKey = process.env.REACT_APP_EDENV_API_KEY; // Replace with your actual API key

    const form = new FormData();
    form.append("providers", "affinda");
    form.append("file", imageFile);
    form.append("fallback_providers", "");

    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    try {
      const response = await axios.post(apiUrl, form, { headers });
      setResult(response.data.affinda.extracted_data[0].mrz.value);
    } catch (error) {
      console.error("Error during OCR request:", error);

      // Log the detailed error response
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError(error.response.data.error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <h2>OCR Component</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleOCRRequest}>Run OCR</button>

      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div>
          <h3>OCR Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OCRComponent;
