import * as React from 'react';
import { ProfileProps } from './interfaces/profile.interface';

const Profile: React.FC<ProfileProps> = props => (
  <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
    <main className="mdl-layout__content">
      <div className="mdl-card mdl-shadow--6dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 className="mdl-card__title-text">About {props.username}</h2>
        </div>
        <div>
          <figure>
            <img src={props.pet.picUrl}  alt="*"/>
            <figcaption>{props.username}'s friend {props.pet.name}</figcaption>
          </figure>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button" href='/logout'>Log Out</a>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Profile