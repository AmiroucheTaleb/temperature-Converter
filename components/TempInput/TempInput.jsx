import { View, TextInput, Text } from "react-native";
import React from "react";
import { S } from "./TempInput.style";

const TempInput = ({ unit, onChangeText }) => {
  return (
    <View style={S.container}>
      <TextInput
        style={S.input}
        placeholder='tappez la temperature'
        keyboardType='numeric'
        maxLength={4}
        onChangeText={onChangeText}
      />
      <Text style={S.unit}> {unit} </Text>
    </View>
  );
};

export default TempInput;
