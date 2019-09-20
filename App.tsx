import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DogList from "./screens/DogList";

const TabNavigator = createBottomTabNavigator({
    DogList: {
        screen: DogList,
        navigationOptions: {
            title: 'Dog List'
        }
    },
    FavList: {
        screen: DogList,
        navigationOptions: {
            title: 'Favourite'
        }
    },
});

export default createAppContainer(TabNavigator);