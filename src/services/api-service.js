export default class ApiService {
    _apiBase = 'https://localhost:5001/api';


    getResource = async (url) => {
        //console.log(`${this._apiBase}${url}`);
        const res = await fetch(`${this._apiBase}${url}`);
        //console.log(res.json());
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getUsers = async () => {
        const res = await this.getResource(`/users`);
        return res
            .map(this._transformUser)
    };




    _transformUser = (user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }

    // data = [
    //     {
    //         id: 1,
    //         email: 'admin@gmail.com',
    //         name: 'admin'
    //     },
    //     {
    //         id: 2,
    //         email: 'user@gmail.com',
    //         name: 'user'
    //     }
    // ];
    //
    // getUsers() {
    //     return new Promise((resolve) => {
    //         setTimeout(()=>{
    //             resolve(this.data)
    //         }, 700)
    //     });
    // }
}