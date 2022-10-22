import * as React from 'react';
import style from './Login.module.css';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Login() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback(() => {
    if (login.trim() && password.trim()) {
      console.log(login, password);
    } else {
      
    }
  }, [login, password]);

  return (
    <div className={style.loginContainer}>

      <h2>Вход</h2>

      <div className={style.loginFormContainer}>

        <Box width='400px' color='gray' margin='40px 0'>

          <Input
            type='text'
            name='login'
            value={login}
            placeholder='Логин'
            onChange={(event) => setLogin(event.target.value)}
            width='360px'
            margin='20px 0 0 0'
          />

          <Input
            type='password'
            name='password'
            value={password}
            placeholder='Пароль'
            onChange={(event) => setPassword(event.target.value)}
            width='360px'
            margin='20px 0 0 0'
          />

          <Button
            type='gradient'
            width='360px'
            margin='20px'
            handleClick={handleSubmit}
          >Войти</Button>

        </Box>

        <Box width='400px' color='gray'>

          <p>Еще нет аккаунта?</p>

          <Button
            type='gradient'
            width='360px'
            margin='0 20px 20px 20px'
          >Зарегистрироваться</Button>

        </Box>

      </div>
    </div>
  );
}
