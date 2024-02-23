import About from "../about/About";
import Headers from "../header/Headers";
import Home from "../home/Home";
import Skills from "../skills/Skills";

function MainLayout() {


  return (
    <>
    <header>
      <Headers/>
    </header>
    <div>
      <Home/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Skills/>
    </div>
    </>
  );
}

export default MainLayout;
