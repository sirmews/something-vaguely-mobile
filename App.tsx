import { NativeBaseProvider, Center } from "native-base";
import {Example} from './components/Example'

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example/>
      </Center>
    </NativeBaseProvider>
  );
}
