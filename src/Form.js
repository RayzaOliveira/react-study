// componente que não armazena estado  **
// import React from 'react'


// const Form = props => {
// 
// retorna alguma coisa (JSX)
//   return (
//     // antes, <h1> Sou um formulário</h1>  

//     // com passagem de parâmentro (props)
//     // ele recebe o q esta sendo passado dentro da propriedade(props) conteudo e imprime 
//   <h1>{props.conteudo}</h1>
//   )
// }

// export default Form **


// componente com seu próprio estado
import React, {Component} from 'react'

// declara com classe Ñ como função
class Form extends Component {

// contrutor das classes, vai ter acesso aos props
constructor(props){
  // estende
  super(props)

  // estado do componete
  this.state = {
    // [], vai acumlar coisas 
    mensagens: []
  }
}

// metodo leInput()
// e (evento), armazena cada tecla digitada
leInput(e){
  if(e.keyCode === 13){
    // console.log(e.target.value)

    // para imprimir na tela e ñ so no console
    // coloca no estado na variavel mensagem
    // this.state.mensagen, vai concatenar
    this.setState({mensagens:[...this.state.mensagens, e.target.value]})
    // limpar dentro do formulário
    e.target.value = ''

    console.log(this.state.mensagens)
    

  }
}

// metodo renderList()
// para imprimir a lista
renderList(mensagem) {
  console.log("dentro da mensagem", mensagem)
  return(
    <div>
      <p>{mensagem}</p>
    </div>
  )
}

// metodo render()
// declarar metodo render(obrigatório) para sobrescrever o que esse componente vai ter na tela 
// vai dar um retorno de código jsx
//render, responsavel por mostra as coisas na tela 
  render(){
      return (

        <div>

          {/*  com o (constructor e this) , vem o conteudo das propriedades */}
          <h1>Sou um formulário (com estado) {this.props.conteudo} </h1>
          {/* gravar lista
          sempre q uma tecla for teclada, coloca o envento todo no F12(console) 
          controle de eventos*/}
          <input onKeyDown={(e)=> this.leInput(e)} type='text'/>
          <p>Digitado: {this.state.mensagens}</p>

          {
            // mapear os elementos(mensagens)
    this.state.mensagens.map(mensagem =>{
      // imprimir a lista e conferir 
      console.log("dentro do loop", mensagem)
      return this.renderList(mensagem)
    })
          }
        </div>
      )
  }
}

export default Form