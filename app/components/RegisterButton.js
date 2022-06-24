
import React,{ useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

import styleGuide from '../constants/styleGuide'

// import { Container } from './styles';

export default function LoginButton() {
	const width = useWindowDimensions();
	return (
		<View style={[styleGuide.defaultButton, {backgroundColor: 'white', borderColor: '#7A24E7', borderWidth: 2}]}>
			<TouchableOpacity >
				<Text style={[styleGuide.inlineText, {color: 'black', fontWeight:'400'}]}>
					Регистрация
				</Text>
			</TouchableOpacity>
			

		</View>

	);
}


