import React from "react";
import Accordion from "../components/Accordion";
const items = [
  {
    id: "155ujjk",
    label: "Can i use React on project?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis, non perspiciatis atque unde veniam eligendi ipsa esse accusamus quo?",
  },
  {
    id: "155utvjjk",
    label: "Can i use JavaScript on a project?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis, non perspiciatis atque unde veniam eligendi ipsa esse accusamus quo?",
  },
  {
    id: "155ujwsjk",
    label: "Can i use CSS on project?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis, non perspiciatis atque unde veniam eligendi ipsa esse accusamus quo?",
  },
];

const AccordionPage = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
