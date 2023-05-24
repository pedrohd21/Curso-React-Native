import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { useState } from'react';
import { Form, HeaderList, Container, NumberOfPlayers } from "./styles";
import { FlatList } from 'react-native'
import { ListEmpty } from "@components/ListEmpty";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
  group: string;
}

export function Players(){
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([])

  const route = useRoute();
  const { group }  = route.params as RouteParams;

  return(
  <Container>
      <Header showBackButton/>

      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add"/>  
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item}
          renderItem={({ item}) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers> 
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item}) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        
        ListEmptyComponent={() => (
          <ListEmpty
            message='Não há pessoas nesse time'
          />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ paddingBottom: 100 },players.length === 0 && { flex: 1 }]}
      />
      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  );
}