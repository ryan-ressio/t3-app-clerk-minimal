import { type AppType } from "next/app";
import {
  ClerkProvider, MultisessionAppSupport,
} from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <ClerkProvider {...pageProps}>
      <MultisessionAppSupport>
        <Component {...pageProps} />
      </MultisessionAppSupport>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
