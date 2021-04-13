import React from 'react'
import RegistoService from '../app/RegistoService'
import {withRouter} from 'react-router-dom'
import Card from'../components/card'

const estadoInicial ={        // inicio  
    nome: '',
    email: '',
    senha: '',
    entidade: '',
    concelho: '',
    sucesso: false,
    errors:[],
    atualizando : false

}

class RegistoUtilizador extends React.Component{

    state = estadoInicial;

    constructor(){              // obrigatoriamente quando criar um construtor chama o super 
        super()
        this.service = new RegistoService();
    }
    

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit =(event) => {
        event.preventDefault(); //método que previne que o método seja executado por completo
        const registo ={
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            entidade: this.state.entidade,
            concelho: this.state.concelho

        }
        try{
            this.service.salvar(registo)
            this.limpaCampos()
            this.setState({sucesso:true})
        }catch(erro){
             const errors = erro.errors
             this.setState({errors : errors})
        }
        
    }

    limpaCampos = () =>{        // limpar dados
        this.setState(estadoInicial)
    }
    

    componentDidMount(){
        const email = this.props.match.params.email

        if(email){
           const resultado = this.service.obterregistos().filter( registo => registo.email === email)
           if(resultado.length === 1){
                const registoEncontrado = resultado[0]
                this.setState({...registoEncontrado, atualizando: true})  // os três pontos pegam as propriedades (nome,email,preço,concelho) vai extrair e jogar dentro do state 
           }
        
        }

    }
    render(){
        return(
            <Card header={this.state.atualizando ? 'Atualização de registo ' : 'Cadastro de registo '}>          
                    <form id="frm-registo" onSubmit={this.onSubmit}>
                    {this.state.sucesso ? // se for sucesso vai mostrar o alerta, caso contrário não mostra nada
                    (
                        <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Bem feito!</strong> Registo realizado com sucesso!.
                        </div>
                    ) : (
                        <></>
                    )}
                    {this.state.errors.length > 0 &&

                        this.state.errors.map(msg =>{  // para cada mensagem de erro retorna um array com o alerta de erro
                            return(
                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong>{msg}.
                                </div>
                            )
                        })
                    }
                            
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nome: *</label>
                                    <input  type="text" 
                                    name="nome" 
                                    onChange ={this.onChange}
                                    value={this.state.nome}
                                    className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email: *</label>
                                    <input type="text" 
                                    name="email" 
                                    disabled={this.state.atualizando}
                                    onChange ={this.onChange} 
                                    value={this.state.email} 
                                    className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Senha de acesso:</label>
                                    <input type="text" 
                                    name="senha" 
                                    onChange ={this.onChange} 
                                    value={this.state.senha} 
                                    className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Entidade: *</label>
                                    <input type="text" 
                                    onChange ={this.onChange} 
                                    name="entidade" 
                                    value={this.state.entidade}
                                    className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Concelho: *</label>
                                    <input type="text" 
                                    onChange ={this.onChange} 
                                    name="concelho" 
                                    value={this.state.concelho} 
                                    className="form-control"/>
                                </div>
                            </div>
                        </div>
                                               
                        <div className="row">   
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-success">{this.state.atualizando ? 'Atualizar' : 'Salvar'}
                                </button> 
                            </div>
                            
                            <div className="col-md-1">
                                <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                            </div>
                        </div>

                        </form>    
            </Card>

        )
    }
}


export default withRouter (RegistoUtilizador);