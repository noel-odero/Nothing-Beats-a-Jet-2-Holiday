export interface Student {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  weeklyXp: number;
  streak: number;
  level: number;
  careerPath: string;
}

export interface PathwayNode {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'quiz' | 'project' | 'certificate';
  status: 'locked' | 'unlocked' | 'completed';
  xp: number;
  icon: string;
  color: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  issueDate: string;
  issuer: string;
  blockchainHash: string;
  qrCode: string;
  image: string;
  verified: boolean;
}

export interface SoftSkill {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  xp: number;
  icon: string;
  color: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchScore: number;
  type: 'full-time' | 'part-time' | 'internship';
  description: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  rank: number;
  level: number;
  careerPath: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number; // 1-5
  content: string;
}

export const mockStudent: Student = {
  id: '1',
  name: 'Jean Bosco Nshimiyimana',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  xp: 2840,
  weeklyXp: 420,
  streak: 7,
  level: 12,
  careerPath: 'Electrical Technician',
};

export const mockPathway: PathwayNode[] = [
  {
    id: '1',
    title: 'Electrical Safety Basics',
    description: 'Learn fundamental safety protocols',
    type: 'lesson',
    status: 'completed',
    xp: 50,
    icon: '⚡',
    color: 'bg-green-500',
  },
  {
    id: '2',
    title: 'Circuit Analysis',
    description: 'Understand basic circuit principles',
    type: 'lesson',
    status: 'completed',
    xp: 75,
    icon: '🔌',
    color: 'bg-green-500',
  },
  {
    id: '3',
    title: 'Safety Quiz',
    description: 'Test your safety knowledge',
    type: 'quiz',
    status: 'completed',
    xp: 100,
    icon: '📝',
    color: 'bg-green-500',
  },
  {
    id: '4',
    title: 'Wiring Fundamentals',
    description: 'Master basic wiring techniques',
    type: 'lesson',
    status: 'unlocked',
    xp: 80,
    icon: '🔧',
    color: 'bg-blue-500',
  },
  {
    id: '5',
    title: 'Safety Certificate',
    description: 'Earn your safety certification',
    type: 'certificate',
    status: 'locked',
    xp: 150,
    icon: '🏆',
    color: 'bg-gray-400',
  },
  {
    id: '6',
    title: 'Advanced Circuits',
    description: 'Complex circuit analysis',
    type: 'lesson',
    status: 'locked',
    xp: 120,
    icon: '⚙️',
    color: 'bg-gray-400',
  },
];

export const mockCertificates: Certificate[] = [
  {
    id: '1',
    title: 'Electrical Safety Fundamentals',
    description:
      'Certified in basic electrical safety protocols and procedures',
    issueDate: '2024-01-15',
    issuer: 'Rwanda TVET Board',
    blockchainHash:
      '0xABC123DEF456789GHI012JKL345MNO678PQR901STU234VWX567YZA890BCD123EFG456',
    qrCode:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UVIgQ29kZTwvdGV4dD48L3N2Zz4=',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: '2',
    title: 'Circuit Analysis Basics',
    description: 'Fundamental understanding of electrical circuit analysis',
    issueDate: '2024-01-20',
    issuer: 'Kigali Technical Institute',
    blockchainHash:
      '0xDEF456GHI789JKL012MNO345PQR678STU901VWX234YZA567BCD890EFG123HIJ456',
    qrCode:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UVIgQ29kZTwvdGV4dD48L3N2Zz4=',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
];

export const mockSoftSkills: SoftSkill[] = [
  {
    id: '1',
    title: 'Communication',
    description: 'Effective verbal and written communication',
    progress: 60,
    totalLessons: 5,
    completedLessons: 3,
    xp: 120,
    icon: '💬',
    color: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'Teamwork',
    description: 'Collaboration and team dynamics',
    progress: 40,
    totalLessons: 4,
    completedLessons: 2,
    xp: 80,
    icon: '👥',
    color: 'bg-green-500',
  },
  {
    id: '3',
    title: 'Problem Solving',
    description: 'Critical thinking and problem-solving skills',
    progress: 25,
    totalLessons: 6,
    completedLessons: 1,
    xp: 50,
    icon: '🧩',
    color: 'bg-purple-500',
  },
  {
    id: '4',
    title: 'Time Management',
    description: 'Organization and productivity skills',
    progress: 80,
    totalLessons: 3,
    completedLessons: 2,
    xp: 100,
    icon: '⏰',
    color: 'bg-orange-500',
  },
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Junior Electrical Technician',
    company: 'Kigali Power Solutions',
    location: 'Kigali, Rwanda',
    salary: 'RWF 350,000/month',
    matchScore: 92,
    type: 'full-time',
    description: 'Entry-level position for electrical maintenance and repair',
  },
  {
    id: '2',
    title: 'Electrical Apprentice',
    company: 'Rwanda Energy Group',
    location: 'Kigali, Rwanda',
    salary: 'RWF 280,000/month',
    matchScore: 88,
    type: 'full-time',
    description: 'Learn while working with experienced electricians',
  },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: '1',
    name: 'Jean Bosco Nshimiyimana',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    xp: 2840,
    rank: 1,
    level: 12,
    careerPath: 'Electrical Technician',
  },
  {
    id: '2',
    name: 'Aline Uwamariya',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    xp: 2650,
    rank: 2,
    level: 11,
    careerPath: 'Fashion Design',
  },
  {
    id: '3',
    name: 'Eric Ndayambaje',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    xp: 2420,
    rank: 3,
    level: 10,
    careerPath: 'Construction',
  },
  {
    id: '4',
    name: 'Grace Umutoni',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    xp: 2180,
    rank: 4,
    level: 9,
    careerPath: 'Automotive',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: 'Jenemarie',
    role: 'Student, Hospitality',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'Amazing! I have ADHD and I love to read but had piles of books I never touched. This helped me learn better and study efficiently. I recommend it to everyone!',
  },
  {
    id: 'r2',
    author: 'Ali Abdalla',
    role: 'Productivity Enthusiast',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'If there is one hill I’ll die on, it’s that learning faster is the best way forward. This platform is a game‑changer for me.',
  },
  {
    id: 'r3',
    author: 'Gwyneth Paltrow',
    role: 'Actress & Businesswoman',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'It makes it easy to learn at 2× or even 3× the speed you read with your eyes.',
  },
  {
    id: 'r4',
    author: 'Sir Richard Branson',
    role: 'Business Magnate',
    avatar:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'Growing up with dyslexia this would have made a big difference. I’m so glad to have it today.',
  },
  {
    id: 'r5',
    author: 'Theodota',
    role: 'Resident Doctor',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'I listen to PDFs while walking to clinic, running, and making coffee in the morning. It saves me a ton of time.',
  },
  {
    id: 'r6',
    author: 'Aline Uwamariya',
    role: 'Fashion Design Student',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 4,
    content:
      'I used to spend hours reading assignments. Listening has been totally life‑changing.',
  },
  {
    id: 'r7',
    author: 'Eric Ndayambaje',
    role: 'Construction Supervisor',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 5,
    content:
      'Top 5 apps of all time for me. You can literally finish an entire book in a day.',
  },
  {
    id: 'r8',
    author: 'Grace Umutoni',
    role: 'Automotive Technician',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=160&h=160&q=80',
    rating: 4,
    content:
      'Great for commuting. I learn while on the bus and during breaks, without losing focus.',
  },
];
