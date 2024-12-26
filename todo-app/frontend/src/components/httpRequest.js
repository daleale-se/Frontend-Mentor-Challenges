const BASE_URL = "http://localhost:4000";

const getUserTodos = async (username) => {
    const response = await fetch(`${BASE_URL}/todos/${username}`);
    const data = await response.json();
    return data;
};

const sendTitle = (title, username) => {
    return fetch(`${BASE_URL}/todos/${username}`, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })  
}

const updateTodo = (id, checked, username) => {
    return fetch(`${BASE_URL}/todos/${username}`, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        checked: !checked
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })  
}

const deleteTodo = async (id, username) => {
    return fetch(`${BASE_URL}/todos/${username}`, {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })    
}

const reorderTodos = (todoIds, username) => {
    return fetch(`${BASE_URL}/todos/reorder/${username}`, {
        method: "PUT",
        body: JSON.stringify({
            newOrder: todoIds
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })    
}

export {getUserTodos, sendTitle, deleteTodo, updateTodo, reorderTodos}