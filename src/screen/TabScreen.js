import React, { Component } from 'react';
import { Container, Header,Tab,Tabs,Left,Right,Body,Title } from 'native-base';
import {StyleSheet} from 'react-native';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor:'#1f306e'}}>
            <Left/>
            <Body>
                <Title style={styles.header}>News App</Title>
            </Body>
            <Right />
        </Header>
        <Tabs>
          <Tab heading="Tab1" tabStyle={{backgroundColor:'#1f306e'}} activeTabStyle={{backgroundColor:'#f5487f'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Tab2" tabStyle={{backgroundColor:'#1f306e'}} activeTabStyle={{backgroundColor:'#f5487f'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab2 />
          </Tab>
          <Tab heading="Tab3" tabStyle={{backgroundColor:'#1f306e'}} activeTabStyle={{backgroundColor:'#f5487f'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    header:{
      alignSelf:'flex-end'
    }
  })
