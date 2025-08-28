import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Akshitha,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    window.location.href = `mailto:akshithasomisetty@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "akshithasomisetty@gmail.com",
      link: "mailto:akshithasomisetty@gmail.com",
      gradient: "gradient-primary"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8247730608",
      link: "tel:+918247730608",
      gradient: "gradient-accent"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Hyderabad, India",
      link: "https://maps.google.com/?q=Hyderabad,India",
      gradient: "gradient-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: "GitHub",
      username: "@SomisettySaiAkshitha1410",
      link: "https://github.com/SomisettySaiAkshitha1410",
      gradient: "gradient-primary"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      username: "Sai Akshitha Somisetty",
      link: "https://linkedin.com/in/sai-akshitha-somisetty",
      gradient: "gradient-accent"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Let's Connect!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and connect with fellow tech enthusiasts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card border-primary/20 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl text-gradient">Send a Message</h3>
                  <p className="text-muted-foreground">I'd love to hear from you!</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="glass-card border-primary/30 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="glass-card border-primary/30 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project or just say hello!"
                    className="glass-card border-primary/30 focus:border-primary min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-gradient mb-6">
                Get In Touch
              </h3>
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="glass-card border-primary/20 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${info.gradient} rounded-full flex items-center justify-center mr-4 text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a 
                          href={info.link}
                          target={info.title === "Location" ? "_blank" : undefined}
                          rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="glass-card border-accent/20">
              <CardContent className="p-8">
                <h3 className="font-display font-semibold text-xl text-gradient mb-6 text-center">
                  Connect on Social Media
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.title}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-2xl glass-card border border-primary/20 hover-lift transition-all duration-300 hover:border-primary/40"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 ${social.gradient} rounded-full flex items-center justify-center mr-4 text-white`}>
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{social.title}</h4>
                        <p className="text-muted-foreground text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card border-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="font-display font-semibold text-xl text-gradient mb-4">
                  Let's Build Something Amazing Together!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's a collaboration, opportunity, or just a tech chat - I'm always open to new connections and exciting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="gradient-primary text-white hover:opacity-90"
                    asChild
                  >
                    <a href="mailto:akshithasomisetty@gmail.com">
                      <Mail size={18} className="mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="glass-card border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/sai-akshitha-somisetty" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} className="mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            Made with <Heart className="inline text-primary w-4 h-4" /> by Akshitha
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Somisetty Sai Akshitha. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;