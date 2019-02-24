import React from 'react';
import {
	StyleSheet,
	StatusBar,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import logo from './images/logo.png';

const WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<View style={styles.logo}>
					<Image source={logo} style={styles.image} />
				</View>
				<View style={styles.appTitleContainer}>
					<Text style={styles.appTitle}>Secure your Data With Locked</Text>
					<Text style={styles.appInfo}>Locked by autoLock for 39 minutes</Text>
				</View>
				<View style={styles.formContainer}>
					<TextInput
						placeholder="Enter your password"
						backgroundColor="#fff"
						secureTextEntry
						style={styles.input}
					/>
					<TouchableOpacity
						title="Unlock"
						style={styles.button}
						onPress={() => console.log('Testing')}
					>
						<Text style={styles.buttonText}>Unlock</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3B475E',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		backgroundColor: '#46586F',
		justifyContent: 'center',
		alignItems: 'center',
		width: 64,
		height: 64,
		borderRadius: 64
	},
	appTitleContainer: {
		marginTop: 16,
		justifyContent: 'center'
	},
	appTitle: {
		textAlign: 'center',
		lineHeight: 20,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff'
	},
	appInfo: {
		marginTop: 16,
		textAlign: 'center',
		fontSize: 14,
		color: '#A6AEB7'
	},
	image: {
		width: 40,
		height: 40
	},
	formContainer: {
		// flex: 1,
		marginTop: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: WIDTH - 60,
		height: 60,
		borderRadius: 5,
		paddingLeft: 10
	},
	button: {
		marginTop: 30,
		backgroundColor: '#FF8E23',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: WIDTH - 60,
		height: 60
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '400'
	}
});
