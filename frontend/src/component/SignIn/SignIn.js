import './SignIn.scss';

const SignIn = ({ checkLogIn }) => (
  <div className="signIn">
    <button
      onClick={() => {
        console.log(document.documentElement.scrollTop);
        checkLogIn(true);
      }}
    >
      <img alt="signIn" src="./img/signIn.svg" />
    </button>
  </div>
);

export default SignIn;
