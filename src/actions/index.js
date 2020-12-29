
const usersLoaded = (newUsers) => {
    return {
        type: 'USER_LOADED',
        payload: newUsers
    };
};

export {
    usersLoaded
};