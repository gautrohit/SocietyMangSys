import React, { Component } from 'react';

export default class Registration extends Component {

  constructor(props){
    super(props);

    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFlatAddress = this.onChangeFlatAddress.bind(this);
  }

  render() {
    return (
      <form>
        <h3>Registration</h3>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Mobile Number"
          />
        </div>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
          />
        </div>
        <div className="form-group">
          <label>Flat Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Flat Address"
          />
        </div>

       
        <button type="submit" className="btn btn-primary btn-block">
        Registration
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">login?</a>
        </p>
      </form>
    );
  }
}
