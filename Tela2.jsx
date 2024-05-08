import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AutenticationContext';



export default function Tela2() {

    const nav = useNavigation(); 
    const {data, setData} = useContext(AuthContext);
    
  return (
    <View>
      <Text>Tela2</Text>
      <Button
      title='Ir para terceira tela'
      onPress={() => nav.navigate("Terceira")}
      />
      <Text>{data.name}</Text>
      <Text>{data.status}</Text>
    </View>
  )
}