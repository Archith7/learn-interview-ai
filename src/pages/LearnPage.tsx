
import React from 'react';
import Layout from '@/components/layout/Layout';
import CourseCard from '@/components/learn/CourseCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Mock course data
const courses = [
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React and build modern web applications with hooks, context, and more.',
    modules: 8,
    progress: 65,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    description: 'Master server-side JavaScript with Node.js, Express, and MongoDB for building robust APIs.',
    modules: 10,
    progress: 30,
    image: 'https://images.unsplash.com/photo-1648383228081-fe81da7df21f?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Essential computer science concepts for coding interviews and efficient problem solving.',
    modules: 12,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1580894896013-cb689c7a2794?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Masterclass',
    description: 'Build full-stack applications with MongoDB, Express.js, React, and Node.js.',
    modules: 15,
    progress: 10,
    image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'system-design',
    title: 'System Design Fundamentals',
    description: 'Learn how to design scalable systems and ace system design interviews at top tech companies.',
    modules: 8,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1594986557377-40ead7cd7d55?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'From basics to advanced concepts in Python, including data analysis, automation, and web development.',
    modules: 10,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=2670&auto=format&fit=crop'
  },
];

const LearnPage = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Learning Paths</h1>
            <p className="text-muted-foreground">Master technical skills with structured courses and interactive modules</p>
          </div>
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full md:w-64 bg-dark-card border border-border/40 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
        
        {/* Course in progress section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(course => course.progress > 0).map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
        
        {/* All courses section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Browse All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LearnPage;
