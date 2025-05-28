import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';

const DashboardLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: useThemeColor('navBar'),
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: useThemeColor('tabBarActive'),
                tabBarInactiveTintColor: useThemeColor('tabBarInactive'),
            }}
        >
            <Tabs.Screen name='home' options={{ title: 'Home' }} />
            <Tabs.Screen name='search' options={{ title: 'Search' }} />
            <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
        </Tabs>
    );
};

export default DashboardLayout;
