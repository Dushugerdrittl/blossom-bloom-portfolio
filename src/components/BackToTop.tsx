import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	if (!visible) return null;

	return (
		<Button onClick={scrollTop} size="icon" className="fixed bottom-6 right-6 rounded-full shadow-lg z-50">
			<ArrowUp className="w-5 h-5" />
		</Button>
	);
}
