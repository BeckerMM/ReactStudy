
import { Text, View,TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button} from 'react-native-web';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View className="h-screen w-screen bg-[#F3F3F3] flex justify-center items-center">
      <View className="w-5/6 h-3/6 bg-transparent gap-5">

        <TextInput
          className="h-10 w-full border-none bg-[#D9D9D9] rounded-sm p-2"
          onChangeText={text => onChangeText(text)}
          placeholder='Enter your name'
        />
          <TextInput
          className="h-10 w-full border-none  m-0 bg-[#D9D9D9] rounded-sm p-2"
          onChangeText={text => onChangeText(text)}
          placeholder='Enter your name'
        
        />
        <Button
          onPress={() => alert('Button Clicked')}
          title="Click Me"
          color="#242F40"

        />
      </View>
    </View>
  );
}

