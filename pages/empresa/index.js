import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
const index = () => {

  const [empresas, setempresas] = useState([])

  useEffect(() => {
    setempresas(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('empresas')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('empresas', JSON.stringify(itens))
      setempresas(itens)
    }
  }
  return (
    <Pagina titulo='Empresa'>

      <Button href='/empresa/form' variant="dark mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Alterar/Excluir</th>
            <th>Razão Social:</th>
            <th>CNPJ:</th>
            <th>Endereço:</th>
            <th>Telefone:</th>
          </tr>
        </thead>
        <tbody>


          {empresas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/empresa/' + i}>
                <Button variant='light' className='ms-2'><AiFillEdit  className="primary" /></Button>
                </Link>
                <Button variant='light' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td>{item.razaosocial}</td>
              <td>{item.cnpj}</td>
              <td>{item.endereco}</td>
              <td>{item.telefone}</td>
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
  )
}

export default index