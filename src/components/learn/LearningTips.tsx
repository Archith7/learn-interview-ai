
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Clock, Users, BookOpen, Lightbulb, Target, BarChart3, Repeat } from 'lucide-react';

const LearningTips = () => {
  return (
    <Card className="border border-border/40 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Effective Learning Strategies</CardTitle>
        <CardDescription>
          Research-backed techniques to help you learn more efficiently and retain information longer
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/10 p-2 rounded-full">
                <Brain className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-medium">Spaced Repetition</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Space out your learning sessions over time rather than cramming. Review material at increasing intervals to strengthen memory retention.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/10 p-2 rounded-full">
                <Repeat className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-medium">Active Recall</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Test yourself frequently. Actively retrieving information from memory is more effective than passively reviewing notes or materials.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-amber-500/10 p-2 rounded-full">
                <Lightbulb className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-medium">Chunking</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Break down complex information into smaller, manageable chunks. This makes it easier to process and remember large amounts of information.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="font-medium">Teach Others</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Explaining concepts to others helps solidify your understanding. It reveals gaps in your knowledge and reinforces what you've learned.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/10 p-2 rounded-full">
                <Target className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-medium">Set Clear Goals</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Define specific, measurable learning objectives for each study session. This helps maintain focus and track progress effectively.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-indigo-500/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-indigo-500" />
              </div>
              <h3 className="font-medium">Pomodoro Technique</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Work in focused 25-minute intervals with short breaks in between. This maintains high concentration and prevents burnout.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-teal-500/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="font-medium">Interleaving</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Mix different but related topics during a study session rather than focusing on just one. This improves your ability to differentiate between concepts.
            </p>
          </div>
          
          <div className="border border-border/40 rounded-lg p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-pink-500/10 p-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-pink-500" />
              </div>
              <h3 className="font-medium">Track Progress</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Regularly assess your learning progress with quizzes or projects. This provides feedback on what you've mastered and what needs more attention.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningTips;
