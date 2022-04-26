class Contact {

    constructor(...params) {
        this.firstName = params[0];     this.lastName = params[1];      this.address = params[2];
        this.city = params[3];          this.state = params[4];         this.zip = params[5];
        this.phoneNumber = params[6];   this.email = params[7];     }

    validateName(name)    {
        let nameRegex = RegExp("^[A-Z]{1}[A-z a-z]{2,}$")
        if (nameRegex.test(name))    return true;
        else   return false;    }

    get firstName(){ return this._firstName}
    set firstName(firstName) { 
        if (this.validateName(firstName)) this._firstName = firstName;
        else  throw "First name is incorrect";  }

    get lastName(){ return this._lastName}
    set lastName(lastName) { 
        if (this.validateName(lastName))  this._lastName = lastName;
        else   throw "Last name is incorrect";  }
    
    validateAddressCityState(address) { 
        let addressRegex = RegExp("^[A-z]{4,}$")
        if (addressRegex.test(address))  return true;
        else  return false;     }

    get address(){ return this._address}
    set address(address) { 
        if (this.validateAddressCityState(address)) this._address = address;
        else  throw "Address is incorrect"; }

    get city(){ return this._city}
    set city(city)  { 
        if (this.validateAddressCityState(city))  this._city = city;
        else throw "City is incorrect"; }
    
    get state(){ return this._state}
    set state(state)  { 
        if (this.validateAddressCityState(state))  this._state = state;
        else throw "State is incorrect";    }

    get zip(){ return this._zip}
    set zip(zip)  {
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$")
        if (zipRegex.test(zip))  this._zip=zip;
        else  throw "zip is incorrect"; }
    
    get phoneNumber(){ return this._phoneNumber}
    set phoneNumber(phoneNumber)  { 
        let phoneNumberRegex = RegExp("^[0-9]\\d{1}\\s[789]\\d{9}$")
        if (phoneNumberRegex.test(phoneNumber))  this._phoneNumber = phoneNumber;
        else  throw "Phone number is incorrect";    }

    get email(){ return this._email}
    set email(email)    { 
        let emailRegex = RegExp("^[0-9a-zA-Z]+([.,+,_,-]{1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2})?")
        if (emailRegex.test(email))  this._email=email;
        else throw "email is incorrect";    }

    toString(){
        return "First-Name = " + this.firstName + " Last-Name = " + this.lastName + " Address = " + this.address + " City = " + this.city + " State = "
                            + this.state + " Zip = " + this.zip + " Phone-Number = " + this.phoneNumber + " email = " + this.email  }
}

let addressBook  = new Array();
addressBook.push(new Contact("Akash","Singh","AbcXyz","Belkgaum","Goa",413606,"91 9898989871","abc.xyz@gmail.com"));

const prompt = require("prompt-sync")({ sigint: true });

createContact = () => {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter last Name : ");
    let address = prompt("Enter Address : ");
    let city = prompt("Enter City : ");
    let state = prompt("Enter State : ");
    let zip = prompt("Enter Zip : ");
    let phoneNumber = prompt("Enter phone number : ");
    let email = prompt("Enter Email address : ");
    return new Contact(firstName,lastName,address,city,state,zip,phoneNumber,email)
    createContact.toString();   }

function checkDuplicateContact() {
    let newContact = createContatct();
    let alreadyExists = addressBook.filter(contact => contact.firstName == newContact.firstName).length;
    if (alreadyExists) console.log("\nConatct already exists.\n");
    else {
        addressBook.push(newContact);
        console.log("\nAdded sucessfully\n");   }
}

editConatct = () => {
    let firstName = prompt("Enter First-Name of contact which you want to edit : ");
    let contact = addressBook.find(contact => contact.firstName == firstName);
    if (contact == undefined) console.log("Contact not found ");
    else {
        try {
            contact.firstName = prompt("Enter First Name : ");
            contact.lastName = prompt("Enter last Name : ");
            contact.address = prompt("Enter Address : ");
            contact.city = prompt("Enter City : ");
            contact.state = prompt("Enter State : ");
            contact.zip = prompt("Enter Zip : ");
            contact.phoneNumber = prompt("Enter phone number : ");
            contact.email = prompt("Enter Email address : ");   }
        catch(error) { console.error(error); }
    }
}

deleteConatct = () =>{
    let contactName = prompt("Enter First-Name of contact which you want to delete : ");
    let isdelete = false;
    for( var index = 0; index < addressBook.length; index++) { 
        if ( addressBook[index].firstName == contactName) { 
            addressBook.splice(index, 1); 
            isdelete = true;    }
    }
    if (isdelete) console.log("\nContact deleted sucessfully.\n");
        else      console.log("\nContact not found.\n");
}

countContact = () => {
    let numberOfContact = addressBook.map(contact => contact).reduce(numberOfContact => numberOfContact + 1, 0);
    console.log("\nNumber of contacts are " + numberOfContact + " \n");    }

function search() {
    let searchKey = prompt("Enter city or state of contact which you want to search: ");
    return addressBook.filter(contact => contact.city == searchKey || contact.state == searchKey);  }

function searchContact() {
    let searchResultList = search();
    console.log(`The person are ${searchResultList.map(contact => contact.firstName)}`); }

function viewContact() {
    let searchResultList = search();
    console.log(`The person are ${searchResultList}`); }

countContactByPlace = () => {
    let searchResultList = search();
    let numberOfContact = searchResultList.reduce(numberOfContact => numberOfContact+1,0);
    console.log("Number of contacts are "+numberOfContact); }

sortByName = () => {
    let arrray  = addressBook.sort(function (contact1,contact2) {
        let a = contact1.firstName.toUpperCase();
        let b = contact2.firstName.toUpperCase();
        return a == b ? 0 : a > b ? 1: -1;  })
    console.log(addressBook.toString());
}

sortByZip = () => {
    addressBook.sort(function (contact1,contact2) {
        let a = contact1.firstName.toUpperCase();
        let b = contact2.firstName.toUpperCase();
        return a == b ? 0 : a > b ? 1: -1;  })
    console.log(addressBook.toString());
}

console.log("\nWelcome to address book\n");

let isExit = false
while (!isExit) {
    console.log("1 Add-Contact :\n2 Display-Contact :\n3 Print Count Of Contacts In Address-Book:\n4 Edit-Contact:\n5 Delete-Contact:\n6 Search Person By City Or State:\n7 View Contact By City Or State:\n8 Count By City Or State:\n9 Sort Contact By Person Name:\n10 Sort By Zip-Code:\n11 Exit :");
    let userChoice = prompt("Enter the number as per against your choice : ");
    switch (userChoice) {
        case "1":
            try { checkDuplicateContact();} 
            catch (error) { console.error(error); }
            break;
        case "2":   console.log(addressBook);   break;
        case "3":   countContact();             break;
        case "4":   editConatct();              break;
        case "5":   deleteConatct();            break;
        case "6":   searchContact();            break;
        case "7":   viewContact();              break;
        case "8":   countContactByPlace();      break;
        case "9":   sortByName();               break;
        case "10":  sortByZip();                break;
        case "11":  console.log("Thank You For Using Address-Book.");
                    isExit = true;              break;
        default:    console.log("Invalid Option");   break;
    }
}