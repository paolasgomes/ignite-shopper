import styled from "styled-components";

export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;

  max-width: 73.75rem;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 36rem;
  height: 41rem;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    object-fit: cover;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: ${(props) => props.theme.fontSize.LG};
    color: ${(props) => props.theme.colors["green-300"]};
  }

  & > span {
    margin-top: 1rem;
    display: block;
    font-size: ${(props) => props.theme.fontSize.LG};
    color: ${(props) => props.theme.colors["green-300"]};
  }

  & > p {
    margin-top: 2.5rem;
    font-size: ${(props) => props.theme.fontSize.XS};
    line-height: 1.6;
    color: ${(props) => props.theme.colors["green-300"]};
  }

  & > button {
    margin-top: auto;
    background-color: ${(props) => props.theme.colors["green-500"]};
    border: 0;
    color: ${(props) => props.theme.colors["white"]};
    border-radius: 8;
    padding: 1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.XS};

    & > :hover {
      background-color: ${(props) => props.theme.colors["green-300"]};
    }
  }
`;
