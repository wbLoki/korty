import UserOnly from '@/components/auth/UserOnly';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const DashboardLayout = () => {
    const active = useThemeColor('tabBarActive');
    const inActive = useThemeColor('tabBarInactive');
    return (
        <UserOnly>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: useThemeColor('navBar'),
                        paddingTop: 10,
                    },
                    tabBarActiveTintColor: active,
                    tabBarInactiveTintColor: inActive,
                    tabBarLabelPosition: 'beside-icon',
                    tabBarItemStyle: { borderRadius: 20 },
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={24}
                                color={focused ? active : inActive}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='search'
                    options={{
                        title: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name='search'
                                size={24}
                                color={focused ? active : inActive}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                size={24}
                                color={focused ? active : inActive}
                            />
                        ),
                    }}
                />
            </Tabs>
        </UserOnly>
    );
};

export default DashboardLayout;

