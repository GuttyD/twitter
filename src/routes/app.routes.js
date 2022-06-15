import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/home';
import { Search } from '../pages/search';
import { Mensagens } from '../pages/mensagens';
import { Notification } from '../pages/notification';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const  Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: 'black',
                borderTopColor: 'transparent',
                },
                headerStyle: {
                    backgroundColor: 'black',
                    height: 50,
                },
                headerTitleStyle: {
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: -20,
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#3d3d3d',
                tabBarActiveTintColor: 'white',
                allowFontScaling: false,
                }}
                >
                <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <MaterialIcons name="home-filled" size={size} color={color}/>
                    },
                }}
                />
                <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <MaterialIcons name="search" size={size} color={color} />
                    },
                }}
                />
                <Tab.Screen
                name="Notificações"
                component={Notification}
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <Ionicons name="notifications-outline" size={size} color={color} />
                    },
                    tabBarBadge: 99,
                    tabBarBadgeStyle: {
                        backgroundColor: '#1DA1F2',
                    },
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
                />
                <Tab.Screen
                name="Profile"
                component={Mensagens}
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <Feather name="mail" size={size} color={color} />
                    },
                }}
                />
            </Tab.Navigator>
    );
}