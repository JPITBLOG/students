import React,{Component} from 'react';
import {Alert, Form,Row,Col, FormGroup, Input} from "reactstrap";

export default class StudentForm extends Component{

    render(){
        console.log("props value from test case: ",this.props.errors["fname"]);
        return(
            <Form className={'mt-3'}>
                {this.props.error_flag ? (<Alert id="AlertId" color="danger">There is an error while pass data.</Alert>): null}
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"fname")} type="text" name="name" id="fnam" placeholder="First Name" value = {this.props.state.fname || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["fname"]}</span>
                </FormGroup>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"lname")} type="text" name="name" id="lnam" placeholder="Last Name" value = {this.props.state.lname || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["lname"]}</span>
                </FormGroup>
                <FormGroup>
                    Date of Birth <input onChange = {event => this.props.handleChange(event,"dob")} type="date" name="dob" id="dob" value = {this.props.state.dob || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["dob"]}</span>
                </FormGroup>
                <Row form>
                <Col md={6}>
                <FormGroup>
                    Image:<input type="file" name="file" id="imgFile" onChange={(event) => this.props.onChangeHandler(event)}/>
                    <span style={{color: "red"}}>{this.props.errors["selectedFile"]}</span>
                </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                    <img src={this.props.state.srcImage} alt = {this.props.state.fname} height="75" width="75"/>
                    </FormGroup>
                </Col>
                </Row>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"address1")} type="textarea" name="address1" id="address1" placeholder="address1" value = {this.props.state.address1 || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["address1"]}</span>
                </FormGroup>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"address2")} type="textarea" name="address2" id="address2" placeholder="address2" value = {this.props.state.address2 || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["address2"]}</span>
                </FormGroup>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"cstat")} type="text" name="state" id="state" placeholder="State" value = {this.props.state.cstat || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["state"]}</span>
                </FormGroup>
                <Row form>
                <Col md={6}>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"city")} type="text" name="city" id="city" placeholder="City" value = {this.props.state.city || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["city"]}</span>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Input onChange = {event => this.props.handleChange(event,"zipcod")} type="text" name="zipcod" id="zipcod" placeholder="Zipcode" value = {this.props.state.zipcod || ''}/>
                    <span style={{color: "red"}}>{this.props.errors["zipcod"]}</span>
                </FormGroup>
                </Col>
                </Row>
            </Form>
        );
    }
}