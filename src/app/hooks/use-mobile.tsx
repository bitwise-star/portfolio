"use client"

import { useState, useEffect } from "react"

export function useMobile(width: number) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= width)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [width])

  return isMobile
}

