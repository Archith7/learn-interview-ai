
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronLeft } from 'lucide-react';

interface TopicSelectionProps {
  primaryTechnology: string;
  setPrimaryTechnology: (value: string) => void;
  handleBackToOptions: () => void;
  handleStartInterview: () => void;
}

const TopicSelection: React.FC<TopicSelectionProps> = ({
  primaryTechnology,
  setPrimaryTechnology,
  handleBackToOptions,
  handleStartInterview
}) => {
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
  );
};

export default TopicSelection;
