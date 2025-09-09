import {
  BarChart3,
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  MessageSquare,
  Settings,
} from "lucide-react";
import { TalentMetric, FeaturedTalent, ActiveProject, Institution, SidebarItem } from "@/types/dashboard";

export const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "talent-pool", label: "Talent Pool", icon: Users },
  { id: "active-projects", label: "Active Projects", icon: Briefcase },
  { id: "partnerships", label: "TVET Partnerships", icon: Building2 },
  { id: "analytics", label: "Workforce Analytics", icon: TrendingUp },
  { id: "messages", label: "Communications", icon: MessageSquare },
  { id: "settings", label: "Account Settings", icon: Settings },
];

export const talentMetrics: TalentMetric[] = [
  { label: "Available Talent", value: "2,847", change: "+12%", trend: "up" },
  { label: "Active Placements", value: "156", change: "+8%", trend: "up" },
  { label: "Avg. Skill Match", value: "94%", change: "+3%", trend: "up" },
  { label: "Time to Hire", value: "5.2 days", change: "-15%", trend: "down" },
];

export const featuredTalent: FeaturedTalent[] = [
  {
    id: 1,
    name: "Marie Uwimana",
    specialty: "Industrial Automation",
    institution: "IPRC Kigali",
    skills: ["PLC Programming", "SCADA Systems", "Quality Control"],
    rating: 4.9,
    experience: "6 months",
    location: "Kigali",
    verified: true,
    available: true,
  },
  {
    id: 2,
    name: "Jean Baptiste Nzeyimana",
    specialty: "Software Development",
    institution: "WDA Tumba College",
    skills: ["React", "Node.js", "Database Design"],
    rating: 4.8,
    experience: "1 year",
    location: "Huye",
    verified: true,
    available: true,
  },
  {
    id: 3,
    name: "Grace Mukamana",
    specialty: "Digital Marketing",
    institution: "TVET Musanze",
    skills: ["SEO", "Social Media", "Analytics"],
    rating: 4.7,
    experience: "8 months",
    location: "Musanze",
    verified: true,
    available: false,
  },
];

export const activeProjects: ActiveProject[] = [
  {
    id: 1,
    title: "Manufacturing Process Optimization",
    company: "Rwanda Steel Corporation",
    talent: "Marie Uwimana + 3 others",
    progress: 78,
    deadline: "Dec 15, 2024",
    budget: "$15,000",
    status: "On Track",
    priority: "High",
  },
  {
    id: 2,
    title: "E-commerce Platform Development",
    company: "Kigali Tech Hub",
    talent: "Jean Baptiste N. + 2 others",
    progress: 45,
    deadline: "Jan 30, 2025",
    budget: "$25,000",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    company: "Made in Rwanda Brand",
    talent: "Grace Mukamana",
    progress: 92,
    deadline: "Oct 1, 2024",
    budget: "$8,000",
    status: "Near Completion",
    priority: "Low",
  },
];

export const institutions: Institution[] = [
  {
    name: "IPRC Kigali",
    students: 245,
    specialties: ["Engineering", "ICT"],
    partnership: "Gold",
  },
  {
    name: "WDA Tumba College",
    students: 189,
    specialties: ["Technology", "Business"],
    partnership: "Platinum",
  },
  {
    name: "TVET Musanze",
    students: 156,
    specialties: ["Tourism", "Agriculture"],
    partnership: "Silver",
  },
  {
    name: "Integrated Polytechnic Regional College",
    students: 312,
    specialties: ["Multiple"],
    partnership: "Platinum",
  },
];
