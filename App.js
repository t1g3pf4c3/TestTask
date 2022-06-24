import React,{ useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


// import Navigator from './app/routes/WelcomeStack'
import Onboarding from './app/components/Onboarding';
import Login from './app/components/Login'
import OnboardingItem from './app/components/OnboardingItem';

const Loading = () => {
	return (<View>
		<ActivityIndicator size='large'/>
	</View>
	)}
export default function App() {
	const [loading, setLoading] = useState(true);
	const [viewedOnboarding, setViewedOnboarding] = useState(false);

  return (
    <View style={styles.container}>
			<Onboarding/>	
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
