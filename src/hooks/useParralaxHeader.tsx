import { useEffect } from "react";

type ParallaxOptions = {
  heroSelector: string;
  imageSelector?: string;
  heroSpeed?: number;
  navbarSpeed?: number;
};

export default function useParallaxHeader({
  heroSelector,
  imageSelector = "img",
  heroSpeed = 0.35,
  navbarSpeed = 0.6,
}: ParallaxOptions) {
  useEffect(() => {
    const hero = document.querySelector(heroSelector) as HTMLElement | null;
    const heroImg = hero?.querySelector(imageSelector) as HTMLElement | null;
    const navbar = document.querySelector(".Navbar") as HTMLElement | null;

    if (!heroImg || !navbar) return;

    // ✅ MOBILE AWARE SPEEDS
    const isMobile = window.innerWidth <= 768;

    const effectiveHeroSpeed = isMobile ? heroSpeed * 0.6 : heroSpeed;
    const effectiveNavbarSpeed = isMobile ? navbarSpeed * 0.7 : navbarSpeed;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      heroImg.style.transform = `translateY(${scrollY * effectiveHeroSpeed}px)`;
      navbar.style.transform = `translateY(${-scrollY * effectiveNavbarSpeed}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroSelector, imageSelector, heroSpeed, navbarSpeed]);
}
