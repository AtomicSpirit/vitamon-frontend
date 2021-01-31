import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
export default class App extends React.Component {
  state = { isPedometerAvailable: false, steps: 0 };
  componentDidMount() {
    this.checkPedometer();
    this.getSteps();
  }
  async checkPedometer() {
    const result = await Pedometer.isAvailableAsync();
    this.setState({ isPedometerAvailable: result });
  }
  async getSteps() {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    const { steps } = await Pedometer.getStepCountAsync(start, end);
    this.setState({ steps });
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Today's Steps {this.state.steps}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
