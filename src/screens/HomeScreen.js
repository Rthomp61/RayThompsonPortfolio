import React, { useRef, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const scrollViewRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    // Add header padding for web to account for fixed header
    if (Platform.OS === 'web') {
      document.body.style.paddingTop = '80px';
    }
  }, []);

  const scrollToSection = (sectionName) => {
    const section = sectionRefs.current[sectionName];
    if (section && scrollViewRef.current) {
      section.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (x, y) => {
          scrollViewRef.current.scrollTo({
            y: y - (Platform.OS === 'web' ? 80 : 0), // Account for fixed header on web
            animated: true,
          });
        },
        () => {}
      );
    }
  };

  return (
    <>
      <Header onNavigate={scrollToSection} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <div
          ref={(ref) => (sectionRefs.current.projects = ref)}
          style={{ minHeight: 1 }}
        >
          <Projects />
        </div>

        {/* About Section */}
        <div
          ref={(ref) => (sectionRefs.current.about = ref)}
          style={{ minHeight: 1 }}
        >
          <About />
        </div>

        {/* Contact Section */}
        <div
          ref={(ref) => (sectionRefs.current.contact = ref)}
          style={{ minHeight: 1 }}
        >
          <Contact />
        </div>

        {/* Footer */}
        <Footer onNavigate={scrollToSection} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
