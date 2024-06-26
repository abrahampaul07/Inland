// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaArrowUp } from "react-icons/fa";

// const GoToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const goToBtn = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };

//   const listenToScroll = () => {
//     let heightToHidden = 20;
//     const winScroll =
//       document.body.scrollTop || document.documentElement.scrollTop;

//     if (winScroll > heightToHidden) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listenToScroll);
//     return () => window.removeEventListener("scroll", listenToScroll);
//   }, []);

//   return (
//     <Wrapper>
//       {isVisible && (
//         <div className="top-btn" onClick={goToBtn}>
//           <FaArrowUp className="top-btn--icon" />
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   .top-btn {
//     font-size: 2.0rem;
//     width: 4rem;
//     height: 4rem;
//     color: #fff;
//     background-color: ${({ theme }) => theme.colors.btn};
//     box-shadow: ${({ theme }) => theme.colors.shadow};
//     border-radius: 50%;
//     position: fixed;
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;

//     &--icon {
//       animation: gototop 1.2s linear infinite alternate-reverse;
//     }

//     @keyframes gototop {
//       0% {
//         transform: translateY(-0.5rem);
//       }
//       100% {
//         transform: translateY(1rem);
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .top-btn {
//       right: 0;
//       left: 87%;
//       top: 90%
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.small}) {
//     .top-btn {
//       right: 0;
//       left: 75%;
//       top: 87%
//     }
//   }
// `;

// export default GoToTop;


import React, { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className={`top-btn  ${theme.darkMode ? 'dark-mode-enabled' : '' } ` } onClick={goToBtn}>
             {/* <div className='top-btn  bg-gold ? "dark-mode-enabled" : "" '  onClick={goToBtn}> */}
          <FaArrowUp className="top-btn--icon text-white" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.0rem;
    width: 4rem;
    height: 4rem;
    color: #000;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .top-btn {
      right: 0;
      left: 87%;
      top: 90%
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    .top-btn {
      right: 0;
      left: 75%;
      top: 87%
    }
  }

  /* Additional styles for dark mode */
  .dark-mode-enabled {
    background-color: #333;
    color: #fff;
  }
`;

export default GoToTop;



