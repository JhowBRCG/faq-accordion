import { FC } from "react";
import minusIcon from "../../assets/imgs/icon-minus.svg";
import plusIcon from "../../assets/imgs/icon-plus.svg";
import * as S from "./styles.styled";

interface AccordionProps {
  id: number;
  title: string;
  text: string;
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
}

export const Accordion: FC<AccordionProps> = ({
  title,
  text,
  isOpen,
  id,
  toggleAccordion,
}) => {
  return (
    <S.Accordion $isOpen={isOpen}>
      <h2 onClick={() => toggleAccordion(id)}>
        {title}
        <img src={isOpen ? minusIcon : plusIcon} />
      </h2>
      <p>{text}</p>
    </S.Accordion>
  );
};
