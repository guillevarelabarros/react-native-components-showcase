import React, { useState } from 'react';
import { View, Button, Modal, Platform } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Modal Content" safe />
          </View>

          <View style={{ flex: 1 }} />

          <View style={{ padding: 12 }}>
            <Button
              title="Cerrar Modal"
              onPress={() => setIsVisible(false)}
              color={Platform.OS === 'android' ? '#1e88e5' : undefined}
            />
          </View>

          {/* <Button
            title="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          /> */}
        </View>
      </Modal>
    </CustomView>
  );
};
