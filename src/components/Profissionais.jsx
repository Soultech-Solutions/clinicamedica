import prof1 from "../assets/prof1.png";
import prof2 from "../assets/prof2.png";
import "./Profissionais.css";
import planta from "../assets/planta-profissional.png";

function Profissionais() {
  return (
    <section className="profissionais-section" id="especialidades">
      <img src={planta} alt="" className="planta-bg" />

      <div className="container profissionais-container">

        {/* ===================== */}
        {/* NOSSAS ESPECIALIDADES */}
        {/* ===================== */}

        <h2 className="especialidades-titulo">
          <span className="titulo-fino">Nossas </span>
          <span className="titulo-forte">especialidades</span>
        </h2>

        <div className="row g-4 justify-content-center especialidades-grid">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="especialidade-card w-100">
            <h3>Psiquiatria Clínica do Adulto</h3>
            <p>
            Avaliação diagnóstica e tratamento medicamentoso com acompanhamento individualizado. Atendimento baseado em evidências, com escuta qualificada, foco na estabilização clínica e qualidade de vida.
            </p>
            <button>Saiba mais</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="especialidade-card w-100">
            <h3>Psicoterapia Psicanalítica</h3>
            <p>
            Atendimento psicoterapêutico com abordagem psicanalítica voltado à compreensão profunda dos conflitos emocionais, padrões de comportamento e processos inconscientes, para pessoas em busca de autoconhecimento e transformação duradoura.

            </p>
            <button>Saiba mais</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="especialidade-card w-100">
            <h3>Saúde Mental Integrada</h3>
            <p>
              Integração entre acompanhamento psiquiátrico e psicoterapia, respeitando a singularidade de cada paciente e promovendo cuidado contínuo, ético e personalizado.
            </p>
            <button>Saiba mais</button>
            </div>
          </div>

        </div>

        {/* =============================================== */}
        {/* MOTIVOS PARA BUSCAR ATENDIMENTO (REFERÊNCIA)     */}
        {/* =============================================== */}

        <section className="motivos-section">
          <h2 className="motivos-titulo">
            <span className="titulo-fino">Os atendimentos são para quem busca </span>
            <span className="titulo-forte">entendimento e alívio </span>
            <span className="titulo-fino">de algum tipo de sofrimento psíquico, como:</span>
          </h2>

          <ul className="row g-3 g-md-3 motivos-list" aria-label="Motivos para buscar atendimento">
            {[
              "Tristeza e desânimo na maior parte dos dias",
              "Esgotamento/Burnout",
              "Pensamentos obsessivos",
              "Pânico",
              "Insônia",
              "Busca de autoconhecimento",
              "Ansiedade excessiva",
              "Compulsões",
              "Busca de melhor qualidade de vida",
              "Traumas",
              "Déficit de atenção",
              "Entre outros sintomas",
            ].map((item) => (
              <li key={item} className="col-12 col-sm-6 col-lg-4">
                <div className="motivo-bullet">
                  <span className="motivo-dot" aria-hidden="true" />
                  <span className="motivo-text">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ============================ */}
        {/* CONHEÇA NOSSOS PROFISSIONAIS */}
        {/* ============================ */}

        <h2 className="profissionais-titulo">
          <span className="titulo-fino">Conheça nossos </span>
          <span className="titulo-forte">profissionais!</span>
        </h2>

        {/* Profissional 1 */}
        <div className="profissional-card">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-7">
              <div className="profissional-info">
            <h3 className="profissional-nome">
              Rogério Nogueira Coelho de Souza
            </h3>
            <p className="profissional-crm">CRM-SP 40437</p>
            <ul className="profissional-detalhes">
              <li>Médico formado pela Universidade Federal de São Paulo - UNIFESP (1980).</li>
              <li>Psiquiatra pela Comunidade Terapêutica Enfance (1982).</li>
              <li>Médico psiquiatra da Associação Pró-reintegração Social da Criança - Comunidade Terapêutica Enfance (1983 a 1985).</li>
              <li>Formação em Psicanálise no Instituto Sedes Sapientiae (1985 a 1988).</li>
              <li>Médico psiquiatra do Setor de Higiene Mental e Psiquiatria Infantil do Hospital Infantil Menino Jesus da PMSP (1986 a 1992).</li>
              <li>Membro Filiado à Sociedade Brasileira de Psicanálise de São Paulo (desde 1995).</li>
              <li>Graduação em Filosofia pela USP (1997).</li>
              <li>Professor do Centro de Psicanálise de Campinas (1985 a 2005).</li>
              <li>Psicanalista e membro fundador do Instituto Therapon Adolescência, ONG (1998 a 2004).</li>
              <li>Professor do Curso de Psicanálise para Formação de Psicoterapeutas do Departamento de Psiquiatria da UNIFESP (2009 a 2012).</li>
            </ul>
            <p className="profissional-texto-final">
            Atendimentos em Psicoterapia - abordagem Psicanalítica (pacientes a partir de 18 anos). Atendimento presencial e via teleatendimento.
</p>
          </div>
        </div>
            <div className="col-12 col-lg-5">
              <div className="profissional-foto">
                <img src={prof1} alt="Dr. Rogério Nogueira Coelho de Souza" />
              </div>
            </div>
          </div>
        </div>

        {/* Profissional 2 */}
        <div className="profissional-card">
          <div className="row align-items-center g-4 g-lg-5 flex-lg-row-reverse">
            <div className="col-12 col-lg-7">
              <div className="profissional-info">
            <h3 className="profissional-nome">
              Thais Costa Coelho de Souza
            </h3>
            <p className="profissional-crm">CRM-SP 209030 / RQE 124906</p>
            <ul className="profissional-detalhes">
              <li>Médica formada pela Universidade Estadual de Campinas/SP - UNICAMP (2014-2019).</li>
              <li>Psiquiatra pelo Instituto de Psiquiatria do Hospital das Clínicas da Universidade de São Paulo - IPq-HCFMUSP (2021-2024).</li>
              <li>Graduação em Economia pela Universidade de São Paulo - FEA USP (2007-2011).</li>
              <li>Business Program na FH Joanneum University of Applied Sciences - Áustria (2010).</li>
            </ul>

            <p className="profissional-texto-final">
  Atendimentos a pacientes adultos a partir de 18 anos em consultório particular na Vila Mariana-SP ou via telemedicina.
</p>

      <p className="profissional-subtitulo">
      Atendimentos em Psiquiatria Geral Adulto (pacientes a partir de 18 anos). Foco principal na avaliação e tratamento de:
</p>
              <ul className="profissional-detalhes">
              <li>Transtornos ansiosos</li>
              <li>Pânico</li>
              <li>Burnout</li>
              <li>Transtorno Obsessivo-Compulsivo</li>
              <li>Insônia</li>
            </ul>

            <p className="profissional-texto-final">
            Atendimento presencial e via telemedicina.
            </p>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="profissional-foto">
                <img src={prof2} alt="Dra. Thais Costa Coelho de Souza" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Profissionais;