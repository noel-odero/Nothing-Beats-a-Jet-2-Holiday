export const lessons = [
  {
    id: "1",
    status: "completed",
    position: "left",
    title: "Intro to Welding",
    icon: '<CheckCircle className="w-8 h-8" />',
  },
  {
    id: "2",
    status: "completed",
    position: "right",
    title: "Safety Protocols Quiz",
    icon: '<CheckCircle className="w-8 h-8" />',
  },
  {
    id: "3",
    status: "completed",
    position: "left",
    title: "Arc Welding Basics",
    icon: '<CheckCircle className="w-8 h-8" />',
  },
  {
    id: "4",
    status: "current",
    position: "right",
    title: "Metal Preparation",
    icon: '<Star className="w-8 h-8" />',
  },
  {
    id: "5",
    status: "locked",
    position: "left",
    title: "Welding Positions Challenge",
    icon: '<Lock className="w-8 h-8" />',
  },
  {
    id: "6",
    status: "locked",
    position: "right",
    title: "Quality Control Assessment",
    icon: '<Lock className="w-8 h-8" />',
  },
  {
    id: "7",
    status: "locked",
    position: "left",
    title: "Advanced Techniques",
    icon: '<Lock className="w-8 h-8" />',
  },
];

export interface Lesson {
  id: string;
  title: string;
  description: string;
  xp: number;
  status: "completed" | "available" | "locked";
  type: "lesson" | "quiz" | "challenge" | "assessment";
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const programLessons: Lesson[] = [
  {
    id: "1",
    title: "Intro to Welding",
    description: "Learn the basics of welding safety and equipment",
    xp: 50,
    status: "completed",
    type: "lesson",
    difficulty: "beginner",
  },
  {
    id: "2",
    title: "Safety Protocols Quiz",
    description: "Test your knowledge of welding safety",
    xp: 75,
    status: "completed",
    type: "quiz",
    difficulty: "beginner",
  },
  {
    id: "3",
    title: "Arc Welding Basics",
    description: "Master the fundamentals of arc welding",
    xp: 100,
    status: "completed",
    type: "lesson",
    difficulty: "beginner",
  },
  {
    id: "4",
    title: "Metal Preparation",
    description: "Learn proper metal preparation techniques",
    xp: 80,
    status: "available",
    type: "lesson",
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "Welding Positions Challenge",
    description: "Practice different welding positions",
    xp: 120,
    status: "available",
    type: "challenge",
    difficulty: "intermediate",
  },
  {
    id: "6",
    title: "Quality Control Assessment",
    description: "Demonstrate your welding quality skills",
    xp: 150,
    status: "locked",
    type: "assessment",
    difficulty: "intermediate",
  },
  {
    id: "7",
    title: "Advanced Techniques",
    description: "Master advanced welding methods",
    xp: 200,
    status: "locked",
    type: "lesson",
    difficulty: "advanced",
  },
];

export const softSkillLessons: Lesson[] = [
  {
    id: "1",
    title: "Effective Communication",
    description:
      "Develop clear and impactful verbal and written communication skills.",
    xp: 60,
    status: "completed",
    type: "lesson",
    difficulty: "beginner",
  },
  {
    id: "2",
    title: "Collaboration & Teamwork Quiz",
    description: "Assess your ability to work productively in diverse teams.",
    xp: 80,
    status: "completed",
    type: "quiz",
    difficulty: "beginner",
  },
  {
    id: "3",
    title: "Critical Thinking Basics",
    description: "Learn to analyze problems and make informed decisions.",
    xp: 90,
    status: "completed",
    type: "lesson",
    difficulty: "beginner",
  },
  {
    id: "4",
    title: "Adaptability in the Workplace",
    description: "Master strategies to thrive in changing environments.",
    xp: 100,
    status: "available",
    type: "lesson",
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "Emotional Intelligence Challenge",
    description:
      "Practice recognizing and managing emotions in yourself and others.",
    xp: 120,
    status: "available",
    type: "challenge",
    difficulty: "intermediate",
  },
  {
    id: "6",
    title: "Digital Literacy Assessment",
    description:
      "Demonstrate your ability to use digital tools and platforms effectively.",
    xp: 140,
    status: "locked",
    type: "assessment",
    difficulty: "intermediate",
  },
  {
    id: "7",
    title: "Leadership & Influence",
    description: "Develop skills to motivate, guide, and inspire others.",
    xp: 180,
    status: "locked",
    type: "lesson",
    difficulty: "advanced",
  },
];
