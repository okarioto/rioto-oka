import DesktopLanding from "@/components/desktop_components/DesktopLanding";
import DesktopAbout from "@/components/desktop_components/DesktopAbout";
import DesktopComissions from "@/components/desktop_components/DesktopComissions";
import DesktopProjects from "@/components/desktop_components/DesktopProjects";
import DesktopContact from "@/components/desktop_components/DesktopContact";
import MobileLanding from "@/components/mobile_components/MobileLanding";
import MobileAbout from "@/components/mobile_components/MobileAbout";
import MobileComissions from "@/components/mobile_components/MobileComissions";
import MobileProjects from "@/components/mobile_components/MobileProjects";
import MobileContact from "@/components/mobile_components/MobileContact";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <DesktopLanding />
      <DesktopAbout />
      <DesktopComissions />
      <DesktopProjects />
      <DesktopContact />
      <MobileLanding />
      <MobileAbout/>
      <MobileComissions />
      <MobileProjects />
      <MobileContact />

    </div>)
}
