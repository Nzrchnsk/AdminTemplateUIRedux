import React, {Fragment} from 'react';

import './user-list-item.css';

const UserListItem = ({user}) => {
    const {id, email, name} = user;
    return (<Fragment>
        <span>{id}</span>
        <span>{email}</span>
        <span>{name}</span>
    </Fragment>);
};

export default UserListItem;