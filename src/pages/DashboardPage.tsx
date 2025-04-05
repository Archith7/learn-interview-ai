
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Code, Trophy, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  // Mock data for dashboard
  const stats = [
    { title: 'Courses in Progress', value: '3', icon: BookOpen, color: 'bg-blue-500/10 text-blue-500' },
    { title: 'Mock Interviews Completed', value: '5', icon: Users, color: 'bg-purple-500/10 text-purple-500' },
    { title: 'Coding Challenges', value: '12', icon: Code, color: 'bg-green-500/10 text-green-500' },
    { title: 'Progress This Week', value: '+15%', icon: TrendingUp, color: 'bg-amber-500/10 text-amber-500' }
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-6">
          {/* Welcome section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
              <p className="text-muted-foreground">Track your progress and plan your learning journey</p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/learn">Create Learning Path</Link>
              </Button>
              <Button asChild>
                <Link to="/test">Practice Interview</Link>
              </Button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-dark-card border-border/40">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.title}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-2 rounded-full ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent activity and recommended courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-dark-card border-border/40">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning activities and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Completed "React Hooks" quiz with 85% score', 
                    'Started "System Design Fundamentals" course', 
                    'Completed a mock interview for Frontend Developer'].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/40 last:border-0">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="text-sm">{activity}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {i === 0 ? 'Yesterday' : i === 1 ? '3 days ago' : '1 week ago'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-border/40">
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>Personalized recommendations based on your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border/40 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Complete Your Learning Path</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Continue your MERN Stack learning path (60% complete)
                        </p>
                      </div>
                      <div className="bg-amber-500/10 text-amber-500 p-2 rounded-full">
                        <BookOpen className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" className="w-full">
                        Continue Learning
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border border-border/40 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Practice Technical Interview</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Try a mock interview focusing on React and Node.js
                        </p>
                      </div>
                      <div className="bg-purple-500/10 text-purple-500 p-2 rounded-full">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" className="w-full">
                        Start Practice
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interview prep tips */}
          <Card className="bg-dark-card border-border/40">
            <CardHeader>
              <CardTitle>Interview Preparation Tips</CardTitle>
              <CardDescription>Expert advice to help you succeed in technical interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Behavioral Questions',
                      tip: 'Use the STAR method (Situation, Task, Action, Result) to structure your answers to behavioral questions.',
                      icon: Users
                    },
                    {
                      title: 'Technical Preparation',
                      tip: 'Practice solving problems out loud. Explaining your thought process is as important as the solution itself.',
                      icon: Code
                    },
                    {
                      title: 'Post-Interview',
                      tip: 'Send a thank-you note within 24 hours, and reflect on what went well and what could be improved.',
                      icon: Trophy
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-4 border border-border/40 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary p-2 rounded-full">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">View All Interview Tips</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
