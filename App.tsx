import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { s } from './App.styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}></SafeAreaView>
    </SafeAreaProvider>
  );
}
