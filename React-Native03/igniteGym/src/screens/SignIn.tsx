import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from'@components/input';

export function SignIn(){
  return(
    <VStack flex={1} bg="gray.700">
      {/* Imagem de fundo */}
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando."
        resizeMode="contain"
        position="absolute"
      />
      
      {/* Centraliza os elementos verticalmente */}
      <Center my={24}>
        {/* Logotipo SVG */}
        <LogoSvg/>
        
        {/* Texto de descrição */}
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      
      <Center>
        {/* Título principal */}
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        {/* Componente de input para o campo de e-mail */}
        <Input placeholder="E-mail"/>
        
        {/* Componente de input para o campo de senha */}
        <Input placeholder="Senha"/>
      </Center>
      
    </VStack>
  )
}
