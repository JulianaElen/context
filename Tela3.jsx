import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AutenticationContext';

export default function Tela3() {

    const nav = useNavigation(); 
    const {data, setData} = useContext(AuthContext);

  return (
    <View>
      <Text>Tela3</Text>
      <Button
      title='Voltar'
      onPress={() => nav.navigate("Inicio")}
      />
      <Text>{data.name}</Text>
      <Text>{data.status}</Text>
    </View>
  )
}