import React from 'react';
import {SafeAreaView} from "react-native";
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import DogList from "../screens/DogList";
import DogFavList from "../screens/DogFavList";
import DogDrawer from "../screens/DogDrawer";


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
    },
    DogDrawer: {
        screen: DogDrawer,
        navigationOptions: {
            title: 'Draw'
        }
    }
},{
     tabBarComponent: SafeAreaMaterialTopTabBar
});

export default createAppContainer(TabNavigator);