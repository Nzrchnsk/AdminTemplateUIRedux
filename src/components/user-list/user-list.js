import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserListItem from "../user-list-item";

import './user-list.css';

class UserList extends Component {
    render() {
        const {users} = this.props;
        return (
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <UserListItem user={user}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {users};
};

export default connect(mapStateToProps)(UserList);