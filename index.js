// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
// 2) Create an unordered list using JavaScript and save it in a variable
// 3) Cycle the array and create a list-item via JavaScript for every element
// 4) Insert the genere as text in the list-item
// 5) Append the list items in the unordered list
// 6) Append the unordered list in the document. The list should appear in the page.

let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let newUl = document.createElement('ul')
for (item of genres ) {
    let li = document.createElement('li')
    li.innerText = item
    newUl.appendChild(li)
}

let body = document.getElementsByTagName('body')[0]
body.appendChild(newUl)