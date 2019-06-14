import React from 'react';
import pool from './campusInfo';
import Axios from 'axios';

class CampusListing extends React.Component{
    // constructor(props){
    //     super(props){

    //     }
    // }
    something = () =>  {
        Axios.get('http://localhost:3000/campus')
        .then(()=>{console.log("did get request")})
        .catch(err => console.log(err));
    }

    render(){
        return( 
            <div>
                <h1>All Campuses</h1>
                {/* <p>{pool}</p> */}
                <button onClick={this.something}>Add Campus</button>
            </div>
        )
    }
}

export default CampusListing;


