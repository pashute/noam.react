import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import NearBy from './tab_pages/NearBy';
import ThisWay from './tab_pages/ThisWay';
import InBuilding from './tab_pages/InBuilding'
import DrawerLayout from 'react-native-drawer-layout';
import Menu from './Menu';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';

const str_exit='Exits'
const str_call='Call'
const ear_icon = require('../assets/icons/ear1.png')
const str_welcome ='Welcome to Big Fashion';


export default class Tab extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
          titleText: "Noam ",
          bodyText: "You're indoor assistant",
          drawerClosed: true,
        };
    
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
      }

      setDrawerState(){
        this.setState({
          drawerClosed: !this.state.drawerClosed,
        });
      }
    
      toggleDrawer = () => {
        if(this.state.drawerClosed)
        {
          this.DRAWER.openDrawer();
        } else {
          this.DRAWER.closeDrawer();
        }
      }
      _positionDetect()
      {

      }
      _positionDecide(){
        _positionDetect();
        if(isBigFashion == true){
          return "Big Fashion-Main Gate";
        }
        if(isElevator == true){
          return "Big Fashion: Elevator C3 "
        }
        if(isPark == true){
          return "Park Harova"
        }
      }
      render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>

          <DrawerLayout
            drawerWidth={200}
            
            
            ref={drawerElement => {
              this.DRAWER = drawerElement;
            }}
            drawerPosition={DrawerLayout.positions.Right}
            onDrawerOpen={this.setDrawerState}
            onDrawerClose={this.setDrawerState}
            renderNavigationView={() => <Menu nav = {navigate}/>} 
            >
                      <ActionBar
                        containerStyle={styles.bar}
                        titleStyle={styles.title}
                         title={'Noam'}
                         leftIconName={'location'}
                         
                         
                        onLeftPress={() => console.log('Left!')}
                        
                        rightIcons={[
                            {
                                name: 'menu',
                                onPress: this.toggleDrawer,
                            },
                        ]}
                    />
            <View style={{ flexDirection:'row', marginTop:10,marginLeft:40, marginRight:40}}>
                <Text style={styles.assistant}>
                {str_welcome}
                </Text>
                <Text style={{fontSize:28,color:'#FF0000', marginLeft:5}}>
                BG
                </Text>
            </View> 
                <Tabpage/>


            </DrawerLayout>
            
    
          </View>
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#F5FCFF',
    },
  
    welcome: {
      fontSize: 35,
      color: '#6600ff',
  
    },
    assistant:{
      lineHeight: 30,
      flex: 1,
      fontSize: 24,
    

  },
    instructions: {
      marginTop: 40,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 80,
      fontSize: 20,
    },

    title:{
      textAlign: 'center',
      fontSize: 20,
    },
    buttonContainer: {
      backgroundColor: '#2E9298',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25,
      marginRight: 20,
      marginLeft: 20,
    },
  });
const Tabpage = TabNavigator(
    {
        NearByPage: {
            screen: NearBy,
            navigationOptions: {
                    tabBarLabel: 'NearBy'
              },

        },
        ThisWayPage: {
            screen: ThisWay,
            navigationOptions: {
                tabBarLabel: 'ThisWay'
          },


        },

        InBuildingPage: {
            screen: InBuilding,
            navigationOptions: {
                tabBarLabel: 'In Building'
            },
        },
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 20,
          },
        },
    },

    {
        initialRouteName: 'NearByPage',
      },
);
