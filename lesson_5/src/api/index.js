const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: true,
    description: "test",
    priority: "hight",
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    description: "",
    priority: "medium",
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    description: "",
    priority: "low",
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
    description: "",
    priority: "hight",
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    description: "",
    priority: "hight",
  },
];

const get = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(todos);
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
};

const post = (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        todos.push(todo);
        resolve(todos);
      } else {
        reject("Something went wrong");
      }
    }, 1500);
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        todos.splice(
          todos.findIndex((obj) => obj.id === id),
          1
        );
        resolve(todos);
      } else {
        reject("Something went wrong");
      }
    }, 1500);
  });
};

export const todosApi = {
  get,
  post,
  deleteTodo,
};
