// app/provider.js
import { ClerkProvider } from "@clerk/nextjs";

export default function Provider({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
