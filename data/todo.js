const uuid = require("uuid");
module.exports = [
  {
    //   id: 1,
    id: uuid.v4(),
    title: "Learn React hooks",
    completed: false
  },
  {
    // id: 2,
    id:uuid.v4(),
    title: "Learn Travis CI",
    completed: false
  },
  {
    //   id: 3,
    id:uuid.v4(),
    title: "Learn React Native",
    completed: true
  },
  {
    //   id: 4,
    id:uuid.v4(),
    title: "Learn SQL",
    completed: true
  },
  {
    //   id: 5,
    id:uuid.v4(),
    title: "Read documentation of next js",
    completed: true
  },
  {
    //   id: 5,
    id:uuid.v4(),
    title: "Attend a bootcamp",
    completed: false
  }
];