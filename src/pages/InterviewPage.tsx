import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, XCircle, Mic, MicOff, Send, Info, BookOpen, Users, Code, Clock, SkipForward, Save, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const mockQuestions = [
  "Explain the concept of closures in JavaScript and provide an example.",
  "What is the virtual DOM in React and how does it improve performance?",
  "Describe the event loop in Node.js and how it enables asynchronous programming.",
  "How would you implement authentication in a MERN stack application?",
  "Explain the difference between cookies, local storage, and session storage."
];

const mockCodingChallenges = [
  {
    title: "Array Manipulation",
    description: "Implement a function that takes an array of integers and returns the array with duplicates removed.",
    exampleInput: "[1, 2, 3, 1, 2, 5]",
    exampleOutput: "[1, 2, 3, 5]",
    starterCode: `function removeDuplicates(array) {\n  // Your code here\n\n}`
  },
  {
    title: "String Reversal",
    description: "Write a function that reverses a string without using the built-in reverse() method.",
    exampleInput: "'hello'",
    exampleOutput: "'olleh'",
    starterCode: `function reverseString(str) {\n  // Your code here\n\n}`
  },
  {
    title: "Object Transformation",
    description: "Create a function that transforms an array of objects into a single object with key-value pairs.",
    exampleInput: "[{key: 'name', value: 'John'}, {key: 'age', value: 30}]",
    exampleOutput: "{ name: 'John', age: 30 }",
    starterCode: `function transformArray(array) {\n  // Your code here\n\n}`
  }
];

