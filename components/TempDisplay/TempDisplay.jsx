import { View, Text } from "react-native";
import { S } from "./TempDisplay.style";

export default function TempDisplay({ value, unit }) {
  return (
    <View>
      <Text style={S.text}>
        {value} {unit}
      </Text>
    </View>
  );
}
