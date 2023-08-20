import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Promptia",
  description: "Discover & Share AI Prompts",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
