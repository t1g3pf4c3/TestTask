import React,{ useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking, KeyboardAvoidingView   } from 'react-native';
import { Icon } from 'react-native-elements'

import VK from '../assets/images/icons/VK.svg'
import Apple from '../assets/images/icons/Apple.svg'
import Odno from '../assets/images/icons/Odno.svg'
import Facebook from '../assets/images/icons/Google.svg'
import Google from '../assets/images/icons/Facebook.svg'

import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'
import CustomInput from '../components/CustomInput'

import styleGuide from '../constants/styleGuide'
// import { Container } from './styles';

export default function Login() {
	const icons = {
		Apple:Apple,
		Odno: Odno,
		Facebook:Facebook,
		VK:VK,
		Google:Google
	}

	const iconarr = ['Google', 'VK', 'Odno', 'Facebook', 'Apple']
	const LinkIcon = ({icon}) => {
		const Linkicon = icons[icon]
		return (<Linkicon style={{ padding: 0,shadowColor: "black", shadowOffset: { width: 3, height: 5}, elevation: 1, shadowOpacity: 0.1,}} />)
	}
	const TextLink = ({text}) => {
		return(
			<Text style={{color:'#7A24E7'}}> { text } </Text>
		)
	}

	const [userData, setUserData] = useState({
		step: 1,
		email: '',
		password: '',
	})
	

  return (
    <KeyboardAvoidingView enabled={false} style={{flex:1, marginHorizontal:24, marginBottom: 54, marginTop: 34, justifyContent:'center'}}>
			

			<View style={{flex:0.5, justifyContent: 'flex-end'}}>
				<View style={{marginBottom: 48}}>
					<Text style={{textAlign:'center', color:'black', fontWeight: '700', fontSize: 28}}> Вход </Text>
					<View style={{alignSelf: 'center', height: 3, width: 53, backgroundColor: '#7A24E7', borderRadius: 2, marginTop: 3}}/>
				</View>
				
				
				<CustomInput />
				<View style={{flexDirection:'row', alignItems: 'center', marginTop: 16}}>
					<Text style={{textDecorationLine:'underline', color: '#7A24E7', fontSize: 14, marginRight: 6}}> Помощь </Text>
					<Icon name='help-circle-outline' type='IonIcon' color='#7A24E7' size={13}/>
				</View>
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginTop: 24, marginBottom: 40}}>
					<RegisterButton/>
					<LoginButton />
				</View>
				
			</View>
			<View style={{flex:0.1}}>
				<View style={{flexDirection:'row', alignItems: 'center'}}> 
					<View style={{height: 2, flex:1, backgroundColor: 'rgba(64,64,64,0.2)'}}/>
					<Text style={{fontSize: 14, marginHorizontal: 15}}> ИЛИ </Text>
					<View style={{height: 2, flex:1, backgroundColor: 'rgba(64,64,64,0.2)'}}/>
				</View>

			</View>

			<View style={{flex:0.4, justifyContent:'space-between'}}>
				<View>
				
				</View>
				<Text > 
					Продолжая, вы принимаете наши <TextLink text='Условия использования'/> и наше <TextLink text='Положение о конфиденциальности'/>
				</Text>
			</View>

		</KeyboardAvoidingView>

  );
	

}
/*<View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
				{
					iconarr.map((e,i) => {
						return(
						<LinkIcon icon={e} key={i}/>
					)
				})
				}
			</View> */

