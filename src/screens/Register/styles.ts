import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View `
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Header = styled.View `
    width: 100%;
    height: ${RFValue(75)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.View ``;