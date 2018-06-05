import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/popper.js/dist/popper'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import $ from "jquery";
export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }


  componentDidMount() {
    var self = this;

    self.$modal = $(this.modal);

    self.$modal.on('hidden.bs.modal', function () {
      self.props.modalOpenOrClose();
    })

    self.$modal.modal('show');
  }

  componentWillUnmount() {
    this.$modal = $(this.modal);
    this.$modal.modal('hide');
  }

  render() {
    return <div className="modal" tabIndex="-1" role="dialog" ref={(ele) => this.modal = ele}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {this.props.component}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Dialog;
