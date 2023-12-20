import styled from "styled-components";

type AccordionProps = {
  $isOpen: boolean;
};

export const Accordion = styled.li<AccordionProps>`
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    padding-block: 2rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.shock_pink};
    }
  }

  p {
    max-height: ${({ $isOpen }) => ($isOpen ? "400px" : "0px")};
    overflow: hidden;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.grayish_purple};
  }

  h2,
  p {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
