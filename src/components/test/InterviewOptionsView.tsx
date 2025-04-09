
import React from 'react';
import InterviewOption from '@/components/test/InterviewOption';

interface InterviewOptionsViewProps {
  setCurrentStep: (step: number) => void;
}

const InterviewOptionsView: React.FC<InterviewOptionsViewProps> = ({ setCurrentStep }) => {
  return (
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
          onClick={() => setCurrentStep(1)}
        />
        <InterviewOption 
          title="Topic-Based Interview"
          description="Select specific topics to focus your interview practice"
          icon="topics"
          onClick={() => setCurrentStep(2)}
        />
      </div>
    </>
  );
};

export default InterviewOptionsView;
