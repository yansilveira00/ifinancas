import styled, { css} from "styled-components/native";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 15px 65px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text`

`;

export const Footer = styled.View``;

export const Category = styled.View``;

export const Icon = styled(MaterialCommunityIcons)``;

export const CategoryName = styled.Text``;

export const Date = styled.Text``;