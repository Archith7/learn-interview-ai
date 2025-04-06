
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Calendar, UserCheck, MessageSquare, Clock, ThumbsUp } from 'lucide-react';

const InterviewTips = () => {
  return (
    <Card className="border border-border/40 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Professional Interview Tips</CardTitle>
        <CardDescription>
          Practical advice to help you succeed before, during, and after your interview
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="before">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="before">Before Interview</TabsTrigger>
            <TabsTrigger value="during">During Interview</TabsTrigger>
            <TabsTrigger value="after">After Interview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="before" className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Research the company thoroughly</h3>
                <p className="text-muted-foreground">
                  Learn about the company's products, values, culture, and recent news. Show your interest and knowledge during the interview.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Prepare for common questions</h3>
                <p className="text-muted-foreground">
                  Practice answering both technical and behavioral questions. Use the STAR method (Situation, Task, Action, Result) for behavioral questions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Prepare your own questions</h3>
                <p className="text-muted-foreground">
                  Have 3-5 thoughtful questions ready for the interviewer about the role, team, or company culture.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Plan your logistics</h3>
                <p className="text-muted-foreground">
                  Test your technical setup for virtual interviews. For in-person interviews, plan your route and arrive 10-15 minutes early.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="during" className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Communicate clearly</h3>
                <p className="text-muted-foreground">
                  Speak clearly and concisely. If you don't understand a question, ask for clarification rather than guessing.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <ThumbsUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Show your thought process</h3>
                <p className="text-muted-foreground">
                  For technical questions, explain your thinking. Interviewers value how you approach problems as much as the final answer.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Provide concrete examples</h3>
                <p className="text-muted-foreground">
                  Back up your skills and experiences with specific examples and measurable results from past projects.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Ask thoughtful questions</h3>
                <p className="text-muted-foreground">
                  When given the opportunity, ask questions that demonstrate your interest in the role and understanding of the company.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="after" className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Send a thank-you note</h3>
                <p className="text-muted-foreground">
                  Send a personalized thank-you email within 24 hours to each interviewer, referencing specific points from your conversation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Reflect on the interview</h3>
                <p className="text-muted-foreground">
                  Note what went well and areas for improvement. This will help you refine your approach for future interviews.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Follow up appropriately</h3>
                <p className="text-muted-foreground">
                  If you haven't heard back within the timeframe they mentioned, send a polite follow-up email expressing your continued interest.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <ThumbsUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Continue your job search</h3>
                <p className="text-muted-foreground">
                  Don't put all your hopes on one position. Continue applying and interviewing until you have a written offer.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InterviewTips;
