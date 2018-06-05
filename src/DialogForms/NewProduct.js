import React, { Component } from 'react';
export class NewProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidMount() {

    }

    render() {
        return <form>
            <div className="form-group row">
                <label htmlFor="ProductName" className="col-sm-2 col-form-label">Product Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="ProductName" id="ProductName" placeholder="Product Name" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="QuantityPerUnit" className="col-sm-2 col-form-label">Quantity Per Unit</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="QuantityPerUnit" id="QuantityPerUnit" placeholder="Quantity Per Unit" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="UnitPrice" className="col-sm-2 col-form-label">Unit Price</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="UnitPrice" id="UnitPrice" placeholder="Unit Price" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    }
}

export default NewProductForm