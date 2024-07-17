import { Text } from 'components/text';

import styles from './Button.module.scss';
import { HTMLAttributes } from 'react';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	kind?: "submit" | "reset"
}

export function Button({ title, onClick, type, kind }: IButtonProps) {
	return (
		<button className={styles.button} type={type} data-kind={kind} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
