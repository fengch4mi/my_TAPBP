import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import halaman-halaman yang diperlukan
import LandingPage from '@/app/index';
import LoginPage from '@/app/auth/LogIn';
import SignUpPage from '@/app/auth/SignUp';
import HomePage from '@/app/(tabs)/HomePage';
// Import halaman tab lainnya sesuai kebutuhan
// import ProfilePage from '@/app/(tabs)/ProfilePage';
// import SettingsPage from '@/app/(tabs)/SettingsPage';

// Membuat navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Komponen untuk tab navigation yang akan muncul setelah login
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // Styling untuk custom tab navigation Anda
        tabBarStyle: {
          // Custom styling untuk tab bar Anda
          backgroundColor: '#ffffff',
          height: 60,
          // tambahkan styling lainnya
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomePage}
        options={{
          // Custom icon dan styling untuk tab Home
          tabBarIcon: ({ focused }) => (
            // Custom icon component Anda
            <YourCustomIcon focused={focused} name="home" />
          ),
        }}
      />
      {/* Tambahkan tab lainnya sesuai kebutuhan
      <Tab.Screen 
        name="Profile" 
        component={ProfilePage} 
        options={{
          tabBarIcon: ({ focused }) => (
            <YourCustomIcon focused={focused} name="profile" />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <YourCustomIcon focused={focused} name="settings" />
          ),
        }}
      /> 
      */}
    </Tab.Navigator>
  );
};

// Komponen utama untuk custom icon (ganti sesuai kebutuhan)
const YourCustomIcon = ({ focused, name }) => {
  // Implementasi icon Anda
  return (
    // Custom icon implementation
    <Text style={{ color: focused ? 'blue' : 'gray' }}>{name}</Text>
  );
};

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }} // Hilangkan header default
      >
        {/* 3 halaman awal tanpa tab navigation */}
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        
        {/* Setelah login/signup, arahkan ke halaman dengan tab navigation */}
        <Stack.Screen 
          name="MainApp" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;