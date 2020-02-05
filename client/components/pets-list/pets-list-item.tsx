import * as React from 'react';
import { PetsListItemProps } from '../../pages/home.interface';

const PetsListItem: React.FC<PetsListItemProps> = props => {
  const handleClickDetails = React.useCallback(() => {
    window.open('/page')
  }, []);

  return (
    null
  )
};

export default PetsListItem;