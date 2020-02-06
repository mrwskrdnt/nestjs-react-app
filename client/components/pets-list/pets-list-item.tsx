/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Surface, PrimaryButton } from 'radiant-ui'
import { PetsListItemProps } from '../../pages/home.interface';
import * as S from './pets-list-item.styles'

const PetsListItem: React.FC<PetsListItemProps> = props => {
  const handleClickDetails = React.useCallback(() => {
    location.assign(`/pets/${props.id}`)
  }, []);

  return (
    <Surface css={css(S.root)}>
      <h4 css={css(S.name)}>{props.name}</h4>
      <S.Kind>{props.kind}</S.Kind>
      <PrimaryButton onClick={handleClickDetails}>Details</PrimaryButton>
    </Surface>
  )
};

export default PetsListItem;