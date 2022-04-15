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
interface Category{
    name: string;
    icon: string;
    
}
export interface TransactionCardProps{
    title: string;
    amount: string;
    category: Category;
    date: string;
}
interface Props{
    data: TransactionCardProps;
}
export function TransactionCard({data}:Props) {
    return (
        <Container>
            
            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <Title>{data.title}</Title>
                    <Amount>{data.amount}</Amount>
                </Category>
            </Footer>
            <Date>{data.date}</Date>
            <CategoryName>{data.category.name}</CategoryName>

        </Container>
    );
    
}