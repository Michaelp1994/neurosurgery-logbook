import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useLoginMutation } from '../graphql/generated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ navigation }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMutation] = useLoginMutation();

  async function onSubmit() {
    if (!email || !password) {
      return false;
    }
    try {
      const { data } = await loginMutation({
        variables: { input: { email, password } },
      });
      if (data?.login.token) {
        await AsyncStorage.setItem('token', data.login.token);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  return (
    <Wrapper>
      <Card>
        <Title>Login</Title>
        <UsernameInput value={email} onChangeText={setUsername} />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <SubmitButton title="Submit" onPress={onSubmit} />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  height: 50%;
  padding: 50px 50px;
  width: 90%;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 12px;
`;

const UsernameInput = styled.TextInput`
  height: 40px;
  width: 100%;
  margin-bottom: 8px;

  border: 1px solid black;
  padding: 10px;
`;

const PasswordInput = styled.TextInput`
  height: 40px;
  width: 100%;
  margin-bottom: 24px;

  border: 1px solid black;
  padding: 10px;
`;

const SubmitButton = styled.Button`
  width: 100%;
`;
export default App;
