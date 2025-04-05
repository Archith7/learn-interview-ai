
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, ArrowRight, CheckCircle, BookOpen as Book, BarChart } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Master Technical Skills with <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI-Powered</span> Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Learn programming concepts through structured courses and test yourself with personalized AI interview simulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/learn">
                  Start Learning
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/test">
                  Try Mock Interviews
                  <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -right-64 md:-right-20 -top-64 md:-top-80 z-0">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/20 blur-3xl" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform helps you build technical skills and prepare for interviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-dark border-border/40 card-hover"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learn Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Structured Learning Paths</h2>
              <p className="text-muted-foreground mb-6">
                Our learning paths are designed to take you from beginner to advanced in a structured manner. Each course is broken down into modules with clear objectives and exercises.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Step-by-step Modules</h3>
                    <p className="text-muted-foreground">Progressive lessons that build on previous concepts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visual Mindmaps</h3>
                    <p className="text-muted-foreground">Comprehensive knowledge maps for better retention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Integrated Quizzes</h3>
                    <p className="text-muted-foreground">Test your knowledge with MCQs after each module</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link to="/learn">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-dark-card border border-border/40 rounded-lg shadow-xl overflow-hidden">
                <div className="p-2 bg-dark-hover border-b border-border/40 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                  alt="Learning Dashboard" 
                  className="w-full"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-lg bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-lg" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Interview Section */}
      <section className="py-20 bg-dark-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 bg-dark border border-border/40 rounded-lg shadow-xl overflow-hidden">
                <div className="p-2 bg-dark-hover border-b border-border/40 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=2670&auto=format&fit=crop" 
                  alt="Interview Simulation" 
                  className="w-full"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-lg bg-gradient-to-br from-purple-600/30 to-indigo-600/30 blur-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Interview Preparation</h2>
              <p className="text-muted-foreground mb-6">
                Practice with personalized mock interviews tailored to your skills and experience. Get detailed feedback and improve your interview performance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Resume-Based Interviews</h3>
                    <p className="text-muted-foreground">AI analyzes your resume to create relevant questions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Multi-Round Simulation</h3>
                    <p className="text-muted-foreground">Q&A, coding, and debugging rounds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-500/10 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Detailed Performance Analysis</h3>
                    <p className="text-muted-foreground">Get scores and improvement recommendations</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link to="/test">
                  Try Mock Interview <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-br from-indigo-900/70 to-purple-900/70 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Technical Skills?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your learning journey today with our comprehensive courses and interview practice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-indigo-900 hover:bg-gray-100">
                <Link to="/learn">
                  Get Started for Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Feature data
const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Master technical skills with our comprehensive courses",
    points: [
      "Step-by-step learning modules",
      "Interactive code examples",
      "Visual concept mindmaps",
      "Practice quizzes for each topic"
    ]
  },
  {
    icon: Code,
    title: "Mock Interviews",
    description: "Prepare for technical interviews with AI simulations",
    points: [
      "Resume-based personalized questions",
      "Real-time coding challenges",
      "Debugging exercises",
      "Voice and text response options"
    ]
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track your progress and identify areas for improvement",
    points: [
      "Detailed score breakdowns",
      "Personalized feedback",
      "Progress tracking across modules",
      "Skill gap analysis"
    ]
  }
];

export default Index;
