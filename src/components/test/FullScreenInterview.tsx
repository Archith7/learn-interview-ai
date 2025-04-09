
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, XCircle, Mic, MicOff, Send, Info, SkipForward, Save, ArrowRight, Maximize, Minimize } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const FullScreenInterview = ({ 
  currentRound,
  currentQuestionIndex,
  currentCodingIndex,
  currentDebuggingIndex,
  mockQuestions,
  mockCodingChallenges,
  mockDebuggingChallenges,
  answer,
  setAnswer,
  codingSolution,
  setCodingSolution,
  debuggingSolution,
  setDebuggingSolution,
  isRecording,
  toggleRecording,
  savedAnswers,
  setSavedAnswers,
  skippedQuestions,
  setSkippedQuestions,
  completedQA,
  setCompletedQA,
  completedCoding,
  setCompletedCoding,
  completedDebugging,
  setCompletedDebugging,
  handleNextQA,
  handleSkipQA,
  handleSaveQA,
  handleNextCoding,
  handleSkipCoding,
  handleSaveCoding,
  handleNextDebugging,
  handleSkipDebugging,
  handleSaveDebugging,
  renderProgress,
  onExitFullScreen
}) => {
  
  useEffect(() => {
    // Prevent scrolling when in full-screen mode
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);
  
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

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Interview Session</h2>
        <Button variant="ghost" size="icon" onClick={onExitFullScreen}>
          <Minimize className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {currentRound === 'qa' && renderQARound()}
          {currentRound === 'coding' && renderCodingRound()}
          {currentRound === 'debugging' && renderDebuggingRound()}
        </div>
      </div>
    </div>
  );
};

export default FullScreenInterview;