const mockDebuggingChallenges = [
  {
    title: "Fix the Counter",
    description: "This React counter component should increment when the button is clicked, but it's not working. Find and fix the bug.",
    buggyCode: `function Counter() {
  let count = 0;
  
  function handleClick() {
    count = count + 1;
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}`
  },
  {
    title: "Debug the API Call",
    description: "This function should fetch data from an API and handle errors, but it's not working correctly. Find and fix the issues.",
    buggyCode: `async function fetchUserData(userId) {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`);
  const data = response.json();
  return data;
}`
  }
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

enum InterviewRound {
  QA = "qa",
  CODING = "coding",
  DEBUGGING = "debugging",
  COMPLETE = "complete"
}

const InterviewPage = () => {
  const [currentRound, setCurrentRound] = useState<InterviewRound>(InterviewRound.QA);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCodingIndex, setCurrentCodingIndex] = useState(0);
  const [currentDebuggingIndex, setCurrentDebuggingIndex] = useState(0);
  
  const [answer, setAnswer] = useState('');
  const [codingSolution, setCodingSolution] = useState('');
  const [debuggingSolution, setDebuggingSolution] = useState('');
  
  const [isRecording, setIsRecording] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState<Record<string, string>>({});
  const [skippedQuestions, setSkippedQuestions] = useState<string[]>([]);
  
  const [completedQA, setCompletedQA] = useState<string[]>([]);
  const [completedCoding, setCompletedCoding] = useState<string[]>([]);
  const [completedDebugging, setCompletedDebugging] = useState<string[]>([]);
  
  const handleNextQA = () => {
    if (answer.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`qa-${currentQuestionIndex}`]: answer
      });
      
      setCompletedQA([...completedQA, mockQuestions[currentQuestionIndex]]);
    }
    
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswer(savedAnswers[`qa-${currentQuestionIndex + 1}`] || '');
    } else {
      setCurrentRound(InterviewRound.CODING);
    }
  };
  
  const handleSkipQA = () => {
    setSkippedQuestions([...skippedQuestions, mockQuestions[currentQuestionIndex]]);
    
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswer(savedAnswers[`qa-${currentQuestionIndex + 1}`] || '');
    } else {
      setCurrentRound(InterviewRound.CODING);
    }
  };
  
  const handleSaveQA = () => {
    if (answer.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`qa-${currentQuestionIndex}`]: answer
      });
    }
  };
  
  const handleNextCoding = () => {
    if (codingSolution.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`coding-${currentCodingIndex}`]: codingSolution
      });
      
      setCompletedCoding([...completedCoding, mockCodingChallenges[currentCodingIndex].title]);
    }
    
    if (currentCodingIndex < mockCodingChallenges.length - 1) {
      setCurrentCodingIndex((prev) => prev + 1);
      setCodingSolution(savedAnswers[`coding-${currentCodingIndex + 1}`] || mockCodingChallenges[currentCodingIndex + 1].starterCode);
    } else {
      setCurrentRound(InterviewRound.DEBUGGING);
    }
  };
  
  const handleSkipCoding = () => {
    setSkippedQuestions([...skippedQuestions, mockCodingChallenges[currentCodingIndex].title]);
    
    if (currentCodingIndex < mockCodingChallenges.length - 1) {
      setCurrentCodingIndex((prev) => prev + 1);
      setCodingSolution(savedAnswers[`coding-${currentCodingIndex + 1}`] || mockCodingChallenges[currentCodingIndex + 1].starterCode);
    } else {
      setCurrentRound(InterviewRound.DEBUGGING);
    }
  };
  
  const handleSaveCoding = () => {
    if (codingSolution.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`coding-${currentCodingIndex}`]: codingSolution
      });
    }
  };
  
  const handleNextDebugging = () => {
    if (debuggingSolution.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`debugging-${currentDebuggingIndex}`]: debuggingSolution
      });
      
      setCompletedDebugging([...completedDebugging, mockDebuggingChallenges[currentDebuggingIndex].title]);
    }
    
    if (currentDebuggingIndex < mockDebuggingChallenges.length - 1) {
      setCurrentDebuggingIndex((prev) => prev + 1);
      setDebuggingSolution(savedAnswers[`debugging-${currentDebuggingIndex + 1}`] || mockDebuggingChallenges[currentDebuggingIndex + 1].buggyCode);
    } else {
      setCurrentRound(InterviewRound.COMPLETE);
    }
  };
  
  const handleSkipDebugging = () => {
    setSkippedQuestions([...skippedQuestions, mockDebuggingChallenges[currentDebuggingIndex].title]);
    
    if (currentDebuggingIndex < mockDebuggingChallenges.length - 1) {
      setCurrentDebuggingIndex((prev) => prev + 1);
      setDebuggingSolution(savedAnswers[`debugging-${currentDebuggingIndex + 1}`] || mockDebuggingChallenges[currentDebuggingIndex + 1].buggyCode);
    } else {
      setCurrentRound(InterviewRound.COMPLETE);
    }
  };
  
  const handleSaveDebugging = () => {
    if (debuggingSolution.trim()) {
      setSavedAnswers({
        ...savedAnswers,
        [`debugging-${currentDebuggingIndex}`]: debuggingSolution
      });
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  
  React.useEffect(() => {
    if (currentRound === InterviewRound.CODING && !codingSolution) {
      setCodingSolution(savedAnswers[`coding-${currentCodingIndex}`] || mockCodingChallenges[currentCodingIndex].starterCode);
    }
    
    if (currentRound === InterviewRound.DEBUGGING && !debuggingSolution) {
      setDebuggingSolution(savedAnswers[`debugging-${currentDebuggingIndex}`] || mockDebuggingChallenges[currentDebuggingIndex].buggyCode);
    }
  }, [currentRound, currentCodingIndex, currentDebuggingIndex]);
  
  const renderProgress = () => {
    let current = 0;
    let total = 0;
    
    switch (currentRound) {
      case InterviewRound.QA:
        current = completedQA.length;
        total = mockQuestions.length;
        break;
      case InterviewRound.CODING:
        current = completedQA.length + completedCoding.length;
        total = mockQuestions.length + mockCodingChallenges.length;
        break;
      case InterviewRound.DEBUGGING:
        current = completedQA.length + completedCoding.length + completedDebugging.length;
        total = mockQuestions.length + mockCodingChallenges.length + mockDebuggingChallenges.length;
        break;
      case InterviewRound.COMPLETE:
        current = mockQuestions.length + mockCodingChallenges.length + mockDebuggingChallenges.length;
        total = current;
        break;
    }
    
    const progressPercent = (current / total) * 100;
    
    return (
      <div className="w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    );
  };
  
  const renderQARound = () => {
    return (
      <>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold flex-1">Q&A Round</h1>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {mockQuestions.length}
            </div>
          </div>
          
          {renderProgress()}
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
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSkipQA}>
                <SkipForward className="h-4 w-4 mr-1" />
                Skip
              </Button>
              <Button variant="outline" onClick={handleSaveQA}>
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
            <Button 
              onClick={handleNextQA}
              disabled={!answer.trim()}
            >
              {currentQuestionIndex < mockQuestions.length - 1 ? 'Next Question' : 'Next Round'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  };
  
  const renderCodingRound = () => {
    const challenge = mockCodingChallenges[currentCodingIndex];
    
    return (
      <>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold flex-1">Coding Challenge</h1>
            <div className="text-sm text-muted-foreground">
              Challenge {currentCodingIndex + 1} of {mockCodingChallenges.length}
            </div>
          </div>
          
          {renderProgress()}
        </div>
        
        <Card className="mb-6 bg-dark-card border-border/40">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
              {challenge.title}
            </CardTitle>
            <CardDescription>
              {challenge.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <p className="text-xs font-medium mb-1">Example Input:</p>
                  <pre className="text-sm">{challenge.exampleInput}</pre>
                </div>
                <div className="p-3 bg-primary/10 rounded-md">
                  <p className="text-xs font-medium mb-1">Expected Output:</p>
                  <pre className="text-sm">{challenge.exampleOutput}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-dark-card border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Your Solution</CardTitle>
            <CardDescription>
              Complete the function to solve the challenge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Textarea
                value={codingSolution}
                onChange={(e) => setCodingSolution(e.target.value)}
                className="w-full min-h-[200px] font-mono text-sm bg-dark-hover border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="mt-4 flex items-start gap-2 text-sm p-3 bg-amber-500/10 text-amber-500 rounded-md">
              <Info className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Coding Tip</p>
                <p className="text-amber-400">
                  Consider edge cases in your solution, such as empty arrays or unexpected inputs. 
                  Think about the time and space complexity of your algorithm.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSkipCoding}>
                <SkipForward className="h-4 w-4 mr-1" />
                Skip
              </Button>
              <Button variant="outline" onClick={handleSaveCoding}>
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled={!codingSolution.trim()}>
                  Run & Submit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Solution Submission</DialogTitle>
                  <DialogDescription>
                    In a real interview, your code would be tested with various inputs. 
                    Would you like to submit this solution and proceed?
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="test-cases" />
                      <label htmlFor="test-cases" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I've tested my solution with different inputs
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edge-cases" />
                      <label htmlFor="edge-cases" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I've considered edge cases
                      </label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => {
                    const dialogCloseEvent = new CustomEvent('dialog.close');
                    document.dispatchEvent(dialogCloseEvent);
                  }}>
                    Go Back
                  </Button>
                  <Button onClick={() => {
                    handleNextCoding();
                    const dialogCloseEvent = new CustomEvent('dialog.close');
                    document.dispatchEvent(dialogCloseEvent);
                  }}>
                    Submit & {currentCodingIndex < mockCodingChallenges.length - 1 ? 'Continue' : 'Next Round'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </>
    );
  };
  
  const renderDebuggingRound = () => {
    const challenge = mockDebuggingChallenges[currentDebuggingIndex];
    
    return (
      <>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold flex-1">Debugging Challenge</h1>
            <div className="text-sm text-muted-foreground">
              Debug {currentDebuggingIndex + 1} of {mockDebuggingChallenges.length}
            </div>
          </div>
          
          {renderProgress()}
        </div>
        
        <Card className="mb-6 bg-dark-card border-border/40">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
              {challenge.title}
            </CardTitle>
            <CardDescription>
              {challenge.description}
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="bg-dark-card border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Fix the Code</CardTitle>
            <CardDescription>
              Edit the code to fix the bugs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Textarea
                value={debuggingSolution}
                onChange={(e) => setDebuggingSolution(e.target.value)}
                className="w-full min-h-[200px] font-mono text-sm bg-dark-hover border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="mt-4 flex items-start gap-2 text-sm p-3 bg-green-500/10 text-green-500 rounded-md">
              <Info className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Debugging Tip</p>
                <p className="text-green-400">
                  When debugging, first identify where the problem occurs, then determine why it happens, 
                  and finally implement a fix. Look for common issues like incorrect state management, 
                  API error handling, or syntax errors.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSkipDebugging}>
                <SkipForward className="h-4 w-4 mr-1" />
                Skip
              </Button>
              <Button variant="outline" onClick={handleSaveDebugging}>
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
            <Button 
              onClick={handleNextDebugging}
              disabled={!debuggingSolution.trim()}
            >
              {currentDebuggingIndex < mockDebuggingChallenges.length - 1 ? 'Next Debug' : 'Complete Interview'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  };
  
  const renderInterviewComplete = () => {
    const totalAnswered = completedQA.length + completedCoding.length + completedDebugging.length;
    const totalQuestions = mockQuestions.length + mockCodingChallenges.length + mockDebuggingChallenges.length;
    const score = Math.round((totalAnswered / totalQuestions) * 100);
    
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Interview Complete!</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Great job! You've completed all rounds of your technical interview. Here's a summary of your performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          <Card className="bg-dark-card border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg">Q&A Round</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-blue-500">{completedQA.length}/{mockQuestions.length}</p>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-card border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg">Coding Round</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-amber-500">{completedCoding.length}/{mockCodingChallenges.length}</p>
              <p className="text-sm text-muted-foreground">Challenges Completed</p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-card border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg">Debugging Round</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-green-500">{completedDebugging.length}/{mockDebuggingChallenges.length}</p>
              <p className="text-sm text-muted-foreground">Bugs Fixed</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-dark-card border-border/40 max-w-md mx-auto mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-center">Overall Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center border-8 border-primary mx-auto mb-2">
              <p className="text-4xl font-bold">{score}%</p>
            </div>
            <p className="text-muted-foreground">
              {score >= 80 ? "Excellent performance!" : 
               score >= 60 ? "Good job!" : 
               "Keep practicing!"}
            </p>
          </CardContent>
        </Card>
        
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => window.location.href = "/test"}>
            Back to Test Menu
          </Button>
          <Button onClick={() => window.location.href = "/dashboard"}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  };
  
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
              {currentRound === InterviewRound.QA && renderQARound()}
              {currentRound === InterviewRound.CODING && renderCodingRound()}
              {currentRound === InterviewRound.DEBUGGING && renderDebuggingRound()}
              {currentRound === InterviewRound.COMPLETE && renderInterviewComplete()}
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
