import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = ()=>{}
  return (
    <TouchableOpacity 
    onPress={handlePress}
    className="items-center justify-center space-y-2"
    >
      <View className={`w-24 h-24 shadow-sm rounded-full ${type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image
          source={imageSrc} 
          className ="w-full h-full object-contain"/>
      </View>
      <Text className ="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer