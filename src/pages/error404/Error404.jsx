import React, { Component } from 'react';
import "./error404.scss";
import { Link } from 'react-router-dom';

export class Error404 extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='error-page'>
        <h1>404</h1>
        <p>Oups! La page demandée n'existe pas.</p>
        <Link to ="/" className='back-home'>Retourner sur la page d'acceuil</Link>
        </div>
    )
  }
}

export default Error404