import Pagina from '@/components/Pagina'
import cursoValidator from '@/validator/curso.validator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors} } = useForm()

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }
  return (
    <Pagina titulo='Formulário'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', cursoValidator.capacidade)} />
          {
             errors.capacidade &&
            <small className='mt-1 '>{errors.capacidade.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text"{...register('tipo', cursoValidator.tipo)} />
          {
             errors.tipo &&
            <small className='mt-1 '>{errors.tipo.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/salas'>
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