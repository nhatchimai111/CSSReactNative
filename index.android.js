// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';



// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class CSSReactNative extends Component {
  render() {
    return (
      
      <View style={ao.bao}>
        {/*Gắn CSS vào text*/}
        <Text style={ao.tieude}>React Native!</Text>
        <Text style={ao.tomtat}>Tóm Tắt</Text>
      </View>

    );
  }
}


// Khai báo CSS
var ao = StyleSheet.create({

bao:{

    backgroundColor:'pink',
    width:200,
    height:300,
    marginTop:50,
    marginLeft:100,
    paddingTop:20,
    paddingRight:30,

  },

  tieude:{

    backgroundColor:'yellow',
    color:'red',
  },

  tomtat:{

    backgroundColor:'green',
    color:'yellow'
  }

});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('CSSReactNative', () => CSSReactNative);