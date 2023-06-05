import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    setDisciplinas(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('disciplinas', JSON.stringify(itens))
      setDisciplinas(itens)
    }
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
            <tr key={i}>
              <td>
                <Link href={'/disciplinas/' + i}>
                <Button variant='light' className='ms-2'><AiFillEdit  className="primary" /></Button>
                </Link>
                <Button variant='light' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}

        </tbody>

      </Table>
    </Pagina>
  )
}

export default index