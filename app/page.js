import DesktopLanding from "@/components/desktop_components/DesktopLanding";
import DesktopAbout from "@/components/desktop_components/DesktopAbout";
import DesktopExperiences from "@/components/desktop_components/DesktopExperiences";
import DesktopProjects from "@/components/desktop_components/DesktopProjects";
import DesktopContact from "@/components/desktop_components/DesktopContact";
import MobileLanding from "@/components/mobile_components/MobileLanding";
import MobileAbout from "@/components/mobile_components/MobileAbout";
import MobileExperiences from "@/components/mobile_components/MobileExperiences";
import MobileProjects from "@/components/mobile_components/MobileProjects";
import MobileContact from "@/components/mobile_components/MobileContact";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <DesktopLanding />
      <DesktopAbout />
      <DesktopExperiences />
      <DesktopProjects />
      <DesktopContact />
      <MobileLanding />
      <MobileAbout/>
      <MobileExperiences />
      <MobileProjects />
      <MobileContact />

    </div>)
}
