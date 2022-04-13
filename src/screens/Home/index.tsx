import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

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
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Home() {
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
    </Container>
  );
}


