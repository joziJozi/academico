import Pagina from '@/components/Pagina'
import cursoValidator from '@/validator/curso.validator';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}, setValue } = useForm()

  function salvar(dados) {

  axios.post('/api/disciplinas', dados)
  push('/disciplinas')

   console.log(dados);
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Disciplinas'>
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
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso:</Form.Label>
          <Form.Control 
          maxLength={50}
          type="text"
          {...register('curso', cursoValidator.curso)}
          isInvalid={errors.curso}  />
          {
             errors.curso &&
            <small className='mt-1 '>{errors.curso.message}</small>
          }
        </Form.Group>
        

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/cursos'>
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