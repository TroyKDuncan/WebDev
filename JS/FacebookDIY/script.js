var database = [
    {
        username: "Troy",
        password: "password"
    }
]

var newsFeed = [
    {
        username: 'Chris',
        post: 'Whaddup party people?'
    },
    {
        username: 'Jerry',
        post: 'What do you mean?'
    },
    {
        username: 'Justing',
        post: 'I\'m bringin sexy back'
    }
]

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, incorrect login info")
    }
}

signIn(userNamePrompt, passwordPrompt);