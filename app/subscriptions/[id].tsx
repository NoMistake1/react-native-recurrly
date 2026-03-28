import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const subscriptionId = Array.isArray(id) ? id[0] : id;

    if (!subscriptionId) {
      return (
        <View>
          <Text>Subscription Details: {subscriptionId}</Text>
          <Link href="/">Go back</Link>
        </View>
      );
  }
}

export default SubscriptionDetails