import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from'@components/input';
import { Button } from "@components/Button";

export function SignIn(){
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
  }
  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} >
        {/* Imagem de fundo */}
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando."
          resizeMode="contain"
          position="absolute"
        />
        
        {/* Centraliza os elementos verticalmente */}
        <Center my={24} >
          {/* Logotipo SVG */}
          <LogoSvg/>
          
          {/* Texto de descrição */}
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        
        <Center px={30}>
          {/* Título principal */}
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          {/* Componente de input para o campo de e-mail */}
          <Input 
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          {/* Componente de input para o campo de senha */}
          <Input 
            placeholder="Senha"
            secureTextEntry
          />
          <Button title="Acessar" />

        
        </Center>
        <Center px={30} mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccount}/>
        </Center>
        
      </VStack>
    </ScrollView>
  )
}
