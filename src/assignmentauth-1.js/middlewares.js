const jwt = require("jsonwebtoken");
const { userSchema } = require("./modelschema");
const mdlwr = async (req, res, next) => {
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]
    if (!token) {
        return res.status(406).send({ status: false, msg: "token must be present" })
    }
    try {
        let decodedtoken = jwt.verify(token, "functionup-uranium");
        let userloged = decodedtoken.userId
        let userId = req.params.userId;
        if (userloged !== userId) {
            return res.status(401).send({ status: false, data: "user ID does not match" })
        } 
        let del = await userSchema.findById(userId)
        if (del.isDeleted !== false) {
            return res.status(404).send({ status: false, data: "user missing" })
        }
    }
    catch (err) { return res.status(400).send({ status: false, msg: "token is invalid" }); }
 
    next();

}

module.exports.mdlwr = mdlwr;