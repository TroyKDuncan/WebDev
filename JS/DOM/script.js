var database = [
    {
        username: "Troy",
        password: "password"
    },
    {
        username: "Hector",
        password: "123"
    },
    {
        username: "Austin",
        password: "777"
    },
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
    for (var i=0; i < database.length; i++) {
        if (username === database[i].username && 
            password === database[i].password) {
            console.log(newsFeed);
            return
        }
    }
    alert("Sorry, incorrect login info")
}

signIn(userNamePrompt, passwordPrompt);