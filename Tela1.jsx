import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AutenticationContext';

export default function Tela1() {

    const nav = useNavigation();
    //destructring
    const {data, setData} = useContext(AuthContext);

  return (
    <View>
      <Text>Tela1</Text>
      <Button
      title='Ir para segunda tela'
      onPress={ () => nav.navigate("Segunda")}
      />
      <Text>{data.name}</Text>
      <Text>{data.status}</Text>
      <Button 
      title='Muda nome' onPress={() => setData({ name: "Primeiro da Silva", status: "inativo" })} 
      />
    </View>
  )
}