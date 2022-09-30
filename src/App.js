import Footer from "./app-componentes/footer";
import Header from "./app-componentes/header";
import Main from "./app-componentes/main";

function App() {
  return (
    <div className="mx-auto lg:w-11/12 xl:w-[940px]">
      <Header />
      <Main />
      <Footer />      
    </div>
  );
}

export default App;