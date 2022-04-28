import React from 'react';
import { Button } from '../../components/forms/Button';
import { Input } from '../../components/forms/input';

import { 
    Container,
    Fields,
    Form,
    Header, 
    Title,

} from './styles';

export function Register(){
    return(
        <Container>
            <Header>
                <Title>Cadastro Operações</Title>
            </Header>
            <Form>
                <Fields>
                    <Input 
                        placeholder='Descrição'
                    />
                    <Input 
                        placeholder='Valor R$ 0,00'
                    /> 
                </Fields> 
                <Button title='Enviar'/>   
            </Form>
        </Container>

        
    );
}