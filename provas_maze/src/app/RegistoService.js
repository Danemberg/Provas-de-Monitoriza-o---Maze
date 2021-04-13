const REGISTOS = '_REGISTOS';


export function ErroValidacao(errors){
    this.errors = errors;
}

export default class RegistoService {

    validar =(registo) =>{   // se tiver algum erro vai ter o array maior do que 0, ou seja, algum registo
        const errors = []

        if(!registo.nome){
            errors.push('O campo Nome é obrigatório.')
        }
        if(!registo.email){
            errors.push('O campo Email é obrigatório.')
        }
        if(!registo.entidade){  // se o preço for menor ou igual a 0 não inseriu nenhum valor 
            errors.push('O campo Entidade é obrigatório.')
        }
        if(!registo.concelho){
            errors.push('O campo Concelho é obrigatório.')
        }
        if(errors.length > 0){
            throw new ErroValidacao(errors)

        }
    }

    obterregistos = () => {
        const registos = localStorage.getItem(REGISTOS)
        if(!registos){
            return[];
        }
        return JSON.parse(registos)
    }

    obterIndex = (email) => {
        let index = null;
        this.obterregistos().forEach((registo, i) =>{
            if(registo.email === email){
                index = i;
            }
        })
        return index;
    }

    deletar =(email) => {
        const index = this.obterIndex(email)
        if(index !== null){
            const registos = this.obterregistos()
            registos.splice(index, 1)
            localStorage.setItem(REGISTOS, JSON.stringify(registos))
            return registos
        }
    }
    
    salvar = (registo) => {
       this.validar(registo)

       let registos = localStorage.getItem(REGISTOS)
       if(!registos){
           registos = []
       }else{
           registos = JSON.parse(registos)
       }
       const index = this.obterIndex(registo.email)
       if(index === null){
           registos.push(registo);
       }else{
           registos[index] = registo;
       }


       localStorage.setItem(REGISTOS, JSON.stringify(registos))
    }
}