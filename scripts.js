const bookDetails = {
    book1: {
        title: "Murder of Roger Ackroyd",
        author: "Agatha Christie",
        pages: 304,
        description: "Hercule Poirot investigates the murder of Roger Ackroyd, a wealthy man who was about to uncover a scandal. Set in a small English village, the case becomes one of Poirot's most challenging due to misleading clues, secrets, and a groundbreaking twist that defies expectations.",
        rating: 5
    },
    book2: {
        title: "Fermat's Last Theorem",
        author: "Simon Singh",
        pages: 340,
        description: "This book tells the story of one of mathematics’ greatest puzzles: a theorem proposed by Pierre de Fermat in 1637 that remained unsolved for over 350 years. Simon Singh traces the history of the theorem, the mathematicians who tackled it, and Andrew Wiles’ eventual proof in 1994.",
        rating: 4.2
    },
    book3: {
        title: "Stoner",
        author: "John Williams",
        pages: 292,
        description: "A quiet, deeply moving portrait of William Stoner, a university professor who lives a seemingly unremarkable life. The novel explores his struggles with love, career, and personal fulfillment, revealing the beauty and tragedy of an ordinary existence.",
        rating: 4.5
    },
    book4: {
        title: "Evariste Galois, 1811-1832",
        author: "Laura Toti Rigatella, John Denton",
        pages: 163,
        description: "A concise biography of Évariste Galois, the brilliant yet tragic mathematician who revolutionized algebra with his work on group theory. Galois' life was marked by political activism, duels, and a premature death at the age of 20, leaving behind groundbreaking insights.",
        rating: 3.8
    },
    book5: {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        pages: 274,
        description: "Hercule Poirot must solve a murder that occurs aboard the luxurious Orient Express train. Trapped with a diverse group of passengers, each with secrets, Poirot uncovers a complex web of motives, leading to one of the most ingenious and surprising solutions in mystery literature.",
        rating: 4.8
    }
    
};

function showDetails(bookId) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = bookDetails[bookId].title;
    document.getElementById("modal-author").innerText = bookDetails[bookId].author;
    document.getElementById("modal-pages").innerText = bookDetails[bookId].pages;
    document.getElementById("modal-description").innerText = bookDetails[bookId].description;
    document.getElementById("modal-rating").innerText = bookDetails[bookId].rating;
    modal.style.display = "flex";
}

function closeDetails() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Filter by genre
const genreButtons = document.querySelectorAll('.genres button');
genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-genre');
        document.querySelectorAll('.book').forEach(book => {
            if (genre === 'all' || book.getAttribute('data-genre') === genre) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});
