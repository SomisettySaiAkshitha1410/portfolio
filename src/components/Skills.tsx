import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Java", "Python", "C", "SQL", "JavaScript", "CSS", "HTML"],
      gradient: "gradient-primary"
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Bootstrap", "CSS3", "HTML5", "Responsive Design"],
      gradient: "gradient-accent"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "MySQL"],
      gradient: "bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500"
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "DBMS", "OOPS", "Data Structures"],
      gradient: "gradient-primary"
    },
    {
      title: "AI & ML",
      icon: "🤖",
      skills: ["Machine Learning", "AI", "Computer Vision", "TensorFlow", "scikit-learn"],
      gradient: "gradient-accent"
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Netlify", "Vercel"],
      gradient: "bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card border-primary/20 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:pulse-glow transition-all duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-gradient">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="glass-card border-primary/20 hover:bg-primary/10 transition-colors duration-300 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-accent/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl mb-6 text-gradient">
                Additional Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Development Focus</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="outline" className="border-primary/30">Full Stack Development</Badge>
                    <Badge variant="outline" className="border-primary/30">AI Integration</Badge>
                    <Badge variant="outline" className="border-primary/30">Web Applications</Badge>
                    <Badge variant="outline" className="border-primary/30">UI/UX Design</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="outline" className="border-accent/30">Problem Solving</Badge>
                    <Badge variant="outline" className="border-accent/30">Team Collaboration</Badge>
                    <Badge variant="outline" className="border-accent/30">Creative Thinking</Badge>
                    <Badge variant="outline" className="border-accent/30">Project Management</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;