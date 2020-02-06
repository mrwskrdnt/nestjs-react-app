/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { PageLayout } from '../components/page-layout';
import { PetProps } from './pet.interface';
import * as S from './pet.styles'

const Pet: React.FC<PetProps> = props => (
  <PageLayout isAuthorized title={props.name}>
    <h3 css={css(S.name)}>{props.name}</h3>
    <img src={props.picUrl} alt={props.name} />
  </PageLayout>
);

export default Pet