import { todos } from "./data";

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
