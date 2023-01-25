import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer,
} from './styles';

export default function Main () {

	return (
		<>
			<Container>
				<Header />

				<CategoriesContainer>
					<Categories />
				</CategoriesContainer>

				<MenuContainer>
					<Menu />
				</MenuContainer>

			</Container>
			<Footer>
				<FooterContainer>
					<Button onPress={() => {false;}} disabled>
						Novo Pedido
					</Button>
				</FooterContainer>
			</Footer>
		</>
	);
}