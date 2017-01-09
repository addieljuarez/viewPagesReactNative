'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

var TopScreen = require('./TopScreen');
var BottomScreen = require('./BottomScreen');

var MainScreen = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
      
        <BottomScreen style={styles.viewpager}/>
      </View>
    );
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewpager: {
    flex: 1,
  },
});

module.exports = MainScreen;
