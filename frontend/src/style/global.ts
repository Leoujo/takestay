import styled from "styled-components";
interface ContainerProps {
  padding?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  margin?: string;
  bgColor?: string;
  isUnderlined?: boolean;
}

interface CenterContainerProps {
  height?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.margin || "10px 0px"};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  border-bottom: ${(props) => (props.isUnderlined ? "2px solid #C8C8C8" : null)};
`;

export const CenterContainer = styled.div<CenterContainerProps>`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "space-around"};
  align-items: ${(props) => props.alignItems || "center"};
`;
