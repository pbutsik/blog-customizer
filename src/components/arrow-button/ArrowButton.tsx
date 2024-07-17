import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';

import styles from './ArrowButton.module.scss';
import { FC } from 'react';


/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type TArrowButtonProps = {
	onClose: () => void;
	isOpen: boolean;
};

export function ArrowButton({onClose, isOpen}:TArrowButtonProps) {
	const buttonStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	const arrowStyle = clsx({
		[styles.arrow]: true,
		[styles.arrow_open]: isOpen,
	});

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={buttonStyle}
			onClick={onClose}
		>
				<img src={arrow}
				alt='иконка стрелочки'
				className={arrowStyle}
				/>
		</div>
	);
};
