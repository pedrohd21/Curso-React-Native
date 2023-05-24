import { View, Text, TouchableOpacity } from 'react-native';
//npx expo install expo-checkbox
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { styles } from './styles';
// import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

type Props = {
  anotacao: string;
  onRemove: () => void;
}

export function Todo({ anotacao, onRemove }: Props){
  const [selecionado, setSelecionado] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.button}>
      <Checkbox
        value={selecionado}
        onValueChange={setSelecionado}
        style={styles.checkBox}
      />
      </View>

      { selecionado ?
        <Text style={styles.anotacaoTachado}>{selecionado? `${anotacao}` : ``}</Text>
        :
        <Text style={styles.anotacao}>{selecionado? `` : `${anotacao}`}</Text>
      }

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text>
            <EvilIcons name="trash" size={30} color="#C7FFED" />
          </Text>
        </TouchableOpacity>
    </View>
  )
}