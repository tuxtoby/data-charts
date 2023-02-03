import { Chart } from './views/Chart.tsx';

import * as React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Chart />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(appName, () => Main);
