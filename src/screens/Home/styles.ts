import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import { FlatList, FlatListProps } from 'react-native'
import { dataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    `;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(290)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0 12px;
    flex-direction: row;
    margin-top: ${getStatusBarHeight() + RFValue(23)}px;
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

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 12 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(113) + getStatusBarHeight()}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 15px;
    margin-top: ${RFValue(13)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(35)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const TransactionList = styled(
    FlatList as new(props: FlatListProps<dataListProps>)=> FlatList<dataListProps>)``;