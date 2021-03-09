import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: #1567E2;

  dd { width: 35%; margin: 0 auto; padding-top: 20px; margin-bottom: 20px; color: #FFF;
    display: flex; flex-direction: column; justify-content: center; align-items: center;

    p { font-size: .8em; margin-top: 25px; }

    svg { margin-right: 20px; }
  }
`;

export const Content = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 20px auto;
`;

export const BoxDeficiencias = styled.section`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;

  p { text-transform: uppercase; color: #FFF; font-size: 1.5em; }
  span { text-transform: uppercase; color: #FFF; font-weight: bold; font-size: 2.3em; letter-spacing: -2px; }


  form {
    button {
      max-width: 300px;
      width: 100%;
      height: 45px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      display: block;
      cursor: pointer;
      border: 0;
      border-radius: 50px;
      background: #FFF;
      color: #1567E2;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .dep-federal { background: #0f56bf; padding: 20px; margin-top: 20px; text-align: center;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .dep-federal p { text-transform: unset; }

  article {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    transition: all .3s ease-in-out;

    &:hover{
      background: #0f56bf;
      padding: 20px;
      border-radius: 7px;
    }

    .titulo-deficiencias {
      background: transparent;
      width: 30%;
      line-height: 40px;
      display: block;
    }

    div {
      width: 151px;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      background: #FFF;
      border-radius: 7px;
      margin-top: 20px;
      margin-left: 20px;

      label { color: #FFF; font-weight: bold; }
      input { width: 90%; height: 30px; color: #1567E2; border-radius: 3px; padding: 0 2px;
        ::-webkit-input-placeholder { color: #BABABA; }
       }
    }


  }
`;

