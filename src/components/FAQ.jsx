import "./faq.css";
import { useState, useEffect } from "react";

const FAQ_DATA = [
  {
    pergunta: "São aceitos convênios médicos?",
    resposta: "Não fazemos atendimentos de convênios, mas há emissão de nota fiscal para que você avalie a possibilidade de reembolso pelo seu convênio."
  },
  {
    pergunta: "Há retorno gratuito da consulta?",
    resposta: "Não há retorno gratuito."
  },
  {
    pergunta: "Quanto tempo duram as consultas/atendimentos?",
    resposta: "As consultas psiquiátricas têm duração média de 60 minutos, podendo ter duração um pouco maior no primeiro atendimento para coleta de informações mais completas. As sessões de terapia têm duração aproximada de 50 minutos."
  },
  {
    pergunta: "Com que frequência são realizados os atendimentos?",
    resposta: "A frequência dos atendimentos vai depender do tipo de abordagem (consulta clínica psiquiátrica ou atendimento de psicoterapia), e da gravidade e estabilidade do quadro. Geralmente as sessões de psicoterapia têm frequência semanal (1-2x/semana). Já as consultas clínicas psiquiátricas podem variar entre consultas semanais a trimestrais, sendo que, conforme o paciente estabiliza, a tendência é espaçar as consultas clínicas dentro de um limite de segurança para reavaliação."
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta: "Os pagamentos podem ser realizados via PIX ou transferência bancária."
  },
  {
    pergunta: "Preciso ir buscar a receita no consultório após a consulta online?",
    resposta: "Depende. As receitas brancas de controle especial que são utilizadas para a grande maioria dos medicamentos psiquiátricos podem ser enviadas por via digital. Se houver indicação de prescrição de medicamentos que precisem de receituário especial azul ou amarelo, há necessidade de buscar no consultório ou combinarmos de enviar por Correios."
  },
  {
    pergunta: "Como faço para agendar?",
    resposta: "Entre em contato pelo WhatsApp (11) 99971-6789 ou pelo email cmpcoelhodesouza@gmail.com para agendar seu atendimento. Nossa equipe responderá durante o horário comercial para verificar os melhores horários disponíveis e confirmar seu agendamento."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Injeta JSON-LD do FAQ para SEO de IA
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.resposta
        }
      }))
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <h2 className="faq-titulo">
          <span className="titulo-fino">Perguntas</span>
          <span className="titulo-forte"> frequentes</span>
        </h2>

        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-pergunta"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-resposta-${index}`}
              id={`faq-pergunta-${index}`}
            >
              {item.pergunta}
              <span className="faq-icon" aria-hidden="true">›</span>
            </button>

            <div
              className="faq-resposta"
              id={`faq-resposta-${index}`}
              role="region"
              aria-labelledby={`faq-pergunta-${index}`}
            >
              <p>{item.resposta}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;
