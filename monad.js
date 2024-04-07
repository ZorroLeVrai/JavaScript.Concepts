const database = {
  fetch: _ => ({
    userFriends: {
      first: () => ({
        gender: "male"
      })
    }
  })
};


function getGenderFriend() {
  let userObject = database.fetch("Adam");
  if (userObject) {
    let userFriends = userObject.userFriends;
    if (userFriends) {
      let firstFriend = userFriends.first();
      if (firstFriend) {
        return firstFriend.gender;
      }
    }
  }

  return null;
}

class Option {
  constructor(value) {
    this.value = value;
  }

  bind(func) {
    if (this.value === null || this.value === undefined)
      return this;
    return new Option(func(this.value));
  }
}

function getGenderFriendFunctor() {
  return new Option(database.fetch("Adam"))
    .bind(obj => obj.userFriends)
    .bind(obj => obj.first())
    .bind(obj => obj.gender)
    .value;
}

console.log(getGenderFriend());         //male
console.log(getGenderFriendFunctor());  //male