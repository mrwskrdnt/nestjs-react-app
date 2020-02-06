/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Head } from '@react-ssr/nestjs-express';
import { ThemeProvider } from 'radiant-ui';
import { PageLayoutProps } from './page-layout.interface';
import { AuthProvider, useAuth } from '../../effects/auth';
import PageHeader from './page-header';
import * as S from './page-layout.styles';

const PageLayout: React.FC<PageLayoutProps> = props => (
    <ThemeProvider>
      <Head>
        <title>Login</title>
      </Head>
      <AuthProvider>
        <section css={css(S.root)}>
          <PageHeader title={props.title} />
          <main css={css(S.main)}>
            {props.children}
          </main>
        </section>
      </AuthProvider>
    </ThemeProvider>
);

export default PageLayout;