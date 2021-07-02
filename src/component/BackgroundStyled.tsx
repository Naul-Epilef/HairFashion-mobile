import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element;
}

const BackgroundStyled: React.FC<Props> = ({children}: Props) => {
  return (
    <LinearGradient
      colors={['#CC90CC', '#FFF', 'pink']}
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      {children}
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

export default BackgroundStyled;
