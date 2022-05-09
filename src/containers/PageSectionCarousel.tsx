import clsx from "clsx";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PageSectionCarousel.scss";
// const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const useRefsArray = () => {
  const revealRefs = React.useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];
  const addToRefs = React.useCallback((el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);
  return [addToRefs, revealRefs.current];
};

function gsapRun(i: HTMLDivElement) {}

function PageSectionCarousel({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [itemRef, sections] = useRefsArray();

  useLayoutEffect(() => {
    // const trigger = ref.current;
    const q = gsap.utils.selector(ref.current);
    const trigger = q(".intro-trigger");
    // const items = gsap.utils.toArray(".panel h1");
    const shoutOut =
      (message = "speechless") =>
      () =>
        console.log(message);

    const showHideTrack = gsap.timeline({
      onStart: shoutOut("showHideTrack start"),
      onComplete: shoutOut("showHideTrack done"),
    });
    // .add(showMosaic)
    // .add(buildMosaic, "<")
    // .add(switchToDesktop, "-20%");

    const zoomOut = gsap
      .timeline({
        onStart: shoutOut("zoomOut is starting"),
        onComplete: shoutOut("🦀 zoomOut is done"),
      })
      .to(".red h1", { scale: 1, x: 88 }, "<");

    const master = gsap
      .timeline({
        onStart: shoutOut("🟢 master start"),
        onComplete: shoutOut("🏁 master done"),
      })
      // .add(showHideTrack)
      .add(zoomOut);
    // .add(zoomOut.duration(showHideTrack.duration()), "<");
    console.log(zoomOut.duration(), )
    gsap
      .timeline({
        scrollTrigger: {
          trigger,
          start: "top top",
          end: "+=500",
          scrub: 1,
          markers: true,
          onEnter: () => console.log("header-enter"),
          onLeave: () => console.log("header-leave"),
          id: "intro-scene",
        },
      })
      .add(master);
  }, []);
  return (
    <div ref={ref} className={clsx("PageSectionCarousel", className)} {...rest}>
      <div className="intro-trigger"></div>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          key: index,
          ref: itemRef,
        })
      )}
    </div>
  );
}

export default React.memo(PageSectionCarousel);
