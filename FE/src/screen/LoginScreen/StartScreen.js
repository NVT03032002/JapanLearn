import React from 'react'
// import Background from 'src/components/Background'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>こんにちは </Header>
      <Paragraph>
        Let's learn Japanese together
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('JLPTLevelScreen')}
      >
        Guest
      </Button>
    </Background>
  )
}
