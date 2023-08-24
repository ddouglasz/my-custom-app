import  { useState } from "react";

interface FaqItemProps {
  number: number;
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        className="flex flex-row"
        onClick={toggleAnswer}
      >
        <span id="question" className="text-black bg-white">{question}</span>
        <span id="dropdown-btn" className={`text-black bg-white ${isOpen ? "rotate-180" : ""}`}>
          <svg
            className="w-4 h-4 transform transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div className={`bg-gray-900 text-white p-4 w-96 ${isOpen ? "" : "hidden"}`}>
        <p>{answer}</p>
      </div>
    </li>
  );
}

function FaqSection() {
  const faqItems: FaqItemProps[] = [
    {
      number: 1, 
      question: "What are the benefits of solar energy?",
      answer:
        "Solar energy has several benefits, including being environmentally friendly, reducing energy bills, requiring low maintenance, and providing energy independence.",
    },
    {
        number:2,
        question: "Are solar panels environmentally friendly?",
        answer:
          "Yes, solar panels are environmentally friendly. They produce clean, renewable energy and reduce greenhouse gas emissions. Solar energy helps combat climate change and reduces the reliance on fossil fuels.",
      },
      {
        number:3,
        question: "How do solar panels work?",
        answer:
          "Solar panels work by converting sunlight into electricity. They contain photovoltaic cells that absorb sunlight and generate direct current (DC) electricity, which is then converted into alternating current (AC) electricity for use in homes and businesses.",
      },
      {
        number: 4,
        question: "What is net metering?",
        answer:
          "Net metering is a billing arrangement that allows solar panel owners to receive credit for excess electricity they generate and feed back into the grid. This credit can offset their electricity bills when they consume energy from the grid.",
      },
      {
        number: 5,
        question: "Do I need a battery with my solar panels?",
        answer:
          "While it's not required, adding a battery to your solar panel system can store excess energy for use at night or during power outages. Batteries provide energy independence and can maximize the benefits of your solar installation.",
      },
  ];

  return (
    <div className="max-w-3xl mx-auto flex flex-col pl-8 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Getting Started (FAQ)</h2>
      <ul className="space-y-4">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            number={item.number}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </ul>
    </div>
  );
}

export default FaqSection;
