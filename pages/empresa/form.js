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
    const empresas = JSON.parse(window.localStorage.getItem('empresas')) || []
    empresas.push(dados)
    window.localStorage.setItem('empresas', JSON.stringify(empresas))
    push('/empresa')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Empresa'>
      <Form>
      <Form.Group className="mb-3" controlId="razaosocial">
          <Form.Label>Razão Social:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text"
          {...register('razaosocial', cursoValidator.razaosocial)}
          isInvalid={errors.razaosocial}  />
          {
             errors.razaosocial &&
            <small className='mt-1'>{errors.razaosocial.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>CNPJ:</Form.Label>
          <Form.Control
          mask='99.999.999/9999-99'
          maxLength={18}
          type="text"
          {...register('cnpj', cursoValidator.cnpj)}
          onChange={handleChange}
          isInvalid={errors.cnpj} />
          {
             errors.cnpj &&
            <small className='mt-1'>{errors.cnpj.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="endereco">
          <Form.Label>Endereço:</Form.Label>
          <Form.Control 
          maxLength={30}
          type="text"
          {...register('endereco', cursoValidator.endereco)}
          isInvalid={errors.endereco}  />
          {
             errors.endereco &&
            <small className='mt-1'>{errors.endereco.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control 
          mask='(99)99999-9999'
          maxLength={14}
          type="text"
          {...register('telefone', cursoValidator.telefone)}
          onChange={handleChange}
          isInvalid={errors.telefone}  />
          {
             errors.telefone &&
            <small className='mt-1'>{errors.telefone.message}</small>
          }
        </Form.Group>


        <div className='text-center'>
          <Link className=' btn btn-danger' href='/empresa'>
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