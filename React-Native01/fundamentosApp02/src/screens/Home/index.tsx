import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import React, { useState } from "react"; 
import { styles } from "./styles";
import { Participant } from "../../components/Participants";

export default function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');

  function addParticipants(){
    if(participants.includes(participantsName)){
      return Alert.alert("Participantes ja existe", "Ja existe um participante na lista");
    }
    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
  };

  function removeParticipants(name: string){
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
    
      <View style={styles.form}>
        <TextInput 
          placeholder="Nome do Usuario"
          style={styles.input} 
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantsName}
          value={participantsName}

        />
        <TouchableOpacity style={styles.button} onPress={addParticipants}> 
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <Participant
          key={item}
          name={item}
          onRemove={() => removeParticipants(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem Chegou Aqui
          </Text>
        )}
      />
    </View>
  )
}