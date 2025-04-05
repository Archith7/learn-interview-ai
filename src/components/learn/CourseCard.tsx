
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  modules: number;
  progress?: number;
  image?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  modules,
  progress = 0,
  image,
}) => {
  return (
    <Card className="overflow-hidden card-hover bg-dark-card border-border/40">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary/50">
            <div 
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2 h-10">{description}</p>
        <div className="mt-2 text-xs text-muted-foreground">
          {modules} modules • {progress > 0 ? `${progress}% complete` : 'Not started'}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/learn/course/${id}`} className="flex items-center justify-center gap-2">
            {progress > 0 ? 'Continue Learning' : 'Start Learning'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
