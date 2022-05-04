import AppWrapper from "./AppWrapper";
import Header from "./Header";
import NavLeftMenu from "./NavLeftMenu";
import MainWrapper from "./MainWrapper";
import EmailToolBar from "./EmailToolBar";
import EmailContent from "./EmailContent";

function App() {
  return (
    <AppWrapper>
      <Header />
      <NavLeftMenu />
      <MainWrapper>
        <EmailToolBar />
        <EmailContent />
      </MainWrapper>
    </AppWrapper>
  );
}

export default App;
