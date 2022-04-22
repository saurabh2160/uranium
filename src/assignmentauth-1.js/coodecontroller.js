const { userSchema } = require('../assignmentauth-1.js/modelschema')
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
    let data = req.body;
    let savedData = await userSchema.create(data)
    res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userSchema.findOne({ emailId: userName, password: password }).catch(err => null)
    if (!user)
        return res.status(406).send({
            status: false,
            msg: "username or the password is not corerct",
        });
    let token = jwt.sign({ userId: user._id.toString() }, "functionup-uranium");
    res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let userDetails = await userSchema.findById(userId).catch(err => null)
    if (!userDetails)
        return res.status(404).send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {

    let userId = req.params.userId;
    let user = await userSchema.findById(userId).catch(err => null)
    if (!user) {
        return res.status(404).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userSchema.findOneAndUpdate({ _id: userId }, { $set: { age: userData.age } }, { new: true });
    res.send({ status: true, data: updatedUser });
};
const deleteuser = async (req, res) => {

    let userId = req.params.userId;
    let user = await userSchema.findById(userId).catch(err => null)
    if (!user) {
        return res.status(404).send("No such user exists");
    }
    let updatedUser = await userSchema.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.send({ status: true, data: updatedUser });
};
const userlog = async function (req, res) {

    let userId = req.params.userId;

    let user = await userSchema.findOne({_id:userId}).catch(err => null)
    if (!user) {
        return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userSchema.findOneAndUpdate({ _id: userId }, { $set: { age: userData.age } }, { new: true });
    res.send({ status: true, data: updatedUser });

};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;
module.exports.userlog = userlog;