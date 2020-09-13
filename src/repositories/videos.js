import URL from '../config/index';

const URL_VIDEOS = `${URL}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar o vídeo:');
    });
}

export default {
  create,
};
