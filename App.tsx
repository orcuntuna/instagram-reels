import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Posts from "./components/Posts";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Posts />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
