

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="pt-24 w-full pb-12">
      <Header />
      <div className="px-8 mx-auto my-0">{children}</div>|
      <Footer />
    </div>
  );
};

export default MainLayout;