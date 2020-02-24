import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultScreen from './src/screens/ResultScreen'

const navigator = createStackNavigator({
    Search: SearchScreen,
    Result: ResultScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Search best restaurants in your area'
    }
})

export default createAppContainer(navigator)