import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import * as React from "react";

export default function Mybar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => {
            navigation.navigate("SecondScreen");
          }}
        />
      ) : null}
    </Appbar.Header>
  );
}
