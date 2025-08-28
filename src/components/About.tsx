import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student on a journey of discovery, innovation, and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl hover-lift">
              <h3 className="font-display font-semibold text-2xl mb-4 text-gradient">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing Computer Science Engineering at JNTU Hyderabad, where I've discovered my passion for creating innovative solutions that merge creativity with technology. My journey is guided by curiosity, driven by learning, and fueled by the desire to build meaningful projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From developing AI-powered healthcare solutions to creating intuitive web applications, I believe in using technology to make a positive impact while constantly pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="glass-card border-primary/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Passionate</h4>
                  <p className="text-sm text-muted-foreground">Driven by curiosity and love for innovation</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-accent/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Creative</h4>
                  <p className="text-sm text-muted-foreground">Finding unique solutions to complex problems</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Info */}
          <div className="space-y-6">
            <Card className="glass-card border-primary/20 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-gradient">Education</h3>
                    <p className="text-muted-foreground">Academic Excellence</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">B.Tech in Computer Science Engineering</h4>
                    <p className="text-primary font-medium">Jawaharlal Nehru Technological University Hyderabad</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar size={14} className="mr-2" />
                      <span>Expected: 2026 • CGPA: 9.12</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-accent/30 pl-4">
                    <h4 className="font-semibold text-foreground">Intermediate Education</h4>
                    <p className="text-accent-foreground font-medium">Narayana Junior College</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar size={14} className="mr-2" />
                      <span>2022 • Percentage: 97.8%</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-secondary/30 pl-4">
                    <h4 className="font-semibold text-foreground">Secondary Education</h4>
                    <p className="text-secondary-foreground font-medium">Sri Chaitanya Techno School</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar size={14} className="mr-2" />
                      <span>2020 • GPA: 10.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-accent/20 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="text-accent mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Contact</h4>
                    <p className="text-muted-foreground">+91 8247730608</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;