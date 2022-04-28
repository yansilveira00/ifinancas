import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Report } from '../screens/Report';


const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen
                name='Listagem'
                component={Home}
            />
                
            <Screen
                name='Cadastrar'
                component={Register}
            />
            <Screen
                name='Relatorio'
                component={Report}
            />
            
        </Navigator>
    )
}