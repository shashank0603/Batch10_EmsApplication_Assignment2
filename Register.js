import  { Component } from 'react'

export default class Register extends Component {
    state = {
        mail: "",
        pwd: "",
        rePwd: ""
    }
    handleSubmit = (event)=>{
    
        event.preventDefault();
        console.log("handle Submit")
        console.log(this.state)
        localStorage.setItem(this.state.mail, JSON.stringify(this.state));
        this.setState({
            mail: "",
            pwd: "",
            rePwd: ""
        })

    }
    handleChange = (event)=>{
    
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
           <div><h1 style = {{textAlign: 'center'}}>Registration Form</h1>
           <div className="container card" style={{width:"650px"}} onSubmit={this.handleSubmit}>
                <form className="card-body" style = {{width: "600px", margin:"20px"}}>
                <div className="form-group">
    <label htmlFor="exampleInputUserName">Enter Username</label>
    <input type="username" className="form-control" id="exampleInputUserName" placeholder="Enter the user name" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"
                                id="exampleInputEmail1"
                                placeholder="example@mail.com"
                                required
                            aria-describedby="emailHelp"
                                value={this.state.mail}
                                onChange={this.handleChange}
                            name="mail"
                        />
    <small id="emailHelp"className="form-text text-muted">We'll never share your email with anyone else.</small>
    
  </div>
     <div className="form-group">
    <label htmlFor="exampleInputPhoneNumber">Enter Phone Number</label>
                            <input type="phonenumber"
                                className="form-control"
                                id="exampleInputPhoneNumber"
                                placeholder="+91"
                                required
                            />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Password</label>
                        <input type="password"
                            className="form-control"
                                id="exampleInputPassword1"
                                required
                                value={this.state.pwd}
                                onChange={this.handleChange}
                            name="pwd"
                        />
      </div>
     <div className="form-group">
    <label htmlFor="exampleInputReEnter">Re-Enter Password</label>
                        <input type="repassword"
                            className="form-control"
                                id="exampleInputReEnter"
                                required
                                value={this.state.rePwd}
                                onChange={this.handleChange}
                            name="rePwd"
                        />
         </div>
  <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                             required
                            />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
</form>
                </div>
                </div>
        );
    }
} 