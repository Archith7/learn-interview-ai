import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import InterviewOption from '@/components/test/InterviewOption';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileUp, ChevronLeft, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InterviewTips from '@/components/test/InterviewTips';
import { useToast } from '@/hooks/use-toast';

enum InterviewSetupStep {
  OPTIONS,
  RESUME_UPLOAD,
  TOPIC_SELECTION,
}

const TestPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<InterviewSetupStep>(InterviewSetupStep.OPTIONS);
  const [file, setFile] = useState<File | null>(null);
  const [jobRole, setJobRole] = useState('');
  const [primaryTechnology, setPrimaryTechnology] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSendResumeToBackend = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Create FormData to send the file
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobRole', jobRole);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://your-backend-api.com/resume-upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload resume');
      }
      
      const data = await response.json();
      
      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been processed for the interview.",
      });
      
      // Navigate to interview page
      navigate('/test/interview', { 
        state: { 
          resumeId: data.resumeId,
          jobRole: jobRole
        } 
      });
      
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleStartInterview = () => {
    if (currentStep === InterviewSetupStep.RESUME_UPLOAD && file) {
      // If we have a resume, send it to the backend first
      handleSendResumeToBackend();
    } else {
      // For other cases (like topic selection), just navigate
      navigate('/test/interview');
    }
  };
  
  const handleBackToOptions = () => {
    setCurrentStep(InterviewSetupStep.OPTIONS);
    setFile(null);
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="setup" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="setup">Interview Setup</TabsTrigger>
              <TabsTrigger value="tips">Interview Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup" className="mt-6">
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
                <Card className="w-full border border-border/40 shadow-sm">
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
                        <Input
                          type="text"
                          placeholder="Enter your target job role (e.g. Frontend Developer)"
                          value={jobRole}
                          onChange={(e) => setJobRole(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Experience Level</label>
                        <select 
                          className="w-full border border-input rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                      disabled={!file || !jobRole.trim() || isUploading}
                      className="relative"
                    >
                      {isUploading ? 'Uploading...' : 'Start Interview'}
                      {isUploading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-t-transparent border-primary rounded-full animate-spin"></div>
                        </div>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {currentStep === InterviewSetupStep.TOPIC_SELECTION && (
                <Card className="w-full border border-border/40 shadow-sm">
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
                        <Input
                          type="text"
                          placeholder="Enter your primary technology (e.g. React, Node.js, Python)"
                          value={primaryTechnology}
                          onChange={(e) => setPrimaryTechnology(e.target.value)}
                        />
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
                          className="w-full border border-input rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      onClick={handleStartInterview}
                      disabled={!primaryTechnology.trim()}
                    >
                      Start Interview
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <InterviewTips />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default TestPage;
