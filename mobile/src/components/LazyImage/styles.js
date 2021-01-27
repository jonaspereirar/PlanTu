import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  flex-direction: row;
  margin-top: 15px;
  margin-left: 36%;
  height: 280px;
  aspect-ratio: ${(props) => props.ratio};
`;

export const Original = styled.Image`
  flex-direction: row;
  height: 280px;
  aspect-ratio: ${(props) => props.ratio};
`;
