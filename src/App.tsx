import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { FAQs } from "./components/FAQs";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <FAQs />
      </main>
    </ThemeProvider>
  );
};

export default App;
