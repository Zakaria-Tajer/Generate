import { DevLayouts } from "@/components/developer/Layouts/DevLayouts";
import { NotiSection } from "@/components/developer/NotiSection";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";

function DeveloperHome() {
  const id = useSelector((state: RooteState) => state.handleDev.id)


  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <NotiSection />
    </>
  );
}


DeveloperHome.PageLayout = DevLayouts
export default DeveloperHome;
