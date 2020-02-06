/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { PageLayout } from '../components/page-layout';
import { ErrorPageProps } from './error.interface';

const Error: React.FC<ErrorPageProps> = props => (
  <PageLayout title="Error">
    <h1>{props.statusCode}: {props.error}</h1>
    <h5>{props.message}</h5>
  </PageLayout>
);

export default Error;