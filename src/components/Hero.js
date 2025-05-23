import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Hero = () => {
  const handleSocialPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Profile Image Placeholder */}
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImagePlaceholder}>
            <Feather name="user" size={80} color="#666" />
          </View>
        </View>

        <Text style={styles.name}>Ray Thompson</Text>
        <Text style={styles.title}>AI Portfolio</Text>
        <Text style={styles.website}>raythompson.com</Text>

        <Text style={styles.description}>
          AI-native builder blending leadership experience with cutting-edge AI product development, 
          UX/UI design, and voice-first automation.
        </Text>

        {/* Social Links */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialPress('https://www.linkedin.com/feed/')}
          >
            <Feather name="linkedin" size={24} color="#0077B5" />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialPress('https://github.com/dashboard')}
          >
            <Feather name="github" size={24} color="#333" />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height * 0.8,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  content: {
    alignItems: 'center',
    maxWidth: 600,
    width: '100%',
  },
  profileImageContainer: {
    marginBottom: 30,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ffffff',
    ...Platform.select({
      web: {
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
      },
    }),
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#007AFF',
    marginBottom: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  website: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
      },
    }),
  },
  socialText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default Hero;
