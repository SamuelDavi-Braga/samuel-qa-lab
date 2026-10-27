import { Link } from 'react-router'
import CadastroVeiculo from '../components/CadastroVeiculo'
import RelatorioQA from '../components/RelatorioQA'
import ExploradorCasos from '../components/ExploradorCasos'
import GestaoDefeitos from '../components/GestaoDefeitos'
import HistoricoExecucoes from '../components/HistoricoExecucoes'
import AutomacaoTestes from '../components/AutomacaoTestes'

function TestesFuncionais() {
  return (
    
    <section className="laboratorio">
      <p className="laboratorio-subtitulo">
        QA LAB / PROJETO 01
      </p>

      <h1>Testes Funcionais</h1>

      <p>
        Aqui vou documentar meus projetos de
        testes funcionais, incluindo cenários,
        execuções, evidências e resultados.
      </p>

      <p>Projeto em desenvolvimento.</p>

      <CadastroVeiculo />
      <RelatorioQA />
      <ExploradorCasos />
      <GestaoDefeitos />
      <HistoricoExecucoes />
      <AutomacaoTestes />

      <Link to="/">← Voltar para Home</Link>
    </section>
  )
}

export default TestesFuncionais