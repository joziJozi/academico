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
      const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
      const disciplina = disciplinas[query.id]
      for(let atributo in disciplina){
        setValue(atributo, disciplina[atributo])
      }

      setValue('nome', disciplina.nome)
      setValue('curso', disciplina.curso)
    }
  }, [query.id])
  console.log(query.id);

  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.splice(query.id, 1, dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push('/disciplinas')
  }
  return (
    <Pagina titulo='Disciplinas'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso:</Form.Label>
          <Form.Control type="text" {...register('curso')} />
        </Form.Group>
        
        <div className='text-center'>
          <Link className=' btn btn-danger' href='/disciplinas'>
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