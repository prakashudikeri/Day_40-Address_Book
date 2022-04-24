const readline = require("readline-sync");

class AddressBook{     
        
        constructor(...params){
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNo = params[6];
            this.email = params[7];
        }
        
        get firstName() {return this._firstName;} 
        set firstName(firstName) {
            let nameRegEx = RegExp('^[A-Z]{1}[a-z]{3,}$');
                if (nameRegEx.test(firstName)) this._firstName = firstName;
                else throw 'First Name is Incorrect!';
        }   

        set lastName(lastName) {
            let nameRegEx = RegExp('^[A-Z]{1}[a-z]{2,}$');
                if (nameRegEx.test(lastName)) this._lastName = lastName;
                else throw "Last Name is Incorrect!";
        }   get lastName() {return this._lastName;}

        set address(address) {
            let addRegEx = RegExp ('^[A-Za-z0-9]{4,}$');
                if (addRegEx.test(address)) this._address = address;
                else throw "Address must have 4 Characters";
        }   get address() {return this._address;}
       

        set city(city) {
            let cityRegEx = RegExp('^[A-Za-z]{4,}$');
                if (cityRegEx.test(city)) this._city = city;
                else throw "City must have 4 Characters";
        }   get city() {return this._city;}
       

        set state(state) {
            let stateRegEx = RegExp('^[A-Za-z]{4,}$');
                if (stateRegEx.test(state)) this._state = state;
                else throw "State must have 4 Characters";
        }   get state() {return this._state;}
        

        set zip (zip) {
            let zipRegEx = RegExp('^[0-9]{6}$');
                if (zipRegEx.test(zip)) this._zip = zip;
                else throw "Zip must have 6 Digits only";
        } get zip() {return this._zip;}

        set phoneNo(phoneNo) {
            let phoneRegEx = RegExp ('^[0-9]{2}\\s{0,1}[0-9]{10}$');
                if (phoneRegEx.test(phoneNo)) this._phoneNo = phoneNo;
                else throw "Invalid Phone no"
        } get phoneNo() {return this._phoneNo;}

        set email(email) {
            let emailRegEx = RegExp ('^([a-z\\d._-]+)@([a-z\\d-]+).([a-z]{2,8})(.[a-z]{2-8})?$');
                if (emailRegEx.test(email)) this._email = email;
                else throw "Incorrect Email";
        } get email() {return this._email;}

        toString() {
            return  "First Name: "+this.firstName+
                    ", Last Name: "+this.lastName+
                    ", Address: "+this.address+
                    ", City: "+this.city+
                    ", State: "+this.state+
                    ", Zip: "+this.zip+
                    ", Phone no: "+this.phoneNo+
                    ", Email: "+this.email;
        }
}

    var addressBookArray = new Array();

    function personAddressData () {
        do {
            console.log("Welcome to Address Book List");
            console.log("1. Add New Contact");
            console.log("2. Display Contact");
            
            console.log("Enter your choice: ")
            var choice = Number(readline.question());
        
            switch(choice){
                case 1: newContact();   break;
                case 2: console.log(addressBookArray);   break;
                default: console.log("Enter Valid Choice");  break;
            }
        } while (choice != 3)
    }

    function newContact() {
        console.log("Enter the First Name :");
            let firstName = readline.question();
        console.log("Enter the Last Name :");
            let lastName = readline.question();
        console.log("Enter the Address :");
            let address = readline.question();
        console.log("Enter the City :");
            let city = readline.question();
        console.log("Enter the State :");
            let state = readline.question();
        console.log("Enter the Zip :");
            let zip = readline.question();
        console.log("Enter the Phone No :");
            let phoneno = readline.question();
        console.log("Enter the Email ID :");
            let email = readline.question();
            let addressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneno,email);
        addressBookArray.push(addressBook);
    }

    try {
        personAddressData();
        console.log(personAddressData.toString());
    } catch (e) {console.error(e);}

    //let personAddressData = new AddressBook("Prakash", "Udikeri", "Hasa89", "Belgaum", "Karnataka", 595959, 919123456780, "abc.xyz@gmail.com");