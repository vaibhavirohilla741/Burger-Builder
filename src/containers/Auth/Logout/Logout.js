import React, { Component } from 'react'
import * as actions from "../../../store/actions/index"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"
export class Logout extends Component {
    componentDidMount(){
        this.props.onLogout();
    }
    render() {
        return <Redirect to="/"/>
     }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)( Logout)
