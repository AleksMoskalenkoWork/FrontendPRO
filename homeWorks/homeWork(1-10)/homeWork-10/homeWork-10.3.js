let contactBook = {
  contactsList: [],

  addContact() {
    userName = prompt('Enter contact name:');
    userPhone = prompt('Enter contact phone:');
    userEmail = prompt('Enter contact email:');
    const newContact = { userName, userPhone, userEmail };
    this.contactsList.push(newContact);
    alert(
      `Contact added to contact list: \nName: ${userName}, \nPhone: ${userPhone}, \nEmail: ${userEmail}`
    );
  },

  findContactByName() {
    const userNameForSearch = prompt('Enter contact name for search:');
    const foundedContact = this.contactsList.find(
      (contactItem) => contactItem.userName === userNameForSearch
    );
    if (foundedContact) {
      alert(`Founded contact is:\nName: ${foundedContact.userName}`);
    } else {
      alert('Contact not found.');
    }
  },
};

contactBook.addContact();
contactBook.findContactByName();
