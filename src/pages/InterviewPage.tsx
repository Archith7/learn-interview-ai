
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Mic, MicOff, Send } from 'lucide-react';

const mockQuestions = [
  "Explain the concept of closures in JavaScript and provide an example.",
  "What is the virtual DOM in React and how does it improve performance?",
  "Describe the event loop in Node.js and how it enables asynchronous programming.",
  "How would you implement authentication in a MERN stack application?",
  "Explain the difference between cookies, local storage, and session storage."
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
        </div>
      </div>
    </Layout>
  );
};

export default InterviewPage;
