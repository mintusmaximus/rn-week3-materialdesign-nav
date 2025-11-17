import { View, Text } from "react-native";
import styles from "../style";
import { useLayoutEffect } from "react";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    console.log("rendered HomeScreen");
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  );
}
