import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from "react-router";
import { LanguageProvider } from '../../context/LanguageProvider.jsx';

function Layout() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default Layout
