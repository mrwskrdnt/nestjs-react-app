import * as React from 'react';
import { HomeProps } from './home.interface';
import { PetsList } from '../components/pets-list';
import { PageLayout } from '../components/page-layout';

const Home: React.FC<HomeProps> = props => (
  <PageLayout isAuthorized title="Home">
     <PetsList pets={props.pets} />
  </PageLayout>
);

export default Home;