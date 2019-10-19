import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import './App.css';
import Grid from '../grid/grid';
import * as getAllSubjectAction from "../../action/getAllSubject";
import * as getDataLengthAction from "../../action/dataLength";

class App extends Component{

    componentDidMount() {
        this.props.action.getAllSubject.getAllSubject();
        this.props.action.getDataLength.dataLength();
    }

    render(){
    return (
        <Router>
          <div>
                <Grid/>
          </div>
        </Router>
    );
  }

}

const mapDispatchToProps = dispatch => ({
    action: {
        getAllSubject: bindActionCreators(getAllSubjectAction, dispatch),
        getDataLength: bindActionCreators(getDataLengthAction, dispatch)
    }
});

export default connect(null,mapDispatchToProps)(App);
