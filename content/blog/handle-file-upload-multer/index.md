---
template: post
title: Handle Image Upload with multer, React and Node
slug: handling-image-upload-multer-react-node
date: "2020-05-03"
category: React
tags: ["Multer", "React", "Node"]
---

This tutorial will guide you to handle file or image uploads in a MERN app using multer in a few easy steps.
Lets get started : 

##### Step 1: 
Lets setup our backend first.
+ Create a server.js file in the root of your project. Lets install the required packages.
```javascript
 npm i express multer cors
 ```

 + We will create an express server and a route to handle the upload.


```javascript
var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');

app.use(cors())

//multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${+new Date()}.jpg`);
    }
})

const upload = multer({
    storage
});

app.post('/upload', upload.single("photo"), async function(req, res) {
    try {
        //const path = req.file.path;  //get the file path
        /* 
            Some code to save in database
            or any operation
        */
    return res.status(200).send("File saved successfully")
    } catch (error) {
        res.status(400).send({ error });
    }
});

app.listen(8000, function() {
    console.log('running on port 9000');
});
```
##### Step 2: 
Now lets setup the react frontend. It is going to be very basic. I'll use create-react-app.

```
 npx create-create-app somename
```

- We'll remove the necessary code from the react app. And add the following code to create a form.

```javascript

import React from 'react';

function App() {
  return (
    <div className="App">
        <h1> Multer uploads</h1>
        <form>
          <label>Select file </label>
          <input type="file" className="form-control" multiple=""/><br/><br/>
          <button type="submit">Submit</button>
        </form>
      
    </div>
  );
}

export default App;
```
<img src="./screen1.png" />  
  <br/>

- We will now add some handlers to make this form functional. Also axios will be used to make a post request to the backend.
    ``` 
    npm i axios
    ```
- Add the onSubmit handler on the form tag
    ```javascript
    handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('photo', this.state.fileSelected)

    axios.post("http://localhost:9000/upload", data, {})
      .then(res => { 
        console.log(res.statusText)
      })
    }

    <form onSubmit={this.handleSubmit}>
    ```
- And onChange handler on the input tag and the following code
    ```javascript
    handleFileUpload = (e) => {
      this.setState({
          fileSelected:  e.target.files[0]
      })
    }

    <input type="file" multiple="" onChange={this.handleFileUpload}/>

    ```
##### Step 3:
Our app is now ready. Start the server and the react app and let's test it. 

- The result: You can now see the uploaded image in uploads folder
<br />
  <img src="./screen2.png" />

##### Step 4 (Optional):
Additionally you can also use an image compressor to reduce the size of image before uploading.
A CDN can also be used like cloudinary to upload the images and source them from there.

And that is it. You can find the code associated with this tutorial in this github <a href="https://github.com/muzammil-khan-vst-au4/imageUpload-tutorial" target="_blank">repo</a>
