
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-dark/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              LearnPrep<span className="text-purple-400">AI</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/learn" 
              className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>Learn</span>
            </Link>
            <Link 
              to="/test" 
              className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>Test</span>
            </Link>
            <Button variant="outline" size="sm" className="ml-4">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="container flex flex-col gap-6 p-6">
          <Link 
            to="/learn" 
            className="flex items-center gap-2 text-lg font-medium py-3 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Learn</span>
          </Link>
          <Link 
            to="/test" 
            className="flex items-center gap-2 text-lg font-medium py-3 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            <Code className="h-5 w-5 text-primary" />
            <span>Test</span>
          </Link>
          <Button className="mt-4 w-full">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
