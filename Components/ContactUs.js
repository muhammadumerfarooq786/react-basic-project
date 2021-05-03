import React from 'react';

import './ContactUs.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: '',middle: '',last: '',phone: '',email: '',desc:'',errorMessage:''};
  }
  formSubmitHandler = (event) => {
    event.preventDefault();
    if(this.state.first.length==0){
      this.setState({errorMessage: 'Fisrt Name Field Is Empty'});
    }
    else if(this.state.middle.length==0){
      this.setState({errorMessage: 'Middle Name Field Is Empty'});
    }
    else if(this.state.last.length==0){
      this.setState({errorMessage: 'Last Name Field Is Empty'});
    }
    else if(this.state.phone.length==0){
      this.setState({errorMessage: 'Phone Number Field Is Empty'});
    }
    else if(this.state.email.length==0){
      this.setState({errorMessage: 'Email Field Is Empty'});
    }
    else if(this.state.desc.length==0){
      this.setState({errorMessage: 'Description Field Is Empty'});
    }
    else{
      this.setState({errorMessage: ''});
      alert("Form has been submitted");

    }
  }
  firstChangeHandler = (event) => {
    this.setState({first: event.target.value});
  }
  middleChangeHandler = (event) => {
    this.setState({middle: event.target.value});
  }
  lastChangeHandler = (event) => {
    this.setState({last: event.target.value});
  }
  phoneChangeHandler = (event) => {
    this.setState({phone: event.target.value});
  }
  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }
  descChangeHandler = (event) => {
    this.setState({desc: event.target.value});
  }

  render() {

    return(
      <div>
      <div className="head background-pic">
      <h1>Contact Us</h1>
      <p>Let's Know Each Other</p>

      </div>
      <div className="ErrorMessage">
          <h5>{this.state.errorMessage}</h5>
      </div>


      <div className="ContactUsForm">
          <form className="ui form" onSubmit={this.formSubmitHandler}>
          <div className="three fields">
          <div className="field">
            <label>First name</label>
            <input type="text" placeholder="First Name" onChange={this.firstChangeHandler}/>
          </div>
          <div className="field">
            <label>Middle name</label>
            <input type="text" placeholder="Middle Name" onChange={this.middleChangeHandler}/>
          </div>
          <div className="field">
            <label>Last name</label>
            <input type="text" placeholder="Last Name" onChange={this.lastChangeHandler}/>
          </div>
          </div>

          <div class="two fields">
          <div class="field">
          <label>Email</label>
          <input type="Email" name="email" placeholder="Email" onChange={this.emailChangeHandler}/>
          </div>
          <div class="field">
          <label>Phone No.</label>
          <input type="text" name="phoneno" placeholder="Phone Number" onChange={this.phoneChangeHandler}/>
          </div>
          </div>

          <div class="field">
          <label>Description</label>
          <textarea placeholder="Enter Your Queries" onChange={this.descChangeHandler}></textarea>
          </div>


          <input type="Submit" class="ui button primary" tabindex="0"/>

          </form>

      </div>
      </div>

    )
  }
}


export default MyForm;
