import { View, Text, StyleSheet, Dimensions, Image, FlatList } from "react-native";
import { useEffect,useState } from "react";
import React from "react";
import { fetchAllProducts } from "../utilities/network_util";
import { Products } from "../models/productModel";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const HomePage = () => {
  const [products, setProducts] = useState<Products[]>();
  useEffect(() => {
    fetchAllProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <View>
      <Text style={homePageStyle.displayText}>
        We Deliever the best products
      </Text>

      {/* Products */}
      <View style={homePageStyle.product}>
        {/* <Image source={{ uri: "" }} /> */}
        <FlatList
          data={products}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <View>
                <Image source={{uri: item.image}} style={{objectFit: "cover",width: 100,height: 100}}/>
            </View>;
          }}
        />
      </View>
    </View>
  );
};

const homePageStyle = StyleSheet.create({
  bottomBar: {},
  displayText: {
    fontFamily: "Poppins",
    fontSize: screenWidth / 15,
  },
  product: {
    width: screenWidth / 1.2,
    height: screenHeight / 2.5,
    backgroundColor: "pink",
    borderRadius: screenWidth / 8,
  },
});
export default HomePage;
