export default {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',

    MAIN: '#FF5722', // Cor primária para uso geral
    ACCENT: '#3F51B5', // Cor de destaque para uso especial

    SUCCESS: '#4CAF50', // Cor de sucesso
    WARNING: '#FFC107', // Cor de aviso
    INFO: '#2196F3', // Cor de informação
    DANGER: '#FF4081', // Cor de perigo

    GREEN_DARK: '#007A55', // Tonalidade de verde mais escura
    GREEN: '#00B37E', // Tonalidade de verde padrão
    GREEN_LIGHT: '#C8E6C9', // Tonalidade de verde muito clara

    RED: '#F75A68', // Cor vermelha
    RED_DARK: '#AA2834', // Tonalidade de vermelho mais escura
    RED_LIGHT: '#FF8A99', // Tonalidade de vermelho mais clara

    BLUE: '#2196F3', // Cor azul
    BLUE_DARK: '#1B79D4', // Tonalidade de azul mais escura
    BLUE_LIGHT: '#6AB7FF', // Tonalidade de azul mais clara

    YELLOW: '#FFEB3B', // Cor amarela
    YELLOW_DARK: '#D4BA00', // Tonalidade de amarelo mais escura
    YELLOW_LIGHT: '#FFF466', // Tonalidade de amarelo mais clara

    PURPLE: '#9C27B0', // Cor roxa
    PURPLE_DARK: '#691E75', // Tonalidade de roxo mais escura
    PURPLE_LIGHT: '#D05CE3', // Tonalidade de roxo mais clara

    ORANGE: '#FF9800', // Cor laranja
    ORANGE_DARK: '#B26C00', // Tonalidade de laranja mais escura
    ORANGE_LIGHT: '#FFB66E', // Tonalidade de laranja mais clara

    PINK: '#E91E63', // Cor rosa
    PINK_DARK: '#A3174D', // Tonalidade de rosa mais escura
    PINK_LIGHT: '#FF7FAE', // Tonalidade de rosa mais clara

    TEAL: '#009688', // Cor verde-azulado
    TEAL_DARK: '#00685B', // Tonalidade de verde-azulado mais escura
    TEAL_LIGHT: '#4FD1BB', // Tonalidade de verde-azulado mais clara

    GRAY_800: '#121214', //Tonalidade de cinza mais escura/escura
    GRAY_700: '#424242', // Tonalidade de cinza mais escura
    GRAY_600: '#212121', // Tonalidade de cinza mais escura
    GRAY_500: '#424242', // Tonalidade de cinza média
    GRAY_400: '#757575', // Tonalidade de cinza padrão
    GRAY_200: '#BDBDBD', // Tonalidade de cinza mais clara
    GRAY_100: '#F5F5F5' // Tonalidade de cinza muito clara
  },
  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular', // Fonte regular
    BOLD: 'Roboto_700Bold', // Fonte em negrito
    ITALIC: 'Roboto_400Italic', // Fonte em itálico
    LIGHT: 'Roboto_300Light', // Fonte leve
    THIN: 'Roboto_100Thin' // Fonte fina
  },
  FONT_SIZE: {
    SM: 14, // Tamanho de fonte pequeno
    MD: 16, // Tamanho de fonte médio
    LG: 18, // Tamanho de fonte grande
    XL: 24 // Tamanho de fonte extra grande
  },
  SPACING: {
    XS: 4, // Espaçamento extra pequeno
    SM: 8, // Espaçamento pequeno
    MD: 16, // Espaçamento médio
    LG: 24, // Espaçamento grande
    XL: 32 // Espaçamento extra grande
  },
  BORDER_RADIUS: {
    XS: 4, // Raio de borda extra pequeno
    SM: 8, // Raio de borda pequeno
    MD: 12, // Raio de borda médio
    LG: 16, // Raio de borda grande
    XL: 24 // Raio de borda extra grande
  },
  SHADOW: {
    SM: {
      shadowColor: '#000000', // Cor da sombra
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
      shadowOpacity: 0.25, // Opacidade da sombra
      shadowRadius: 4 // Raio da sombra
    },
    MD: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8
    },
    LG: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.75,
      shadowRadius: 12
    },
    XL: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16
    }
  },
  BUTTON: {
    PRIMARY: {
      backgroundColor: '#FF5722', // Cor de fundo do botão primário
      color: '#FFFFFF' // Cor do texto do botão primário
    },
    SECONDARY: {
      backgroundColor: '#3F51B5', // Cor de fundo do botão secundário
      color: '#FFFFFF' // Cor do texto do botão secundário
    },
    SUCCESS: {
      backgroundColor: '#4CAF50',
      color: '#FFFFFF'
    },
    WARNING: {
      backgroundColor: '#FFC107',
      color: '#FFFFFF'
    },
    INFO: {
      backgroundColor: '#2196F3',
      color: '#FFFFFF'
    },
    DANGER: {
      backgroundColor: '#FF4081',
      color: '#FFFFFF'
    }
  },
  ICON: {
    SIZE: {
      SM: 16, // Tamanho do ícone pequeno
      MD: 24, // Tamanho do ícone médio
      LG: 32, // Tamanho do ícone grande
      XL: 48 // Tamanho do ícone extra grande
    },
    COLOR: {
      PRIMARY: '#FF5722', // Cor do ícone primário
      SECONDARY: '#3F51B5', // Cor do ícone secundário
      SUCCESS: '#4CAF50',
      WARNING: '#FFC107',
      INFO: '#2196F3',
      DANGER: '#FF4081',
      DEFAULT: '#000000' // Cor do ícone padrão
    }
  }
};
// O tema oferece uma ampla gama de cores cuidadosamente selecionadas para uso em aplicativos React Native com Styled Components. 
// Com uma variedade de opções, você pode facilmente personalizar e estilizar os elementos da interface do seu aplicativo.

// As cores incluem tons primários e secundários, bem como cores de sucesso, aviso, informação e perigo para ajudar a transmitir 
// mensagens visuais importantes aos usuários. Além disso, há tonalidades de verde, vermelho, azul, amarelo, roxo, laranja, rosa 
// e verde-azulado para adicionar variedade e diversidade visual ao seu aplicativo.

// O tema também fornece uma seleção de famílias de fontes, incluindo regular, em negrito, itálico, leve e fina, para atender 
// às suas necessidades de estilo de texto. Você pode facilmente aplicar essas fontes aos componentes de texto do seu aplicativo.

// Além disso, o tema inclui tamanhos de fonte pré-definidos, bem como espaçamentos e raios de borda para ajudar na criação de 
// layouts coesos e esteticamente agradáveis. Há também sombras disponíveis em diferentes tamanhos para adicionar profundidade e 
// realce aos elementos da interface.

// Para complementar tudo isso, o tema oferece estilos de botão pré-definidos com cores de fundo e texto personalizáveis, 
// bem como tamanhos de ícone e cores para ajudar a destacar e enfatizar elementos visuais em seu aplicativo.