import React, {useEffect, useState } from 'react';

const Blog = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const isVisible = prevScrollPos > currentScrollPos;
    
          setIsVisible(isVisible);
          setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    return (
        <div className={`slide-up ${isVisible ? 'visible' : ''}`}>
          <div>This is my blog page we can see the blog here</div>
        </div>
      );
};

export default Blog;