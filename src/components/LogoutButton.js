import { useState, useEffect } from "react";
import { View, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const colorPalette = {
  tea_rose_red: '#eac8caff',
  pale_purple: '#f2d5f8ff',
  pink_lavender: '#e6c0e9ff',
  lilac: '#bfabcbff',
  cool_gray: '#8d89a6ff',
};

export default function LogoutButton({ title, color }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newColor, setNewColor] = useState(color);

  return (
    <View>
      <Button
        title={newTitle}
        color={newColor}
        onPress={() => {
          setNewTitle("Logout Successful");
          setNewColor('#eac8caff'); 
        }}
      />
    </View>
  );
}



