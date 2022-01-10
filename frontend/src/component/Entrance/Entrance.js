import { useEffect, useState } from 'react';
import './Entrance.scss';

// eslint-disable-next-line no-unused-vars
const LogIn = ({ setActive }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.className === 'entrance') {
        setActive(false);
      }
    });
    return () => {
      document.addEventListener('click', (e) => {
        if (e.target.className === 'entrance') {
          setActive(false);
        }
      });
    };
  });

  return (
    <div className="entrance" style={{ top: `${document.documentElement.scrollTop}px` }}>
      <div className="logIn">
        <div className="logIn_name">{check ? <h1>Регистрация</h1> : <h1>Авторизация</h1>}</div>
        {check ? <input type="email" placeholder="электронная почта" /> : null}
        <input type="text" placeholder="логин" />
        <input type="password" placeholder="пароль" />
        {check ? null : (
          <div className="logIn_description">
            <h2>
              Авторизируйтесь или совершите <button onClick={() => setCheck(true)}>регистрацию</button> на нашем сайте
            </h2>
          </div>
        )}
        <div className="logIn_button">
          <button onClick={check ? () => {} : () => {}}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
