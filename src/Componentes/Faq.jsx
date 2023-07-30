import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "¿Cuál es tu experiencia como diseñadora freelance?",
      answer: "Llevo más de 5 años trabajando como diseñador freelance. Durante este tiempo, he tenido la oportunidad de trabajar con diversos clientes y proyectos, lo que me ha permitido desarrollar habilidades en diseño gráfico, diseño web y branding.",
    },
    {
      id: 2,
      question: "¿Cómo es el proceso de trabajo contigo?",
      answer: "Mi proceso de trabajo consta de varias etapas: en primer lugar, me reúno con el cliente para comprender sus necesidades y objetivos. Luego, desarrollo propuestas y conceptos de diseño que presento para su revisión. Una vez aprobado el diseño final, me encargo de la implementación y entrega del proyecto.",
    },
    {
        id: 3,
        question: "¿Qué tipos de proyectos realizaste en el pasado?",
        answer: "Trabajé en una amplia variedad de proyectos, incluyendo diseño de logotipos, material publicitario y más. También realicé proyectos de branding y diseño de identidad corporativa para empresas de diferentes industrias.",
    },
    {
        id: 4,
        question: "¿Cuál es tu tarifa por hora o por proyecto?",
        answer: "Mi tarifa varía dependiendo del tipo de proyecto y su complejidad. Normalmente, trabajo con una tarifa por proyecto o por planes que incluye todas las etapas del proceso. Para obtener un presupuesto exacto, es mejor que me contactes y me cuentes más sobre tu proyecto específico.",
    },

    
  ];

  const [activeItemId, setActiveItemId] = useState(null);

  const handleQuestionClick = (itemId) => {
    if (itemId === activeItemId) {
      setActiveItemId(null);
    } else {
      setActiveItemId(itemId);
    }
  };

  return (
    <div className="faq-section">
      <h1>Preguntas Frecuentes</h1>
      {faqData.map((item) => (
        <div
          key={item.id}
          className={`faq-item ${item.id === activeItemId ? "active" : ""}`}
        >
          <div
            className="faq-question"
            onClick={() => handleQuestionClick(item.id)}
          >
            {item.question}
          </div>
          {item.id === activeItemId && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
