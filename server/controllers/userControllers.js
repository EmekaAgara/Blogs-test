const registerUser = (req, res, next) => {
  res.json("Register User");
};

const loginUser = (req, res, next) => {
  res.json("Login User");
};

const getUser = (req, res, next) => {
  res.json("User Profile");
};
const changeAvatar = (req, res, next) => {
  res.json("Change Avatar");
};
const editUser = (req, res, next) => {
  res.json("Edit User Details");
};
const getAuthors = (req, res, next) => {
  res.json("Get all users");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
};
