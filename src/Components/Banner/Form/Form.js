import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

    state = {
        type: this.props.program,
        name: null,
        email: null,
        phone: null,
        submitted: false
    }

    submitHandler(event) {
        event.persist();
        event.preventDefault();
        if(this.state.name && this.state.email && this.state.phone) {
            this.setState(st => ({...st, submitted: !st.submitted}));
            return true;
        }
        alert('Please provide valid information.');
    }
    handleChange(event) {
        this.setState({ 
            [event.target.name] : event.target.value
         })
    }
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label>
                            Name:
                        <input className="form-control" type="text" name="name"  
                        placeholder="Name" onChange={this.handleChange.bind(this)}
                        />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                        <input className="form-control" type="email" name="email" placeholder="Email" onChange={this.handleChange.bind(this)}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Phone no.
                        <input className="form-control" placeholder="+91" name="phone" onChange={this.handleChange.bind(this)}/>
                        </label>
                    </div>
                    {this.state.submitted ?  <p>Thank you for joining! You'll hear from us shortly..</p>: <button className="btn" > JOIN NOW</button>  }
                </form>
            </div>
        )
    }
}

export default Form;