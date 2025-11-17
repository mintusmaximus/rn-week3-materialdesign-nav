import { View, Text } from "react-native";
import styles from "../style";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigationTypes";

type Props = StackScreenProps<RootStackParamList, "SecondScreen">;

const SecondScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
};

export default SecondScreen;
