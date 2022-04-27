import React from 'react';
import { Input } from '../../components/forms/input';

import { 
    Container,
    Header, 
    Title,

} from './styles';

export function Register(){
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Input 
                placeholder='Nome'
            />
            <Input 
                placeholder='Preço'
            />
        </Container>

        
    );
}