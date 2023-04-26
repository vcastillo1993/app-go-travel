import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'/* Libreria para crear efectos de animacion sobre componentes */
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <View className="bg-white flex-1 relative">

      {/* First Section */}

      <View className="flex-row px-6 mt-14 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className=" text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}

      <View className="px-6 mt-8 space-y-2">
        <Text className="text-[#3C6072] text-[40px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[36px]">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </View>

      {/* Circle session */}

      <View className="w-[370px] h-[370px] bg-[#00BCC9] rounded-full absolute bottom-32 -right-36" ></View>
      <View className="w-[370px] h-[370px] bg-[#E99265] rounded-full absolute -bottom-24 -left-36" ></View>

      {/* IMAGE CONTAINER */}

      <View className="flex-1 relative items-center justify-center">
        
        <Animatable.Image
          animation="pulse"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        <TouchableOpacity 
        onPress={()=>navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9]
        rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className=" w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[36px] font-semibold">
              Go
            </Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

