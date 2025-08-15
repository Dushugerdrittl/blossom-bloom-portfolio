import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sectionLinks: Array<{ id: string; label: string }> = [
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'education', label: 'Education' },
	{ id: 'contact', label: 'Contact' },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
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
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-background/80 backdrop-blur-md shadow' : 'bg-transparent'}`}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-14">
					<button className="font-semibold text-primary" onClick={() => navigateTo('about')}>NSK</button>
					<nav className="hidden md:flex items-center gap-2">
						{sectionLinks.map(link => (
							<Button key={link.id} variant="ghost" onClick={() => navigateTo(link.id)}>
								{link.label}
							</Button>
						))}
					</nav>
					<Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsOpen(p => !p)}>
						<Menu className="w-5 h-5" />
					</Button>
				</div>
				{isOpen && (
					<div className="md:hidden pb-3 flex flex-col gap-1">
						{sectionLinks.map(link => (
							<Button key={link.id} variant="ghost" className="justify-start" onClick={() => navigateTo(link.id)}>
								{link.label}
							</Button>
						))}
					</div>
				)}
			</div>
		</header>
	);
}
