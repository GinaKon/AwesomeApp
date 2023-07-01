import React from 'react';
import { View, Button } from 'react-native';

const LogoutButton = ({ onPress }) => {
  return (
    <View>
      <Button title="Logout" onPress={onPress} />
    </View>
  );
};

export default LogoutButton;
