import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { MdOutlineSportsGymnastics } from "react-icons/md"
import { MdCastForEducation } from "react-icons/md"
import { GiRemedy } from "react-icons/gi"
import { RiStethoscopeLine } from "react-icons/ri"
import { MdOutlineLocalHospital } from "react-icons/md"
import { ImLab } from "react-icons/im"
import Link from 'next/link'
import { Chart } from "react-google-charts";

const index = () => {

  const data = [
    ["Não praticam", "Praticam"],
    ["Não praticam", 62, 1]
    ["Praticam", 37, 9]
  ];

  const options = {
    title: "Porcentagem dos brasileiros que praticaram esportes",
    chartArea: { width: "50%" },
    hAxis: {
      title: "porcentagem",
      minValue: 0,
    },
    vAxis: {
      title: "porcentagem",
    },
  };

  function App() {
    return (
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    );
  }



  return (



    <Pagina titulo='Sesc'>
      <Alert variant="primary">
      <Alert.Heading>Sesc</Alert.Heading>
      <p>
      Com a missão de contribuir para o bem-estar e a melhoria da qualidade de vida dos empregados
        do setor de Comércio de Bens, Serviços e Turismo, o Serviço Social do Comércio
        – Sesc promove atendimento nas áreas de educação, saúde, esporte, alimentação, cultura,
        ação social, turismo e lazer. 
      </p>
      <hr />
      <p className="mb-0">
      Criado em 1946, o Sesc é uma instituição privada,
        mantida por contribuição social de caráter compulsório,
        incidente sobre a folha de pagamento de empresas do setor.
        Hoje, está presente em diversas cidades, grandes e pequenas,
        de Norte a Sul do Brasil. São cerca de 600 unidades fixas e mais 150 unidades móve​is
        prestando anualmente atendimentos com mais de 5 milhões de beneficiários diretos,
        sempre atendendo os segmentos sociais mais vulneráveis da sociedade.
      </p>
    </Alert>
      

      <div className='text-center'>

        <img src='https://pbs.twimg.com/media/E2gR6soWQAE122-.jpg' alt="Descrição da imagem" width="50%" height="center" className='text-align: right' ></img>
      </div><br></br>


      <h1 className='text-center bg-primary text-white py-3 mb-3'>Convênios do Sesc-DF</h1>
      <Row>
        <Col>
          <Card className='border-dark'><br></br>
            <Container>
              <Link href={"https:sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Academias"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <MdOutlineSportsGymnastics className='me-2'></MdOutlineSportsGymnastics>
                  Acadêmia
                </Button>
              </Link><br></br>


              <Link href={"https:sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Educa%C3%A7%C3%A3o"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <MdCastForEducation className='me-2'></MdCastForEducation>
                  Educação
                </Button>
              </Link><br></br>

              <Link href={"https://sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Farm%C3%A1cias"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <GiRemedy className='me-2'></GiRemedy>
                  Farmácia
                </Button>
              </Link><br></br>
            </Container>
          </Card>
        </Col>

        <Col>
          <Card className='border-dark'><br></br>
            <Container>
              <Link href={"https:sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Hospitais"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <RiStethoscopeLine className='me-2'></RiStethoscopeLine>
                  Hospital
                </Button>
              </Link><br></br>

              <Link href={"https:sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Sa%C3%BAde"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <MdOutlineLocalHospital className='me-2'></MdOutlineLocalHospital>
                  Saúde
                </Button>
              </Link><br></br>

              <Link href={"https:sescdf.com.br/Paginas/Sa%C3%BAde/CONV%C3%8ANIO-DE-DESCONTOS-E-BENEF%C3%8DCIOS.aspx?Servico=Laborat%C3%B3rios"}>
                <Button variant="outline-primary"
                  className='d-flex align-items-center'>
                  <ImLab className='me-2'></ImLab>
                  Laboratórios
                </Button>
              </Link><br></br>
            </Container>
          </Card>
        </Col>
      </Row><br></br>


      <h1 className='text-center bg-primary text-white py-3 mb-3'>Porcentagem dos brasileiros que praticaram esportes</h1>

      <Chart
        chartType="PieChart"
        data={[["City", "2010 Population", "2000 Population"],
        ["Não Praticam", 62, 1],
        ["Praticam", 37, 9],]}
        width="100%"
        height="400px"
        legendToggle
      />

    </Pagina>
  )
}

export default index