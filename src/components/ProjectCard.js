import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const cardWidth = width > 768 ? 500 : width - 40;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      {/* Image Carousel */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Feather name="image" size={60} color="#999" />
          <Text style={styles.imageText}>
            {project.images[currentImageIndex]}
          </Text>
        </View>
        
        {/* Carousel Controls */}
        <TouchableOpacity style={styles.prevButton} onPress={prevImage}>
          <Feather name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={nextImage}>
          <Feather name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Image Indicators */}
        <View style={styles.indicators}>
          {project.images.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.indicator,
                index === currentImageIndex && styles.activeIndicator
              ]}
              onPress={() => setCurrentImageIndex(index)}
            />
          ))}
        </View>
      </View>

      {/* Project Content */}
      <View style={styles.content}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        
        <View style={styles.problemSolution}>
          <Text style={styles.sectionTitle}>Problem:</Text>
          <Text style={styles.sectionText}>{project.problem}</Text>
          
          <Text style={styles.sectionTitle}>Solution:</Text>
          <Text style={styles.sectionText}>{project.solution}</Text>
          
          <Text style={styles.sectionTitle}>Impact:</Text>
          <Text style={styles.sectionText}>{project.impact}</Text>
        </View>

        <View style={styles.techStack}>
          <Text style={styles.stackTitle}>Tech Stack:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.stackContainer}
          >
            {project.techStack.map((tech, index) => (
              <View key={index} style={styles.techTag}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginHorizontal: 10,
    ...Platform.select({
      web: {
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 30,
        elevation: 8,
      },
    }),
  },
  imageContainer: {
    height: 250,
    position: 'relative',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  prevButton: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicators: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 25,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  problemSolution: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 10,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 10,
  },
  techStack: {
    marginTop: 15,
  },
  stackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  stackContainer: {
    flexDirection: 'row',
  },
  techTag: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  techText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default ProjectCard;
