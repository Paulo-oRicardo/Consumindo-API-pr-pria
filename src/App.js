import React, { Component } from 'react';
import api from './api';
import style from './styles/app.module.css';
class App extends Component{
  state= {
    artigos:[],
  }
  //Executa antes de outras funções
  async componentDidMount(){
    const response = await api.get('artigo');

    this.setState({artigos:response.data})
  }

  render(){
    const {artigos} = this.state;
    return (
      <div className={style.containerArtigos}>
        <h1 >Consumindo própria API</h1>
         <ul className={style.ulArtigos}>    
           <h2>Listar Artigos</h2>
            { artigos.map(artigo => (
              <li key={artigo._id}>
                <h3><strong>Título: </strong> {artigo.titulo}</h3>
                <p><strong>Conteúdo: </strong>  {artigo.conteudo} </p>
              </li>
            ))}
         </ul>
      </div>
    );
  };
};

export default App;
