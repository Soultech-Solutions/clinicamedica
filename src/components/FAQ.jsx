import "./faq.css";
import { useState, useEffect } from "react";

const FAQ_DATA = [
  {
    pergunta: "São aceitos convênios médicos?",
    resposta: "Atualmente o atendimento é realizado de forma particular. Entre em contato pelo WhatsApp (11) 99971-6789 ou e-mail cmpcoelhodesouza@gmail.com para informações sobre valores e formas de pagamento."
  },
  {
    pergunta: "Há retorno gratuito da consulta?",
    resposta: "O retorno é considerado uma nova consulta e possui valor. A política de retornos pode variar conforme o caso – entre em contato para esclarecer."
  },
  {
    pergunta: "Quanto tempo duram as consultas/atendimentos?",
    resposta: "As consultas psiquiátricas geralmente duram em torno de 50 minutos. As sessões de psicoterapia também têm duração aproximada de 50 minutos."
  },
  {
    pergunta: "Com que frequência são realizados os atendimentos?",
    resposta: "A frequência dos atendimentos depende do tipo de abordagem e da gravidade do quadro. Geralmente as sessões de psicoterapia são semanais (1–2x por semana). Já as consultas clínicas psiquiátricas podem variar de semanais a trimestrais, conforme o paciente estabiliza."
  },
  {
    pergunta: "Quais as formas de pagamento?",
    resposta: "Entre em contato pelo WhatsApp (11) 99971-6789 ou e-mail cmpcoelhodesouza@gmail.com para informações atualizadas sobre formas de pagamento aceitas."
  },
  {
    pergunta: "Preciso ir buscar a receita no consultório após a consulta online?",
    resposta: "Não. As receitas das consultas online são enviadas digitalmente ao paciente por e-mail ou outro meio combinado, sem necessidade de retirar no consultório."
  },
  {
    pergunta: "Como faço para agendar?",
    resposta: "Entre em contato pelo WhatsApp (11) 99971-6789 ou pelo e-mail cmpcoelhodesouza@gmail.com para agendar sua consulta. A clínica está localizada na Rua Dr. Amâncio de Carvalho, 182, conjunto 305 - Vila Mariana, São Paulo-SP, e também oferece atendimento via telemedicina."
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
