import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import CreateEmployee from "./src/screens/CreateEmployee";
import Profile from "./src/screens/profile";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <PaperProvider>
          {/* <CreateEmployee /> */}
          <Profile />
        </PaperProvider>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    marginTop: Constants.statusBarHeight,
  },
});