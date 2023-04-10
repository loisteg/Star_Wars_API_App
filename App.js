import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
}
