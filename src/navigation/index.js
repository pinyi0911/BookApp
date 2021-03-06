import React,{useState} from 'react';
import { Image,Pressable,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MybookScreen from '../screens/MybookScreen';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
      
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          
        }}
        
      />
      <Tab.Screen 
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />

        <Tab.Screen 
          name="My books" 
          component={MybookScreen} 
          options={{
            title: "My books",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
            
          }}
        />
    </Tab.Navigator>
  );
}

const HomeStack = () => {


  const [change, setChange] = useState(true);
    const changeIcon = () => {
        setChange(!change);
    };

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerShadowVisible: false,//????????????
          headerRight: () => (
            // <AntDesign name="SearchOutlined" color={color} size={24} />
            <TouchableOpacity >
            <Image source={{uri:'https://github.com/pinyi0911/BookApp/blob/master/img/icon.png?raw=true'}} 
            style={{
              marginTop:30,
              marginBottom:19,
              height:17.5,
              width:17.5,
          }}
            />
            </TouchableOpacity>
            
 
          ), // ???????????? icon
        }}
      />


      
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route,navigation }) => ({
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: ({color}) => (

          <Pressable 
            onPress={() => {navigation.goBack();}}
          >
          <AntDesign name="left" color={color} size={24} />
          </Pressable>  
            
            // ????????????icon /navigation.goBack() ??? backToHome() ????????????
          ),
          
          
          headerRight: () => (
            <TouchableOpacity onPress={() => changeIcon()}>
              
            {change ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={24} />
                     :<MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={24} />
            }
            </TouchableOpacity>
          ), // ???????????? icon

          headerShadowVisible: false,//????????????
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;