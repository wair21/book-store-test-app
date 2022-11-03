import React, { Component } from "react";
import './book-list.css';
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions"
import { compose } from "../../utils";


class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        
        // 2. dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
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
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);