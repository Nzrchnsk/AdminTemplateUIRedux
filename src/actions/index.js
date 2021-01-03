const usersLoaded = (newUsers) => {
    return {
        type: 'USERS_LOADED',
        payload: newUsers
    };
};
const usersRequested = () => {
    return {
        type: 'USERS_REQUESTED'
    };
};

const toggleSidebar = () => {
    return {
        type: 'TOGGLE_SIDEBAR'
    };
};

export {
    usersLoaded,
    usersRequested,
    toggleSidebar,
};