
import React from 'react';
import { Head } from '@react-ssr/nestjs-express';
import { HomeProps } from './interfaces/home.interface';

const Home: React.FC<HomeProps> = props => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <main className="mdl-layout__content">
        <div className="mdl-card mdl-shadow--6dp">
          <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h2 className="mdl-card__title-text">Welcome {props.username}!</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button" href='/profile'>GetProfile</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;