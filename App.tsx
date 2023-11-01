import { Home } from './src/screens/Home';
import { useFonts } from 'expo-font'
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
 
export default function App() {
  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  
  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded && <Home /> }
    </ThemeProvider>
  );
}