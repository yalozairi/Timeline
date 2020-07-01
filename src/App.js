import React from "react";

//styles
import { Title, GlobalStyle, Welcome, Timeline } from "./styles";

//theme
import { ThemeProvider } from "styled-components";

//timeline
import EventList from "./Components/DataList";

function App() {
  const theme = {
    backgroundColor: "#F6FFD6",
    white: "#FFFFFF",
    black: "#28418f",
    blue: "#3F81E4",
    green: "#7DE593",
    purple: "#511286",
    yellow: "#FAEF90",
    darkBlue: "#3f66e4",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Welcome to Yousif AlOzairi's Website!</Title>
      <Welcome>
        I am a 16-year old highschool student, future programmer, living in
        Kuwait! I was born in Aberdeen on the 24th of January 2004. I have three
        siblings -an older sister, a younger sister and a younger brother! Soon
        after my birth, we moved to Newcastle Upon Tyne, England, where I spent
        most of my childhood. Until I was about 10 years old -in August of 2014-
        I grew up and gained various life skills in Newcastle. However, by
        August of 2014, we finally moved to our home country, Kuwait, in which
        we have remained ever since!
      </Welcome>
      <Timeline>
        The Following is a Timeline of Yousif AlOzairi's Entire Life:
      </Timeline>
      <EventList />
    </ThemeProvider>
  );
}

export default App;
