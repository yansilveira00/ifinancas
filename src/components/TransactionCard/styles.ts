import styled, { css} from "styled-components/native";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps{
    type: 'income' | 'expense';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 15px 25px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme, type }) => 
      type === 'income' ? theme.colors.income : theme.colors.expense};
    margin-top: 2px;
    flex-direction: row;
    justify-content: flex-end;
    `;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;
    

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-left: 70px;
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-left: 70px;
`;