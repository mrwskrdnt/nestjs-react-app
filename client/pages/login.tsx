/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { LoginForm } from '../components/login-form';
import { PageLayout } from '../components/page-layout';
import * as S from './login.styles';

const Login: React.FC = () => {

  return (
    <PageLayout title="Login">
      <div css={css(S.content)}>
        <LoginForm />
      </div>
    </PageLayout>
  );
}

export default Login