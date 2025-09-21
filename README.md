1. **gsap** `npm i @gsap/react` [👉](https://www.npmjs.com/package/@gsap/react);

2. **react responsive** `npm i react-responsive` [👉](https://www.npmjs.com/package/react-responsive) media queries in react

```jsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Example = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

	return (
		<div>
			<h1>Device Test!</h1>
			{isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
			{isBigScreen && <p>You have a huge screen</p>}
			{isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
			<p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
			{isRetina && <p>You are retina</p>}
		</div>
	);
};
```
