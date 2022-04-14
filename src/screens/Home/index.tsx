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
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Home() {
  const transactionData = {
    title: ' Supermercado',
    amount: '  -R$149,00',
    category: {
      icon: 'food',
      name: 'Alimentação'
    },
    date: '12/03/2022, 20:00'
  }
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

        <TransactionCard data={transactionData}/>
      </Transactions>
    </Container>
  );
}


