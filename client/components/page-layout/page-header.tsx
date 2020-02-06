/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { PageHeaderProps } from './page-header.interface';
import { SecondaryButton } from 'radiant-ui';
import { useAuth } from '../../effects/auth';
import * as S from './page-header.styles';

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { state, logout } = useAuth();

  const handleLogout = React.useCallback(() => {
    logout();
  }, [logout]);

  return (
    <S.Root>
      <h4 css={css(S.title)}>{props.title}</h4>
      {state.userId && (
        <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
      )}
    </S.Root>
  );
};

export default PageHeader;
