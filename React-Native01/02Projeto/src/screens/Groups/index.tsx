import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Alert } from 'react-native';


export function Groups(){
  const [isLoading, setIsLoading] = useState(false);
  const [ groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  async function fetchGroups(){
    try{
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
      setIsLoading(false)
    }catch(error){
      console.log(error);
      Alert.alert('Turmas', 'Não foi possivel carregar as turmas.')
    } finally{
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return(
    <Container>
      <Header showBackButton={false}/>
      <Highlight
        title="Turmas"
        subtitle="Jogue com sua turma"
      />

      {
        isLoading ? <Loading/> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex:1}}
          ListEmptyComponent={() => (
            <ListEmpty
              message='Que tal cadastrar a primera turma?'
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      }

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}