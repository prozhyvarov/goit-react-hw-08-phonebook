
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';
import { FilterCont, Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <FilterCont>
      <Label>
        Find contacts by name
        <Input
          value={filter}
          onChange={evt => dispatch(filterContact(evt.currentTarget.value))}
          type="text"
          name="filter"
          placeholder="Search contacts by name"
        />
      </Label>
    </FilterCont>
  );
};
