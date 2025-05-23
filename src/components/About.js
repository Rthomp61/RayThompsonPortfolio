import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const About = () => {
  const skills = [
    'AI-native mindset with rapid MVP execution',
    'Voice-enabled UX & automation workflows',
    'Product thinking + user empathy from day one',
    'Real-world experience leading, coaching, and delivering',
  ];

  const services = [
    'AI Integration Projects',
    'Product Design Consulting',
    'Technical Advisory Roles',
    'Speaking Engagements',
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>About Me</Text>
        
        <View style={styles.section}>
          <Text style={styles.description}>
            I'm a former corporate trainer turned AI-native builder — blending a decade of 
            leadership in sales, retail, and operations with cutting-edge skills in AI product 
            development, UX/UI design, and voice-first automation.
          </Text>
          
          <Text style={styles.description}>
            Currently deep into Pursuit's elite AI training program, I've built and shipped 
            multiple real-world apps, including MARS (Medication Automation Reminder System) 
            and EMS (Expense Management System), using tools like React Native, Firebase, 
            vector databases, and the Expo Speech API. I specialize in designing intuitive, 
            human-centered experiences backed by modern tech stacks.
          </Text>
          
          <Text style={styles.description}>
            Every project I touch is built with purpose — from healthcare to personal finance — 
            and I'm passionate about using AI to create scalable, meaningful, and inclusive solutions.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What I Bring to the Table:</Text>
          <View style={styles.skillsList}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Feather name="check-circle" size={20} color="#007AFF" />
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.description}>
            I'm actively looking to join a forward-thinking team or AI-driven company where 
            I can contribute, grow, and scale impactful products.
          </Text>
          
          <Text style={styles.callToAction}>
            Let's build the future — together.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available For:</Text>
          <View style={styles.servicesList}>
            {services.map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceText}>{service}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  scrollView: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  section: {
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    color: '#666',
    lineHeight: 28,
    marginBottom: 20,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  skillsList: {
    gap: 15,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  skillText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    flex: 1,
  },
  callToAction: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  servicesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  serviceItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007AFF',
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
  serviceText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default About;
