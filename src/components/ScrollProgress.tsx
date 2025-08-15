import { useEffect, useState } from 'react';

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const total = document.documentElement.scrollHeight - window.innerHeight;
			const current = window.scrollY;
			const pct = total > 0 ? (current / total) * 100 : 0;
			setProgress(Math.min(100, Math.max(0, pct)));
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 h-1 z-[60]">
			<div className="h-full bg-primary/30" style={{ width: '100%' }} />
			<div className="h-full bg-primary absolute top-0 left-0" style={{ width: `${progress}%` }} />
		</div>
	);
}
