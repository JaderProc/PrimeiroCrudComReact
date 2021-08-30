import React, { Component } from 'react';
import Main from '../template/Main';


export default props =>
    <Main 
        icon="home" 
        title="Início"
        subtitle="Projeto de CRUD de usuarios em React">
        <div className="display-4">
            Bem vindo!
        </div>
        <hr />
        <p className="mb-0">
            Sistema para exemplificar a construção de cadastro desenvolvido
            em React!
        </p>
    </Main>
    
/*
const headerProps = {
    icon: 'users', 
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class Home extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}
*/



