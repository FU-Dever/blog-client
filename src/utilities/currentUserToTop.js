export function currentUserToTop(users, name){
    let user = users.find(user => (user.username === name));
    return [user].concat(users.filter(user => user.username !== name));
}