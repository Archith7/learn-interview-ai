
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, List, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InterviewOptionProps {
  title: string;
  description: string;
  icon: 'resume' | 'topics';
  onClick: () => void;
}

const InterviewOption: React.FC<InterviewOptionProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <Card className={cn(
      "overflow-hidden card-hover border-border/40 bg-dark-card hover:border-primary/50 transition-all",
      "flex flex-col h-full"
    )}>
      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon === 'resume' ? (
            <FileText className="h-6 w-6 text-primary" />
          ) : (
            <List className="h-6 w-6 text-primary" />
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          {icon === 'resume' ? (
            <>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Upload your resume</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Select target role and experience level</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Get personalized interview questions</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>No resume required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Select specific topics or tech stack</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Practice with targeted interview rounds</span>
              </li>
            </>
          )}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full" onClick={onClick}>
          <span>Get Started</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewOption;
