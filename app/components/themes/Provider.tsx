"use client"
import { ThemeProvider } from "next-themes";

const Provider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
