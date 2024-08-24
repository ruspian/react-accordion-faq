import { useState } from "react";

import AccordionItems from "./AccordionItems";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItems
          key={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default Accordion;
