'use client'

import { ThemeProvider } from "next-themes"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "react-hot-toast"

export default function MyApp({ children }) {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark'>
            <NextSSRPlugin
                routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <Toaster position='top-center' reverseOrder={false} />
            {children}
        </ThemeProvider>
    )
}
