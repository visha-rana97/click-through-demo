const express = require('express');
const app = express();
fs = require('fs');
const multer = require('multer')
const port = 5000;
const cors = require('cors')
const validator = require('xsd-schema-validator');

app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Math.round(Math.random() * 1E9) + file.originalname)
  }
})

app.get('/', (req, res) => {

});

app.post('/upload_xml', (req, res) => {
  const upload = multer({ storage: storage }).array('uploaded_file');

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err)
    } else if (err) {
      console.log(err)
    } else {
      console.log(req.files.length)
      const results = [];
      req.files.forEach((element, i) => {
        const xmlStream = fs.createReadStream(element.path);
        try {
          validator.validateXML(xmlStream, './pain.001.001.03.xsd', (err, result) => {
            // if (err) {
            //   console.log(err);
            //   return res.json({ success: false, result: {error:'Error while validating the files!'} })
            // }
            console.log(i)
            results.push({ name: element.originalname, result: result });
            if (req.files.length == (i + 1)) {
              res.json({ success: true, result: results });
            }
          });
        } catch (error) {
          console.log('CATCH-----', error);
          return res.json({ success: false, result: { error: 'Error while validating the files!' } })
        }
      });
    }
  })
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});