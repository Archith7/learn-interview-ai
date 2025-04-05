
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, XCircle, Mic, MicOff, Send, Info, BookOpen, Users, Code, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockQuestions = [
  "Explain the concept of closures in JavaScript and provide an example.",
  "What is the virtual DOM in React and how does it improve performance?",
  "Describe the event loop in Node.js and how it enables asynchronous programming.",
  "How would you implement authentication in a MERN stack application?",
  "Explain the difference between cookies, local storage, and session storage."
];

const interviewTips = [
  {
    category: "Before the Interview",
    tips: [
      "Research the company thoroughly, including its products, culture, and recent news.",
      "Review the job description and prepare examples that demonstrate required skills.",
      "Prepare answers for common behavioral questions using the STAR method.",
      "Practice with a friend or record yourself answering technical questions.",
      "Prepare thoughtful questions to ask the interviewer about the role and company."
    ]
  },
  {
    category: "During Technical Questions",
    tips: [
      "Listen carefully to the problem before starting to solve it.",
      "Think out loud to show your reasoning process.",
      "If you don't know something, be honest but show your problem-solving approach.",
      "Ask clarifying questions when needed.",
      "Discuss multiple approaches before diving into code."
    ]
  },
  {
    category: "Coding Best Practices",
    tips: [
      "Start with a clear understanding of the problem requirements.",
      "Consider edge cases in your solution.",
      "Write clean, readable code with proper naming conventions.",
      "Optimize your solution and discuss time/space complexity.",
      "Test your code with example inputs."
    ]
  }
];

const InterviewPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<string[]>([]);
  
  const handleNextQuestion = () => {
    setCompletedQuestions([...completedQuestions, mockQuestions[currentQuestionIndex]]);
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, mockQuestions.length - 1));
    setAnswer('');
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  
  const isLastQuestion = currentQuestionIndex === mockQuestions.length - 1;
  const interviewComplete = completedQuestions.length === mockQuestions.length;

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="interview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="interview">Interview Session</TabsTrigger>
              <TabsTrigger value="tips">Interview Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="interview" className="mt-0">
              {!interviewComplete ? (
                <>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <h1 className="text-2xl font-bold flex-1">Q&A Round</h1>
                      <div className="text-sm text-muted-foreground">
                        Question {currentQuestionIndex + 1} of {mockQuestions.length}
                      </div>
                    </div>
                    
                    <div className="w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex) / mockQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <Card className="mb-6 bg-dark-card border-border/40">
                    <CardHeader>
                      <CardTitle className="text-xl font-medium">
                        {mockQuestions[currentQuestionIndex]}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-dark-card border-border/40">
                    <CardHeader>
                      <CardTitle className="text-lg">Your Answer</CardTitle>
                      <CardDescription>
                        Type your answer or use voice input
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <textarea
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          className="w-full min-h-[150px] bg-dark-hover border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Enter your answer here..."
                        />
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            onClick={toggleRecording}
                            className={isRecording ? 'text-red-500 animate-pulse' : ''}
                          >
                            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-start gap-2 text-sm p-3 bg-blue-500/10 text-blue-500 rounded-md">
                        <Info className="h-4 w-4 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Interview Tip</p>
                          <p className="text-blue-400">
                            When answering technical questions, start with a concise definition, 
                            then provide a practical example, and finally explain when/why you would use it.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                      <div>
                        {completedQuestions.length > 0 && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 mr-1 text-green-500" /> 
                            {completedQuestions.length} question{completedQuestions.length !== 1 ? 's' : ''} completed
                          </div>
                        )}
                      </div>
                      <Button 
                        onClick={handleNextQuestion}
                        disabled={!answer.trim()}
                      >
                        {isLastQuestion ? 'Finish Round' : 'Next Question'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h1 className="text-3xl font-bold mb-3">Q&A Round Complete!</h1>
                  <p className="text-muted-foreground mb-8">
                    Great job! You've completed the Q&A round of your interview.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline">View Results</Button>
                    <Button>Continue to Coding Round</Button>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="tips" className="mt-0">
              <Card className="bg-dark-card border-border/40">
                <CardHeader>
                  <CardTitle>Expert Interview Tips</CardTitle>
                  <CardDescription>
                    Proven strategies to help you succeed in technical interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {interviewTips.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                          {index === 0 ? (
                            <BookOpen className="h-5 w-5 text-blue-500" />
                          ) : index === 1 ? (
                            <Users className="h-5 w-5 text-purple-500" />
                          ) : (
                            <Code className="h-5 w-5 text-green-500" />
                          )}
                          {section.category}
                        </h3>
                        
                        <div className="space-y-2">
                          {section.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 border border-border/40 rounded-md">
                              <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <p className="text-sm">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-amber-500" />
                        Time Management
                      </h3>
                      
                      <div className="p-4 border border-border/40 rounded-md">
                        <h4 className="font-medium mb-2">Recommended Time Allocation</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Understanding the problem</span>
                              <span className="text-amber-500">~15%</span>
                            </div>
                            <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full" style={{ width: "15%" }} />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Planning your approach</span>
                              <span className="text-green-500">~25%</span>
                            </div>
                            <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: "25%" }} />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Implementing the solution</span>
                              <span className="text-blue-500">~40%</span>
                            </div>
                            <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full" style={{ width: "40%" }} />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Testing and optimization</span>
                              <span className="text-purple-500">~20%</span>
                            </div>
                            <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                              <div className="bg-purple-500 h-full" style={{ width: "20%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Download Interview Preparation Guide</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default InterviewPage;
