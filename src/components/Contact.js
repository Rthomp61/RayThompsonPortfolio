import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Linking,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { sendEmail } from '../utils/emailService';

const { width } = Dimensions.get('window');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      Alert.alert('Success', 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialPress = (url) => {
    Linking.openURL(url);
  };

  const isDesktop = width > 768;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Get In Touch</Text>
        <Text style={styles.subtitle}>
          Have a project in mind? Let's discuss how I can help.
        </Text>

        <View style={[styles.formContainer, isDesktop && styles.desktopLayout]}>
          {/* Contact Form */}
          <View style={[styles.formSection, isDesktop && styles.formSectionDesktop]}>
            <Text style={styles.formTitle}>Send a Message</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Name *"
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholderTextColor="#999"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Email *"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Subject"
              value={formData.subject}
              onChangeText={(value) => handleInputChange('subject', value)}
              placeholderTextColor="#999"
            />
            
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Message *"
              value={formData.message}
              onChangeText={(value) => handleInputChange('message', value)}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              placeholderTextColor="#999"
            />
            
            <TouchableOpacity
              style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text style={styles.submitButtonText}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Contact Information */}
          <View style={[styles.infoSection, isDesktop && styles.infoSectionDesktop]}>
            <Text style={styles.infoTitle}>Contact Information</Text>
            
            <View style={styles.infoItem}>
              <Feather name="mail" size={20} color="#007AFF" />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>Ray.thompson@pursuit.org</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Feather name="map-pin" size={20} color="#007AFF" />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>Asbury Park, New Jersey</Text>
              </View>
            </View>

            <Text style={styles.socialTitle}>Social Profiles</Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialPress('https://x.com/AInativebuilder')}
              >
                <Feather name="twitter" size={24} color="#1DA1F2" />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialPress('https://www.linkedin.com/in/ray-thompson-305373356/')}
              >
                <Feather name="linkedin" size={24} color="#0077B5" />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialPress('https://github.com/dashboard')}
              >
                <Feather name="github" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 26,
  },
  formContainer: {
    gap: 40,
  },
  desktopLayout: {
    flexDirection: 'row',
    gap: 60,
  },
  formSection: {
    flex: 1,
  },
  formSectionDesktop: {
    flex: 2,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    flex: 1,
  },
  infoSectionDesktop: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 15,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Contact;
