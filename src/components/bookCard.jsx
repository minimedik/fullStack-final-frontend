import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function BookCard(props) {

    return (

        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2><a href="/show-book/123id">{props.book.bookTitle}</a></h2>
            <h3>{props.book.bookAuthor}</h3>
            <p>{props.book.description}</p>
          </div>
          <button className="remove-book" onClick={() => props.removeBook(props.id)}>✖</button>
        </div>
    );

}

export default BookCard;