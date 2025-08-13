// src/components/common/ScrollToTop.jsx
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); // force instant scroll
	}, [pathname]);

	return null;
};

export default ScrollToTop;
