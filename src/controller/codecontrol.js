const { uploadFile } = require('../awsfunction/awsupload')

const getfilesfrompostman = async (req, res) => {
    try {
        let files = req.files
        if (files && files.length > 0) {
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL = await uploadFile(files[0])
            res.status(201).send({ msg: "file uploaded succesfully", data: uploadedFileURL })
        }
        else {
            res.status(400).send({ msg: "No file found" })
        }

    }
    catch (err) {
        res.status(500).send({ msg: err })
    }

}

module.exports = { getfilesfrompostman }