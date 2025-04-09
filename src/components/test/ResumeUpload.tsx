
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileUp, ChevronLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResumeUploadProps {
  jobRole: string;
  setJobRole: (value: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  handleBackToOptions: () => void;
  handleUploadResume: () => void;
  isUploading: boolean;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({
  jobRole,
  setJobRole,
  file,
  setFile,
  handleBackToOptions,
  handleUploadResume,
  isUploading
}) => {
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
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
          onClick={handleUploadResume} 
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
  );
};

export default ResumeUpload;
