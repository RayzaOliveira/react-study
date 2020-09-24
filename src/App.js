import React from 'react';
// import 
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

// função App = componentes
function App() {
  return (
    <div className="App">
      
      {/* veio no creat-react-app
      <header className="App-header">
        {logo}, é uma variável 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}


      {/* componente Header */}
      <Header/>
      <br/>
      <hr/>

      {/*Passagem de parâmentro (passsando um props), conteudo='Ainda sou um formulário'*/}
      {/* <Form conteudo='Ainda sou um formulário'/> */}

      {/* componente com seu próprio estado */}
      <Form conteudo='dados'/>

      <hr/>
      <Footer/>
    

    </div>
  );
}

export default App;
