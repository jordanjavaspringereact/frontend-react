function Tabela({vetor, selecionar}){
  return(
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Cpf</th>
          <th>Rg</th>
          <th>Data de Nascimento</th>
          <th>Nome da mae</th>
        {/*   <th>Data de Cadastro</th> */}
          <th>Acao</th>
        </tr>
      </thead>


      <tbody>
        {
          vetor.map((obj,indice)=> (
          <tr key={indice}>
              <td>{indice+1}</td>
              <td>{obj.nome}</td>
              <td>{obj.cpf}</td>
              <td>{obj.rg}</td>
              <td>{obj.dataNascimento}</td>
              <td>{obj.nomeMae}</td>
             {/*  <td>{obj.dataCadastro}</td> */}
              
              <td><button onClick={()=>{selecionar(indice)}}className="btn btn-success">Selecionar</button></td>
        </tr>
          ))
        }
      </tbody>

    </table>

  )
}

export default Tabela;