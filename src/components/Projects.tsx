import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "PCOS Detection System",
      description: "Advanced AI-powered healthcare solution using MERN stack and Flask for clinical data analysis and ultrasound scan predictions. Built microservices to handle medical data with 28% improved accuracy.",
      technologies: ["MERN Stack", "Flask", "TensorFlow", "scikit-learn", "AI/ML", "Computer Vision"],
      features: [
        "Two independent Flask-based microservices",
        "Clinical data and ultrasound scan predictions",
        "Improved accuracy by 28%",
        "RESTful APIs for model integration",
        "Frontend collaboration and API pipeline"
      ],
      category: "AI/ML",
      status: "Completed",
      impact: "Healthcare Innovation",
      gradient: "gradient-primary"
    },
    {
      title: "Kanban Board Application",
      description: "Full-stack task management and workflow optimization tool with real-time collaboration, role-based access control, and intuitive drag-and-drop interface built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time collaboration capabilities",
        "Role-based access control (owner, editor, viewer)",
        "Drag-and-drop task management",
        "Secure authentication system",
        "Responsive design for all devices"
      ],
      category: "Web Development",
      status: "Completed",
      impact: "Productivity Tool",
      gradient: "bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400"
    },
    {
      title: "FlashCard App",
      description: "Interactive learning platform with backend and frontend for easy user interaction. Features include creating, editing, deleting, and flipping flashcards with knowledge testing capabilities.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "Node.js", "MongoDB"],
      features: [
        "Create, edit, delete flashcards",
        "Interactive flip animations",
        "Knowledge testing system",
        "User-friendly interface",
        "Backend API integration"
      ],
      category: "Education",
      status: "Completed",
      impact: "Learning Enhancement",
      // gradient: "gradient-secondary"
      gradient:"bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase my passion for creating meaningful technology
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card border-primary/20 hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className={`${project.gradient} text-white border-0`}>
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30">
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star size={14} className="mr-1 text-primary" />
                        <span>{project.impact}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 text-gradient">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-accent/30 hover:bg-accent/10 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className={`${project.gradient} text-white hover:opacity-90 transition-opacity`}
                        asChild
                      >
                        <a href={
                          project.title === "PCOS Detection System" ? "https://github.com/RishikaReddyMusku/pcos-detection-app" :
                          project.title === "Kanban Board Application" ? "https://github.com/SomisettySaiAkshitha1410/Kanban-Lite" :
                          "https://github.com/SomisettySaiAkshitha1410/flashcard"
                        } target="_blank" rel="noopener noreferrer">
                          <Github size={18} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        className="glass-card border-primary/30 hover:bg-primary/10"
                        asChild
                      >
                        <a href={
                          project.title === "PCOS Detection System" ? "https://pcos-detection-app.vercel.app/" :
                          project.title === "Kanban Board Application" ? "https://kanban-lite-kappa.vercel.app/login" :
                          "https://leafy-monstera-c8231a.netlify.app/"
                        } target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} className="mr-2" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Visualization */}
                  <div className={`${project.gradient} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center text-white relative z-10">
                      <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <span className="text-6xl">
                          {project.category === "AI/ML" ? "🤖" : 
                           project.category === "Web Development" ? "💻" : "📚"}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-3xl mb-2">{project.title}</h4>
                      <p className="text-white/80 text-sm mb-4">{project.impact}</p>
                      
                      <div className="space-y-2 text-sm text-white/70">
                      {/* <div className={`space-y-2 text-xs ${project.darkText ? "text-gray-600" : "text-white/70"}`}> */}
                        {project.features.slice(3).map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center">
                            <span className="mr-2 text-lg">✨</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <Github className="text-white" size={32} />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-xl text-gradient">Explore More Projects</h3>
                  <p className="text-muted-foreground">Check out my GitHub for additional projects and contributions</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="https://github.com/SomisettySaiAkshitha1410" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;