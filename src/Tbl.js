
import React, { Component } from 'react'

import 'datatables.net-bs4';
import '../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css'
const $ = require('jquery')
$.DataTable = require('datatables.net');

export class Tbl extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Id",data:"ProductId" },
                { title: "Name",data:"ProductName" },
                { title: "QuantityPerUnit",data:"QuantityPerUnit" },
                { title: "UnitPrice",data:"UnitPrice" }
            ]
        })
    }
    componentWillUnmount() {
      
         this.$el.DataTable().destroy(true)
    }

    componentDidUpdate(){
        this.$el = $(this.el)
        this.$el.DataTable().clear();
        this.$el.DataTable().rows.add(this.props.data);
        this.$el.DataTable().draw();
    }

    render() {
        return <div>
            <table className="table table-striped table-bordered" width="100%" ref={el => this.el = el}>
            </table>
        </div>
    }
}