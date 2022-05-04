const User = require('./../models/UserModel');

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ status:'success', data: newUser });
    } catch(err) {
        res.status(400).json({ error: 'Error' });
    }
};

const readUsers = async (req, res) => {
};

const readUser = (req, res) => {

};

const updateUser = () => {};
const deleteUser = () => {};

module.exports = {createUser, readUsers, readUser, updateUser, deleteUser};