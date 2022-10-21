let users = [
  {
    id: 1,
    gender: "male",
    name: "Rakib",
    contact: "01759325624",
    address: "Dhaka",
    PhotoUrl: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    gender: "female",
    name: "Amit",
    contact: "01356325621",
    address: "Madaripur",
    PhotoUrl: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    gender: "male",
    name: "Sakib",
    contact: "01458725623",
    address: "Borisal",
    PhotoUrl: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    gender: "female",
    name: "Jabed",
    contact: "01534325629",
    address: "Khulna",
    PhotoUrl: "https://source.unsplash.com/random",
  },
  {
    id: 5,
    gender: "male",
    name: "Arman",
    contact: "01986325626",
    address: "Sundorbon",
    PhotoUrl: "https://source.unsplash.com/random",
  },
];

// get all users
module.exports.getAllUser = (req, res, next) => {
  res.send(users);
};

// post single user
module.exports.postUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
};

// get single user details
module.exports.getUserDetails = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === Number(id));
  res.send(foundUser);
};

// patch update user
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const newData = users.find((user) => user.id === Number(id));

  newData.id = Number(id);
  newData.name = req.body.name;

  res.send(newData);
};

// delete single user
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  users = users.filter((user) => user.id !== Number(id));

  res.send(users);
};
