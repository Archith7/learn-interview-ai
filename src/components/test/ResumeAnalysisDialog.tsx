
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ResumeAnalysisDialogProps {
  showResumeDialog: boolean;
  setShowResumeDialog: (show: boolean) => void;
  resumeData: any;
  handleProceedToInterview: () => void;
}

const ResumeAnalysisDialog: React.FC<ResumeAnalysisDialogProps> = ({
  showResumeDialog,
  setShowResumeDialog,
  resumeData,
  handleProceedToInterview
}) => {
  if (!resumeData) return null;
  
  const skills = resumeData.skills || [];
  const experience = resumeData.experience || [];
  const recommendedQuestions = resumeData.recommendedQuestions || [];
  
  return (
    <Dialog open={showResumeDialog} onOpenChange={setShowResumeDialog}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Resume Analysis</DialogTitle>
          <DialogDescription>
            We've analyzed your resume and prepared a customized interview experience.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Skills Detected</h3>
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill: string, index: number) => (
                  <div key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">Skills will appear here based on your resume.</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Experience Summary</h3>
            <div className="space-y-2">
              {experience.length > 0 ? (
                experience.map((exp: any, index: number) => (
                  <div key={index} className="p-3 border border-border/50 rounded-md">
                    <p className="font-medium">{exp.title || 'Position Title'}</p>
                    <p className="text-sm text-muted-foreground">{exp.company || 'Company'} • {exp.duration || 'Duration'}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">Experience summary will appear here based on your resume.</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Recommended Interview Focus</h3>
            <div className="space-y-2">
              {recommendedQuestions.length > 0 ? (
                recommendedQuestions.map((question: string, index: number) => (
                  <div key={index} className="p-3 bg-secondary/50 rounded-md">
                    <p>{question}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">Recommended questions will appear here based on your resume and target job role.</p>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowResumeDialog(false)}>
            Make Changes
          </Button>
          <Button onClick={handleProceedToInterview}>
            Proceed to Interview
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeAnalysisDialog;
