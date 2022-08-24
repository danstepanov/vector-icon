import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@expo/vector-icons/Entypo';

type RootStackParamsList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Home = () => (
  <SafeAreaView>
    <StatusBar />
    <Text>Home</Text>
    <Entypo name="dots-three-vertical" size={24} color="black" />
  </SafeAreaView>
)

export default function App() {
  return (
    <NavigationContainer>
			<Stack.Navigator>
	      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
