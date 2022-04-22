import clsx from "clsx";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
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
  return [addToRefs, revealRefs];
};

function gsapRun(current: HTMLDivElement[]) {
  console.log(current, 8888);
}

function PageSectionCarousel({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  const [addToRefs, refs] = useRefsArray();

  useLayoutEffect(() => {
    gsapRun(refs.current);
  }, []);
  return (
    <div className={clsx("PageSectionCarousel", className)} {...rest}>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          ref: addToRefs,
          key: index,
        })
      )}
    </div>
  );
}

export default PageSectionCarousel;
