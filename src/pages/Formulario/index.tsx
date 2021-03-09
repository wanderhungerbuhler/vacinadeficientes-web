import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import Loading from 'react-loading';

import { FiAlignLeft, FiPhone, FiList } from 'react-icons/fi';
import { FaRegBuilding, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import { Container } from './styles';

import api from '../../services/api';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormProps {
  nome_instituicao: string;
  endereco: string;
  municipio: string;
  dirigente: string;
  telefone: string;
  whatsapp: string;
  possui_cnes: string;
  instituicao_possui: string;
}

const Formulario: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome_instituicao: Yup.string().required('Instituição obrigatória'),
        endereco: Yup.string().required('Endereço obrigatório'),
        municipio: Yup.string().required('Município obrigatório'),
        dirigente: Yup.string().required('Dirigente obrigatório'),
        telefone: Yup.string().required('Telefone obrigatório'),
        whatsapp: Yup.string().required('WhatsApp obrigatório'),
        possui_cnes: Yup.string().optional(),
        instituicao_possui: Yup.string().optional()
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.post('/instituicao', data);

      if(response){
        setLoading(true);
        
        setTimeout(() => {
          history.push(`/deficiencias/${response.data.id}`);
        }, 2500);
      }

    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [history]);

  return (
    <Container>
      <h1>FORMULÁRIO PARA ORGANIZAÇÃO E LOGÍSTICA DA VACINAÇÃO</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input icon={FiAlignLeft} label="Instituição" name="nome_instituicao" />
          <Input icon={FaRegBuilding} label="Endereço" name="endereco" />
          <Input icon={FiAlignLeft} label="Município" name="municipio" />
          <Input icon={CgProfile} label="Dirigente" name="dirigente" />
          <InputMask mask="(99) 9999-9999" icon={FiPhone} label="Telefone" name="telefone" />
        </div>

        <div>
          <InputMask mask="(99) 99999-9999" icon={FaWhatsapp} label="WhatsApp" name="whatsapp" />

          <label htmlFor="possui_cnes">A Instituição possui CNES? 
            <b> (Cadastro Nacional de Estabelecimentos de Saúde)</b>
          </label>
          
          <Input icon={AiOutlineFieldNumber} name="possui_cnes" />

          <label htmlFor="instituicao_possui">A Instituição possui:</label>
          <p>1) Ambientes de Atendimento à Saúde?</p>
          <p>
            2) Contém Computador e Internet para avaliar a possibilidade ao atendimento do público-alvo
            na aplicação da vacina?
          </p>
          <p>
            3) Possui acesso para fluxo do público?
          </p>
          <span>*Se atende os 2 itens acima, responda apenas <b>SIM</b></span>
          <span>*Em caso de não atender um dos itens acima, descreva o motivo</span>
          <Input icon={FiList} name="instituicao_possui" />

          <button type="submit">{ loading ? <Loading type="spin" color="#092f66" height={20} width={20} /> : 'Avançar' }</button>
          
        </div>


      </Form>
    </Container>
  );
}

export default Formulario;
