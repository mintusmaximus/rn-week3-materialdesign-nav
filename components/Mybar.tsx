import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import * as React from "react";
import { StackHeaderProps } from "@react-navigation/stack";

export default function Mybar({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) {
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
