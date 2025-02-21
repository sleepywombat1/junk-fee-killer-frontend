import React, { useState } from "react";
import Card from "./components/ui/Card";
import CardHeader from "./components/ui/CardHeader";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { UploadCloud, ShieldCheck } from "lucide-react";
import axios from "axios";

console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setUploading(true);
    setError(null);
    setResponse(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponse(res.data);
    } catch (err) {
      setError("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl">
        <CardHeader className="flex flex-col items-center">
          <ShieldCheck className="text-blue-500 w-12 h-12 mb-2" />
          <h2 className="text-xl font-semibold">Secure Document Upload</h2>
          <p className="text-gray-500 text-sm text-center">
            Upload your documents securely. Bank-level encryption ensures your data is protected.
          </p>
        </CardHeader>
        <div className="flex flex-col items-center gap-4 p-4">
          <Input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
          <Button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          >
            <UploadCloud className="w-5 h-5" />
            {uploading ? "Uploading..." : "Upload File"}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {response && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm w-full">
              <p>
                <strong>Detected Fees:</strong>
              </p>
              <p>{response.detected_fees}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
