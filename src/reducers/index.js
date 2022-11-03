const initialSate = {
    books: [    ]
}

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
     
};

export default reducer;