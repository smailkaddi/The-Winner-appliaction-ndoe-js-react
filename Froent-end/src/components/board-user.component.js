  import React, { Component } from "react";
  import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
  import UserService from "../services/user.service";
  import { Link, withRouter } from 'react-router-dom';
  import foot from '../images/foot.jpg';
  export default class BoardUser extends Component {
      constructor(props) {
        super(props)
        this.state = {
          currentStep: 1,
        }
      }
    
  
       
  
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 11? 11: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <11){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }
      
      render() {    
        return (
          <React.Fragment>
         
    
          <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts={this.state.qts}
              correctAns={this.state.correctAns}
              IncorrectAns={this.state.IncorrectAns}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts1={this.state.qts1}
              correctAns1={this.state.correctAns1}
              IncorrectAns1={this.state.IncorrectAns1}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts2={this.state.qts2}
              correctAns2={this.state.correctAns2}
              IncorrectAns2={this.state.IncorrectAns2}
            />
            <Step4 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts3={this.state.qts3}
              correctAns3={this.state.correctAns3}
              IncorrectAns3={this.state.IncorrectAns3}
            />
            <Step5 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts4={this.state.qts4}
              correctAns4={this.state.correctAns4}
              IncorrectAns4={this.state.IncorrectAns4}
            />
            <Step6 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts5={this.state.qts5}
              correctAns5={this.state.correctAns5}
              IncorrectAns5={this.state.IncorrectAns5}
            />
            <Step7 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts6={this.state.qts6}
              correctAns6={this.state.correctAns6}
              IncorrectAns6={this.state.IncorrectAns6}
            />
            <Step8 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts7={this.state.qts7}
              correctAns7={this.state.correctAns7}
              IncorrectAns7={this.state.IncorrectAns7}
            />
            <Step9 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts8={this.state.qts8}
              correctAns8={this.state.correctAns8}
              IncorrectAns8={this.state.IncorrectAns8}
            />
            <Step10
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts9={this.state.qts9}
              correctAns9={this.state.correctAns9}
              IncorrectAns9={this.state.IncorrectAns9}
            />
            <Step11 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              qts10={this.state.qts10}
              correctAns10={this.state.correctAns10}
              IncorrectAns10={this.state.IncorrectAns10}
            />
            {this.previousButton()}
            {this.nextButton()}
    
          </form>
          </React.Fragment>
        );
      }
    }
    
    function Step1(props) {
      if (props.currentStep !== 1) {
        return null
      } 
      return(
        
        <div className="form-group">
                  <label>Your Name</label>
             <input
          className="form-control"
          id="Yourname"
          name="Yourname"
          type="text"
          required
          placeholder="Enter Your Name"
          value={props.qts3}
          onChange={props.handleChange}
          />
        </div>
      );
    }
    
    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      } 
      return(
        <div className="form-group">
         <select  className="form-control" id="categories" name="categories" >
            <option value="select">Select Catgories</option>
            <option value={props.correctAns9}>tech</option>
            <option value={props.correctAns9}>sport</option>
            <option value={props.correctAns9}>movies</option>
          </select>
        </div>
      );
    }
    function Step3(props) {
      if (props.currentStep !== 3) {
        return null
      } 
      return(
        <div className="form-group">
        <label>Question 1</label>
        <div className="form2">
        <img src={foot} width="400" height="200" position="relative" left ="28%" />
        </div>

        <h1>De combien de joueurs se compose une équipe de football ?</h1>
       <br></br>
       <di></di>
        <button className="butn1"><a href="">11 joueurs</a></button>
        <button className="butn1"><a href="">13 joueurs</a></button>
        <button className="butn1"><a href="">14 joueurs</a></button>
        <button className="butn1"><a href="">15 joueurs</a></button>
      </div>
      );
    }
    function Step4(props) {
      if (props.currentStep !== 4) {
        return null
      } 
      return(
        <div className="form-group">
         <label>Question</label>
        <h1>Question2 ?</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
        </div>
      );
    }
  
    function Step5(props) {
      if (props.currentStep !== 5) {
        return null
      } 
      return(
        <div className="form-group">
          <label>Question</label>
        <h1>Question 3</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
        </div>
      );
    }
  
  
    function Step6(props) {
      if (props.currentStep !== 6) {
        return null
      } 
      return(
        <div className="form-group">
         <label>Question</label>
        <h1>Question 4</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
        </div>
      );
    }
  
  
    function Step7(props) {
      if (props.currentStep !== 7) {
        return null
      } 
      return(
        <div className="form-group">
        <label>Question</label>
        <h1>Question 5</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
      </div>
      );
    }
    function Step8(props) {
      if (props.currentStep !== 8) {
        return null
      } 
      return(
        <div className="form-group">
         <label>Question</label>
        <h1>Question 6</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
        </div>
      );
    }
  
    function Step9(props) {
      if (props.currentStep !== 9) {
        return null
      } 
      return(
        <div className="form-group">
        <label>Question</label>
        <h1>Question 7</h1>
        <button><a href="">ANSER 1</a></button>
        <button><a href="">ANSER 2</a></button>
        <button><a href="">ANSER 3</a></button>
        <button><a href="">ANSER 4</a></button>
      </div>
      );
    }
  
  
  
  
  
    function Step10(props) {
      if (props.currentStep !== 10) {
        return null
      } 
      return(
        <div className="form-group">
          <label>Question</label>
          <input
            className="form-control"
            id="qts10"
            name="qts10"
            type="text"
            required
            placeholder="Enter Question"
            value={props.qts10}
            onChange={props.handleChange}
            />
          <label>Correct Answer</label>
          <input
            className="form-control"
            id="correctAns10"
            name="correctAns10"
            type="text"
            required
            placeholder="Enter Correct Answer"
            value={props.correctAns10}
            onChange={props.handleChange}
            />
          <label>InCorrect Answer</label>
          <input
            className="form-control"
            id="IncorrectAns10"
            name="IncorrectAns10"
            type="text"
            required
            placeholder="Enter InCorrect Answer"
            value={props.IncorrectAns10}
            onChange={props.handleChange}
            />
        </div>
      );
    }
  
  
  
  
    function Step11(props) {
      if (props.currentStep !== 11) {
        return null
      } 
      return(
        <React.Fragment>
        <div className="form-group">
        <label>Catgories</label>
      <select  className="form-control" id="categories" name="categories" >
            <option value="select">Select Catgories</option>
            <option value={props.correctAns9}>tech</option>
            <option value={props.correctAns9}>sport</option>
            <option value={props.correctAns9}>movies</option>
          </select>
      </div>
        <button className="btn btn-success float-right">ADD</button>
        </React.Fragment>
      );
    }
    
  