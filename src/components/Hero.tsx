import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Animation Container */}
          <div className="float-animation">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-primary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient font-display">AS</span>
              </div>
            </div>
          </div>

          <div className="bounce-in">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
              <span className="text-gradient">Somisetty Sai</span>
              <br />
              <span className="text-foreground">Akshitha</span>
            </h1>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                Computer Science Engineering Student
              </p>
              <div className="inline-block glass-card px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
  <p className="text-xl font-display font-semibold text-white text-gradient tracking-wide select-none">
    "Exploring, Learning, Building"
  </p>
</div>

            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate • Creative • Intelligent
              <br />
              Building innovative solutions with AI, web technologies, and creative problem-solving
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover-lift"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-4 rounded-full"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full glass-card hover-lift"
                asChild
              >
                <a href="https://github.com/SomisettySaiAkshitha1410" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full glass-card hover-lift"
                asChild
              >
                <a href="https://linkedin.com/in/sai-akshitha-somisetty" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full glass-card hover-lift"
                asChild
              >
                <a href="mailto:akshithasomisetty@gmail.com">
                  <Mail size={24} />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full glass-card"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;