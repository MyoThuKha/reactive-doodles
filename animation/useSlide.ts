import { SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const useSlide = (
  position: number
): [SharedValue<number>, { transform: { translateX: number }[] }] => {
  const value = useSharedValue(position);
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: value.value }],
    };
  }, []);

  return [value, style];
};

export default useSlide;