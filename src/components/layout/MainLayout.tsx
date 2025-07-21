import { AppSidebar } from "../shared/AppSidebar";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <AppSidebar />
    </div>
  );
};

export default MainLayout;
