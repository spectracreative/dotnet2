import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0a] overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
