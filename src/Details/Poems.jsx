import React, { useEffect, useRef, useState } from 'react';
import './Poems.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Poems = () => {
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);
  useEffect(() => {
    let start = new Date().getTime();
    const originPosition = { x: 0, y: 0 };
    const last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition
    }
    const config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ["249 146 253", "252 254 255"],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"]
    }
    let count = 0;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandom = items => items[rand(0, items.length - 1)];
    const withUnit = (value, unit) => `${value}${unit}`;
    const px = value => withUnit(value, "px");
    const ms = value => withUnit(value, "ms");
    const calcDistance = (a, b) => {
      const diffX = b.x - a.x,
        diffY = b.y - a.y;
      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }
    const calcElapsedTime = (start, end) => end - start;
    const appendElement = element => document.body.appendChild(element);
    const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);
    const generateStar = position => {
      const star = document.createElement("i");
      star.className = "star fa-solid fa-star"; // Assuming you're using Font Awesome icons
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.animationName = config.animations[count++ % 3];
      star.style.animationDuration = ms(config.starAnimationDuration);
      appendElement(star);
      removeElement(star, config.starAnimationDuration);
    }
    const generateGlowPoint = position => {
      const glow = document.createElement("div");
      glow.className = "glow-point";
      glow.style.left = px(position.x);
      glow.style.top = px(position.y);
      appendElement(glow)
      removeElement(glow, config.glowDuration);
    }
    const determinePointQuantity = distance => Math.max(
      Math.floor(distance / config.maximumGlowPointSpacing),
      1
    );
    const generateGlow = (last, current) => {
      const distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);
      const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;
      Array.from(Array(quantity)).forEach((_, index) => {
        const x = last.x + dx * index,
          y = last.y + dy * index;
        generateGlowPoint({ x, y });
      });
    }
    const updateLastStar = position => last.starTimestamp = new Date().getTime();
    const updateLastMousePosition = position => last.mousePosition = position;
    const adjustLastMousePosition = position => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };
    const handleOnMove = e => {
      const mousePosition = { x: e.clientX, y: e.clientY }
      adjustLastMousePosition(mousePosition);
      const now = new Date().getTime(),
        hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
      if (hasMovedFarEnough || hasBeenLongEnough) {
        generateStar(mousePosition);
        updateLastStar(mousePosition);
      }
      generateGlow(last.mousePosition, mousePosition);
      updateLastMousePosition(mousePosition);
    }
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);
    document.body.onmouseleave = () => updateLastMousePosition(originPosition);
    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
      document.body.removeEventListener('mouseleave', () => updateLastMousePosition(originPosition));
    };
  }, []);

  const handlePage1Flip = () => {
    setFlipped1(!flipped1);
  };

  const handlePage2Flip = () => {
    setFlipped2(!flipped2);
  };

  return (
    <div className='sa'>
      
    <div className='Book'>
      <h2 className='Headerss'>Maybe Love</h2>
      <div id='pg' className={`Page perspectiveLeft ${flipped1 ? 'flipped glow-border' : ''}`} ref={page1Ref} onClick={handlePage1Flip}>
        {!flipped1 && (
          <div  className='Page-content'>
            <p className='stanza'>
            <p className='stanza'>Do we really know what love is?</p>
            <p className='stanza'>Is it imaging our first kiss</p>
            <p className='stanza'>Or is it the care that our mother gives</p>
            <p className='stanza'>Or the promise our father fulfills</p>
            </p>
          </div>
        )}

        <div className={`Page1-cover ${flipped1 ? 'visible' : ''}`}>
       <p className='stanza1'>Thoes were the days...don't sleep stay awake</p>
       <p className='stanza1'>I don't know how much time is left for me till I go on a brake</p>
       <p className='stanza1'>I wonder if I'll ever come out of it..but don't worry..I'll be with you always</p>

       <p className='stanza1'>Take my hand and walk with me trough these heavenly gates</p>

        </div>
      </div>
                   
          <div  className={`Page perspectiveLeft ${flipped2 ? 'flipped' : ''}`} ref={page2Ref} onClick={handlePage2Flip}>
        {!flipped2 && (

          <div className='Page-content'>
            
      <p className='stanza'>
      <h2 className='Headersss'>But...I Failed</h2>

            <p className='stanza'>I told myself I will be brave</p>
            <p className='stanza'>Said that i am strong, not weak nor afraid</p>
            <p className='stanza'>I'll keep distance from people who cause me pain</p>
            <p className='stanza'>I won't let myself dig my own grave</p>
            </p>
          </div>
        )}
        
        <div id='ps' className={`Page2-cover ${flipped2 ? 'visible' : ''}`}>
        <p className='stanza1'>I failed to face my fears and ran away</p>
       <p className='stanza1'>I tried to numb this feeling, it keeps rotting mybrain</p>
       <p className='stanza1'>I hope this is temporary and just a passing phase</p>

       <p className='stanza1'>Because it's getting hard for me to breathe,</p>
       <p className='stanza1'>feels like my heart is caged</p>


        </div>
      </div>
      <h2 className='Headerss'>Maybe Love</h2>
      
      <div id='pg' className={`Page perspectiveLeft ${flipped1 ? 'flipped' : ''}`} ref={page1Ref} onClick={handlePage1Flip}>
        {!flipped1 && (
          <div  className='Page-content'>
      <h2 className='Headerssss'>The Smell After Rain</h2>

            <p className='stanza'>Do you remember that monsoon rain</p>
            <p className='stanza'>The feeling of love, that romantic train</p>
            <p className='stanza'>Where only passengers were us</p>
            <p className='stanza'>And our destination was love</p>
          </div>
        )}
        <div className={`Page1-cover ${flipped1 ? 'visible' : ''}`}>
        <p className='stanza1'>The sweet smell of earth, those happy trees Reminds me of us and how your love feels</p>
       <p className='stanza1'>These thunderclouds got something on me</p>
       <p className='stanza1'>They always sing their choirs, to make me feel dreamy</p>

       <p className='stanza1'>Dreamy about you and that day we met,</p>
       <p className='stanza1'>The smell after rain reminds me that incident</p>

        </div>
      </div>

      <div  className={`Page perspectiveLeft ${flipped2 ? 'flipped' : ''}`} ref={page2Ref} onClick={handlePage2Flip}>
        {!flipped2 && (
          <div className='Page-content'>
      <h2 className='Headersssss'>Yo! Title ??</h2>

  <p className='stanza'>I've been observing you for days</p>
            <p className='stanza'>You find different excuses and different ways</p>
            <p className='stanza'>You leave her delivered, she always waits</p>
            <p className='stanza'>That's her fault', your nonchalant ass says</p>
          </div>
        )}
        <div id='ps' className={`Page2-cover ${flipped2 ? 'visible' : ''}`}>
        <p className='stanza1'>She keeps her ego away, just to hear your heyy's</p>
       <p className='stanza1'>All she wanted was small talk, stop making this a maze</p>
       <p className='stanza1'>She loves you, I had to say it just in case</p>

       <p className='stanza1'>You'll get what you deserve, action repays</p>
        </div>
      </div>
      

    </div>
  </div>
  );
};

export default Poems;
