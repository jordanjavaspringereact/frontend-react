import './App.css';

import Formulario from './Formulario';
import Tabela from './Tabela';
import { useEffect, useState } from 'react';
function App() {

  // obj produto

  const cliente = {
    codigo : 0,
    cpf: '',
    nome: '',
    rg: '',
    dataNascimento: '',
    nomeMae: '',
    
  }

  //useState
 
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [objCliente, setObjCliente] = useState(cliente);



  const [clientes,setClientes] = useState ([]);

  //useEffect

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setClientes(retorno_convertido))
  }, []);

  // obtendo dados form

  const btnSubmit = (e) => {
    console.log(e.target);
    setObjCliente({...objCliente,[e.target.name]:e.target.value});

  }

  // sumit cliente

  const cadastrar = () =>{
    fetch('http://localhost:8080/cadastrar', {
      method:'post',
      body:JSON.stringify(objCliente),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      /* console.log(retorno_convertido); */
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        setClientes([...clientes, retorno_convertido]);
        alert('cadastro efetuado com sucesso')
        limparFormulario()
      }


    })
  }


   // remover cliente

  const remover = () =>{
    fetch('http://localhost:8080/remover/'+objCliente.codigo, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      // msg
      alert(retorno_convertido.mensagem);

      let vetorTemp = [...clientes];

      // indice

      let indice = vetorTemp.findIndex((c)=>{
        return c.codigo === objCliente.codigo;
      });
      
      // remover cliente do vetor temp

      vetorTemp.splice(indice,1)

      // att vetor de cliente

      setClientes(vetorTemp);

      // Limpar formulario
      limparFormulario();

    })
  }




  // limpar form

  const limparFormulario = () =>{
    setObjCliente(cliente);
    setBtnCadastrar(true);
  }


  // selecionar cliente

  const seleCliente = (indice) =>{

    setObjCliente(clientes[indice]);
    setBtnCadastrar(false);

  }


  // alterar cliente

  const alterar = () =>{
    fetch('http://localhost:8080/alterar', {
      method:'put',
      body:JSON.stringify(objCliente),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      /* console.log(retorno_convertido); */
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{

        alert('aletardo com sucesso')
      
        let vetorTemp = [...clientes];

      // indice

        let indice = vetorTemp.findIndex((c)=>{
        return c.codigo === objCliente.codigo;
      });
      
      // alterar cliente do vetor temp

      vetorTemp[indice]= objCliente

      // att vetor de cliente

      setClientes(vetorTemp);




        // limpar forms
        limparFormulario()
      }


    })
  }


  //retorno
  return (
    <div className="App">
     <Formulario btn={btnCadastrar} eSubmit={btnSubmit} cadastrar={cadastrar} obj={objCliente} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
     <Tabela vetor={clientes} selecionar={seleCliente}/>
    </div>
  );
}

export default App;
