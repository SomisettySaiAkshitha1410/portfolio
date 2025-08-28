import { Trophy, Award, Star, Users, Calendar, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const achievements = [
    {
      title: "HackerRank Excellence",
      description: "5 star in HackerRank (Python and Java) and 4 star in Problem solving",
      icon: <Star className="text-white" size={24} />,
      category: "Competitive Programming",
      date: "2023-2024",
      gradient: "gradient-primary",
      impact: "Top Performer"
    },
    {
      title: "Honeywell Campus Connect Hackathon",
      description: "Participant in prestigious industry hackathon focusing on innovative technological solutions",
      icon: <Users className="text-white" size={24} />,
      category: "Hackathon",
      date: "2025",
      gradient: "bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400",
      impact: "Industry Recognition"
    },
    {
      title: "State-Level Coding Contest",
      description: "Secured 2nd prize in State-Level Coding Contest conducted by JNTUH",
      icon: <Trophy className="text-white" size={24} />,
      category: "Competitive Programming",
      date: "2024",
      gradient: "bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500",
      impact: "State Recognition"
    },
    {
      title: "LeetCode Rating Achievement",
      description: "Current LeetCode Rating: 1561 - Demonstrating consistent problem-solving skills",
      icon: <Medal className="text-white" size={24} />,
      category: "Algorithm Mastery",
      date: "Current",
      gradient: "gradient-primary",
      impact: "Consistent Growth"
    },
    {
      title: "TS-EAMCET Rank Achievement",
      description: "Secured 1629 rank out of 2.5 Lakh+ students in TS-EAMCET-2022",
      icon: <Award className="text-white" size={24} />,
      category: "Academic Excellence",
      date: "2022",
      gradient: "bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400",
      impact: "Top 1% Performance"
    },
    {
      title: "National Talent Search Examination",
      description: "Secured 152/200 in National Talent Search Examination-2019",
      icon: <Star className="text-white" size={24} />,
      category: "National Recognition",
      date: "2019",
      gradient: "bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500",
      impact: "Talent Recognition"
    }
  ];

  const certifications = [
    {
      title: "NPTEL - Data Structures and Algorithms",
      provider: "NPTEL",
      category: "Core CS"
    },
    {
      title: "Deep Learning Certification",
      provider: "NVIDIA",
      category: "AI/ML"
    },
    {
      title: "API Fundamentals Student Expert",
      provider: "Postman",
      category: "Web Development"
    },
    {
      title: "Azure DevOps Certification",
      provider: "Microsoft",
      category: "Cloud & DevOps"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that mark my journey of continuous learning and excellence
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="glass-card border-primary/20 hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`${achievement.gradient} p-6 text-center relative overflow-hidden`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:pulse-glow transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2">
                    {achievement.category}
                  </Badge>
                  <div className="text-white/80 text-sm font-medium">{achievement.impact}</div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-3 text-gradient">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-2" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-accent/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-gradient mb-2">
                  Professional Certifications
                </h3>
                <p className="text-muted-foreground">
                  Continuous learning through industry-recognized certifications
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.title}
                    className="border border-primary/20 rounded-2xl p-6 glass-card hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                        <p className="text-sm text-primary font-medium">{cert.provider}</p>
                      </div>
                      <Badge variant="outline" className="border-accent/30 text-xs">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership & Responsibility */}
        <div className="mt-16">
          <Card className="glass-card border-secondary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-gradient mb-2">
                  Positions of Responsibility
                </h3>
              </div>

              <div className="glass-card border-primary/20 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Placement Coordinator</h4>
                    <p className="text-muted-foreground">Leadership & Student Support</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Coordinated with T&P Cell and students for placement logistics and company interactions, 
                  demonstrating leadership skills and ability to bridge communication between stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;