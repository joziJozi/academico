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
    const sobre = JSON.parse(window.localStorage.getItem('sobre')) || []
    sobre.push(dados)
    window.localStorage.setItem('sobre', JSON.stringify(sobre))
    push('/sobrenos')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Sobre nós'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text"
          {...register('nome', cursoValidator.nome)}
          isInvalid={errors.nome}  />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control mask='99999999999'
          maxLength={11}
          type="text" 
          {...register('capacidade', cursoValidator.capacidade)}
          isInvalid={errors.capacidade}  />
          {
             errors.capacidade &&
            <small className='mt-1 '>{errors.capacidade.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control 
          maxLength={50}
          type="text"
          {...register('tipo', cursoValidator.tipo)}
          isInvalid={errors.tipo}  />
          {
             errors.tipo &&
            <small className='mt-1 '>{errors.tipo.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/sobre'>
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