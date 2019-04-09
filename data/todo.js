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
    title: "Learn Progressive Web App",
    completed: false
  },
  {
    //   id: 3,
    id:uuid.v4(),
    title: "Learn React Router and Next js links",
    completed: true
  },
  {
    //   id: 4,
    id:uuid.v4(),
    title: "Read documentation of React js",
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
    title: "Learn Redux and its implementation",
    completed: false
  }
];