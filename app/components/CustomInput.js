
import React,{ useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

// import { Container } from './styles';

function CustomInput() {

	const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
				placeholder="Введите ваш адрес электронной почты"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    // marginVertical: 16,
    borderBottomWidth: 2,
		borderRadius: 10,
		borderColor: "#7A24E7",
    padding: 10,
		backgroundColor: "#F6F6F6",
  },
});

export default CustomInput;
