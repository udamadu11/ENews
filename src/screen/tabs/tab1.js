import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {getArticles} from '../../service/news';
import { Alert , View , Text , ActivityIndicator } from 'react-native';
import DataItem from '../../component/DataItem';
export default class Tab1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      data : null
    }
  }

  componentDidMount(){
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    },error => {
      Alert.alert('error', 'Something went wrong');
    }
    )
  }

  render() {
 
    let view = this.state.isLoading ? (
      <View>
          <ActivityIndicator animating={this.state.isLoading} />
          <Text style={{marginTop:10}}>Please wait ..</Text>
      </View>
    ) : (
      <List 
            dataArray = {this.state.data}
            renderRow = {(item)=>{
              return <DataItem data={item} />
            }}
          />
    )
    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}