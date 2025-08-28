import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TopLanguages = () => {
  const languages = [
    { name: "Java", percentage: 35, color: "from-orange-400 to-red-500", icon: "☕" },
    { name: "Python", percentage: 25, color: "from-blue-400 to-yellow-400", icon: "🐍" },
    { name: "JavaScript", percentage: 20, color: "from-yellow-400 to-orange-400", icon: "⚡" },
    { name: "C", percentage: 10, color: "from-blue-500 to-purple-500", icon: "⚙️" },
    { name: "SQL", percentage: 6, color: "from-green-400 to-blue-400", icon: "🗃️" },
    { name: "CSS", percentage: 4, color: "from-pink-400 to-purple-500", icon: "🎨" }
  ];

  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Top Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programming languages I work with most frequently, based on project usage and expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Language Stats */}
            <Card className="glass-card border-primary/20 hover-lift">
              <CardContent className="p-8">
                <h3 className="font-display font-semibold text-2xl mb-8 text-gradient text-center">
                  Language Distribution
                </h3>
                
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={lang.name} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{lang.icon}</span>
                          <span className="font-semibold text-foreground">{lang.name}</span>
                        </div>
                        <span className="font-bold text-primary">{lang.percentage}%</span>
                      </div>
                      <Progress 
                        value={lang.percentage} 
                        className="h-3 bg-muted/50"
                        style={{
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Language Highlights */}
            <div className="space-y-6">
              <Card className="glass-card border-accent/20 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">☕</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Java</h4>
                      <p className="text-sm text-muted-foreground">Primary Language</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    My go-to language for backend development, data structures, and algorithm implementation. Used extensively in academic projects and system design.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-secondary/20 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🐍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Python</h4>
                      <p className="text-sm text-muted-foreground">AI & ML Focus</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Perfect for machine learning projects, data analysis, and rapid prototyping. Used in my PCOS detection system and Flask applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">JavaScript</h4>
                      <p className="text-sm text-muted-foreground">Frontend Magic</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Bringing interfaces to life with React, creating interactive web applications and dynamic user experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fun Stats */}
          <Card className="glass-card border-accent/20 mt-12">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl mb-6 text-gradient text-center">
                Coding Journey Stats
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-muted-foreground">Years of Coding</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-accent-foreground mb-2">10+</div>
                  <p className="text-muted-foreground">Projects Built</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-secondary-foreground mb-2">6</div>
                  <p className="text-muted-foreground">Languages Learned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TopLanguages;