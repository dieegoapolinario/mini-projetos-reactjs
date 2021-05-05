import { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Input from './components/Form/Input';

import './App.css';

function App() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }){
    /*if(data.name === ""){
      // error em apenas um campo 
      // formRef.current.setFieldError('name', 'Nome obrigatório');

      //error em vários campos 
      formRef.current.setErrors({
        name: 'Nome obrigatório',
        address:{
          city: 'Cidade obrigatória',
        }
      });
    }*/

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail Obrigatório'),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('Cidade Obrigatória')
        })
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data);

      formRef.current.setErrors({});
  
      reset();
    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errorMessages = {};

        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Diego',
        email: 'diego@diego.com',
        address:{
          city: 'São Paulo'
        }
      })
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Form</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <Input name="name" />
        <label htmlFor="email">E-mail:</label>
        <Input type="email" name="email" />
        
        <Scope path="address">
          <label htmlFor="rua">Rua:</label>
          <Input name="street" />
          <label htmlFor="numero">Número:</label>
          <Input name="number" />
          <label htmlFor="bairro">Bairro:</label>
          <Input name="neighborhood" />
          <label htmlFor="cidade">Cidade:</label>
          <Input name="city" />
          <label htmlFor="estado">Estado:</label>
          <Input name="state" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;