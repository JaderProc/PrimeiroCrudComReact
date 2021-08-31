import React from 'react';
import Main from '../template/Main';


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const Home = () => {
    return (
        <Main {...headerProps}>
            <div className="display-4">
                Bem vindo!
            </div>
            <hr />
            <p className="mb-0">
                Sistema para exemplificar a construção de cadastro desenvolvido
                em React!
            </p>
        </Main>
    )
}

export default Home
