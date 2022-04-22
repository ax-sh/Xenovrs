import clsx from "clsx";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PageSectionCarousel.scss";

function PageSectionCarousel({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  const el = React.useRef<HTMLDivElement>(null);
  const child = gsap.utils.selector(el);
  // const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    child(".panel").forEach((panel) => {
      gsap.from(panel.querySelector("h1"), {
        x: 1000,
        scrollTrigger: {
          trigger: panel,
          scroller: el.current,
          markers: true,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={el} className={clsx("PageSectionCarousel", className)} {...rest}>
      {children}
    </div>
  );
}

export default PageSectionCarousel;
