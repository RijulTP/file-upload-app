import React, { useState } from "react"
// import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const onFileUpload = () => {
    console.log("File Uploaded")
  }

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload using React!</h1>
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
        {fileData()}
      </header>
    </div>
  )
}

export default App
