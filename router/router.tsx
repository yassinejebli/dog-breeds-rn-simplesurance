import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DogList from "../screens/DogList";
import DogFavList from "../screens/DogFavList";

const TabNavigator = createBottomTabNavigator({
    DogList: {
        screen: DogList,
        navigationOptions: {
            title: 'List'
        }
    },
    FavList: {
        screen: DogFavList,
        navigationOptions: {
            title: 'Favourite'
        }
    },
});

export default createAppContainer(TabNavigator);