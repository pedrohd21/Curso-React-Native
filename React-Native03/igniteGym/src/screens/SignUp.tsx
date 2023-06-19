import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from'@components/input';
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignUp(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
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
        
        <Center >
          {/* Título principal */}
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input 
            placeholder="Nome"
          />
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
          <Button title="Criar e acessar"/>

        
        </Center>

        <Button title="Voltar para o login" variant="outline" mt={24} onPress={handleGoBack}/>

        
      </VStack>
    </ScrollView>
  )
}
