import {Connected} from './connected.enum';

export class Contactos {
    nombre='';
    apellidos='';
    email='';
    connected = Connected.NOTCONNECTED;

    constructor(nombre, apellidos, email, connected) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.connected = connected;
    }
};