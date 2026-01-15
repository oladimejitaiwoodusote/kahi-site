import { useEffect } from "react";

type ParallaxOptions = {
  heroSelector: string;        // REQUIRED now
  imageSelector?: string;
  heroSpeed?: number;
  navbarSpeed?: number;
};

export default function useParallaxHeader({
  heroSelector,
  imageSelector = 'img',
  heroSpeed = 0.35,
  navbarSpeed = 0.6,
}: ParallaxOptions) {
  useEffect(() => {
    const hero = document.querySelector(heroSelector) as HTMLElement | null;
    const heroImg = hero?.querySelector(imageSelector) as HTMLElement | null;
    const navbar = document.querySelector(".Navbar") as HTMLElement | null;

    if (!heroImg || !navbar) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      heroImg.style.transform = `translateY(${scrollY * heroSpeed}px)`;
      navbar.style.transform = `translateY(${-scrollY * navbarSpeed}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroSelector,imageSelector, heroSpeed, navbarSpeed]);
}
