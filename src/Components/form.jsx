import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
//The three dots (…) notation referred to as the 
//Spread syntax has been part of React for a long time when it could be used via transpilation, 
//although, it has been made a part of JavaScript as part of the ES2015 syntax.
//The Spread syntax is used to deconstruct an array or object into separate variables
// where the exact number of elements in the array may not be known or when we wish
// to keep an attribute or a set of attributes separate from the entire object.
const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class FormValidator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {
        //collaboration and debugging purposes, it’s always better to write the prevent function just below your function declaration. 
        //That way you won’t cause a bug by forgetting to put the prevent function.
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 10 ? "phone number should 10 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
           
            
            <div style={{ marginTop:'10px',backgroundImage:"url('https://www.hdwallpapers.in/download/black_and_white_picture_of_road_between_lighting_buildings_hd_black_aesthetic-HD.jpg')" }}>
                <h1 style={{color:'white',textAlign:'center'}}>QUICK CONTACT</h1>
                <div className="card mt-5" style={{border:"none",backgroundColor:'transparent'}}>
                    <form className="card-body" onSubmit={this.onFormSubmit}>

                        <div className="form-group mb-3" style={{paddingLeft:'400px'}}>
                            <label className="mb-2"></label>
                            <input
                                required
                                placeholder="Name :"
                                type="text"
                                name="name"
                                onChange={this.formObject}
                                className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                style={{width: '1000px',height:'60px',color:'white',backgroundColor:'transparent'  }} />

                            {error.name.length > 0 && (
                                <span className="invalid-feedback">{error.name}</span>
                            )}
                        </div>

                        <div className="form-group mb-3" style={{paddingLeft:'400px'}}>
                            <label className="mb-2"></label>
                            <input
                                required
                                placeholder="Email :"
                                type="email"
                                name="email"
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}
                                style={{width: '1000px', backgroundColor:'transparent',height:'60px',color:'white'  }} />

                            {error.email.length > 0 && (
                                <span className="invalid-feedback">{error.email}</span>
                            )}
                        </div>

                        <div className="form-group mb-3" style={{paddingLeft:'400px'}}>
                            <label className="mb-2"></label>
                            <input
                                required
                                placeholder="Phone :"
                                type="number"
                                name="password"
                                className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}
                                style={{ width: '1000px',backgroundColor:'transparent',height:'60px',color:'white' }} />

                            {error.password.length > 0 && (
                                <span className="invalid-feedback">{error.password}</span>
                            )}
                        </div>

                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-block btn" style={{ color: 'white', width: '150px',height:'50px', marginLeft: '1250px',borderColor:'white',marginTop:'30px'}}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}