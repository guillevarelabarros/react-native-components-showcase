import React, { useContext } from 'react';
import {
  // View,
  // Text,
  StyleSheet,
  // Pressable,
  Animated,
  Easing,
  Button,
  View,
} from 'react-native';
// import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);

  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn({});
            startMovingTopPosition({
              initialPosition: -100,
              easing: Easing.elastic(1),
              duration: 750,
            });
          }}
          // styles={{ marginTop: 10 }}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="FadeOut"
          onPress={() => fadeOut({})}
          // styles={{ marginTop: 10 }}
        />
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
