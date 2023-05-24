import { styles } from './styles';
import { Todo } from '../../components/Todo';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert,  } from 'react-native';
import React, { useState } from 'react';
import { Octicons } from '@expo/vector-icons'; 

export default function Home(){
  const [ notas, setNotas] = useState<string[]>([]);
  const [notasCriadas, setNotasCriadas] = useState('');

  function criarNota(){
    if (notasCriadas == ''){
      return Alert.alert("Nota vazia", "Escreva Algum Trem.")
    }
    setNotas(prevState => [...prevState, notasCriadas]);
    setNotasCriadas('');
  }

  function apagarNota(anotacao: string){
    Alert.alert('Apagar', 'Apagar nota?', [
      {
        text: 'Sim',
        onPress: () => (setNotas(prevState => prevState.filter(notas => notas !== anotacao)))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container} >
      <Text style={styles.nav}>
        Todo
      </Text>

      <View style={styles.form}> 
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='white'
          onChangeText={setNotasCriadas}
          value={notasCriadas}
        />

        <TouchableOpacity style={styles.button} onPress={criarNota}>
          <Text style={styles.buttonText}>
          +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.criadas}>
        <Text style={styles.buttonText}>Criadas {notas.length}</Text>
        {/* <Text style={styles.buttonText}>Criadas {.length}</Text> */}
      </View>
      

      <FlatList 
        data={notas}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <Todo  
            key={item}
            anotacao={item}
            onRemove={() => apagarNota(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Octicons name="paste" style={styles.icon}/>
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
          </View>
        )}
      />
    </View>
  )
}