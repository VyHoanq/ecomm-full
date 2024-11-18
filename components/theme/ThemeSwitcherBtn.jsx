'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 transition-all duration-300 bg-neutral-900`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </button>
    )
}
