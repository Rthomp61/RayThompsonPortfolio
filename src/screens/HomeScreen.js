import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const scrollToSection = (sectionName) => {
    // Simple scroll implementation
    console.log('Navigate to:', sectionName);
  };

  return (
    <View style={styles.container}>
      <Header onNavigate={scrollToSection} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Projects />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer onNavigate={scrollToSection} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;
