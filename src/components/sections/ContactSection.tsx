import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Linkedin, Github, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const message = `*New Portfolio Contact*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    
    const whatsappLink = `https://wa.me/919701106539?text=${message}`;
    
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97011 06539',
      action: 'tel:+919701106539',
      description: 'Call for immediate response'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'nithinsaikancharla@gmail.com',
      action: 'mailto:nithinsaikancharla@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Movva, Krishna District, AP',
      action: null,
      description: 'Andhra Pradesh, India'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kancharla-nithin-sai-koushik-786124286',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Dushugerdrittl',
      color: 'text-gray-800'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/919701106539',
      color: 'text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlassCard hover className="animate-scale-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white/50 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </GlassCard>

            <div className="space-y-8">
              <GlassCard hover className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <div key={method.label} className="flex items-start gap-4 p-4 rounded-lg bg-white/30 hover:bg-white/50 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <method.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-primary">{method.label}</h4>
                          {method.action ? (
                            <a 
                              href={method.action}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{method.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Professional Links
                  </h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/30 hover:bg-white/50 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex-shrink-0">
                          <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">{social.label}</h4>
                          <p className="text-sm text-muted-foreground">
                            Connect on {social.label}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-gradient-primary text-white">
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-sm opacity-90">
                      I typically respond to emails within 24 hours and calls immediately during business hours.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="text-center">
            <GlassCard className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you're looking for a full-stack developer, need AI/ML expertise, or want to discuss 
                  innovative solutions, I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:nithinsaikancharla@gmail.com?subject=Project Inquiry">
                    <Button size="lg" className="gap-2">
                      <Mail className="w-4 h-4" />
                      Start a Conversation
                    </Button>
                  </a>
                  <a href="tel:+919701106539">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
