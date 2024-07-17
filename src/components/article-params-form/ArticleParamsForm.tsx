import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import {
	ArticleParamsFormProps,
} from 'src/constants/articleProps';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';


export function ArticleParamsForm({ children, handleSubmit, handleReset }: ArticleParamsFormProps) {
	const [open, setOpen] = useState<boolean>(false);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				setOpen(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setOpen(false);
			}
		};

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, );

	const articleParamsForm = clsx({
		[styles.container]: true,
		[styles.container_open]: open,
	});

	return (
		<>
			<ArrowButton isOpen={open} onClose={() => setOpen(!open)} />
			<aside className={articleParamsForm} ref={ref}>
				<form className={styles.form} onSubmit={handleSubmit}>
					
					{children}

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' kind='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' kind='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
