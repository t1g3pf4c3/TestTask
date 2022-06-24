
import React,{ useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

import styleGuide from '../constants/styleGuide'

// import { Container } from './styles';

export default function LoginButton() {
	const width = useWindowDimensions();
	return (
		<View style={[styleGuide.defaultButton, {marginLeft: 18}]}>
			<TouchableOpacity>
				<Text style={styleGuide.inlineText}>
					Войти
				</Text>
			</TouchableOpacity>
		</View>

	);
}

