import { Input as NativeBaseInput, IInputProps } from 'native-base';

// Componente personalizado de Input
export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700" // Define a cor de fundo do Input como cinza escuro
      h={14} // Define a altura do Input como 14 unidades
      px={4} // Define o espaçamento horizontal interno (padding) do Input como 4 unidades
      borderWidth={0} // Define a largura da borda do Input como 0 (sem borda)
      fontSize="md" // Define o tamanho da fonte como médio
      color="white" // Define a cor do texto como branco
      fontFamily="body" // Define a família de fonte do texto como "body"
      mb={4} // Define a margem inferior do Input como 4 unidades
      placeholderTextColor="gray.300" // Define a cor do texto do placeholder como cinza claro
      _focus={{ // Estiliza o foco do Input quando está selecionado
        bg: "gray.700", // Define a cor de fundo do Input como cinza escuro
        borderWidth: 1, // Define a largura da borda do Input como 1
        borderColor: "green.500", // Define a cor da borda do Input como verde
      }}
      {...rest} // Permite importar outras propriedades passadas para o componente Input
    />
  );
}
