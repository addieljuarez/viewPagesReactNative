// // 'use strict';
// //
// // import React, {Component} from 'react';
// // import{
// //   AppRegistry,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Dimensions,
// //   Image,
// // } from 'react-native';
// //
// // import {
// //   PagerTabIndicator,
// //   // IndicatorViewPager,
// //   // PagerTitleIndicator,
// //   // PagerDotIndicator
// // } from 'rn-viewpager';
// //
// // // import ViewPager from 'react-native-viewpager';
// //
// // var widthDevice = Dimensions.get('window').width;
// //
// // var imgs = [
// //   'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
// //   'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
// //   'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
// //   'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
// //   'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
// //   'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
// //   'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
// // ]
// //
// // class ViewMain extends Component{
// //
// //   // dataSource() {
// //   //   var dataSource = new ViewPager.DataSource({
// //   //     pageHasChanged: (p1, p2) => p1 !== p2,
// //   //   });
// //   //
// //   //   return {
// //   //     dataSource: dataSource.cloneWithPages(imgs),
// //   //   };
// //   // }
// //   //
// //   // _renderPage(data: Object, pageID: number | string,) {
// //   //   return (
// //   //     <Image
// //   //       source={{uri: data}}
// //   //       style={styles.page} />
// //   //   );
// //   // }
//
//
//
// import {StyleSheet, View, Text} from 'react-native';
// import React, {Component} from 'react';
// import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
//
// export default class ViewPagerPage extends Component {
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 <IndicatorViewPager
//                     style={{height:200}}
//                     indicator={this._renderDotIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager>
//
//                 <IndicatorViewPager
//                     style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTitleIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager>
//
//                 <IndicatorViewPager
//                     style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTabIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager>
//             </View>
//         );
//     }
//
//     _renderTitleIndicator() {
//         return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
//     }
//
//     _renderDotIndicator() {
//         return <PagerDotIndicator pageCount={3} />;
//     }
//
//     _renderTabIndicator() {
//         let tabs = [{
//                 text: 'Home',
//                 // iconSource: require('../imgs/ic_tab_home_normal.png'),
//                 // selectedIconSource: require('../imgs/ic_tab_home_click.png')
//             },{
//                 text: 'Message',
//                 // iconSource: require('../imgs/ic_tab_task_normal.png'),
//                 // selectedIconSource: require('../imgs/ic_tab_task_click.png')
//             },{
//                 text: 'Profile',
//                 // iconSource: require('../imgs/ic_tab_my_normal.png'),
//                 // selectedIconSource: require('../imgs/ic_tab_my_click.png')
//         }];
//         return <PagerTabIndicator tabs={tabs} />;
//     }
//
// }
//
//
//
//
//   // render(){
//   //   return(
//   //     // <View style={{backgroundColor:'red', flex:1}}>
//   //     //   <Text style={{backgroundColor:'white', top: 100}}> {widthDevice} </Text>
//   //     // </View>
//   //     <View style={{flex:1, backgroundColor:'red'}}>
//   //
//   //     </View>
//   //   )
//   // }
// // }
//
// // const styles = StyleSheet.create({
// //   page: {
// //     width: deviceWidth,
// //   },
// // });
//
// module.exports = ViewPagerPage;
