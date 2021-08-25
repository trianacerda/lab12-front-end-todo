const URL = 'http://localhost:7890';

export async function getToken(loginInput, type) {
    const authyURL = `${URL}/auth/${type}`
    const response = await fetch(authyURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
    });
    const dataFromLS = await response.json();
    localStorage.setItem('TOKEN', dataFromLS.token);
    return dataFromLS.token;
}

export async function getToDos(loginInput){
    const apiURL = `${URL}/api/todos`
    const response = await fetch(apiURL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI5OTI2MTk0fQ.N-g9euso3PDEHRiagRqPhOVWM6H8Ur6pgE6t738Pi20'
        },
        body: JSON.stringify(loginInput),
    });
    const dataFromLS = await response.json();
    localStorage.setItem('TOKEN', dataFromLS.token);
    return dataFromLS.token;
}
