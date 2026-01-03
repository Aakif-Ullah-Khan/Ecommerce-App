import Product from "@/components/productcard";
import { FlatList } from "react-native";
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
        renderItem={({ item }) => <Product item={item} />}
      />
    </SafeAreaView>
  );
}
