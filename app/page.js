import LoadingOverlay from "../utils/LoadingOverlay";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="content flex justify-center items-start">
      <div className="flex flex-col justify-start items-center w-[70%] ">
        <AboutMe />
        <Technologies />
        <Projects />
        <LoadingOverlay text="welcome" />

      </div>
    </div>
  );
}
