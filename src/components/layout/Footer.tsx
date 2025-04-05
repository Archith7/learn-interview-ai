
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-dark">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                LearnPrep<span className="text-purple-400">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Elevate your technical skills with AI-powered learning paths and personalized mock interviews.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/learn" className="hover:text-foreground transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/test" className="hover:text-foreground transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} LearnPrepAI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
