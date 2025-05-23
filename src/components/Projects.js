import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const { width } = Dimensions.get('window');

const Projects = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Top Projects</Text>
        <Text style={styles.subtitle}>
          Showcasing my work solving real-world problems with AI
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.projectsContainer}
          style={styles.scrollView}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ScrollView>
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
  scrollView: {
    width: '100%',
  },
  projectsContainer: {
    paddingHorizontal: width > 768 ? 0 : 10,
    gap: 30,
  },
});

export default Projects;
