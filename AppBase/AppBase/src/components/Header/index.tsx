import React from 'react';
import { Container, BackButton, BackIcon, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton: boolean;
  title: string;
}

export function Header({ showBackButton = false, title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="arrow-left" />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
}
