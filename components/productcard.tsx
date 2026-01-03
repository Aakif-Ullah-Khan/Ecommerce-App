import { Text, View } from "react-native";

export default function Product({ item  }:any) {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.id}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
      <Text>{"\n"}</Text>
    </View>
  );
}