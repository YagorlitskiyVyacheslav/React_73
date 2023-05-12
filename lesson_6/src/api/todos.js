import { instanse } from "./instanse";

const get = (query) => {
  return instanse
    .get("/todos", {
      params: {
        title_like: query,
      },
    })
    .then((response) => response.data);
};

const post = (todo) => {
  return instanse.post("/todos", todo).then((response) => response.data);
};

const deleteTodo = (id) => {
  return instanse.delete(`/todos/${id}`).then((response) => response.data);
};

export const todosApi = { get, post, deleteTodo };
