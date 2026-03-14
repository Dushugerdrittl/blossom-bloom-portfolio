import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sectionLinks: Array<{ id: string; label: string }> = [
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'education', label: 'Education' },
	{ id: 'certifications', label: 'Certifications' },
	{ id: 'contact', label: 'Contact' },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const navigateTo = (id: string) => {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
		setIsOpen(false);
	};

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-[#D4AF37]/20 py-2' : 'bg-transparent py-4'
    }`}>
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="flex items-center justify-between">
					<button 
            className="text-2xl font-black tracking-tighter text-[#D4AF37] hover:scale-110 transition-transform" 
            onClick={() => navigateTo('about')}
          >
            Nova_Stella 🎀
          </button>
					
          <nav className="hidden md:flex items-center gap-1">
						{sectionLinks.map(link => (
							<Button 
                key={link.id} 
                variant="ghost" 
                className="text-[#F9F6EE]/70 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full px-6 text-xs font-bold uppercase tracking-widest transition-all"
                onClick={() => navigateTo(link.id)}
              >
								{link.label}
							</Button>
						))}
					</nav>

					<Button 
            className="md:hidden text-[#D4AF37]" 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
          >
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</Button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-[#D4AF37]/20 p-6 flex flex-col gap-4 animate-fade-in-up">
						{sectionLinks.map(link => (
							<Button 
                key={link.id} 
                variant="ghost" 
                className="justify-start text-[#F9F6EE] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10" 
                onClick={() => navigateTo(link.id)}
              >
								{link.label}
							</Button>
						))}
					</div>
				)}
			</div>
		</header>
	);
}
