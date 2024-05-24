import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="(support)/call-us" />
      <Stack.Screen name="(support)/chat-with-us" />
    </Stack>
  );
}
