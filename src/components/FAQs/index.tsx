import { FC } from "react";
import { Accordion } from "../Accordion";
import { useState } from "react";
import { AccordionData } from "../../data";
import star from "../../assets/imgs/icon-star.svg";
import * as S from "./styles.styled";

interface AccordionProps {
  id: number;
  title: string;
  text: string;
  isOpen: boolean;
}

export const FAQs: FC = () => {
  const [accordions, setAccordions] = useState<AccordionProps[]>(AccordionData);

  const toggleAccordion = (id: number) => {
    setAccordions((currentAccordions) => {
      return currentAccordions.map((accordion) => {
        return accordion.id === id
          ? { ...accordion, isOpen: !accordion.isOpen }
          : accordion;
      });
    });
  };

  return (
    <S.FAQs>
      <h1>
        <img src={star} alt="star icon" />
        FAQs
      </h1>
      <S.AccordionList>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            id={accordion.id}
            title={accordion.title}
            text={accordion.text}
            isOpen={accordion.isOpen}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </S.AccordionList>
    </S.FAQs>
  );
};
