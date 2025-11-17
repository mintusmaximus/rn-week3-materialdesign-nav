import { View, Text } from "react-native";
import styles from "../style";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigationTypes";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  );
}
