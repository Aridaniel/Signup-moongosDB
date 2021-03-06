import React, { Component } from 'react'
import css from './app.css'
import axios from 'axios'


class App extends Component {
    //Constructor function that with the state
    constructor(){
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }


        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //Grap the value user has typed
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    //onSubmit - when the user submit the signup- presses the BTN
    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email:this.state.email,
            password: this.state.password
        }
        //Post the data to the 
        axios.post('https://signupserver-node-js.herokuapp.com/app/signup', registered)
            .then(response => console.log(response.data))

            this.setState({
                fullName:'',
                username:'',
                email:'',
                password:''
            })
    }

    //Whate renders to the screen
    render() {
        return (
            <div>   
                    <form className= 'form' onSubmit={this.onSubmit}>
                        <input type = 'text'
                        placeholder = 'Full name'
                        //onChange- when user types something changes the State- goes from here to changeFullname
                        onChange ={this.changeFullName}
                        value = {this.state.fullName}
                        className ='form-control form-group'
                        />

                        <input type = 'text'
                        placeholder = 'Username'
                        onChange ={this.changeUsername}
                        value = {this.state.username}
                        className ='form-control form-group'
                        />
                        <input type = 'text'
                        placeholder = 'E-mail'
                        onChange ={this.changeEmail}
                        value = {this.state.email}
                        className ='form-control form-group'
                        />
                        <input type = 'password'
                        placeholder = 'Password'
                        onChange ={this.changePassword}
                        value = {this.state.password}
                        className ='form-control form-group'
                        />

                        <input type= 'submit' className= 'btn btn-danger btn-block' value= 'Submit' />
                        
                    </form>           
            </div>
        );
    
    }
}

export default App