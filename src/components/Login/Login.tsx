import React, { FormEvent, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Email inválido');
      return;
    }

    if (!validatePassword(password)) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setError('');

    try {
      const token = await authenticateUser(email, password);
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      setError('Verifique suas credenciais e tente novamente');
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const authenticateUser = async (
    email: string,
    password: string
  ): Promise<string> => {
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3qEBHWnUAwir0xQ2B9NztF7TIeOSLjPU';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('Erro na autenticação');
    }

    const data = await response.json();
    return data.idToken;
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 login-wb">
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && <div className="error-message">{error}</div>}

        <div className="box-button-bw">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
