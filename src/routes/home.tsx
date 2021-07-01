import LinearGradient from 'react-native-linear-gradient';

import {StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <LinearGradient
      colors={['#CC90CC', '#FFF', 'pink']}
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <Text>Home Screen</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
