import { useEffect } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {  withTiming } from "react-native-reanimated";
import useFade from "../animation/usefade";
import useSlide from "../animation/useSlide";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const HomePage = () => {
  const [fade, fadeStyle] = useFade(0);
  const [slide, slideStyle] = useSlide(height * -1);

  useEffect(() => {
    fade.value = withTiming(1, { duration: 6000 });
    slide.value = withTiming(0, { duration: 5000 });
  }, []);

  const images = [
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* appbar */}
        <Animated.View style={[fadeStyle, { height: height / 8 }]}>
          <Text style={styles.display}>Hello world</Text>
          {/* <View style={{borderBottomWidth: StyleSheet.hairlineWidth}}/> */}
        </Animated.View>

        {/* images */}
        <View style={{ width: width, height: height / 2.5 }}>
          <FlatList
            scrollEnabled={false}
            data={images}
            keyExtractor={(index) => index}
            renderItem={({ item: each }) => {
              return (
                <Animated.View
                  style={[
                    slideStyle,
                    styles.imageFrame,
                    {
                      top: images.indexOf(each) * 20,
                      left: images.indexOf(each) * 20,
                    },
                  ]}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <Image
                      source={{ uri: each }}
                      style={[
                        styles.image,
                        {
                          width: width / 1.2,
                          height: height / 3,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  display:{
    fontSize: 60,
    fontWeight: "800",
  },
  image: {
  },
  imageFrame: {
    position: "absolute",
    borderWidth: 1,
    padding: 4,
  },
});
 
export default HomePage;