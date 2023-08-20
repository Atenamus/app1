import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Catergorycard from './Categorycard'
const Categorys = () => {
  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:18
    }}
    >
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
      <Catergorycard imgurl="https://links.papareact.com/wru" title="Testing"/>
    </ScrollView>
  )
}
export default Categorys