let user = {
  name: 'Aleks',
  age: 35,
  location: 'Poltava,Ukraine',
  getInfo: function () {
    return alert(
      `Name: ${this.name}, \nAge: ${this.age}, \nLocation: ${this.location}`
    );
  },
};

user.getInfo();
