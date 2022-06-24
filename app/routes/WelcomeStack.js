import { createStackNavigator } from "@react-navigation/native-stack"
import { createAppContainer } from "@react-navigation/native"

import Onboarding from '../components/Onboarding'
import Login from '../components/Login'

const screens = {
	Onboarding: {
		screen: Onboarding
	},
	Login: {
		screen: Login
	},
}

const WelcomeStack = createStackNavigator(screens);

export default createAppContainer(WelcomeStack);
