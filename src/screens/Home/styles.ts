import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    `;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(290)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0 12px;
    flex-direction: row;
    
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 50px;
`;
export const User = styled.View`
    margin-left: ${RFValue(28)}px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(20)}px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(20)}px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(25)}px;

`;