// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element === 9){
        // console.log("Nine detected")
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    for (let j = 1; j <= 10; j++) { 
        // console.log(j);   
        // console.log(i + 'x' + j + '=' + i*j );          
    }
}

const cities = ["karachi", "islamabad", "lahore", "sialkot"]
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    // console.log(element);
    
}

// break and continue

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", year: 2008, isbn: "9780132350884", language: "English", rating: 4.6, read: true },
  { id: 2, title: "You Don't Know JS (book series)", author: "Kyle Simpson", category: "Programming", year: 2015, isbn: "N/A", language: "English", rating: 4.5, read: false },
  { id: 3, title: "Atomic Habits", author: "James Clear", category: "Self-Improvement", year: 2018, isbn: "9780735211292", language: "English", rating: 4.7, read: true },
  { id: 4, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", year: 2011, isbn: "9780062316097", language: "English", rating: 4.6, read: false },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", year: 1988, isbn: "9780061122415", language: "Portuguese", rating: 4.3, read: true },
  { id: 6, title: "The Lean Startup", author: "Eric Ries", category: "Business", year: 2011, isbn: "9780307887894", language: "English", rating: 4.1, read: false },
  { id: 7, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", category: "Programming", year: 1999, isbn: "9780201616224", language: "English", rating: 4.5, read: true },
  { id: 8, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", year: 1988, isbn: "9780553380163", language: "English", rating: 4.2, read: false },
  { id: 9, title: "The Forty Rules of Love", author: "Elif Shafak", category: "Fiction", year: 2009, isbn: "9781846276454", language: "English", rating: 4.1, read: false },
  { id: 10, title: "Riyad-us-Saliheen (selected)", author: "Imam Nawawi", category: "Islamic", year: 1258, isbn: "", language: "Arabic/Urdu", rating: 4.4, read: true },
  { id: 11, title: "Designing Interfaces", author: "Jenifer Tidwell", category: "Design", year: 2019, isbn: "9781492051966", language: "English", rating: 4.0, read: false },
  { id: 12, title: "The Psychology of Money", author: "Morgan Housel", category: "Personal Finance", year: 2020, isbn: "9780857197689", language: "English", rating: 4.5, read: true }
];

const filterBooksArr =[]

function filterBooks() {
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        if(books[index].category === "Fiction"){
            continue
        }
        filterBooksArr.push(element)
        // console.log(element.title, index);
    }
}
filterBooks()

// console.log(filterBooksArr);

function showBooks() {
    for (let index = 0; index < filterBooksArr.length; index++) {
        const element = filterBooksArr[index];
        if(index > 3){
            break
        }
        console.log(element.title)
    }
}
showBooks()
