import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
