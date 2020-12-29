export default class ApiService {
    getUsers() {
        return[
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
        ];
    }

}