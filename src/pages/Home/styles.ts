import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 190px auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  img { width: 450px; height: 450px; margin-top: -80px; }

  span { color: #1567E2; font-size: 1.5em; }
  h1 { color: #1567E2; font-size: 2em; }
  p { color: #5C6167; margin-top: 15px; font-size: .9em; text-align: justify; }

  a { width: 30%; display: block; margin-top: 20px; padding: 10px 20px; border: 1px solid #1567E2; color: #1567E2;
      font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center;
      border-radius: 50px; transition: all .3s ease-in-out;

    &:hover { background: #1567E2; color: #FFF; transition: all .3s ease-in-out; }
  }
`;
