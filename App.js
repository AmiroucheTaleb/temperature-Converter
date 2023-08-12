import { Alert, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import Hot from "./assets/hot.png";
import Cold from "./assets/cold.png";
import dev from "./assets/black.png";
import TempInput from "./components/TempInput/TempInput";
import TempDisplay from "./components/TempDisplay/TempDisplay";
import { useEffect, useState } from "react";
import { getOppositeUnit, convertToUnit, isColdTemp } from "./services/temperature-service";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState("0");
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackgroud, setCurrentBackgroud] = useState();

  useEffect(() => {
    const tempAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(tempAsFloat)) {
      const isColdBackgroud = isColdTemp(inputValue, currentUnit);
      setCurrentBackgroud(isColdBackgroud ? Cold : dev);
    }
  }, [inputValue, currentUnit]);

  function getDisplayedTemp() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) ? "" : convertToUnit(oppositeUnit, inputValue).toFixed(1);
  }
  const oppositeUnit = getOppositeUnit(currentUnit);

  const modalAlert = () =>
    Alert.alert(
      "Amirouche Taleb biensur !!!!!!! ",
      "devloppeur fullstack MERN en plein apprentissage de React native ",
      [{ text: "OKeeey" }]
    );

  return (
    <SafeAreaProvider>
      <ImageBackground style={s.container} source={currentBackgroud}>
        <View style={s.workspace}>
          <TempDisplay value={getDisplayedTemp()} unit={oppositeUnit} />
          <TempInput onChangeText={setInputValue} unit={currentUnit} />
          <View>
            <ButtonConvert
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={s.button} onPress={modalAlert}>
          <Text>Qui à coder cette App ?</Text>
        </TouchableOpacity>
        <Button
          title={isDevMode ? "Back to Normal" : "Activate Dev Mode"}
          onPress={toggleDevMode}
        />
      </ImageBackground>
    </SafeAreaProvider>
  );
}
