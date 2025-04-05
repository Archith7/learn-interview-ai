
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SidebarProvider, SidebarTrigger, SidebarRail } from "@/components/ui/sidebar";
import AppSidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 px-4 md:px-8 py-6">
            {children}
          </main>
          <Footer />
        </div>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
