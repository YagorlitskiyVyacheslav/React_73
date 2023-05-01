import { Header } from "./components/Header/Header";
import { HeadSection } from "./components/HeadSection";
import { Users } from "./components/Users/Users";
import { ThemeProvider } from "styled-components";
import headData from "./data/head_info.json";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeadSection
        imgUrl={headData.url}
        title={headData.title}
        description={headData.description}
      />
      <Users />
    </ThemeProvider>
  );
};

// const StyledsSlyder = styled(Slyder)`
//  & .head-wrapper {

//  }
// `
