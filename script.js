
class Users {
    constructor(name, lastName, city, borrowedBook) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.borrowedBook = [];
    }
    borrowedBooks(borrowed, price) {
        this.namebook = borrowed;
        this.price = price;
        this.borrowed = true;
        this.borrowedBook.push(borrowed);
        this.print();
    }
    print() {
        console.log(this.name + " Borrowed this book:" + " " + this.borrowedBook);
    }
}
let user1 = new Users('Alex', 'Kuf', 'Petachtikva');
let user2 = new Users('Eli', 'Rotenberg', 'Jerusalem');
user2.borrowedBooks('Book1', 30);





