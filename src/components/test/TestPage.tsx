import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InterviewTips from '@/components/test/InterviewTips';
import { useToast } from '@/hooks/use-toast';
import InterviewOptionsView from '@/components/test/InterviewOptionsView';
import ResumeUpload from '@/components/test/ResumeUpload';
import TopicSelection from '@/components/test/TopicSelection';
import ResumeAnalysisDialog from '@/components/test/ResumeAnalysisDialog';

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
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  
  const handleSendResumeToBackend = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Create FormData to send the file
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobRole', jobRole);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://127.0.0.1:5000/extract-text', {
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
      
      // Store the resume data but don't show the dialog
      setResumeData(data);
      
      // Navigate directly to the interview page
      navigate('/test/interview', { 
        state: { 
          resumeId: data?.resumeId,
          jobRole: jobRole,
          resumeData: data,
          useMongoDb: true // Flag to indicate we want to fetch questions from MongoDB
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
  
  // This function is kept but won't be used directly anymore
  const handleProceedToInterview = () => {
    setShowResumeDialog(false);
    
    navigate('/test/interview', { 
      state: { 
        resumeId: resumeData?.resumeId,
        jobRole: jobRole,
        resumeData: resumeData,
        useMongoDb: true
      } 
    });
  };
  
  const handleStartInterview = () => {
    if (currentStep === InterviewSetupStep.RESUME_UPLOAD && file) {
      // If we have a resume, send it to the backend first
      handleSendResumeToBackend();
    } else if (currentStep === InterviewSetupStep.TOPIC_SELECTION) {
      // For topic selection, navigate directly with the selected topic
      navigate('/test/interview', { 
        state: { 
          primaryTechnology: primaryTechnology,
          useMongoDb: true
        } 
      });
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
                <InterviewOptionsView setCurrentStep={setCurrentStep} />
              )}
              
              {currentStep === InterviewSetupStep.RESUME_UPLOAD && (
                <ResumeUpload
                  jobRole={jobRole}
                  setJobRole={setJobRole}
                  file={file}
                  setFile={setFile}
                  handleBackToOptions={handleBackToOptions}
                  handleUploadResume={handleStartInterview}
                  isUploading={isUploading}
                />
              )}
              
              {currentStep === InterviewSetupStep.TOPIC_SELECTION && (
                <TopicSelection
                  primaryTechnology={primaryTechnology}
                  setPrimaryTechnology={setPrimaryTechnology}
                  handleBackToOptions={handleBackToOptions}
                  handleStartInterview={handleStartInterview}
                />
              )}
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <InterviewTips />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* We keep this component but it won't be shown in the normal flow anymore */}
      <ResumeAnalysisDialog
        showResumeDialog={showResumeDialog}
        setShowResumeDialog={setShowResumeDialog}
        resumeData={resumeData}
        handleProceedToInterview={handleProceedToInterview}
      />
    </Layout>
  );
};

export default TestPage;
