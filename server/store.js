function store() {
  let users = [];

  return {
    addUser(user) {
      users.push(user);
      return user;
    },
    getUsers() {
      return users;
    }
  }
}

module.exports = store();