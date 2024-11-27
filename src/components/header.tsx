import { LINK_NAVIGATE } from '@/lib/constants';
import { DrawerMobile } from './drawer-mobile';

export const Header = () => {
	return (
		<header className="flex w-full max-h-64 h-full backdrop-blur-sm py-4 sticky top-0 z-10 base:px-2 md:px-0">
			<div className="flex w-full justify-between items-center max-w-7xl mx-auto">
				<div className="base:flex md:hidden">
					<DrawerMobile />
				</div>
				<div className="">
					<img src="/elements/logo.svg" alt="logo" />
				</div>

				<nav className="flex gap-8">
					<ul className="base:hidden md:flex items-center gap-8 font-semibold">
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
					</ul>
					<a
						href="/"
						className="px-3 py-1 size-full border-2 border-white rounded-xl hover:bg-primary hover:border-transparent transition-all"
					>
						Login
					</a>
				</nav>
			</div>
		</header>
	);
};
