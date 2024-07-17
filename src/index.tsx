import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { 
	defaultArticleState,
	ArticleStateType,
	OptionType,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
 } from './constants/articleProps';
 import { Select } from './components/select';
 import { Separator } from './components/separator';
 import { Text } from './components/text';
 import { RadioGroup } from './components/radio-group/RadioGroup';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

function App() {
	const [styleApp, setStyleApp] = useState<ArticleStateType>(defaultArticleState);
	const [formData, setFormData] = useState<ArticleStateType>(defaultArticleState);

	

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
		setStyleApp(defaultArticleState);
		// setOpen(false);
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStyleApp(formData);
		// setOpen(false);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': styleApp.fontFamilyOption.value,
					'--font-size': styleApp.fontSizeOption.value,
					'--font-color': styleApp.fontColor.value,
					'--container-width': styleApp.contentWidth.value,
					'--bg-color': styleApp.backgroundColor.value,

				} as CSSProperties
			}>

			<ArticleParamsForm handleSubmit={handleSubmit} handleReset={handleReset} >
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
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
