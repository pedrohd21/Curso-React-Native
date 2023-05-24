import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles'
import { Participante } from '../../components/Participante';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipanteAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante ja existe", "Ja existe um participante na lista")
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');  
  }
  
  function handleParticipanteRemove(name: string){

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => (setParticipants(prevState => prevState.filter(participant => participant !== name)))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome Evento</Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome Do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <Participante  
            key={item}
            name={item}
            onRemove={() => handleParticipanteRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            ninguem chegou aq
          </Text>
        )}
      /> 
    </View>
  );
}
