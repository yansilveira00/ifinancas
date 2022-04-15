import React from 'react';

import {
  Container,
  Header,
  ContentWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps} from '../../components/TransactionCard';

export interface dataListProps extends TransactionCardProps{
  id: string;
}
export function Home() {
  const transactionData: dataListProps[] = [
    {
    id: '1',
    type: 'expense',
    title: ' Supermercado',
    amount: ' R$149,00',
    category: {
      icon: 'food',
      name: 'Alimentação'
    },
    date: '12/03/2022, 20:00'
  },
  {
    id: '2',
    type: 'expense',
    title: ' Farmacia',
    amount: ' R$20,00',
    category: {
      icon: 'pill',
      name: 'Medicametos'
    },
    date: '12/03/2022, 11:10 '
  },
  {
    id: '3',
    type: 'expense',
    title: ' Academia',
    amount: ' R$55,00',
    category: {
      icon: 'heart',
      name: 'Saúde'
    },
    date: '11/03/2022, 22:00 '
  },
  {
    id: '4',
    type: 'expense',
    title: ' Aluguel',
    amount: ' R$140,00',
    category: {
      icon: 'home',
      name: 'Aluguel'
    },
    date: '11/03/2022, 20:45'
  },

];
  return (
    <Container>
      <Header>
        <ContentWrapper>
        <UserInfo>
            <Photo source={{ uri: 'https://github.com/yansilveira00.png'}}/>
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserName>Yan Silveira</UserName>
              </User>
        </UserInfo>

        <Icon name="logout" />

        </ContentWrapper>
      </Header>

      <HighlightCards>
      <HighlightCard 
        title='Entrada'
        amount='R$ 600,00'
        lastTransaction='Última entrada dia 27 de fevereiro'
        type='income'
        />
        <HighlightCard 
        title='Saída'
        amount='R$ 484,50'
        lastTransaction='Última saída dia 12 de março'
        type='expense'
        />
        <HighlightCard 
        title='Total'
        amount='R$ 115,50'
        lastTransaction='Último total dia 13 de março'
        type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Gastos Recentes</Title>

        <TransactionList 
        
          data={transactionData}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) =>        
          <TransactionCard data={ item }/>
        }  
        />
      </Transactions>
    </Container>
  );
}


