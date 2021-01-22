

const books = {
    title: "The Hobbit",
    author: "J.R.R.Tolkien",
    cover: "Hardback",
}

const entries = Object.entries(books)
console.log(books)

const keys = Object.keys(title)
for (const key of keys) {
    console.log(key)
}
/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====


Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 recipes

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [title("The Hobbit")];

for (const [title, author] of entries) {
    console.log(`You already read ${'The Hobbit'} ${'J.R.R. Tolkien'}s`)

};
