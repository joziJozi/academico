import Pagina from '@/components/Pagina'
import axios from 'axios';
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
      axios.get('/api/disciplinas/' + query.id).then( resultado => {
        const disciplina = resultado.data

        for(let atributo in disciplina){
          setValue(atributo,disciplina[atributo])
        }
       })
    }
  }, [query.id])
  
  function salvar(dados) {
    axios.put('/api/disciplinas' + query.id, dados)
    push('/disciplinas')
  }
  return (
    <Pagina titulo='Disciplinas'>
      <Form>
        <Form.Group className="mb-5" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>
        <Form.Group className="mb-5" controlId="duracao">
          <Form.Label>Curso:</Form.Label>
          <Form.Control type="text" {...register('duracao')} />
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