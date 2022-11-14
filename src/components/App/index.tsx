import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/themes/GlobalStyles';
import Router from '../../Routes';

import defaultTheme from '../../assets/styles/themes/defaultTheme';

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}
