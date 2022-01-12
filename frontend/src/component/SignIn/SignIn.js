import './SignIn.scss';
import Logo from '../../common/img/signIn.svg';

const SignIn = ({ setActive }) => (
  <div className="signIn">
    <button
      onClick={() => {
        console.log(document.documentElement.scrollTop);
        setActive(true);
      }}
    >
      <img alt="signIn" src={Logo} />
    </button>
  </div>
);

export default SignIn;
