import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { Screen1, Screen2, Screen3, Screen4 } from './customnavigation';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
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
          name="HomeTab" 
          component={Screen1}
          options={{
            tabBarIcon: ({size, color}) => {
              return <MaterialIcons name="home-filled" size={size} color={color}/>
              },
              }}
          />
           <Tab.Screen 
              name="SearchTab" 
              component={Screen2}
              options={{
              tabBarIcon: ({size, color}) => {
                return <MaterialIcons name="search" size={size} color={color} />
              },
              }}
              />
            <Tab.Screen
              name="Notifications"
              component={Screen3}
              options={{
                tabBarIcon: ({size, color}) => {
                  return <Ionicons name="notifications-outline" size={size} color={color} />
                },
                  tabBarBadge: 99,
                    tabBarBadgeStyle: {
                      backgroundColor: '#1DA1F2',
                      color: '#fff',
                      borderWidth: 2,
                      borderColor: '#000',
                      marginTop: 5,
                      width: 20,
                      height: 20,
                      fontSize: 10,
                    },
                    headerShown: true,
                    headerTitleAlign: 'center',
                    }}
                    />
              <Tab.Screen
                name="MessageTab"
                component={Screen4}
                  options={{
                    tabBarIcon: ({size, color}) => {
                    return <Feather name="mail" size={size} color={color} />
                    },
                    }}
                    />
      </Tab.Navigator>
    </NavigationContainer>
  );
}