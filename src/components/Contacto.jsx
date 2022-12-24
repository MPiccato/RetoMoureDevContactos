import React from 'react';
import PropTypes from 'prop-types';
import {Contactos} from '../models/contactos.class.js';

const Contacto = ({contactos}) => {
  return (
    <div>
      
        <h2>
            Nombre: {contactos.nombre}
        </h2>
        <h3>
            Apellido: {contactos.descripcion}
        </h3>
        <h4>
            Email: {contactos.email}
        </h4>
        <h5>
            Usuario: {contactos.connected ? 'Disponible' : 'No Disponible'}
        </h5>
    </div>
  )
}

Contacto.propTypes = {
    contactos: PropTypes.instanceOf(Contactos)


}

export default Contacto;

