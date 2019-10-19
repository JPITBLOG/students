import React,{Component} from 'react';
import {Form,Row,Col,FormGroup,Label,Input,Nav,NavItem,NavLink} from 'reactstrap';
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import index from "../../reducer";

class StudentMarks extends Component{
    constructor(props){
        super(props);
        this.state = {
            subject : [{_id:0,subject:"select"}]
        }
    }

    componentDidMount() {
        let subjectdata = this.props.getAllSubject.Allsubject;
        if(this.state.subject.length === 1){
            this.setState({subject:[...this.state.subject,...subjectdata]});
        }
    }

    render() {
        let navdelete = {
            marginTop: "30px"
        }
        return (
            <Form className={'mt-3'}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Subject</Label>
                            {this.props.selectinputs.map((input,inputIndex) =>
                                <Input onChange = {(event) => this.props.onSubjectSelect(event,inputIndex,"subject")} type="select" name="select" id="exampleSelect" key={input}
                                value={this.props.marksDetail[inputIndex].subject !== null ? this.props.marksDetail[inputIndex].subject : this.state.subject[0]}>
                                    {(this.state.subject || []).map((Subject,index) => {  
                                          const result = this.props.marksDetail.find( ({ subject }) => subject === Subject._id );
                                          if(result){
                                                return (<option value={Subject._id} key={index} disabled = {true}>{Subject.subject}</option>)
                                          }
                                          else{
                                            return (<option value={Subject._id} key={index}>{Subject.subject}</option>)
                                          }
                                        
                                    })}
                                </Input>
                            )}
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="examplePassword">Marks</Label>
                            {
                                this.props.inputs.map((input,index) =>
                                    <Input onChange = {(event) => this.props.onSubjectSelect(event,index,"marks")} type="text" name="marks" id="marksId" key={input} value = {this.props.marksDetail[index].marks || ''}/>,
                                    <span style={{color: "red"}}>{this.props.errors['marks'+index]}</span>
                                )
                            }
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup style={navdelete}>
                            <Nav>
                                <NavItem>
                                    {
                                        this.props.link.map((input,index) =>
                                            <NavLink key={index} onClick={(event) => this.props.deleteElement(event,index)}>Delete</NavLink>
                                        )
                                    }
                                </NavItem>
                            </Nav>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Button onClick={this.props.addElement}>Add New Marks</Button>
                        </FormGroup>
                    </Col>
                </Row>
                {this.props.selectinputs.map((input,index) =>
                    <Row form key={index}>
                            <span key={index} style={{color: "red"}}>{this.props.errors['subject'+index]}</span>
                    </Row>
                )}
                {this.props.selectinputs.map((input,index) =>
                    <Row form key={index}>
                        <span key={index} style={{color: "red"}}>{this.props.errors['marks'+index]}</span>
                    </Row>
                )}
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    const {getAllSubject}  = state;
    return {
        getAllSubject : getAllSubject
    }
};

export default connect(mapStateToProps,null)(StudentMarks);