/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import URL from '../config/index';

const CATEGORIAS_URL = `${URL}/categorias`;

function getAllWithVideos() {
    
  return fetch(`${CATEGORIAS_URL}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados:');
  });
}

export default {
  getAllWithVideos,
};
