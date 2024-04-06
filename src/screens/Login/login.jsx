import { useNavigationContainerRef } from '@react-navigation/native';
import { Text, View,TextInput,Button  } from 'react-native';

const Login = ()=>{
    const navegationRef = useNavigationContainerRef();
    return (
        <View className="h-full w-full bg-[#F3F3F3] flex justify-center items-center">
        <View className="w-5/6 h-3/6 bg-transparent flex justify-evenly">
          <TextInput
            className="h-10 w-full border-none bg-[#D9D9D9] rounded-sm p-2"
            onChangeText={(text) => onChangeText(text)}
            placeholder="Enter your name"
          />
          <TextInput
            className="h-10 w-full border-none bg-[#D9D9D9] rounded-sm p-2"
            onChangeText={(text) => onChangeText(text)}
            placeholder="Enter your name"
          />
          <Button
            onPress={() => {navegationRef.navigate("Teste")}}
            title="Click Me"
            color="#242F40"
          />
            </View>
    </View>
    )
}

export default Login;