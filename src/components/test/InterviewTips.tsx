
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
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Research the company thoroughly</h3>
                <p>
                  Learn about the company's products, values, culture, and recent news. Show your interest and knowledge during the interview.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Prepare for common questions</h3>
                <p>
                  Practice answering both technical and behavioral questions. Use the STAR method (Situation, Task, Action, Result) for behavioral questions.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Prepare your own questions</h3>
                <p>
                  Have 3-5 thoughtful questions ready for the interviewer about the role, team, or company culture.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Plan your logistics</h3>
                <p>
                  Test your technical setup for virtual interviews. For in-person interviews, plan your route and arrive 10-15 minutes early.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="during" className="mt-6 space-y-4">
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Communicate clearly</h3>
                <p>
                  Speak clearly and concisely. If you don't understand a question, ask for clarification rather than guessing.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <ThumbsUp className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Show your thought process</h3>
                <p>
                  For technical questions, explain your thinking. Interviewers value how you approach problems as much as the final answer.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Provide concrete examples</h3>
                <p>
                  Back up your skills and experiences with specific examples and measurable results from past projects.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Ask thoughtful questions</h3>
                <p>
                  When given the opportunity, ask questions that demonstrate your interest in the role and understanding of the company.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="after" className="mt-6 space-y-4">
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Send a thank-you note</h3>
                <p>
                  Send a personalized thank-you email within 24 hours to each interviewer, referencing specific points from your conversation.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Reflect on the interview</h3>
                <p>
                  Note what went well and areas for improvement. This will help you refine your approach for future interviews.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Follow up appropriately</h3>
                <p>
                  If you haven't heard back within the timeframe they mentioned, send a polite follow-up email expressing your continued interest.
                </p>
              </div>
            </div>
            
            <div className="interview-tip">
              <div className="interview-tip-icon">
                <ThumbsUp className="h-5 w-5 text-primary" />
              </div>
              <div className="interview-tip-content">
                <h3>Continue your job search</h3>
                <p>
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
