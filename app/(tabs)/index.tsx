import { View, Text } from 'react-native';
import { Message } from '@/components/Message';
import VintageSVG from '@/components/svg/vintage.svg';

export default function HomeScreen() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <VintageSVG 
          width={300}
          height={300}
        />
        <Message />
    </View>
  );
}