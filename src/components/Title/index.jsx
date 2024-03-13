import { Text } from 'react-native';
import React from 'react';

import styles from './styles';

export default function Title({ title }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  )
}