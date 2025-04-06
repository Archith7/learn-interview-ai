import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, Code, Search, ArrowRight, BookCopy, Globe, LucideIcon,
  Server, Database, Cpu, FileCode, Smartphone, Shield
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LearningTips from '@/components/learn/LearningTips';

// Mock topics for roadmap generation
const topics = [
  { name: 'Frontend Development', icon: Code, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Backend Development', icon: Server, color: 'bg-green-500/10 text-green-500' },
  { name: 'Database Design', icon: Database, color: 'bg-amber-500/10 text-amber-500' },
  { name: 'System Design', icon: Cpu, color: 'bg-purple-500/10 text-purple-500' },
  { name: 'DevOps & CI/CD', icon: FileCode, color: 'bg-red-500/10 text-red-500' },
  { name: 'Mobile Development', icon: Smartphone, color: 'bg-indigo-500/10 text-indigo-500' },
  { name: 'Security', icon: Shield, color: 'bg-pink-500/10 text-pink-500' },
  { name: 'Web Technologies', icon: Globe, color: 'bg-teal-500/10 text-teal-500' },
];

// Example roadmap structure
const exampleRoadmap = [
  {
    title: "Fundamentals",
    description: "Core concepts and basics",
    items: [
      "HTML, CSS & JavaScript basics",
      "DOM manipulation",
      "Responsive design principles",
      "CSS frameworks (Tailwind, Bootstrap)"
    ]
  },
  {
    title: "React Fundamentals",
    description: "Essential React concepts",
    items: [
      "Components & JSX",
      "Props & State",
      "Lifecycle methods",
      "Hooks (useState, useEffect, useContext)"
    ]
  },
  {
    title: "Advanced React",
    description: "Taking React to the next level",
    items: [
      "Advanced hooks (useReducer, useMemo, useCallback)",
      "Context API & global state",
      "Performance optimization",
      "Custom hooks"
    ]
  },
  {
    title: "Ecosystem & Tools",
    description: "Important libraries and tools",
    items: [
      "State management (Redux, Zustand)",
      "Routing (React Router)",
      "Form handling (React Hook Form)",
      "Testing (Jest, React Testing Library)"
    ]
  }
];

// Mock learning resources
const resources = [
  { 
    title: "React Official Documentation", 
    type: "Documentation",
    url: "https://reactjs.org/docs/getting-started.html",
    description: "Comprehensive guide to React concepts and APIs"
  },
  { 
    title: "The Complete React Developer Course", 
    type: "Course",
    url: "#",
    description: "Hands-on course covering React, Redux, Hooks and more"
  },
  {
    title: "Understanding React's useEffect Hook",
    type: "Article",
    url: "#",
    description: "In-depth explanation of how useEffect works with examples"
  },
  {
    title: "React Patterns and Best Practices",
    type: "E-Book",
    url: "#",
    description: "Detailed guide to writing clean, maintainable React code"
  }
];

// Mock quiz questions
const quizQuestions = [
  {
    question: "Which hook would you use to run side effects in a functional component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the key prop when rendering lists in React?",
    options: [
      "It's optional and has no specific purpose",
      "It helps React identify which items have changed, are added, or removed",
      "It's required for styling list items",
      "It's used to set a unique ID in the DOM"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a React Hook?",
    options: ["useEffect", "useState", "useComponent", "useContext"],
    correctAnswer: 2
  }
];

const LearnPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);
  const [customTopic, setCustomTopic] = useState('');
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleGenerateRoadmap = () => {
    // In a real app, this would call an AI API
    setShowRoadmap(true);
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Personalized Learning</h1>
            <p className="text-muted-foreground">Generate custom roadmaps, find resources, and test your knowledge</p>
          </div>
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full md:w-64 pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="roadmap" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
            <TabsTrigger value="resources">Learning Resources</TabsTrigger>
            <TabsTrigger value="quiz">Knowledge Quiz</TabsTrigger>
            <TabsTrigger value="tips">Learning Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roadmap" className="mt-0">
            {!showRoadmap ? (
              <Card className="border-border/40 shadow-sm">
                <CardHeader>
                  <CardTitle>Generate a Custom Learning Roadmap</CardTitle>
                  <CardDescription>
                    Our AI will create a personalized learning path based on your interests and goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Select a topic or enter your own
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {topics.map((topic, index) => (
                          <div 
                            key={index}
                            className={`flex items-center gap-2 p-3 border border-border/40 rounded-md cursor-pointer transition-colors ${
                              selectedRoadmap === topic.name 
                                ? 'border-primary bg-primary/10' 
                                : 'hover:border-primary/50 hover:bg-primary/5'
                            }`}
                            onClick={() => {
                              setSelectedRoadmap(topic.name);
                              setCustomTopic('');
                            }}
                          >
                            <div className={`p-1.5 rounded-full ${topic.color}`}>
                              <topic.icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm">{topic.name}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-2">
                          Or enter a custom topic
                        </label>
                        <Input
                          type="text"
                          placeholder="E.g., GraphQL, TypeScript, Docker"
                          value={customTopic}
                          onChange={(e) => {
                            setCustomTopic(e.target.value);
                            setSelectedRoadmap(null);
                          }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Experience Level
                      </label>
                      <select className="w-full border border-input rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Learning Goal
                      </label>
                      <select className="w-full border border-input rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="career">Career Transition</option>
                        <option value="skill">New Skill Acquisition</option>
                        <option value="project">Build a Specific Project</option>
                        <option value="interview">Interview Preparation</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleGenerateRoadmap}
                    disabled={!selectedRoadmap && !customTopic.trim()}
                    className="w-full"
                  >
                    Generate Learning Roadmap
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="space-y-6">
                <Card className="border-border/40 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>
                        {selectedRoadmap || customTopic} Learning Roadmap
                      </CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setShowRoadmap(false)}
                      >
                        Generate New Roadmap
                      </Button>
                    </div>
                    <CardDescription>
                      Personalized learning path for {selectedRoadmap || customTopic}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-border/50"></div>
                      <div className="space-y-8 relative">
                        {exampleRoadmap.map((section, index) => (
                          <div key={index} className="pl-8 relative">
                            <div className="absolute left-0 top-0 rounded-full w-7 h-7 bg-primary flex items-center justify-center">
                              <span className="text-primary-foreground text-sm font-medium">
                                {index + 1}
                              </span>
                            </div>
                            <h3 className="text-lg font-medium mb-1">{section.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {section.description}
                            </p>
                            <ul className="space-y-2">
                              {section.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="rounded-full w-1.5 h-1.5 bg-primary mt-1.5"></div>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline">Save Roadmap</Button>
                    <Button>Share Roadmap</Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="resources" className="mt-0">
            <Card className="border-border/40 shadow-sm">
              <CardHeader>
                <CardTitle>Curated Learning Resources</CardTitle>
                <CardDescription>
                  Top quality learning materials recommended by our AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resources.map((resource, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-border/40 rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{resource.title}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <a 
                          href={resource.url}
                          className="text-sm text-primary flex items-center hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resource
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/40">
                    <h3 className="font-medium mb-3">Request Custom Resources</h3>
                    <div className="flex gap-3">
                      <Input
                        placeholder="Enter a specific topic for resources..."
                        className="flex-1"
                      />
                      <Button>Find Resources</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quiz" className="mt-0">
            <Card className="border-border/40 shadow-sm">
              <CardHeader>
                <CardTitle>Test Your Knowledge</CardTitle>
                <CardDescription>
                  Take a quick quiz to identify areas for improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {quizQuestions.map((quiz, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4">
                      <h3 className="font-medium mb-3">
                        {index + 1}. {quiz.question}
                      </h3>
                      <div className="space-y-2">
                        {quiz.options.map((option, i) => (
                          <div key={i} className="flex items-center">
                            <input
                              type="radio"
                              id={`q${index}-option${i}`}
                              name={`question-${index}`}
                              className="mr-2 h-4 w-4 rounded-full border-border text-primary focus:ring-primary/25"
                            />
                            <label 
                              htmlFor={`q${index}-option${i}`} 
                              className="text-sm"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Want a customized quiz?</h3>
                        <p className="text-sm text-muted-foreground">
                          Enter a topic to generate specific questions
                        </p>
                      </div>
                      <Button>Generate Quiz</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Check Answers</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="tips" className="mt-0">
            <LearningTips />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LearnPage;
