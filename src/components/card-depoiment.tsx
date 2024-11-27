import { getInitials } from '@/lib/constants';
import { Avatar, AvatarFallback } from './ui/avatar';

interface ICardDepoiment {
	name: string;
	job: string;
	depoiment: string;
}

export const CardDepoiment = ({ name, job, depoiment }: ICardDepoiment) => {
	return (
		<div className="bg-gradient-to-b from-primary-light to-primary-dark p-0.5 rounded-xl">
			<div className="flex flex-col gap-4 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-xl size-full p-6 min-h-40">
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarFallback className="bg-gradient-to-b from-primary-light to-primary-dark font-bold shadow">
							{getInitials(name)}
						</AvatarFallback>
					</Avatar>
					<span className="text-xl font-bold">
						{name} - {job}
					</span>
				</div>

				<div className="text-white text-xl font-light">{`"${depoiment}"`}</div>
			</div>
		</div>
	);
};
