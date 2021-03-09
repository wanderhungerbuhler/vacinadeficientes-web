import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 20px auto;

  h1 { color: #1567E2; width: 50%; margin: 0 auto; font-size: 1.5em; }

  form {
    width: 780px;
    margin: 50px auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    label { color: #6c6c80; 
      b {font-size: .8em; }
    }
    p { margin-top: 10px; font-size: .8em; color: #6c6c80; }
    span { margin-top: 10px; margin-bottom: 10px; display:block; font-size: .8em; color: #bf5858; }

    a { text-decoration: none; }

    button {
      max-width: 300px;
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 0;
      border-radius: 50px;
      background: #1567E2;
      color: #FFF;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
