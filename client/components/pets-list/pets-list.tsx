/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { PetsListProps } from './pets-list.interface';
import PetsListItem from './pets-list-item';

const PetsList: React.FC<PetsListProps> = props => {
  const renderPetsListItem = React.useCallback(p => (
    <PetsListItem id={p.id} name={p.name} kind={p.kind} />
  ), []);

  return (
    <React.Fragment>
      {props.pets.map(renderPetsListItem)}
    </React.Fragment>
  )
};

export default PetsList;