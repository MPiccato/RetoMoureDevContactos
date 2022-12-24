import React from 'react'
import {Contactos} from '../models/contactos.class.js';
import { Connected } from '../models/connected.enum.js';
import {Contacto} from './Contacto.jsx';

const Contact_list = () => {

  const defaultContacto = new Contactos('','','',Connected.Disponible);  
  return (
    <div>
      <Contacto contacto={defaultContacto}/>
    </div>
  )
}




export default Contact_list
