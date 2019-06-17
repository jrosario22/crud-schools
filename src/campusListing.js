import React from 'react';
import Axios from 'axios';


class CampusListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { campusList: [], displayForm: false };
    }

    // Will hide form until add campus is pressed
    handleDisplayValue = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    // Will mount the form onto the screen after add campus is pressed
    componentDidMount() {
        Axios.get('http://localhost:3000/campus')
            .then((response) => {
                // console.log("did get request")
                // console.log(response)
                this.setState({
                    campusList: response
                })
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    formPost = (event) => {
        event.preventDefault();
        console.log(event.target);
        let data = {
            name: event.target[0],
            address: event.target[1],
            phone_number: event.target[2],
            
        };
        Axios.post('http://localhost:3000/campus', data)
            .then((response) => {
                console.log(data);
                this.setState({
                    data: response
                });
                console.log(response);
            })
            .catch(function (error) {
                //Error Text
            })
    }

    // Form
    renderForm = () => {
        if (this.state.displayForm === true) {
            return (
                //action="http://localhost:3000/campus"
                <form onSubmit={this.formPost}>
                    <input type="text" name="name" placeholder="name" value="Test" />
                    <input type="text" name="address" placeholder="address" value="testts" />
                    <input type="text" name="phone_number" placeholder="phone number" value="7189605581" />
                    <select name="cuny">
                        <option value="cuny" >Cuny</option>
                        <option value="noncuny" >Non-Cuny</option>
                    </select>
                    <input type="submit" />
                </form>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <h1>All Campuses</h1>
                <button onClick={this.handleDisplayValue}>Add Campus</button>
                <br></br>
                {this.renderForm()}

            </div>
        )
    }
}

export default CampusListing;
