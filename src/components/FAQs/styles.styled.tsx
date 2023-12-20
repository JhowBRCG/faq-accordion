import styled from "styled-components";

export const FAQs = styled.section`
  max-width: 600px;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 30px #00000032;

  h1 {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 5rem;
  }
`;

export const AccordionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li + li {
    border-top: 2px solid ${({ theme }) => theme.colors.light_pink};
  }
`;
