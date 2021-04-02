/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Fragment } from 'react';
 import {
   Text, 
   Image,
   ScrollView,
   Dimensions,
   StyleSheet,
   FlatList
 } from "react-native";
 
const largura = Dimensions.get("screen").width;

const infos = [
    {usuario: "Ricardo"},
    {usuario: "Marina"},
    {usuario: "João"},
]

 const App = () => {
   return (
     <ScrollView>
         <FlatList
            data={infos}
            renderItem={({ item }) => 
                 <Fragment>
                 <Text>{item.usuario}</Text>
                 <Image 
                     source={require("./res/img/alura.jpg")}
                     style={estilo.imagem}
                 />
                </Fragment>
            }
         />
     </ScrollView>
   )
 };

 // Definicao de estilo pra não duplicar código
 const estilo = StyleSheet.create({
     imagem: {
        width:largura,
        height:largura
     }
 })
 
 export default App;
 