import { Link } from 'react-router-dom'
import CadastroVeiculo from '../components/CadastroVeiculo'
import RelatorioQA from '../components/RelatorioQA'
import ExploradorCasos from '../components/ExploradorCasos'
import GestaoDefeitos from '../components/GestaoDefeitos'
import HistoricoExecucoes from '../components/HistoricoExecucoes'
import AutomacaoTestes from '../components/AutomacaoTestes'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MenuLaboratorio from '../components/MenuLaboratorio'
import VoltarAoTopo from '../components/VoltarAoTopo'

function TestesFuncionais() {

  const location = useLocation()

  useEffect(() => {
    const destino = (location.state as { destino?: string } | null)?.destino

    if (!destino) return

    document.getElementById(destino)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [location.state])

  return (

    <section className="laboratorio">
      <p className="laboratorio-subtitulo">
        QA LAB / PROJETO 01
      </p>

      <h1>Testes Funcionais</h1>

      <p>
        Laboratório prático de Quality Assurance com
        validação de requisitos, elaboração de casos de teste,
        execução manual, análise de resultados e automação.
      </p>

      <p>
        Explore o formulário de Cadastro de Veículos,
        consulte os casos documentados e acompanhe
        os resultados das validações realizadas.
      </p>

      <MenuLaboratorio />
      <CadastroVeiculo />
      <RelatorioQA />
      <ExploradorCasos />
      <GestaoDefeitos />
      <HistoricoExecucoes />
      <AutomacaoTestes />
      <VoltarAoTopo />

      <Link to="/">← Voltar para Home</Link>
    </section>
  )
}

export default TestesFuncionais