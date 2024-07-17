import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { RadioGroup } from '..//radio-group/RadioGroup';
import {
	OptionType,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
	ArticleParamsFormProps,
} from 'src/constants/articleProps';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';


export function ArticleParamsForm({ setStyle }: ArticleParamsFormProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [formData, setFormData] = useState<ArticleStateType>(defaultArticleState);

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

	function handleFontFamilyChange(fontFamilyOptionValue: OptionType) {
		setFormData({
			...formData,
			fontFamilyOption: fontFamilyOptionValue,
		});
	}

	function handleFontSizeChange(fontSizeOptionValue: OptionType) {
		setFormData({
			...formData,
			fontSizeOption: fontSizeOptionValue,
		});
	}

	function handleFontColorChange(fontColorOptionValue: OptionType) {
		setFormData({
			...formData,
			fontColor: fontColorOptionValue,
		});
	}

	function handleBgColorChange(bgColorOptionValue: OptionType) {
		setFormData({
			...formData,
			backgroundColor: bgColorOptionValue,
		});
	}

	function handleContainerWidthChange(containerWidthOptionValue: OptionType) {
		setFormData({
			...formData,
			contentWidth: containerWidthOptionValue,
		});
	}

	function handleReset() {
		setFormData(defaultArticleState);
		setStyle(defaultArticleState);
		setOpen(false);
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStyle(formData);
		setOpen(false);
	};

	return (
		<>
			<ArrowButton isOpen={open} onClose={() => setOpen(!open)} />
			<aside className={articleParamsForm} ref={ref}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						options={fontFamilyOptions}
						onChange={handleFontFamilyChange}
						selected={formData.fontFamilyOption}
						title={'Шрифт'}
					/>

					<RadioGroup
						name={'fontSize'}
						options={fontSizeOptions}
						onChange={handleFontSizeChange}
						selected={formData.fontSizeOption}
						title={'Размер шрифта'}
					/>

					<Select
						options={fontColors}
						onChange={handleFontColorChange}
						selected={formData.fontColor}
						title={'Цвет шрифта'}
					/>

					<Separator />

					<Select
						options={backgroundColors}
						onChange={handleBgColorChange}
						selected={formData.backgroundColor}
						title={'Цвет фона'}
					/>

					<Select
						options={contentWidthArr}
						onChange={handleContainerWidthChange}
						selected={formData.contentWidth}
						title={'Ширина контента'}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' kind='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' kind='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
