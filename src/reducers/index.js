
const initialState = {
    users: [
        {
            id: 1,
            email: 'admin@gmail.com',
            name: 'admin'
        },
        {
            id: 2,
            email: 'user@gmail.com',
            name: 'user'
        }
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case 'USER_LOADED':
            return {
                users: action.payload
            };


        default:
            return state;
    }

};

export default reducer;