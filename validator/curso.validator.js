const cursoValidator = {
    nome: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 30,
        message: 'o máximo é 30'
      },
    },
  
    duracao: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
  
    modalidade: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 15'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
    cpf: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 14'
      },
      maxLength: {
        value: 14,
        message: 'o máximo é 14'
      },
    },
    matricula: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 11,
        message: 'o mínimo é 11'
      },
      maxLength: {
        value: 14,
        message: 'o máximo é 11'
      },
    },
    salario: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 100'
      },
    },
    email: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 20'
      },
      maxLength: {
        value: 50,
        message: 'o máximo é 50'
      },
    },
    telefone: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 10'
      },
      maxLength: {
        value: 15,
        message: 'o máximo é 15'
      },
    },
    cep: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
    logradouro: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 20,
        message: 'o máximo é 20'
      },
    },
    complemento: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 5,
        message: 'o máximo é 5'
      },
    },
    numero: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 2,
        message: 'o mínimo é 2'
      },
      maxLength: {
        value: 4,
        message: 'o máximo é 4'
      },
    },
    bairro: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 20,
        message: 'o máximo é 20'
      },
    },
    capacidade: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 11'
      },
    },
    tipo: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 50'
      },
    },
    datainicio: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
    datafim: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
    curso: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
    valor: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
   
    tipodeevento: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 50,
        message: 'o máximo é 50'
      },
    },
  }
  
  export default cursoValidator