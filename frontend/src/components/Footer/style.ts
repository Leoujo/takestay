import styled from "styled-components";

type SectionProps = {
  isCentered?: boolean;
};

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: ${(props) => (props.isCentered ? "center" : "space-between")};
  padding: 0.5em;
`;
