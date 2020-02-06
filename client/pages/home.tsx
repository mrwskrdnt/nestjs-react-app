/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { HomeProps } from './home.interface';
import { PetsList } from '../components/pets-list';
import { PageLayout } from '../components/page-layout';
import * as S from './home.styles'

const Home: React.FC<HomeProps> = props => (
  <PageLayout isAuthorized title="Home">
    <header  css={css(S.header)}>
      <h2>Hi, {props.username}!</h2>
      <h4>Whats up with your pets?</h4>
    </header>
     <PetsList pets={props.pets} />
  </PageLayout>
);

export default Home;