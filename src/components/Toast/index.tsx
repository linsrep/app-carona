import React from 'react';
import { Text } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';
/** STYLES */
import { styles } from "./styles";

type Props = {
  message: string;
  color?:string;
}

export default function Toast({ message, color }: Props) {
  return (
    <Animated.View
      style={[styles.container, { backgroundColor: color} ]}
      entering={SlideInUp.duration(700)}
      exiting={SlideOutUp.duration(500)}
    >
      <Text style={styles.text}>
        {message}
      </Text>
    </Animated.View>
  )
}