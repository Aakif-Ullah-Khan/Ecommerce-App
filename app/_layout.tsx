import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function RootLayout() {
  return (
    
    <GluestackUIProvider mode="dark">
      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </Stack>
    </GluestackUIProvider>
  
  );
}
