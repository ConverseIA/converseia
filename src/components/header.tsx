import { LINK_NAVIGATE } from '@/lib/constants';

export const Header = () => {
	return (
		<header className="flex max-h-64 h-full backdrop-blur-sm bg-white py-4 sticky top-4">
			<div className="flex w-full justify-between items-center max-w-7xl mx-auto">
				<div className="">
					<img src="/elements/logo.svg" alt="logo" />
				</div>

				<nav>
					<ul className="flex items-center gap-8 font-semibold">
						{LINK_NAVIGATE.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="hover:text-primary transition-all"
								>
									{link.label}
								</a>
							</li>
						))}
						<a
							href="/"
							className="px-3 py-1 size-full border-2 border-white rounded-xl hover:bg-primary hover:border-transparent transition-all"
						>
							Login
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
};
