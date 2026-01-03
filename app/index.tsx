import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "../assets/product.json";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          <Text>{item.id}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price}</Text>
          <Text>{"\n"}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
