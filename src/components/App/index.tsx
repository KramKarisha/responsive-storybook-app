import React, { FC, useEffect, useState } from 'react';
import Image from '../../assets/image.png';
import s from './App.module.css';

interface ListItemTypes {
	id: number;
	label: string;
}
const listItem = [
	{ id: 1, label: 'REAL ESTATE' },
	{ id: 2, label: 'PREMIUM' },
];

export const App: FC = () => {
	const [navlist, setNavList] = useState<ListItemTypes[]>([]);
	const [itemId, setItemId] = useState<number | null>(1);

	useEffect(() => {
		setNavList(listItem);
	}, []);

	const handleClick = (id: number) => () => {
		setItemId(id);
	};

	return (
		<div className={s.container}>
			<div className={s.image_container}>
				<img src={Image} alt="img" />
			</div>
			<div className={s.content}>
				<ul className={s.navlist}>
					{navlist?.map((item) => (
						<li
							className={itemId === item.id ? s.active : ''}
							onClick={handleClick(item.id)}
							key={item.id}
						>
							{item.label}
						</li>
					))}
				</ul>
				<h1>
					One of California’s richest cities could have its first big housing
					project in decades
				</h1>
				<p>
					One man was determined to clean up San Francisco’s notoriously dirty
					streets. More than 58,000 gallons of trash later, he’s launched a
					civic engagement movement.
				</p>
				<div className={s.subtitle}>
					<p>By First Last</p>
					<span>9:48 AM</span>
				</div>
			</div>
		</div>
	);
};
