function callApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello, it works !')
            //reject('Ahah, ça marche pas !');
        }, 2000)
    })
}

let message;

// Syntaxe 1 de gestion de promesse
callApi()
    .then((response) => {
        message = response;
        console.log('log then ', message);
        handleResponse();
    }).catch((err) => console.log(err))

console.log('log global : ', message); // undefined

function handleResponse() {}

// Syntaxe 2
let message_2;
async function getMessage() {
    try {
        message_2 = await callApi();
        console.log(message_2);
    } catch (err){
        console.log('[error] ' + err);
    }
}

getMessage();

/*   JS *****/

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
        // traitement
    } catch (e) {
        console.log('ça marche');
    } finally {
      console.log('finally')
    }
}
getUsers();


function getUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => console.log(users))
        .catch(e => console.log('ça marche pas'))
        .finally(() => console.log('finit'))
}
