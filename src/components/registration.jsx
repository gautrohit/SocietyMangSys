import React, { Component } from 'react';
import axios from 'axios';
import Notifications, { notify } from 'react-notify-toast';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFlatAddress = this.onChangeFlatAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mobileNo: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      flatAddress: ''
    };
  }

  onChangeMobileNo(e) {
    this.setState({
      mobileNo: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }
  onChangeFlatAddress(e) {
    this.setState({
      flatAddress: e.target.value
    });
  }

  onSubmit(e) {
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      // make API call

      e.preventDefault();

      const user = {
        mobileNo: this.state.mobileNo,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        flatAddress: this.state.flatAddress
      };

      console.log(user);

      axios
        .post('http://localhost:1200/registration/add', user)
        .then(res => console.log(res.data));

      this.setState({
        mobileNo: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        flatAddress: ''
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Registration</h3>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Mobile Number"
            value={this.state.mobileNo}
            onChange={this.onChangeMobileNo}
          />
        </div>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
            value={this.state.confirmPassword}
            onChange={this.onChangeConfirmPassword}
          />
        </div>
        <div className="form-group">
          <label>Flat Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Flat Address"
            value={this.state.flatAddress}
            onChange={this.onChangeFlatAddress}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Registration
          <Notifications />
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">login?</a>
        </p>
      </form>
    );
  }
}
