'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

type UserType = 'student' | 'institution';

interface StudentData {
  fullName: string;
  age: string;
  gender: string;
  email: string;
  location: string;
  careerInterests: string[];
  educationBackground: string;
}

interface InstitutionData {
  institutionName: string;
  type: string;
  location: string;
  contactEmail: string;
  engagementTypes: string[];
  logo?: string;
  website?: string;
}

type OnboardingData = {
  userType: UserType | null;
  studentData: StudentData;
  institutionData: InstitutionData;
};

const initialStudentData: StudentData = {
  fullName: '',
  age: '',
  gender: '',
  email: '',
  location: '',
  careerInterests: [],
  educationBackground: '',
};

const initialInstitutionData: InstitutionData = {
  institutionName: '',
  type: '',
  location: '',
  contactEmail: '',
  engagementTypes: [],
  logo: '',
  website: '',
};

const careerInterests = [
  'ICT',
  'Construction',
  'Hospitality',
  'Energy',
  'Healthcare',
];
const engagementTypes = [
  'Hiring',
  'Training',
  'Partnering',
  'Providing internships',
];
const institutionTypes = [
  'TVET School',
  'Training Center',
  'Employer',
  'Other',
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    userType: null,
    studentData: initialStudentData,
    institutionData: initialInstitutionData,
  });

  const totalSteps = 5;

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const updateStudentData = (updates: Partial<StudentData>) => {
    setData((prev) => ({
      ...prev,
      studentData: { ...prev.studentData, ...updates },
    }));
  };

  const updateInstitutionData = (updates: Partial<InstitutionData>) => {
    setData((prev) => ({
      ...prev,
      institutionData: { ...prev.institutionData, ...updates },
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Onboarding data:', data);
    // Here you would typically send the data to your backend
    const isStudent = data.userType === 'student';
    const destination = isStudent ? '/student/dashboard' : '/sector';
    // Optional: keep the alert, then redirect
    alert(
      `${isStudent ? 'Student' : 'Institution'} account created successfully!`
    );
    router.push(destination);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return data.userType !== null;
      case 2:
        if (data.userType === 'student') {
          return (
            data.studentData.fullName &&
            data.studentData.age &&
            data.studentData.gender &&
            data.studentData.email &&
            data.studentData.location
          );
        } else {
          return (
            data.institutionData.institutionName &&
            data.institutionData.type &&
            data.institutionData.location &&
            data.institutionData.contactEmail
          );
        }
      case 3:
        if (data.userType === 'student') {
          return data.studentData.careerInterests.length > 0;
        } else {
          return data.institutionData.engagementTypes.length > 0;
        }
      case 4:
        if (data.userType === 'student') {
          return data.studentData.educationBackground !== '';
        } else {
          return true; // Optional fields for institution
        }
      case 5:
        return true; // Confirmation step
      default:
        return false;
    }
  };

  const renderProgressIndicator = () => {
    return (
      <div className="flex items-center justify-center space-x-2 mb-8">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index + 1 <= currentStep
                ? 'bg-white text-black'
                : 'bg-white/20 text-white/60'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">
          Welcome to Skills Passport
        </h2>
        <p className="text-white/70">
          Let&apos;s get you started. Are you joining as a student or a private
          institution?
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => updateData({ userType: 'student' })}
          className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
            data.userType === 'student'
              ? 'border-white bg-white/10'
              : 'border-white/20 bg-white/5 hover:bg-white/10'
          }`}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Student</h3>
            <p className="text-white/70 text-sm">
              I&apos;m a Student (explore careers, learn, earn badges, and find
              jobs)
            </p>
          </div>
        </button>

        <button
          onClick={() => updateData({ userType: 'institution' })}
          className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
            data.userType === 'institution'
              ? 'border-white bg-white/10'
              : 'border-white/20 bg-white/5 hover:bg-white/10'
          }`}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Institution</h3>
            <p className="text-white/70 text-sm">
              We&apos;re a Private Institution (train, hire, or partner with
              students)
            </p>
          </div>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => {
    if (data.userType === 'student') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tell us about yourself
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <Input
                value={data.studentData.fullName}
                onChange={(e) =>
                  updateStudentData({ fullName: e.target.value })
                }
                placeholder="Enter your full name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Age
              </label>
              <Input
                type="number"
                value={data.studentData.age}
                onChange={(e) => updateStudentData({ age: e.target.value })}
                placeholder="Enter your age"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Gender
              </label>
              <Select
                value={data.studentData.gender}
                onValueChange={(value) => updateStudentData({ gender: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <Input
                type="email"
                value={data.studentData.email}
                onChange={(e) => updateStudentData({ email: e.target.value })}
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Location
              </label>
              <Input
                value={data.studentData.location}
                onChange={(e) =>
                  updateStudentData({ location: e.target.value })
                }
                placeholder="Enter your location"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tell us about your institution
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Institution Name
              </label>
              <Input
                value={data.institutionData.institutionName}
                onChange={(e) =>
                  updateInstitutionData({ institutionName: e.target.value })
                }
                placeholder="Enter institution name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Type
              </label>
              <Select
                value={data.institutionData.type}
                onValueChange={(value) =>
                  updateInstitutionData({ type: value })
                }
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select institution type" />
                </SelectTrigger>
                <SelectContent>
                  {institutionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Location
              </label>
              <Input
                value={data.institutionData.location}
                onChange={(e) =>
                  updateInstitutionData({ location: e.target.value })
                }
                placeholder="Enter institution location"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Contact Email
              </label>
              <Input
                type="email"
                value={data.institutionData.contactEmail}
                onChange={(e) =>
                  updateInstitutionData({ contactEmail: e.target.value })
                }
                placeholder="Enter contact email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  const renderStep3 = () => {
    if (data.userType === 'student') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              What fields interest you?
            </h2>
            <p className="text-white/70">Choose as many as you like.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {careerInterests.map((interest) => (
              <label
                key={interest}
                className="flex items-center space-x-3 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer"
              >
                <Checkbox
                  checked={data.studentData.careerInterests.includes(interest)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateStudentData({
                        careerInterests: [
                          ...data.studentData.careerInterests,
                          interest,
                        ],
                      });
                    } else {
                      updateStudentData({
                        careerInterests:
                          data.studentData.careerInterests.filter(
                            (i) => i !== interest
                          ),
                      });
                    }
                  }}
                />
                <span className="text-white font-medium">{interest}</span>
              </label>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              How do you want to engage with students?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {engagementTypes.map((type) => (
              <label
                key={type}
                className="flex items-center space-x-3 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer"
              >
                <Checkbox
                  checked={data.institutionData.engagementTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateInstitutionData({
                        engagementTypes: [
                          ...data.institutionData.engagementTypes,
                          type,
                        ],
                      });
                    } else {
                      updateInstitutionData({
                        engagementTypes:
                          data.institutionData.engagementTypes.filter(
                            (t) => t !== type
                          ),
                      });
                    }
                  }}
                />
                <span className="text-white font-medium">{type}</span>
              </label>
            ))}
          </div>
        </div>
      );
    }
  };

  const renderStep4 = () => {
    if (data.userType === 'student') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Where are you on your learning journey?
            </h2>
          </div>

          <RadioGroup
            value={data.studentData.educationBackground}
            onValueChange={(value) =>
              updateStudentData({ educationBackground: value })
            }
            className="space-y-4"
          >
            <label className="flex items-center space-x-3 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer">
              <RadioGroupItem value="Still in school" />
              <span className="text-white font-medium">Still in school</span>
            </label>
            <label className="flex items-center space-x-3 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer">
              <RadioGroupItem value="Graduate" />
              <span className="text-white font-medium">Graduate</span>
            </label>
            <label className="flex items-center space-x-3 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer">
              <RadioGroupItem value="Looking for training" />
              <span className="text-white font-medium">
                Looking for training
              </span>
            </label>
          </RadioGroup>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Add a little more</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Upload Logo (optional)
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  updateInstitutionData({
                    logo: e.target.files?.[0]?.name || '',
                  })
                }
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Website (optional)
              </label>
              <Input
                type="url"
                value={data.institutionData.website}
                onChange={(e) =>
                  updateInstitutionData({ website: e.target.value })
                }
                placeholder="Enter website URL"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Review your details</h2>
        <p className="text-white/70">
          Everything looks good? Let&apos;s create your{' '}
          {data.userType === 'student' ? 'student' : 'institution'} account.
        </p>
      </div>

      <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/20">
        {data.userType === 'student' ? (
          <div className="space-y-3">
            <div>
              <strong className="text-white">Name:</strong>{' '}
              <span className="text-white/80">{data.studentData.fullName}</span>
            </div>
            <div>
              <strong className="text-white">Age:</strong>{' '}
              <span className="text-white/80">{data.studentData.age}</span>
            </div>
            <div>
              <strong className="text-white">Gender:</strong>{' '}
              <span className="text-white/80">{data.studentData.gender}</span>
            </div>
            <div>
              <strong className="text-white">Email:</strong>{' '}
              <span className="text-white/80">{data.studentData.email}</span>
            </div>
            <div>
              <strong className="text-white">Location:</strong>{' '}
              <span className="text-white/80">{data.studentData.location}</span>
            </div>
            <div>
              <strong className="text-white">Career Interests:</strong>{' '}
              <span className="text-white/80">
                {data.studentData.careerInterests.join(', ')}
              </span>
            </div>
            <div>
              <strong className="text-white">Education Background:</strong>{' '}
              <span className="text-white/80">
                {data.studentData.educationBackground}
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <strong className="text-white">Institution Name:</strong>{' '}
              <span className="text-white/80">
                {data.institutionData.institutionName}
              </span>
            </div>
            <div>
              <strong className="text-white">Type:</strong>{' '}
              <span className="text-white/80">{data.institutionData.type}</span>
            </div>
            <div>
              <strong className="text-white">Location:</strong>{' '}
              <span className="text-white/80">
                {data.institutionData.location}
              </span>
            </div>
            <div>
              <strong className="text-white">Contact Email:</strong>{' '}
              <span className="text-white/80">
                {data.institutionData.contactEmail}
              </span>
            </div>
            <div>
              <strong className="text-white">Engagement Types:</strong>{' '}
              <span className="text-white/80">
                {data.institutionData.engagementTypes.join(', ')}
              </span>
            </div>
            {data.institutionData.website && (
              <div>
                <strong className="text-white">Website:</strong>{' '}
                <span className="text-white/80">
                  {data.institutionData.website}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-100px,#0b1220_40%,#05070b_100%)] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {renderProgressIndicator()}

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">{renderCurrentStep()}</CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-white text-black hover:bg-white/90"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-white text-black hover:bg-white/90"
              >
                {data.userType === 'student'
                  ? 'Create Student Account'
                  : 'Create Institution Account'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
