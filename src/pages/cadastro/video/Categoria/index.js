import React from 'react';
import PageDefault from '../../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return(
        <PageDefault>
            <form>

                <label>
                    Nome da categoria:
                    <input type="text"/>

                    <button>Cadastrar</button>
                </label>


            </form>

            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
     
    
}

export default CadastroCategoria;