import {AiFillHome} from "react-icons/ai";
import {FaUserAlt, FaWrench} from "react-icons/fa";
import React from "react";

const initialState = {
    users: [],
    loading: true,
    sidebar: true,
    sidebarData : [
        {
            title: 'Home',
            path: '/',
            icon: <AiFillHome/>,
            className: 'nav-text'
        },
        {
            title: 'Users',
            path: '/users',
            icon: <FaUserAlt/>,
            className: 'nav-text'
        },
        {
            title: 'Test',
            path: '/test',
            icon: <FaWrench/>,
            className: 'nav-text'
        },
    ],
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
            case 'USERS_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                sidebar: !state.sidebar
            };

        default:
            return state;
    }

};

export default reducer;