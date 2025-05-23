import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Footer = ({ onNavigate }) => {
  const navigationItems = [
    { title: 'Projects', section: 'projects' },
    { title: 'About', section: 'about' },
    { title: 'Contact', section: 'contact' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Navigation */}
        <View style={styles.navigation}>
          {navigationItems.map((item, index) => (
            <TouchableOpacity
              key={item.section}
              onPress={() => onNavigate(item.section)}
              style={styles.navButton}
            >
              <Text style={styles.navText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Copyright */}
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            © 2025 Ray Thompson. All rights reserved.
          </Text>
          <Text style={styles.estText}>Est. 2025</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 40,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  copyright: {
    alignItems: 'center',
    gap: 5,
  },
  copyrightText: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
  },
  estText: {
    color: '#999',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default Footer;
