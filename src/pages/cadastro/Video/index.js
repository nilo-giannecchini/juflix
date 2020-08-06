import React from 'react';
import DefaultPage from '../../../components/DefaultPage';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <DefaultPage>
        <h1> Cadastro de Vídeos</h1>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </DefaultPage>
    )
  }

  export default CadastroVideo;