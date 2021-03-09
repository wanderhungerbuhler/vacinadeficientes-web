import React, { useCallback, useEffect, useRef, useState, FormEvent } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Input from '../../components/Input';
import { Container, BoxDeficiencias } from './styles';
import { FiAlertCircle } from 'react-icons/fi';

interface Defis {
  id_instituicao: string;
  id: string;
  tipos_deficiencias: string;
  acima_de_60: string;
  de_18_a_60: string;
  de_0_a_18: string;
}

interface dados_deficientes {
  id_instituicao: string;
  id_deficiencias: string;
  acima_de_60: string;
  de_18_a_60: string;
  de_0_a_18: string;
}

const Deficientes: React.FC<any> = ({ match }) => {
  const history = useHistory();
  const [defis, setDefis] = useState<Defis[]>([]);

  useEffect(() => {

    async function fetchMyAPI() {
      let response = await api.get('/deficiencias');

      const temp: Defis[] = [];

      response.data.forEach((deficiencia: any) => {
        deficiencia.id_instituicao = match.params.id
        deficiencia.acima_de_60 = ''
        deficiencia.de_18_a_60 = ''
        deficiencia.de_0_a_18 = ''

        temp.push(deficiencia)
      });
      setDefis(temp);
    }

    fetchMyAPI()

  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault;

    const dados_deficientes = defis.map(deficiencia => {
      return {
        id_instituicao: deficiencia.id_instituicao,
        id_deficiencias: deficiencia.id,
        acima_de_60: deficiencia.acima_de_60,
        de_18_a_60: deficiencia.de_18_a_60,
        de_0_a_18: deficiencia.de_0_a_18
      }
    });

    try {
      await api.post('/rel', { dados_deficientes });

      alert("Instituição cadastrada com sucesso!");
      history.push('/');

    } catch (err) {
      alert("Ocorreu um erro ao cadastrar o caso");
    }
  }

  function newState(id: string, campo: number, value: string) {
    return defis.map(deficiencia => {
      if (deficiencia.id === id) {
        switch (campo) {
          case 1:
            deficiencia.acima_de_60 = value
            break;
          case 2:
            deficiencia.de_18_a_60 = value
            break;
          case 3:
            deficiencia.de_0_a_18 = value
            break;
          default:
            break;
        }
      }
      return deficiencia
    })
  }

  return (
    <Container>
      <dd>
        <FiAlertCircle size={70} />
        Lançar a quantidade de pessoas atentidas em cada uma das deficiências abaixo,
        por faixa etária.
        <p><b>Obs:</b> Deixar o campo em branco (sem preenchimento), quando a
          Instituição não oferecer atendimento para uma das deficiências ou faixas etárias.</p>
      </dd>
      <BoxDeficiencias>
        <Form onSubmit={(e) => handleSubmit(e)}>

          {defis.map(deficiencia => {
            return (
              <article key={deficiencia.id}>

                <div className="titulo-deficiencias">
                  <p>Deficiência</p>
                  <span>{deficiencia.tipos_deficiencias}</span>
                </div>

                <div>
                  <label htmlFor="acimade60">+ de 60 anos</label>
                  <Input
                    name="acima_de_60"
                    id="acimade60"
                    placeholder="Quantidade"
                    value={defis.find(statedefi => statedefi.id === deficiencia.id)?.acima_de_60}
                    onChange={(e) => setDefis(newState(deficiencia.id, 1, e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="de18a60">18 a 60 anos</label>
                  <Input
                    name="de_18_a_60"
                    id="de18a60"
                    placeholder="Quantidade"
                    value={defis.find(statedefi => statedefi.id === deficiencia.id)?.de_18_a_60}
                    onChange={(e) => setDefis(newState(deficiencia.id, 2, e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="de0a18">0 a 18 anos</label>
                  <Input
                    name="de_0_a_18"
                    id="de0a18"
                    placeholder="Quantidade"
                    value={defis.find(statedefi => statedefi.id === deficiencia.id)?.de_0_a_18}
                    onChange={(e) => setDefis(newState(deficiencia.id, 3, e.target.value))}
                  />
                </div>

              </article>

            )
          })}

          <button type="submit">Enviar</button>
        </Form>

        <div className="dep-federal">
          <p><b>Apoio:</b> Deputado Federal Otavio Leite</p>
        </div>
      </BoxDeficiencias>
    </Container>
  );
}

export default Deficientes;
