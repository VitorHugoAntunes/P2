import { Home } from "@/screens/Home";
import { Container } from "@/styles/Global";
import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Carregando......</Text>;
  }
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Container>
        <Home />
      </Container>
    </SafeAreaView>
  );
}
