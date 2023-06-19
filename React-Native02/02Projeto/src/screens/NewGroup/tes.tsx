import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

interface Show {
  id: number;
  name: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shows, setShows] = useState<Show[]>([]);

  const searchShows = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      setShows(response.data.map((result: any) => result.show));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome da série"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Pesquisar" onPress={searchShows} />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default App;
