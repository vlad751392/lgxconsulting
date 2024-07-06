

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="pt-24 w-full pb-12">
      <Header />
      <div className="mx-auto my-0">{children}</div>|
      <Footer />
    </div>
  );
};

export default MainLayout;