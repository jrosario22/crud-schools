import React from 'react';
import Axios from 'axios';


class CampusListing extends React.Component {
    // The data that will be displayed
    state = {
        campusList: [],
        displayForm: false
    }

    // Will mount the form onto the screen after add campus is pressed
    componentDidMount() {
        Axios.get('http://localhost:3000/campus')
            .then((response) => {
                // console.log("did get request")
                // console.log(response)
                this.setState({ campusList: response })
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    formPost = (event) => {
        event.preventDefault();
        console.log(event.target);
        Axios.post('http://localhost:3000/campus', {
            name: event.target[0].value
        })
            .then((response) => {
                console.log(response)
                // this.setState({
                //     imageurl: response.data.data
                // });
            })
            .catch(function (error) {
                //Error Text
            })
    }

    // Will hide form until add campus is pressed
    handleDisplayValue = () => {
        this.setState({ displayForm: !this.state.displayForm })
    }

    // Form
    renderForm = () => {
        if (this.state.displayForm === true) {
            return (
                //action="http://localhost:3000/campus"
                <form onSubmit={this.formPost}>
                    <input type="text" name="school" placeholder="name" value="Test"/>
                    <input type="text" name="address" placeholder="address" value="testts"/>
                    <input type="text" name="phone_number" placeholder="phone number" value="7189605581"/>
                    <select name="cuny">
                        <option value="cuny" selected="true">Cuny</option>
                        <option value="noncuny">Non-Cuny</option>
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
