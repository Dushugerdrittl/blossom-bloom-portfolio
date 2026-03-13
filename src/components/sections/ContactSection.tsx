import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] uppercase">
              Get In Touch
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
            <p className="text-xl text-[#F9F6EE]/80 max-w-2xl mx-auto font-light italic">
              Let's discuss how we can build the next big thing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-5 space-y-6 flex flex-col">
              <GlassCard className="flex-grow flex flex-col justify-center gap-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Email</p>
                    <a href="mailto:fxastolf@gmail.com" className="text-[#F9F6EE] font-medium hover:text-[#D4AF37] transition-colors">fxastolf@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Call</p>
                    <a href="tel:+916303506539" className="text-[#F9F6EE] font-medium hover:text-[#D4AF37] transition-colors">+91 63035 06539</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Location</p>
                    <p className="text-[#F9F6EE] font-medium">Bangalore, India</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="py-6 flex justify-around items-center">
                {[
                  { icon: Github, href: "https://github.com/Dushugerdrittl" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kancharla-nithin-sai-koushik-786124286" },
                  { icon: Twitter, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-all hover:scale-125">
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </GlassCard>
            </div>

            <div className="md:col-span-7">
              <GlassCard className="h-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Full Name"
                        className="w-full bg-black/40 border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-[#F9F6EE] placeholder:text-[#F9F6EE]/20 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full bg-black/40 border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-[#F9F6EE] placeholder:text-[#F9F6EE]/20 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      placeholder="What's on your mind?"
                      rows={5}
                      className="w-full bg-black/40 border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-[#F9F6EE] placeholder:text-[#F9F6EE]/20 focus:outline-none focus:border-[#D4AF37]/60 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#F9F6EE] text-black font-black uppercase tracking-widest h-14 rounded-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Send className="w-4 h-4 mr-2" />
                    Dispatch Message
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
