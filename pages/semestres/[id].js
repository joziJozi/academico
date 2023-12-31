import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import cursoValidator from '@/validator/curso.validator';
import { mask } from 'remask';

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit,formState:{errors}, setValue } = useForm()



  useEffect(() => {
    if (query.id) {
      const semestres = JSON.parse(window.localStorage.getItem('semestres'))
      const semestre = semestres[query.id]
      for(let atributo in semestre){
        setValue(atributo, semestre[atributo])
      }

      setValue('nome', semestre.nome)
      setValue('data inicio', semestre.datainicio)
      setValue('data fim', semestre.datafim)
    }
  }, [query.id])
  console.log(query.id);

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.splice(query.id, 1, dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }
  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Plano-Musculação'>
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
        <Form.Group className="mb-3" controlId="datainicio">
          <Form.Label>Data inicio:</Form.Label>
          <Form.Control 
          mask='99/99/9999'
          maxLength={10}
          type="text" 
          {...register('datainicio', cursoValidator.datainicio)}
          onChange={handleChange}
          isInvalid={errors.datainicio}  />
          {
             errors.datainicio &&
            <small className='mt-1 '>{errors.datainicio.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="datafim">
          <Form.Label>Data fim:</Form.Label>
          <Form.Control mask='99/99/9999'
          type="text"
          {...register('datafim', cursoValidator.datafim)}
          onChange={handleChange}
          isInvalid={errors.datafim}  />
          {
             errors.datafim &&
            <small className='mt-1 '>{errors.datafim.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="valor">
          <Form.Label>Valor:</Form.Label>
          <Form.Control mask='R$99999'
          maxLength={10}
          type="text"
          {...register('valor', cursoValidator.valor)}
          isInvalid={errors.valor}  />
          {
             errors.valor &&
            <small className='mt-1 '>{errors.valor.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/semestres'>
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