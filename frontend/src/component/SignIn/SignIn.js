import './SignIn.scss';

const SignIn = ({ setActive }) => (
  <div className="signIn">
    <button
      onClick={() => {
        console.log(document.documentElement.scrollTop);
        setActive(true);
      }}
    >
      <img alt="signIn" src="./img/signIn.svg" />
    </button>
  </div>
);

export default SignIn;
