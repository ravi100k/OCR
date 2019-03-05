import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../Actions/profileActions';

class Dashboard extends Component {
    componentDidMount() {
        // this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {



        return (
            <div className="dashboard">

            </div>
        );
    }
}


const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, null)(
    Dashboard
);