import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Input } from "@components/Input";
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

export function NewGroup(){
  const [ group, setGroup ] = useState('')

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', {group})
  }
  
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon/>
        
        <Highlight
          title="Nova Turma"
          subtitle='Crie a turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da Turma'
          onChangeText={setGroup}
        />

        <Button
          style={{ marginTop: 20}}
          title='Criar'
          onPress={handleNew}
        />
      </Content>
      
    </Container>
  )
}