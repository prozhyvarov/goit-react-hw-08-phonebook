import { SearchForm } from "components/SearchForm/SearchForm";
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
// import { NotFound } from "components/NotFound/NotFound";
import { Container } from "./Catalog.styled";
import { CarsList } from "components/CarsList/CarsList";

const Catalog = () => {

  return (
    <Container>
      <SearchForm />
      <CarsList />
      {/* <NotFound/> */}
      <LoadMoreButton />
    </Container>
  );
};

export default Catalog;
