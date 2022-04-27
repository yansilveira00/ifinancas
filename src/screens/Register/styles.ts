import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;
export const Form = styled.View `
    flex: 1;
    padding: 24px;
`;
export const Header = styled.View `
    width: 100%;
    height: ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    justify-content: flex-and;
    align-items: center;
    padding-bottom: 19px;
`;

export const Title = styled.Text `
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

`;