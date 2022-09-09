function Formulario({btn, eSubmit, cadastrar,obj,cancelar, remover,alterar}){
  return(
    <form class=" needs-validation" novalidate>
      <input type='text' value={obj.nome} onChange={eSubmit} name="nome"placeholder="Nome" className="form-control"/>
      <input type='text' value={obj.cpf} onChange={eSubmit} name="cpf"placeholder="cpf" className="form-control"/>
      <input type='text' value={obj.rg}onChange={eSubmit} name="rg"placeholder="rg" className="form-control"/>
      <input type='date' value={obj.dataNascimento}onChange={eSubmit} name="dataNascimento"placeholder="data de nascimento" className="form-control"/>
      <input type='text' value={obj.nomeMae}onChange={eSubmit} name="nomeMae"placeholder="nome da mae" className="form-control"/>

      {
        btn
        ?
      <input type="button" onClick={cadastrar} value='Cadastrar' className="btn btn-primary mx-2"/>
        :
        <div>
       <input type="button" value='Alterar' onClick={alterar}className="btn btn-warning mx-2"/>
       <input type="button" value='Remover' onClick={remover} className="btn btn-danger mx-2"/>
       <input type="button" value='Cancelar' onClick={cancelar} className="btn btn-secondary mx-2"/>
        </div>
      }
     
    </form>
    )
}

export default Formulario;