import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()



  useEffect(() => {
    if (query.id) {
      const professores = JSON.parse(window.localStorage.getItem('professores'))
      const professor = professores[query.id]
      for(let atributo in professor){
        setValue(atributo, professor[atributo])
      }

      setValue('nome', professor.nome)
      setValue('cpf', professor.cpf)
      setValue('matricula', professor.matricula)
      setValue('salario', professor.salario)
      setValue('email', professor.email)
      setValue('telefone', professor.telefone)
      setValue('cep', professor.cep)
      setValue('logradouro', professor.logradouro)
      setValue('complemento', professor.complemento)
      setValue('numero', professor.numero)
      setValue('bairro', professor.bairro)
    }
  }, [query.id])
  console.log(query.id);

  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.splice(query.id, 1, dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }
  return (
    <Pagina titulo='Professores'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control type="text" {...register('cpf')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula:</Form.Label>
          <Form.Control type="text"{...register('matricula')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salário:</Form.Label>
          <Form.Control type="text"{...register('salario')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="text"{...register('email')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="text"{...register('telefone')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP:</Form.Label>
          <Form.Control type="text"{...register('cep')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control type="text"{...register('logradouro')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control type="text"{...register('complemento')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número:</Form.Label>
          <Form.Control type="text"{...register('numero')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control type="text"{...register('bairro')} />
        </Form.Group>
        
        <div className='text-center'>
          <Link className=' btn btn-danger' href='/professores'>
            <AiFillStepBackward className='me-2' />
            Voltar
          </Link>
          <Button variant='primary' className='ms-2' onClick={handleSubmit(salvar)}>
            <AiFillStepForward className='me-2' />
            Salvar
          </Button>
        </div>

      </Form>
    </Pagina>
  )
}

export default form