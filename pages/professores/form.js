import Pagina from '@/components/Pagina'
import cursoValidator from '@/validator/curso.validator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { mask } from 'remask';

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}, setValue } = useForm()
  
  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.push(dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Seja nosso Colaborador!'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text" 
          {...register('nome', cursoValidator.nome)}
           isInvalid={errors.nome}   />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control 
           mask='999.999.999.99'
           maxLength={14}
           {...register('cpf', cursoValidator.cpf)}
           onChange={handleChange}
           isInvalid={errors.cpf}
           type="text"  />
          {
             errors.cpf &&
            <small className='mt-1 '>{errors.cpf.message}</small>
          }
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control  
           maxLength={50}
          type="text"
          {...register('email', cursoValidator.email)}
          isInvalid={errors.email} />
          {
             errors.email &&
            <small className='mt-1 '>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control 
           mask='(99)99999-9999'
          maxLength={15}
          type="text"
          {...register('telefone', cursoValidator.telefone)}
          onChange={handleChange}
          isInvalid={errors.telefone} />
          {
             errors.telefone &&
            <small className='mt-1 '>{errors.telefone.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP:</Form.Label>
          <Form.Control
          mask='99.999.999'
          maxLength={10}
          type="text"
          {...register('cep', cursoValidator.cep)}
          onChange={handleChange}
          isInvalid={errors.cep}   />
          {
             errors.cep &&
            <small className='mt-1 '>{errors.cep.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control
           maxLength={20}
           type="text"
           {...register('logradouro', cursoValidator.logradouro)}
           isInvalid={errors.logradouro}  />
          {
             errors.logradouro &&
            <small className='mt-1 '>{errors.logradouro.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control 
           mask='99999'
           maxLength={5}
           type="text"
           {...register('complemento', cursoValidator.complemento)}
           isInvalid={errors.complemento}  />
          {
             errors.complemento &&
            <small className='mt-1 '>{errors.complemento.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número:</Form.Label>
          <Form.Control
           mask='9999'
           maxLength={4}
           type="text"
           {...register('numero', cursoValidator.numero)}
           isInvalid={errors.numero}  />
          {
             errors.numero &&
            <small className='mt-1 '>{errors.numero.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control 
          maxLength={20}
          type="text"
          {...register('bairro', cursoValidator.bairro)}
           isInvalid={errors.bairro}  />
          {
             errors.bairro &&
            <small className='mt-1 '>{errors.bairro.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/professores'>
          <AiFillStepBackward className='me-2'/>
          Voltar
          </Link>
          <Button variant='primary'  className='ms-2' onClick={handleSubmit(salvar)}>
          <AiFillStepForward className='me-2'/>
          Salvar
          </Button>
        </div>

      </Form>
    </Pagina>
  )
}

export default form