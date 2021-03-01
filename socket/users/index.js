let users = []

function addUser(user) {
    users.push({
        id: users.length,
        name: user.name,
    })
    return users[users.length - 1]
}

function getUsers() {
    return users
}

exports = {
    addUser: addUser,
    getUsers: getUsers,
}