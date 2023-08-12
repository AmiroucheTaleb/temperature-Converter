import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { S } from "./ButtonConvert.style";

export default function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={S.button} onPress={onPress}>
      <Text style={S.text}>Convertir en {unit} </Text>
    </TouchableOpacity>
  );
}
