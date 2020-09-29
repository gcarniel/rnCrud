import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default ({route, navigation}) => {

  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder='Informe o nome'
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput style={style.input}
        onChangeText={email => setUser({...user, email})}
        placeholder='Informe o e-mail'
        value={user.email}
      />
      <Text>Foto</Text>
      <TextInput style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder='Informe a foto'
        value={user.avatarUrl}
      />
      <Button 
        title='Salvar'
        onPress={() => {
            navigation.goBack()
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form:{
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }
})
