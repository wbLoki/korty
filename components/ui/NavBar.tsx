import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

const AnimatedPlatformPressable =
    Animated.createAnimatedComponent(PlatformPressable);

const NavBar: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    const { colors } = useTheme();
    const backgroundColor = useThemeColor('tagBackground');
    const { buildHref } = useLinkBuilder();

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                if (['_sitemap', '+not-found'].includes(route.name))
                    return null;
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <AnimatedPlatformPressable
                        layout={LinearTransition.springify().mass(0.4)}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            styles.tabItem,
                            isFocused && {
                                minWidth: 112,
                                backgroundColor,
                                paddingHorizontal: 14,
                            },
                        ]}
                        key={route.key}
                    >
                        {getIconByRouteName(
                            route.name,
                            isFocused ? colors.primary : colors.text
                        )}
                        {isFocused && (
                            <Text
                                style={[
                                    {
                                        color: isFocused
                                            ? colors.primary
                                            : colors.text,
                                    },
                                    styles.text,
                                ]}
                            >
                                {label as string}
                            </Text>
                        )}
                    </AnimatedPlatformPressable>
                );
            })}
        </View>
    );

    function getIconByRouteName(routeName: string, color?: string) {
        switch (routeName) {
            case 'home':
                return <Ionicons name='home' size={20} color={color} />;
            case 'search':
                return <Ionicons name='search' size={20} color={color} />;
            case 'profile':
                return <Ionicons name='person' size={20} color={color} />;
            case 'test':
                return <Ionicons name='telescope' size={20} color={color} />;
            default:
                return (
                    <Ionicons name='qr-code-outline' size={20} color={color} />
                );
        }
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        width: 'auto',
        alignSelf: 'center',
        bottom: 30,
        borderRadius: 9999,
        padding: 4,
    },
    tabItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        paddingHorizontal: 20,
        marginHorizontal: 4,
        borderRadius: 24,
    },
    text: {
        marginLeft: 8,
        fontSize: 14,
        textTransform: 'capitalize',
    },
});

export default NavBar;
