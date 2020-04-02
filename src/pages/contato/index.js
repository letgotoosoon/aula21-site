import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Contato extends Component {
  
  state = {
    conteudo: {}
    
  }
  
  componentDidMount = () =>
  axios.get("http://localhost:3000/contato")
  .then(resposta => {
    this.setState({ conteudo: resposta.data })
    
  })
  
  
  
  render() {
    const {conteudo} = this.state

    return (
      <>
      <Helmet>
      <title>Contato</title>
      </Helmet>
      <div className="page">
      <div className="conteudo">
      <div className="flex">
      <div className="resumo">
      <h1>{conteudo.titulo}!</h1>
      <p>{conteudo.subtitulo}</p>
      <h2>{conteudo.informacao}</h2>
      {conteudo.contatos !== undefined && (
        <ul>
        {conteudo.contatos.map(item => (
        <li key={item.id}>
          <p>{item.tipo}</p>
          <p>{item.contato}</p>
        </li>
      ))}
      </ul>
      )}
      </div>

      <img src={conteudo.foto} alt="Perfil" />
      </div>
      </div>
      </div>
      </>
      )
    }
  }
  