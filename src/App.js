import React from 'react';
import './App.css';

export default function App() {
  return (
    <main className="Main">
      <div className="Main-Intro">
        <svg
          className="pattern"
          viewBox="0 0 1920 3000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(-370.58,-500.83)scale(1)"
            id="heart-path-3"
            d="M929.557 11C666.76 11 412.049 272.269 293.37 386.75 168.855 506.864-46 566.84-46 857.333c0 364.706 251.46 920.194 535.82 791.281 194.676-88.254 282.567-153.665 389.972-423.354 83.087-208.625 323.07-296.851 323.07-645.67C1202.862 214.883 1294.034 11 929.557 11z"
            fill="rgba(255,255,255, 0)"
            stroke="#4C6085"
          />{' '}
          <path
            transform="translate(-370.53,-500.76)scale(1)"
            id="heart-path-2"
            d="M819.183 84C603.326 84 394.11 298.645 296.628 392.697 194.353 491.375 17.873 540.649 17.873 779.3c0 299.624 206.546 755.983 440.117 650.075 159.903-72.505 232.096-126.243 320.318-347.805 68.246-171.396 265.365-243.877 265.365-530.448C1043.673 251.499 1118.56 84 819.183 84z"
            fill="rgba(255,255,255, 0)"
            stroke="#4C6085"
          />{' '}
          <path
            transform="translate(-370.48,-500.69)scale(1)"
            id="heart-path-1"
            d="M709.498 158c-171.062 0-336.86 170.013-414.112 244.508-81.05 78.16-220.906 117.187-220.906 306.215 0 237.322 163.682 598.787 348.781 514.902 126.72-57.429 183.931-99.993 253.844-275.484 54.084-135.757 210.296-193.167 210.296-420.15C887.4 290.672 946.747 158 709.498 158z"
            fill="#4C6085"
          />
        </svg>  
        <div className="Main-Logo">
          <h1>POLDARK</h1>
        </div>
        <div className="Main-Info">
          <h2 className="Main-Title">Poldark Prosthetics</h2>
          <p className="Main-Content">
            Poldark Prosthetics is a new company taking an innovative approach
            to creating perfectly fitting and extremely comfortable sockets
            using the Sigil-in Pressure Casting System.
          </p>
          <p className="Main-Soon">
            Our centre is now open with our website coming soon.
          </p>
          <h3>Get in touch</h3>
          <p>Poldark Ltd,</p>
          <p>Unit 35 / The Wenta Business Centre</p>
          <p>Colne Way</p>
          <p>Herts</p>
          <p>Watford, WD24 7ND</p>
          <h4>contact@poldarkprosthetics.co.uk</h4>
        </div>
      </div>
      <div className="Main-Hero">
        <p className="Main-Copyright">&copy; Poldark Ltd - All rights reserved</p>
        </div>
    </main>
  );
}
