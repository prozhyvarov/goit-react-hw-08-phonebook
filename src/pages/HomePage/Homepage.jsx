
import { Container,Img, Title, Text, NavLink } from './HomePage.styled';
import background from 'images/rent-cars.jpg';

const HomePage = () => {
  return (
    <>
      <Title>Find your drive</Title>
      <Img src={background} alt="car rental" />
      <Text>Explore the world's largest car sharing marketplace</Text>
      <Container>
        <NavLink to="/catalog">Go to Catalog</NavLink>
      </Container>
    </>
  );
};

export default HomePage;
