import React from 'react';
import { connect } from 'react-redux';
import './shopping-card-table.css';


const ShoppingCardTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const {id, name, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx +1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger">
                        <span> delete </span>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success">
                        <span> + </span>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning">
                        <span> - </span>
                    </button>
                </td>
            </tr>
        );
    }
    return (
        <div className="shopping-card-table">
            <h2> Your order </h2>
            <table className="shopping-card-table-width">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(renderRow)}

                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`);
        },
        onDecrease: (id) => {
            console.log(`Decrease ${id}`);
        },
        onDelete: (id) => {
            console.log(`Delete ${id}`);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);