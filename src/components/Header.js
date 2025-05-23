import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const { width } = Dimensions.get('window');

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Projects', section: 'projects' },
    { title: 'About', section: 'about' },
    { title: 'Contact', section: 'contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.logo}>Ray Thompson</Text>
        
        {width > 768 ? (
          // Desktop navigation
          <View style={styles.desktopNav}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.section}
                style={styles.navItem}
                onPress={() => handleNavigation(item.section)}
              >
                <Text style={styles.navText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          // Mobile navigation
          <TouchableOpacity
            style={styles.menuButton}
            onPress={toggleMenu}
          >
            <Feather
              name={isMenuOpen ? 'x' : 'menu'}
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>

      {isMenuOpen && width <= 768 && (
        <View style={styles.mobileMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.section}
              style={styles.mobileNavItem}
              onPress={() => handleNavigation(item.section)}
            >
              <Text style={styles.mobileNavText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    ...Platform.select({
      web: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      },
    }),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: 30,
  },
  navText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuButton: {
    padding: 5,
  },
  mobileMenu: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
  },
  mobileNavItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  mobileNavText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});

export default Header;
