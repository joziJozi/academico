import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import cursoValidator from '@/validator/curso.validator';

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, formState:{errors},  setValue } = useForm()



  useEffect(() => {
    if (query.id) {
      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[query.id]
      for(let atributo in curso){
        setValue(atributo, curso[atributo])
      }

      setValue('nome', curso.nome)
      setValue('duracao', curso.duracao)
      setValue('modalidade', curso.modalidade)
    }
  }, [query.id])
  console.log(query.id);

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }
  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <Pagina titulo='Avaliação'>
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
            <small className='mt-1'>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Data:</Form.Label>
          <Form.Control
          mask='99/99/9999'
          maxLength={10}
          type="text"
          {...register('duracao', cursoValidator.duracao)}
          onChange={handleChange}
          isInvalid={errors.duracao} />
          {
             errors.duracao &&
            <small className='mt-1'>{errors.duracao.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade:</Form.Label>
          <Form.Control 
          maxLength={15}
          type="text"
          {...register('modalidade', cursoValidator.modalidade)}
          isInvalid={errors.modalidade}  />
          {
             errors.modalidade &&
            <small className='mt-1'>{errors.modalidade.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/cursos'>
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