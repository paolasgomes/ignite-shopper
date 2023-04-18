import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 41rem;

  h1 {
    font-size: ${(props) => props.theme.fontSize.LG};
    color: ${(props) => props.theme.colors["gray-300"]};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.MD};
    color: ${(props) => props.theme.colors["gray-300"]};
    max-width: 35rem;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.4;
  }

  a {
    display: block;
    margin-top: 5rem;
    font-size: ${(props) => props.theme.fontSize.XXS};
    color: ${(props) => props.theme.colors["green-500"]};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.colors["gray-300"]};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 8.125rem;
  height: 9rem;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  padding: 0.25rem;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img: {
    object-fit: cover;
  }
`;
