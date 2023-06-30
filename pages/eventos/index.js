import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
const index = () => {

  const [eventos, Seteventos] = useState([])

  useEffect(() => {
    Seteventos(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('eventos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('eventos', JSON.stringify(itens))
      Seteventos(itens)
    }
  }
  return (
    <Pagina titulo='Eventos'>

      <Button href='/eventos/form' variant="dark mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>Data inicio</th>
            <th>Data fim</th>
            <th>Valor</th>
            <th>Tipo de Evento</th>
          </tr>
        </thead>
        <tbody>


          {eventos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/eventos/' + i}>
                <Button variant='light' className='ms-2'><AiFillEdit  className="primary" /></Button>
                </Link>
                <Button variant='light' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td>{item.nome}</td>
              <td>{item.datainicio}</td>
              <td>{item.datafim}</td>
              <td>{item.valor}</td>
              <td>{item.tipodeevento}</td>
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
  )
}

export default index