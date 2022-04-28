import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    align-items: center;
    width: 30%;
    height: ${RFValue(28)}px;;
    background-color: ${({ theme }) => theme.colors.primary};
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;;
`;