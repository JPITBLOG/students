import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Table,Button} from 'reactstrap';
import {bindActionCreators} from "redux";
import GridPagination from './GridPagination';

import * as getAllStudentAction from '../../action/getAllStudent';
import * as deleteStudentAction from '../../action/deleteStudent';
import * as editStudentAction from '../../action/editStudentDetail';
import * as getDataLengthAction from "../../action/dataLength";
import './grid.css';

class GridTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            allstudents:[],
            totalNumbarOfPage: 0,
            pageIndex: 1,
            dataLength:0,
            isdelete:0,
            isEdit:0
        }
        this.gridMapped = this.gridMapped.bind(this)
    }

    clickOnPage = async (e,pageIndex) => {
        let allStudent;
        if(this.state.pageIndex !== pageIndex){
            this.props.action.getAllStudent.getAllStudents(pageIndex).then((d=> {
                if (d) {
                    allStudent = this.props.getAllStudent.Allstudent;
                    this.setState({allstudents: allStudent, pageIndex: pageIndex})
                }
            }))
        }
    }

    deleteData = (Delete_id) => {
        this.setState({isdelete: 1});
        this.props.action.deleteStudent.deleteStudent(Delete_id).then((response) => {
            if(response){
                this.props.action.getDataLength.dataLength().then((response) => {
                    if(response){
                    }
                })
            }
        })
    }

    gridMapped = () => {
        const that = this;
        let studentMapped = [];
        let subjectName;
        let subjectdata = this.props.getAllSubject.Allsubject;
        let allStudent = this.state.allstudents;
        allStudent.map(function (student,index) {
            studentMapped.push(
               <tr key={"id:"+index}>
                   <td>{student.fname}</td>
                   <td>{student.lname}</td>
                   <td>{student.dob}</td>
                   <td>{
                   student.marks.map(function (SubjectMark,index) {
                       subjectdata.map(function (subject,index) {
                           if(SubjectMark.subjectId === subject._id){
                               subjectName = subject.subject;
                           }
                           return 0;
                       })
                       return (<div key={index}>
                       <input type="hidden" id="marksId" value={SubjectMark._id}/>
                           <input type="hidden" id="subjectId" value={SubjectMark.subjectId}/>
                           <b>{subjectName+": "+SubjectMark.marks}</b>
                       </div>)
                               })}
                               </td>
                   <td><Button outline color="primary" onClick = {(event) => that.props.editData(event,student)}>
                       Edit</Button></td>
                   <td><Button outline color="danger" onClick={that.deleteData.bind(that,student._id)}>Delete</Button></td>
               </tr>
           )
            return 0;
        });
        return studentMapped;
    }

    getDataLengthPromise = () => {
        let dataLengthObject = this.props.dataLength.data_length;
        if(Object.keys(dataLengthObject).length > 0){
            return dataLengthObject;
        }
        return false;
    }

    paginationFunction = () => {
        let dataLengthObject = this.getDataLengthPromise();
        if(dataLengthObject){
            let numberOfDataParpage = 5;
            let Datalength = dataLengthObject.dataLength;
            let totalPage = Math.ceil(Datalength/numberOfDataParpage);
            if(this.state.dataLength !== Datalength){
                if(this.state.isdelete === 1){
                    if(totalPage < this.state.pageIndex)
                        this.setState({totalNumbarOfPage:totalPage,dataLength:Datalength,pageIndex:totalPage});
                    else
                        this.setState({totalNumbarOfPage:totalPage,dataLength:Datalength});
                }
                else
                    this.setState({totalNumbarOfPage:totalPage,dataLength:Datalength,pageIndex:1});
            }
        }
    }

    componentDidUpdate =  () => {
        let allStudent;
        let pageIndex;
        let editFlag = this.props.getAllStudent.editFlag;
        //for delete
        if(this.state.isdelete === 1){
            pageIndex = this.state.pageIndex;
        
        }
        else
            pageIndex = 1;
        let dataLengthObject = this.getDataLengthPromise();
        if(dataLengthObject){
            if(dataLengthObject.dataLength !== this.state.dataLength){
                this.paginationFunction();
                this.props.action.getAllStudent.getAllStudents(pageIndex).then(async (resp) => {
                    if(resp){
                        if(this.props.getAllStudent.Allstudent.length === 0){
                            await this.props.action.getAllStudent.getAllStudents(this.state.pageIndex)
                                .then((resp) => {
                                    if(resp)
                                        allStudent = this.props.getAllStudent.Allstudent;
                                })
                        }
                        else {
                            allStudent = this.props.getAllStudent.Allstudent;
                        }
                        if(this.state.allstudents.length > 0){
                                this.setState({allstudents:allStudent,isdelete:0})
                        }
                    }
                })
            }
        }
        //for Edit
        if(editFlag === 1){
            allStudent = this.props.getAllStudent.Allstudent;
            this.setState({allstudents:allStudent})
            this.props.action.editStudentAction.EditFlag(0)
            
        }
    }

    componentDidMount = async () => {
                    let allStudent;
                    this.paginationFunction();
                    let pageIndex = this.state.pageIndex;
                    this.props.action.getAllStudent.getAllStudents(pageIndex).then((d => {
                        if (d) {
                            allStudent = this.props.getAllStudent.Allstudent;
                            this.setState({allstudents:allStudent});
                        }
                    }))
    }

    gridTable = () => {
       return this.state.allstudents.length > 0 ?
                    (<div><div align={'center'}><h5>Student Data</h5></div>
                            <Table>
                                <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Date of Birth</th>
                                    <th>Marks</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.gridMapped()}
                                </tbody>
                            </Table>
                            <div className="gridPagination">
                                {this.state.totalNumbarOfPage > 0 ?
                                    <GridPagination totalNumberOfPage = {this.state.totalNumbarOfPage}
                                    pageIndex = {this.state.pageIndex}
                                                    clickOnPageIndex = {(event,pageIndex) => this.clickOnPage(event,pageIndex)}/>
                                    :
                                    null
                                }
                            </div>

                        </div>
                    )
                    :
                    <div>{"Loading..."}</div>
    }

    render(){
        return(
               this.gridTable() 
        );
    }
}

const mapStateToProps = (state) => {
    const {getAllStudent,getAllSubject,dataLength}  = state;
    return {
        getAllStudent : getAllStudent,
        getAllSubject : getAllSubject,
        dataLength : dataLength
    }
};

const mapDispatchToProps = dispatch => ({
    action: {
        getAllStudent: bindActionCreators(getAllStudentAction, dispatch),
        deleteStudent: bindActionCreators(deleteStudentAction,dispatch),
        getDataLength: bindActionCreators(getDataLengthAction, dispatch),
        editStudentAction: bindActionCreators(editStudentAction, dispatch)
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(GridTable);