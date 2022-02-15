import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
        this.loginFunction = this.loginFunction.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    loginFunction(e){
        console.log(this.state)
        fetch('/api/user/?username="sdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(function (response) {
            return response.json()
        }).then(function (body) {
            console.log(body);
        });
    }
    handleChange(e){
        this.setState({...this.state,[e.target.name]:e.target.value.trim()} )
    }
  render() {
      return (
          <Fragment>
              <form method="post" id="loginForm" > {/*action="/api/user/"*/}
              <div>
                <input type="text" name="username"  placeholder="username" onChange={this.handleChange}/>
              </div>
              <div>
                <input type="password" name="password"  placeholder="password" onChange={this.handleChange}/>
              </div>
              <div>
                <input type="button" value="Submit" onClick={this.loginFunction}/>
              </div>
              </form>
              <Link to="/">Goto Home</Link>
          </Fragment>
      )
  }
}
