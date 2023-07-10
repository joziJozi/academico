import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/academico">
        <img src={'https://www.sescdf.com.br/SiteAssets/marca-sesc-df1/Nova_marca_Sesc_horizontal_CMYK_negativa-01.png'} alt="image.logo.png" style={{ height: '30px', width: 'auto', marginTop: '10px', marginBottom: '10px' }} />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cursos">Avaliação</Nav.Link>
            <Nav.Link href="/alunos">Matricule-se</Nav.Link>
            <Nav.Link href="/professores">Seja nosso Colaborador</Nav.Link>
            <Nav.Link href="/sobrenos">Sobre nós</Nav.Link>
            <Nav.Link href="/semestres">Plano-Musculação</Nav.Link>
            <Nav.Link href="/empresa">Empresa</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho