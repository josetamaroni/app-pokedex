import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // headerStyle:{
                //     elevation: 0,
                //     shadowColor: 'transparent'
                // },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Pokemon" component={PokemonScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;