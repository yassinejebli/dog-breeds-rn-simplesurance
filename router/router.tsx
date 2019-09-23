import React from 'react';
import {SafeAreaView} from "react-native";
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import DogList from "../screens/DogList";
import DogFavList from "../screens/DogFavList";


const SafeAreaMaterialTopTabBar = (props) => {
    return (
        <SafeAreaView>
            <MaterialTopTabBar {...props} />
        </SafeAreaView>
    )
};

const TabNavigator = createMaterialTopTabNavigator({
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
    }
},{
     tabBarComponent: SafeAreaMaterialTopTabBar
});

export default createAppContainer(TabNavigator);