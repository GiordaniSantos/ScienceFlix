/* eslint-disable eol-last */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Jogos com javascript',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej&ab_channel=DevSoutinho',
    categoria: 'Aprendendo à aprender tecnologia',

  });

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        /* alert('Video cadastrado com sucesso!'); */

        videosRepository.create({
          titulo: values.titulo,
          url: values.url, 
          categoriaId: 5,
        }).then(() =>{
          console.log('Cadastrado com sucesso!');
          history.push('');
        });

      }}
      >
        <FormField
          label="Titulo do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        
        <FormField
          label="Categoria"
          type="text"
          name="url"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;