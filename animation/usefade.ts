import { SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

const useFade = (value: number): [SharedValue<number>, {opacity: number}] => {
  const fade = useSharedValue(value);
  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: fade.value,
    };
  },[]);

  return [fade, fadeStyle];
};

export default useFade;