
export class User {
    constructor(public email: string, public name: string, private password: string) {

    }
    matches(another: User): boolean{
        return another !== undefined && another.email === this.email && another.password === this.password 
    }
}
export const users = {
    'juliana@gmail.com': new User('juliana@gmail.com', 'Juliana', '123456'),
    'jonathan@gmail.com': new User('jonathan@gmail.com', 'Jonathan', '654231')
}