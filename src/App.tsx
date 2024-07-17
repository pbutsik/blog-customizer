import { CSSProperties, useState } from "react";
import { ArticleStateType, defaultArticleState } from "./constants/articleProps";
import { ArticleParamsForm } from "./components/article-params-form";
import { Article } from "./components/article";

import styles from "./styles/App.module.scss"

export function App() {
	const [styleApp, setStyleApp] = useState<ArticleStateType>(defaultArticleState);

	return (
		<main
            className={styles.main}
			style={
                {
					'--font-family': styleApp.fontFamilyOption.value,
					'--font-size': styleApp.fontSizeOption.value,
					'--font-color': styleApp.fontColor.value,
					'--container-width': styleApp.contentWidth.value,
					'--bg-color': styleApp.backgroundColor.value,

				} as CSSProperties
			}>

			<ArticleParamsForm setStyle={setStyleApp} />
			<Article />
		</main>
	);
};