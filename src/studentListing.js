import React from 'react';

class StudentListing extends React.Component{



    render(){
        return(
            <div>
                <h1>All Students</h1>
                <button>Add Student</button>
            </div>
        )
    }
}

export default StudentListing;


/* 
const Students = [];
Students.findAll = () => {
    return db.query(
        `select * from students` 
    );
};

Students.findById = (id) => {
    return db.oneOrNone(
        `select * from Students where id = $1`, [id]
    );
};

export default Student;
*/