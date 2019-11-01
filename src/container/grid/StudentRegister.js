import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StudentForm from './StudentForm';
import StudentMarks from './StudentMarks';
import classnames from 'classnames';
import {Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row, Col } from 'reactstrap';
import * as AddStudentDetailAction from "../../action/AddStudentDetail";
import * as getDataLengthAction from "../../action/dataLength";
import * as editStudentAction from "../../action/editStudentDetail";

export class StudentRegister extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getEditedData = this.getEditedData.bind(this);
        
        this._id = null;
        this.fname = null;
        this.lname = null;
        this.dob = null;
        this.selectedFile = null;
        this.srcImage = null;
        this.address1 = null;
        this.address2 = null;
        this.cstat = null;
        this.city = null;
        this.zipcod = null;
        this.marksDetails = []

        this.state = {
            activeTab: '1',
            _id: null,
            fname: null,
            lname: null,
            dob: null,
            selectedFile: null,
            srcImage: null,
            address1: null,
            address2: null,
            cstat: null,
            city: null,
            zipcod: null,
            errors : {},
            error_flag:false,
            subject : [{_id:0,subject:"select"}],
            marksDetail : [{_id:null,subject:null,marks:null,isdelete:0}],
            deletedMarksDetail : [],
            selectinputs: ['selectinput-0'],
            inputs: ['input-0'],
            link: ['link-0']
        }
    }

    componentDidMount() {
        let subjectdata = this.props.getAllSubject.Allsubject;
        if(this.state.subject.length === 1){
            this.setState({subject:[...this.state.subject,...subjectdata]});
        }
    }

    componentDidUpdate = () => {
        this.getEditedData()
    }

    onChangeHandler = (event) => {
        if(event.target.files && event.target.files[0]){
            this.setState({
                selectedFile: event.target.files[0],
                srcImage: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    handleChange = (e,stateKey) => {
        this.setState({[stateKey]:e.target.value})
    }

    onSubjectSelect = (e,index,name) => {
        let marksDetail = this.state.marksDetail.slice();
        if(e.target.value === "0") marksDetail[index][name] = null    
        else marksDetail[index][name] = e.target.value;
        this.setState({marksDetail:marksDetail})
    }

    //addNewElement
    addElement = () => {
        let newselectInput = `selectinput-${this.state.selectinputs.length}`;
        let newinputs = `input-${this.state.inputs.length}`;
        let newlink = `link-${this.state.link.length}`;

        this.setState(prevState => ({ selectinputs: prevState.selectinputs.concat([newselectInput]),
            inputs: prevState.inputs.concat([newinputs]),link: prevState.link.concat([newlink]),
            marksDetail: prevState.marksDetail.concat({_id:null,subject:null,marks:null,isdelete:0})}));
    }

    //delete element
    deleteElement = (event,index) => {
        if(this.state.selectinputs.length > 1){
            let deletedMarksDetail;
            let  selectinput = this.state.selectinputs.slice();
            let inputs = this.state.inputs.slice();
            let link=  this.state.link.slice();
            let marksDetail = this.state.marksDetail.slice();
            selectinput.splice(index,1);
            inputs.splice(index,1);
            link.splice(index,1);
            if(this.state._id !== null){
                if(marksDetail[index]._id !== null){
                    deletedMarksDetail = {_id:marksDetail[index]._id,subject:marksDetail[index].subject,
                        marks:marksDetail[index].marks,isdelete:1}
                }
            }
            marksDetail.splice(index,1);
            if(deletedMarksDetail !== undefined)
                this.setState({selectinputs:selectinput,inputs:inputs,link:link,marksDetail:marksDetail,deletedMarksDetail:[...this.state.deletedMarksDetail,deletedMarksDetail]}) 
            else
                this.setState({selectinputs:selectinput,inputs:inputs,link:link,marksDetail:marksDetail})
        }
    }

    commonvalidation = (inputparameter) => {
        if(inputparameter == null || inputparameter.length < 15){
            if(inputparameter == null){
                return("Cannot be empty");
            }
            else if(inputparameter.length < 15){
                return("required atleast 15 character");
            }
            else if(inputparameter.length > 100){
                return("maximum length is 100 character");
            }
        }
        return true;
    }

    nameValidation = (nameparameter) => {
        //name
        let nameFormat = /^[A-Za-z]+$/;
        if(nameparameter !== null && nameparameter !== ''){
            if(!nameparameter.match(nameFormat)){
                return("only letter is allowed");
            }
            else if(nameparameter.length < 3){
                return("required atleast 3 character");
            }
            else if(nameparameter.length > 15){
                return("Maximum Length is 15 character.");
            }
        }
        else {
            return("Cannot be empty");
        }
        return true;
    }

    //validation
    handleValidation = () => {
        let errors = {};
        let commonresp;
        let formIsValidate = true;
        this._id = this.state._id;
        this.fname = this.state.fname;
        this.lname = this.state.lname;
        this.dob = this.state.dob;
        this.selectedFile = this.state.selectedFile;
        this.address1 = this.state.address1;
        this.address2 = this.state.address2;
        this.cstat = this.state.cstat;
        this.city = this.state.city;
        this.zipcod = this.state.zipcod;
        this.marksDetails = this.state.marksDetail;

        //fname
        commonresp = this.nameValidation(this.fname);
        if(commonresp !== true){
            errors['fname'] = commonresp;
            formIsValidate = false;
        }

        //lname
        commonresp = this.nameValidation(this.lname);
        if(commonresp !== true){
            errors['lname'] = commonresp;
            formIsValidate = false;
        }

        //dob
        if(this.dob === null || this.dob === ''){
            errors['dob'] = "Select Date of Birth in Proper Format";
            formIsValidate = false;
        }

        //image validation
        if(this.state._id === null){
            if(this.selectedFile){

                let extension = (this.selectedFile.name).substr((this.selectedFile.name).lastIndexOf('.')).toLowerCase();
                if(extension === ".jpg" || extension === ".jpeg" || extension === ".bmp" ||
                    extension === ".gif" || extension === ".png"){
                }
                else {
                    errors["selectedFile"] = "Select only image file";
                    formIsValidate = false;
                }
            }
            else {
                errors["selectedFile"] = "Select image file";
                formIsValidate = false;
            }
        }

        //address1
        commonresp = this.commonvalidation(this.address1);
        if(commonresp !== true){
            errors['address1'] = commonresp;
            formIsValidate = false;
        }

        //address2
        commonresp = this.commonvalidation(this.address2);
        if(commonresp !== true){
            errors['address2'] = commonresp;
            formIsValidate = false;
        }

        //state
        commonresp = this.nameValidation(this.cstat);
        if(commonresp !== true){
            errors['state'] = commonresp;
            formIsValidate = false;
        }

        //city
        commonresp = this.nameValidation(this.city);
        if(commonresp !== true){
            errors['city'] = commonresp;
            formIsValidate = false;
        }

        //zipcod
        if(this.zipcod !== null && this.zipcod !== ''){
            let NumbarFormat = /^[0-9]*$/;
            if(!this.zipcod.match(NumbarFormat)){
                errors['zipcod'] = "only number is allowed";
                formIsValidate = false;
            }
            else if(this.zipcod.length < 6 || this.zipcod.length > 6 ){
                errors['zipcod'] = "6 numer is valid for zipcod";
                formIsValidate = false;
            }
        }
        else {
            errors['zipcod'] = "can't be empty";
            formIsValidate = false;
        }
        
        //marksDetail
        if(this.marksDetails !== undefined){
            let NumbarFormat = /^[0-9]*$/;
            this.marksDetails.map(function (marksDetail,index) {
                if(marksDetail.subject === null || marksDetail.marks === null || marksDetail.marks.length === 0){
                    if(marksDetail.subject === null){
                        errors['subject'+index] = "select subject at row: "+(index+1);
                        formIsValidate = false;
                    }
                    if(marksDetail.marks === null || marksDetail.marks.length === 0){
                        errors['marks'+index] = "enter marks at row: "+(index+1);
                        formIsValidate = false;
                    }
                }
                else if(!marksDetail.marks.match(NumbarFormat)){
                    errors['marks'+index] = "enter only Digit in Mark at: "+(index+1);
                    formIsValidate = false;
                }
                else {
                    if(marksDetail.marks.length > 3){
                        errors['marks'+index] = "Maximum 3 digit allow in Mark at: "+(index+1);
                        formIsValidate = false;
                    }
                }
                return 0;
            })
        }
        else {
            errors['subject'] = "enter student marks detail";
            formIsValidate = false;
        }

        this.setState({errors : errors});
        return formIsValidate;
    }

    setEditedData = (student) => {
        let selectinputs = [];
        let input = [];
        let link = [];
        let marksDetail = [];
        if(this.state._id === null || this.state._id !== student._id){
            student.marks.map(function (mark,index) {
                selectinputs.push(`selectinput-${index}`);
                input.push(`input-${index}`);
                link.push(`link-${index}`);
                marksDetail.push({_id:mark._id,subject:mark.subjectId,marks:mark.marks,isdelete:0});
                return 0;
            });
            let studentImage = student.studentImage.split(':');
            studentImage = studentImage[3];
            this.setState({
                activeTab: '1',
                _id :student._id,
                fname :student.fname,
                lname :student.lname,
                dob: student.dob,
                selectedFile: studentImage,
                srcImage: student.studentImage,
                address1: student.address_one,
                address2: student.address_two,
                cstat: student.state,
                city: student.city,
                zipcod: student.zipcod,
                marksDetail : marksDetail,
                selectinputs: selectinputs,
                inputs: input,
                link: link,
                errors : {},
                error_flag:false
            });
        }
    }

    getEditedData = () => {
        if(Object.keys(this.props.studentData).length > 0) {
            let student = this.props.studentData;
            this.setEditedData(student);
        }
        else {
            if(this.state._id  !== null){
                this.clearState();
            }
        }
    }

    clearState = () => {
        this.setState({
            activeTab: '1',
            _id: null,
            fname: null,
            lname: null,
            dob: null,
            selectedFile: null,
            srcImage: null,
            address1: null,
            address2: null,
            cstat: null,
            city: null,
            zipcod: null,
            errors : {},
            error_flag:false,
            subject : [{_id:"0",subject:"select"}],
            marksDetail : [{_id:null,subject:null,marks:null,isdelete: 0}],
            selectinputs: ['selectinput-0'],
            inputs: ['input-0'],
            link: ['link-0']
        },
            () => {
                console.log(this.state);
            })
        return true;
    }

    registerdata = async () => {
        let marksDetail;
        if(this.handleValidation()){
            const data = new FormData();
            data.append('_id',this._id);
            data.append('fname', this.fname);
            data.append('lname', this.lname);
            data.append('dob', this.dob);
            data.append('studentImage', this.selectedFile);
            data.append('address_one', this.address1);
            data.append('address_two', this.address2);
            data.append('state', this.cstat);
            data.append('city', this.city);
            data.append('zipcod', this.zipcod);
            data.append('isdelete', 0);
        
            if(this.state._id !== null){
                if(this.state.deletedMarksDetail.length > 0){
                    marksDetail = [...this.marksDetails,...this.state.deletedMarksDetail]
                }
                else marksDetail = this.marksDetails;
            }
            else marksDetail = this.marksDetails;
            data.append('subjectContent',JSON.stringify(marksDetail))
            if(this.state._id !== null){
                this.props.action.editStudentAction.EditStudentDetail(data).then((editActionresp) => {
                    this.clearState();
                    this.props.toggle();
                })
            }
            else {
                this.props.action.AddStudentDetailAction.AddStudentDetail(data).then(async (addActionresp) => {
                    await this.clearState();
                    this.props.toggle();
                    if(addActionresp){
                        this.props.action.getDataLength.dataLength();
                    }
                })
            }
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    setTogalData = () => {
        this.clearState()
        this.props.toggle();
    }

    render (){
        return(
            <React.Fragment>
            <Modal isOpen={this.props.isOpen} toggle={this.setTogalData.bind(this)} className={this.props.className}>
                <ModalHeader toggle={this.setTogalData.bind(this)}>Student Data!</ModalHeader>
                <ModalBody>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Student Detail
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Marks Detail
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div ></div>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <StudentForm error_flag = {this.state.error_flag} handleChange = {(event, name) => this.handleChange(event, name)}
                                             onChangeHandler = {(event) => this.onChangeHandler(event)} errors = {this.state.errors} state = {this.state}
                                />
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <StudentMarks onSubjectSelect = {(event,index,name) => this.onSubjectSelect(event,index,name)}
                                                      addElement = {this.addElement.bind(this)} deleteElement = {(event,index) => this.deleteElement(event,index)}
                                                      selectinputs = {this.state.selectinputs} subject = {this.state.subject} inputs = {this.state.inputs}
                                                      link = {this.state.link} marksDetail = {this.state.marksDetail} errors = {this.state.errors}/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-primary" onClick={this.registerdata.bind(this)}>{this.state._id !== null ? "Edit Data" : "Add Data"}</Button>
                </ModalFooter>
            </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const {getAllSubject}  = state;
    return {
        getAllSubject : getAllSubject
    }
};

const mapDispatchToProps = dispatch => ({
    action: {
        AddStudentDetailAction: bindActionCreators(AddStudentDetailAction,dispatch),
        getDataLength: bindActionCreators(getDataLengthAction, dispatch),
        editStudentAction: bindActionCreators(editStudentAction, dispatch)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(StudentRegister);