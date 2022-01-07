import { useEffect, useState } from 'react';
import './SignIn.scss';

const SignIn = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    console.log('+');
  });

  return (
    <div className="signIn">
      <button
        onClick={() => {
          setActive(active + 1);
        }}
      >
        {active % 2 === 1 ? <h1>asd</h1> : null}
        <img alt="signIn" src="img/signIn.svg" />
      </button>
    </div>
  );
};

export default SignIn;
