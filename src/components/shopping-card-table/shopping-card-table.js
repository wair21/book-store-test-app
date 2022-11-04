import React from "react";
import './shopping-card-table.css';

const ShoppingCardTable = ({ numItems, total }) => {
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
                    <tr>
                        <td>1</td>
                        <td>Site</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <i className="fa fa-trash-o"/>
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus-curcle"/>
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="fa fa-minus-circle"/>
                            </button>
                        </td>  
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    );
}

export default ShoppingCardTable;