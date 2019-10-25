import React,{Component} from 'react';
import {Button} from 'reactstrap';

import GridTable from './gridTable';
import StudentRegister from './StudentRegister';

class Grid extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal : false,
            studentData : {}
        }
        this.registrPopup = this.registrPopup.bind(this);
    }

    registrPopup(){
            if(Object.keys(this.state.studentData).length > 0){
                this.setState({studentData:{}})
            }
            this.OpenCloseModel();
    }

    OpenCloseModel = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    editHandleClick = (event,studentData) => {
        this.setState({
            studentData :studentData
        });
        this.OpenCloseModel();
    }

    render(){
        return(
            <div>
                <Button id = "AddStudent" className = {`mt-2 mb-0 ml-3`} outline color="primary" onClick={this.registrPopup}>Add Student</Button>{' '}
                <GridTable studentData={this.state.allStudent} editData = {(event,studentData) => this.editHandleClick(event,studentData)}/>
                <StudentRegister isOpen={this.state.modal} toggle={this.registrPopup} className={this.props.className}
                                  studentData = {this.state.studentData}/>
            </div>
        );
    }
}

export default Grid;