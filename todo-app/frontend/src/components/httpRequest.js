const getUserTodos = async (username) => {
    const response = await fetch(`http://localhost:4000/todos/${username}`);
    const data = await response.json();
    return data;
};

const sendTitle = (titleValue, username) => {
    return fetch(`http://localhost:4000/todos/${username}`, {
      method: "POST",
      body: JSON.stringify({
        title: titleValue
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })  
}

export {getUserTodos, sendTitle}