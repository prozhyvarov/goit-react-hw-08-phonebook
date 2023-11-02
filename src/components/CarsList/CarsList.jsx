import { CarsListItem } from 'components/CarListItem/CarsListItem';

import { List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <List>
      <CarsListItem />
      <CarsListItem />
      <CarsListItem />
    </List>
  );
};
