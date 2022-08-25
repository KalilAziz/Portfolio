import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

// eslint-disable-next-line
const Scroling = ({ children, style }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 100,
        distance: '1000px', //1s
        origin: 'left',
      });
  }, []);

  return (
    <section ref={sectionRef} style={style} className="" data-testid="section">
      {children}
    </section>
  );
};

// you can check scrolling like this:
document.onscroll = function () {
  console.log('scrawwwwl');
};

export default Scroling;
