import * as React from 'react';
import { LoginProps } from './interfaces/login.interface';

const Login: React.FC<LoginProps> = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
  <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
    <main className="mdl-layout__content">
      <div className="mdl-card mdl-shadow--6dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 className="mdl-card__title-text">Nest Cats</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <form action="/login" method="post">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" name="username" id="username" />
              <label className="mdl-textfield__label" htmlFor="username">Username</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="password" name="password" id="password" />
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log In</button>
              <span className="mdl-textfield__error">{props.message}</span>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
)};

export default Login