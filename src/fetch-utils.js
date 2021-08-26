// const URL = 'http://localhost:7890';
const URL = 'https://dry-journey-70311.herokuapp.com';

export async function getToken(loginInput, type) {
    const authyURL = `${URL}/auth/${type}`;
    const response = await fetch(authyURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(loginInput),
    });
    const dataFromLS = await response.json();
    console.log(response);
    localStorage.setItem('TOKEN', dataFromLS.token);
    return dataFromLS.token;
}

export async function getToDos(token){
    const apiURL = `${URL}/api/todos`
    const response = await fetch(apiURL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(),
    });
    const data = await response.json();
    console.log(data)
    return data;
}
export async function createToDos(token, todo){
    const apiURL = `${URL}/api/todos`
    const response = await fetch(apiURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await response.json(todo);
    console.log(data)
    return data;
}
export async function updateToDos(token, todo){
    const apiURL = `${URL}/api/todos/${todo.id}`
    const response = await fetch(apiURL,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await response.json(todo);
    console.log(data)
    return data;
}