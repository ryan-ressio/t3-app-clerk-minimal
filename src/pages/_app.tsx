import { type AppType } from "next/app";
import {
  ClerkLoaded,
  ClerkProvider, MultisessionAppSupport,
} from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
