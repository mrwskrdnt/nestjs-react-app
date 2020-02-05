/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ThemeProvider, SecondaryButton } from 'radiant-ui';
import { PageLayoutProps } from './page-layout.interface';
import { AuthProvider, useAuth } from '../../effects/auth';
import { Head } from '@react-ssr/nestjs-express';
import * as S from './page-layout.styles';

const PageLayout: React.FC<PageLayoutProps> = props => {
  const { logout } = useAuth();

  const handleLogout = React.useCallback(() => {
    logout();
  }, [logout]);

  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <ThemeProvider>
        <AuthProvider>
          <section css={css(S.root)}>
            <header css={css(S.header)}>
              <h5 css={css(S.title)}>{props.title}</h5>
              {props.isAuthorized && (
                <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
              )}
            </header>
            <main css={css(S.main)}>
              {props.children}
            </main>
          </section>
        </AuthProvider>
      </ThemeProvider>
    </React.Fragment>
  )
};

export default PageLayout;