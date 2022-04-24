class AddressBook{
    firstName; lastName; address; city; state; zip; phoneNo; email;
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

let personAddressData = new AddressBook("Prakash", "Udikeri", "House no 8989 - Abc Street", "Belgaum", "Karnataka", 595959, 9123456780, "abc.xyz@gmail.com");
    console.log(personAddressData.toString());