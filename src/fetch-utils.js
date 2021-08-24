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
    console.log()
    const dataFromLS = await response.json();
    localStorage.setItem('TOKEN', dataFromLS.token);
    return dataFromLS.token;
}