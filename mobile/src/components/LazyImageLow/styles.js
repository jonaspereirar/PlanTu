import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  position: absolute;
  flex-direction: row;
  margin-top: 230px;
  margin-left: 15px;
  height: 115px;
  aspect-ratio: ${(props) => props.ratio};
`;

export const Original = styled.Image`
  flex-direction: row;
  height: 115px;
  aspect-ratio: ${(props) => props.ratio};
`;