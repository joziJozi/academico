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
      const sobre = JSON.parse(window.localStorage.getItem('sobre'))
      const sobrenos = sobre[query.id]
      for(let atributo in sobrenos){
        setValue(atributo, sobrenos[atributo])
      }

      setValue('nome', sobrenos.nome)
      setValue('capacidade', sobrenos.capacidade)
      setValue('tipo', sobrenos.tipo)
    }
  }, [query.id])
  console.log(query.id);

  function salvar(dados) {
    const sobre = JSON.parse(window.localStorage.getItem('sobre')) || []
    sobre.splice(query.id, 1, dados)
    window.localStorage.setItem('sobre', JSON.stringify(sobre))
    push('/sobre')
  }
  return (
    <Pagina titulo='Sobre nós'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control type="text" {...register('capacidade')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control type="text"{...register('tipo')} />
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/sobre'>
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