// Interfaces
class User {
    id?: number;
    email: string;

    constructor(id: number, email: string) {
        this.email = email;
        this.id = id;
    }

    sayHello?() {
        console.log('Hello');
    }
}

const my_user = new User(1, 'jm@mail.fr');

interface Book {
    id?: number;
    author: string;
    title: string;
}

const my_book: Book = {
    id: 1,
    author: 'Mary Shelley',
    title: 'Frankenstein'
};

const my_user_2: User = {
    id: 2,
    email: 'jean-micheline@mail.fr',
    sayHello() {}
};

const api_reponse = {
    id: 123,
    email: 'toto@mail.fr'
}
const my_user_3: User = api_reponse as User;
// my_user_3.sayHello();
// -> ERROR: my_user_3.sayHello() is not a function

interface Toto {
    toString(): string;
}

class Asterix implements Toto {
    toString(): string {
        return 'Asterix';
    }
}



// Enum
enum Role {
    ADMIN = 'Admin',
    SUPER = 'Super',
    GODDESS = 'Goddess',
    GUEUX = 'Gueux'
}
const my_role: Role = Role.GODDESS;
console.log(my_role);

// Types "personnalisés"
let ma_variable : string | number;
type Category = 'sport' | 'musique' | 'theâtre';
let my_cat: Category = 'sport';
type Serie = {
    id?: number,
    title: string,
    watch(): void
}

let my_serie: Serie = {
    title: 'The Walking Dead',
    watch() {
        // Do something
    }
}

/*
=  pour les assignations de valeur :
        - variable
        - dans une classe

:  - le typage de variables, paramétres, retour
    - objet littéraux clef: valeur,
    {
        clef: valeur,
        ...
    }

    let / const / ( var ) =>

 */
// Valeur
let my_objet = {
    name: 'valeur du nom'
}

// type
type MyType = {
    name: string
}
