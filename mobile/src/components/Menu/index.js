import React from 'react';

import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://github.com/jowpurcinelli"
          size={80}
          fgColor="#fff"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Help</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>My profile</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configure card</NavText>
        </NavItem>
        <NavItem>
          <Icon name="menu-item" size={20} color="#FFF" />
          <NavText>Configure **</NavText>
        </NavItem>
        <NavItem>
          <Icon name="***" size={20} color="#FFF" />
          <NavText>Configure **</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText> App preferences</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>EXIT</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
