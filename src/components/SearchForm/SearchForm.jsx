import Select from 'react-select';
import {
  BtnSearch,
  EnterText,
  Form,
  LabelMilage1,
  LabelMilage2,
  SubForm,
  Title,
} from './SearchForm.styled';

export const SearchForm = () => {
  const handleSubmit = e => {};
  return (
    <Form onSubmit={handleSubmit}>
        <SubForm>
          <label>
            <Title> Car brand </Title>
            <Select
              name="make"
              placeholder="Enter the text"
              // options={}
            />
          </label>
          <label>
            <Title>Price / 1 hour </Title>
            <Select
              name="rentalPrice"
              placeholder="To $"
              // options={}
            />
          </label>
        </SubForm>
        <div>
          <Title> Car mileage / km</Title>
          <EnterText>
            <label>
              <LabelMilage1
                type="number"
                name="mileageFrom"
                placeholder="From"
              />
            </label>
            <label>
              <LabelMilage2 type="number" name="mileageTo" placeholder="To" />
            </label>
          </EnterText>
        </div>

      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};
