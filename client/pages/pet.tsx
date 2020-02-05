import * as React from 'react';
import { PageLayout } from '../components/page-layout';
import { PetProps } from './pet.interface';

const Pet: React.FC<PetProps> = props => (
  <PageLayout isAuthorized title={props.name}>
    <img src={props.picUrl} alt={props.name} />
  </PageLayout>
);

export default Pet