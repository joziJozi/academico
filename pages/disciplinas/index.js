import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
import axios from 'axios';
const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  
  }, [])

  function getAll(){
    axios.get('/api/disciplinas').then( resultado => {
      setDisciplinas(resultado.data);
     })
  }

  function excluir (id){
    if (confirm('Deseja realmente excluir o registro?'))
    axios.delete('/api/disciplinas/' + id)
    getAll()
  }

  
  return (
    <Pagina titulo='Disciplinas'>

      <Button href='/disciplinas/form' variant="dark mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>

          {disciplinas.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/disciplinas/' + item.id}>
                <Button variant='light' className='ms-2'><AiFillEdit  className="primary" /></Button>
                </Link>
                <Button variant='light' className='ms-2' ><AiFillDelete onClick={() => excluir(item.id)} className="text-danger" /></Button></td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
  )
}

export default index