import { React, Text, View, Image } from '../../common';
import { IMAGES } from '../../assets/index';
import { getCurrentTime } from '../../utils';
import styles from './styles';

export default () => (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to React-Native</Text>
        <Text style={styles.subtitle}>{`App started at ${getCurrentTime()}`}</Text>
        <Image resizeMode="contain" source={IMAGES.ReactNative} style={styles.image} />
    </View>
);
