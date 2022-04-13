import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles';

export function TransactionCard() {
    return (
        <Container>
            <Title>Supermercado</Title>
            <Amount>-R$149,00</Amount>
            <Footer>
                <Category>
                    <Icon name='pill' />
                    <CategoryName>Alimentação</CategoryName>
                </Category>

                <Date></Date>
            </Footer>
            </Container>
    );
    
}