import * as React from 'react';
import style from './Login.module.css';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Login() {
  const handleChange = React.useCallback(() => {}, []);

  return (
    <div className={style.loginContainer}>
      <div className={style.loginText}>
        <h2>Вход</h2>
        <p>Тут всякие преимущества входа в аккаунт</p>
      </div>
      <div className={style.loginFormContainer}>
        <Box width='300px' color='gray' margin='0 0 40px 0'>
          <Input type='text' name='login' value='Логин' onChange={handleChange}></Input>
          <Button
            type='gradient'
            width='260px'
            margin='20px'
          >Войти</Button>
        </Box>
        <Box width='300px' color='gray'>
          <Button
            type='gradient'
            width='260px'
            margin='20px'
          >Зарегистрироваться</Button>
        </Box>
      </div>
    </div>
  );
}
