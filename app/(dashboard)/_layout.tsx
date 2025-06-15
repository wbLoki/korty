import UserOnly from '@/components/auth/UserOnly';
import NavBar from '@/components/ui/NavBar';
import { Tabs } from 'expo-router';

const DashboardLayout = () => {
    return (
        <UserOnly>
            <Tabs
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <NavBar {...props} />}
            >
                <Tabs.Screen name='home' />
                <Tabs.Screen name='search' />
                <Tabs.Screen name='profile' />
                <Tabs.Screen name='test' />
            </Tabs>
        </UserOnly>
    );
};

export default DashboardLayout;
