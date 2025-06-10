import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs initialRouteName='home' screenOptions={{headerShown : false}}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="booking" options={{ title: 'Booking' }} />
    </Tabs>
  ) 
}
