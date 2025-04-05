
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import InterviewOption from '@/components/test/InterviewOption';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUp, ChevronLeft } from 'lucide-react';

enum InterviewSetupStep {
  OPTIONS,
  RESUME_UPLOAD,
  TOPIC_SELECTION,
}

const TestPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<InterviewSetupStep>(InterviewSetupStep.OPTIONS);
  const [file, setFile] = useState<File | null>(null);
  
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleStartInterview = () => {
    // In a real app, we would process the resume and selections here
    // For now, just navigate to a mock results page
    navigate('/test/interview');
  };
  
  const handleBackToOptions = () => {
    setCurrentStep(InterviewSetupStep.OPTIONS);
    setFile(null);
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {currentStep === InterviewSetupStep.OPTIONS && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-3">AI-Powered Interview Preparation</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Practice with personalized mock interviews tailored to your skills and experience.
                  Choose an option below to get started.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InterviewOption 
                  title="Resume-Based Interview"
                  description="Upload your resume for a personalized interview experience"
                  icon="resume"
                  onClick={() => setCurrentStep(InterviewSetupStep.RESUME_UPLOAD)}
                />
                <InterviewOption 
                  title="Topic-Based Interview"
                  description="Select specific topics to focus your interview practice"
                  icon="topics"
                  onClick={() => setCurrentStep(InterviewSetupStep.TOPIC_SELECTION)}
                />
              </div>
            </>
          )}
          
          {currentStep === InterviewSetupStep.RESUME_UPLOAD && (
            <Card className="w-full bg-dark-card border-border/40">
              <CardHeader>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-fit mb-2" 
                  onClick={handleBackToOptions}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <CardTitle className="text-2xl">Resume Upload</CardTitle>
                <CardDescription>
                  Upload your resume to generate personalized interview questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border/70 rounded-lg p-10 text-center">
                  <FileUp className="h-10 w-10 mb-4 mx-auto text-muted-foreground" />
                  <p className="mb-4 text-muted-foreground">
                    {file ? file.name : "Upload your resume (PDF, DOCX)"}
                  </p>
                  <div className="relative">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleResumeUpload}
                      accept=".pdf,.docx"
                    />
                    <Button variant="outline" className="relative pointer-events-none">
                      Select File
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Job Role</label>
                    <select 
                      className="w-full bg-dark-hover border border-border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="frontend">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="fullstack">Full Stack Developer</option>
                      <option value="data">Data Scientist</option>
                      <option value="devops">DevOps Engineer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <select 
                      className="w-full bg-dark-hover border border-border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (2-5 years)</option>
                      <option value="senior">Senior (5+ years)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  onClick={handleStartInterview} 
                  disabled={!file}
                >
                  Start Interview
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {currentStep === InterviewSetupStep.TOPIC_SELECTION && (
            <Card className="w-full bg-dark-card border-border/40">
              <CardHeader>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-fit mb-2" 
                  onClick={handleBackToOptions}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <CardTitle className="text-2xl">Topic Selection</CardTitle>
                <CardDescription>
                  Choose specific topics for your interview practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Technology</label>
                    <select 
                      className="w-full bg-dark-hover border border-border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="react">React</option>
                      <option value="nodejs">Node.js</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="csharp">C#</option>
                      <option value="golang">Go</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Focus Areas (select multiple)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Frontend', 'Backend', 'Database', 'DevOps', 'System Design', 'Data Structures', 'Algorithms', 'Machine Learning', 'Security'].map((area) => (
                        <div key={area} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`area-${area}`}
                            className="mr-2 h-4 w-4 rounded border-border/50 text-primary focus:ring-primary/25"
                          />
                          <label htmlFor={`area-${area}`} className="text-sm">
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <select 
                      className="w-full bg-dark-hover border border-border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleStartInterview}>
                  Start Interview
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TestPage;
