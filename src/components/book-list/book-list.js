import React, { Component } from "react";
import './book-list.css';
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks } from "../../actions"
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>  <BookListItem book={book}/> </li>
                    )
                  
                })
            }
        </ul>  
   
    );
} 
class BookListContainer extends Component {

    componentDidMount() {
        // receive & set data
        this.props.fetchBooks(); 
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} />
    }
}

const mapStateToProps = ({ books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}
   

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);