import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('cursos', JSON.stringify(itens))
      setCursos(itens)
    }
  }
  return (
    <Pagina titulo='Avaliação'>

      <Button href='/cursos/form' variant="dark mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>


          {cursos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/cursos/' + i}>
                <Button variant='light' className='ms-2'><AiFillEdit  className="primary" /></Button>
                </Link>
                <Button variant='light' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
  )
}

export default index