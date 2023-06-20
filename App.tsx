import { NativeBaseProvider, Center, Box } from "native-base";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet, Text} from 'react-native'
import {Example} from './components/Example'

function makeColor(x: number) {
  'worklet';
  return `hsl(${Math.round(x * 240)}, 100%, 50%)`;
}

export default function App() {
  /**
   * useSharedValue is a hook that creates a mutable ref object that can be accessed across threads.
   */
  const sharedValue = useSharedValue(0);

  const backgroundColor = useAnimatedStyle(() => {
    return { backgroundColor: makeColor(sharedValue.value) };
  });

  const styles = StyleSheet.create({
    box: {
      backgroundColor: 'red',
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  /**
   * setinterval to change the value of the sharedValue
   * Repeat this process every 5 seconds
   */
  const timeout = 5000;
  setInterval(() => {
    sharedValue.value = withTiming(Math.random());
  }, timeout);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Animated.View style={[styles.box, backgroundColor]}>
          <Text>Hello</Text>
        </Animated.View>
        <Example/>
      </Center>
    </NativeBaseProvider>
  );
}
