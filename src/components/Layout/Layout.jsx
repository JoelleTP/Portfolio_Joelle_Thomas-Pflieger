import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from "react-router";
import { LanguageContext } from '../../context/index.jsx';
import { useContext, useEffect } from 'react';

function Layout() {
  const { lang } = useContext(LanguageContext);
  
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout
