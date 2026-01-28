import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProjectDialog({
  project,
  isOpen,
  onClose,
}: {
  project?: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-background">
        
        <div className="relative w-full aspect-video sm:aspect-21/9 bg-muted overflow-hidden group">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
              <span className="text-sm font-medium">No Preview Available</span>
            </div>
          )}
          
          {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent" /> */}
        </div>

        <div className="px-6 pb-6 pt-2 flex flex-col gap-6">
          
          <DialogHeader className="space-y-4 text-left">
            <div className="flex flex-col gap-2">
              <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
                {project.title}
              </DialogTitle>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1 text-xs sm:text-sm rounded-md font-semibold">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </DialogHeader>

          <div className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            <DialogDescription className="hidden">{project.title} Details</DialogDescription> 
            <ScrollArea className="max-h-50 pr-4">
                <p>{project.description}</p>
            </ScrollArea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t mt-auto">
            {project.link?.demo && (
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <a href={project.link.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4" />
                  Live Demo
                  <ExternalLink className="w-3 h-3 opacity-50 ml-1" />
                </a>
              </Button>
            )}

            {project.link?.github && (
              <Button asChild variant="outline" className="flex-1 gap-2 border border-gray-500 dark:border-input hover:bg-accent hover:text-accent-foreground">
                <a href={project.link.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}