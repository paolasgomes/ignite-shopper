import styled from "styled-components";

export const Content = styled.main``;

export const Carousel = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
  min-height: 41rem;
`;

export const Product = styled.article`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;

  & > img {
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: space-between;

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    & > p {
      font-size: ${(props) => props.theme.fontSize.XS};
      color: ${(props) => props.theme.colors["gray-100"]};
    }

    & > span {
      font-size: ${(props) => props.theme.fontSize.MD};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors["green-300"]};
    }
  }

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
