import { useState } from 'react';
import clsx from 'clsx';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
  ArticleStateType,
  OptionType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);

	const handleFontFamilyChange = (value: OptionType) => {
		setFormState({ ...formState, fontFamilyOption: value });
	};

	const handleFontSizeChange = (value: OptionType) => {
		setFormState({ ...formState, fontSizeOption: value });
	};

	const handleFontColorChange = (value: OptionType) => {
		setFormState({ ...formState, fontColor: value });
	};

	const handleBackgroundColorChange = (value: OptionType) => {
		setFormState({ ...formState, backgroundColor: value });
	};

	const handleContentWidthChange = (value: OptionType) => {
		setFormState({ ...formState, contentWidth: value });
	};

	return (
		<>
			<ArrowButton
				isOpen={isSidebarOpen}
				onClick={() => {
					setIsSidebarOpen(!isSidebarOpen);
				}}
			/>
			<aside
				className={clsx(
					styles.container,
					isSidebarOpen && styles.container_open
				)}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={fontFamilyOptions[0]}
						onChange={handleFontFamilyChange}></Select>
					<RadioGroup
						name='fontSize'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						onChange={handleFontSizeChange}></RadioGroup>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={fontColors[0]}
						onChange={handleFontColorChange}></Select>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={backgroundColors[0]}
						onChange={handleBackgroundColorChange}></Select>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={contentWidthArr[0]}
						onChange={handleContentWidthChange}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
