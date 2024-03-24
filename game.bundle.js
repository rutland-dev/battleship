(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),i=t.n(r),A=t(314),o=t.n(A)()(i());o.push([n.id,"* {\n\tvertical-align: baseline;\n\tfont-weight: inherit;\n\tfont-family: inherit;\n\tfont-style: inherit;\n\tfont-size: 100%;\n\tborder: 0 none;\n\toutline: 0;\n\tpadding: 0;\n\tmargin: 0;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n.header-container {\n    background-color: rgba(0, 0, 255, .9);\n    height: 15%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#header-text {\n    font-size: 3rem;\n}\n\n.start-menu-container {\n    position: absolute;\n    z-index: 4;\n    height: 50%;\n    width: 90%;\n    top: 12%;\n    left: 5%;\n    background-color: darkblue;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.start-menu-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    gap: 10%;\n}\n\n.player1-menu-container, .player2-menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .5rem;\n}\n\n.label {\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: paleturquoise;\n}\n\n.start-menu-form p {\n    color: paleturquoise;\n}\n\n.start-menu-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15%;\n}\n\n.start-menu-button-container div {\n    display: flex;\n    flex-direction: column;\n    width: 25%;\n    align-items: center;\n    text-align: center;\n    gap: .5rem;\n}\n\n.start-menu-form input {\n    border-radius: .5rem;\n    padding: .2rem;\n}\n\n.instructions-container {\n    position: absolute;\n    top: 5%;\n    left: 5%;\n    width: 90%;\n    z-index: 3;\n    background-color: darkblue;\n    color: paleturquoise;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n}\n\n.instructions-player-name {\n    font-size: 2rem;\n    margin-top: 1rem;\n}\n\n.instructions-container h1 {\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n.available-ships-container {\n    background-color: darkblue;\n    position: absolute;\n    width: 90%;\n    height: 20%;\n    top: 75%;\n    left: 5%;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship-image-frame {\n    background-color: rgba(255, 255, 255, .2);\n    border: 2px solid black;\n    height: 8rem;\n    width: 8rem;\n    box-shadow: .2rem .2rem 1rem black;\n}\n\n.gameover-container {\n    position: absolute;\n    z-index: 3;\n    height: 50%;\n    width: 90%;\n    left: 5%;\n    top: 20%;\n    background-color: darkblue;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10%;\n    border: 1px black solid;\n}\n\n.gameover-text {\n    font-weight: bold;\n    font-size: 2.3rem;\n    color: paleturquoise;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow .15s,transform .15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow,transform;\n  font-size: 18px;\n}\n\nbutton:focus {\n  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n}\n\nbutton:hover {\n  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\n\nbutton:active {\n  box-shadow: #3c4fe0 0 3px 7px inset;\n  transform: translateY(2px);\n}\n\n.main-container {\n    height: 77%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .8);\n    display: grid;\n    grid-template-columns: 5% 95%;\n    grid-template-rows: 10% 5% 5% 60% 1.7% 10%;\n}\n\n.turn-announcement-container {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    font-weight: bold;\n}\n\n.turn-announcement-container h2 {\n    font-size: 2rem;\n}\n\n.board-info-container {\n    display: flex;\n    grid-area: 2 / 1 / 3 / 3;\n    align-items: end;\n    justify-content: center;\n    font-weight: bold;\n}\n\n.grid-container {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    height: 80%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.column-labels-container {\n    font-weight: bold;\n    display: grid;\n    grid-template-columns: repeat(10, 2rem);\n    grid-area: 3 / 2 / 4 / 3;\n    align-items: end;\n    justify-content: center;\n    text-align: center;\n    gap: .1rem;\n}\n\n.row-labels-container {\n    align-self: center;\n    font-weight: bold;\n    display: grid;\n    grid-area: 4 / 1 / 5 / 2;\n    align-items: center;\n    justify-content: end;\n    text-align: center;\n    grid-template-rows: repeat(10, 2rem);\n    gap: .15rem;\n}\n\n.grid {\n    display: grid;\n    height: min-content;\n    width: min-content;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: auto;\n    gap: 0;\n    align-items: center;\n    justify-content: center;\n}\n\n.cell {\n    height: 2rem;\n    width: 2rem;\n    border: black solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Battleship {\n    position: relative;\n    left: 3.3rem;\n    width: 8rem;\n}\n\n.Carrier {\n    position: relative;\n    left: 4.3rem;\n    width: 10rem;\n}\n\n.Cruiser {\n    position: relative;\n    left: 2.2rem;\n    width: 6rem;\n}\n\n.Destroyer {\n    width: 4rem;\n    position: relative;\n    left: 1rem;\n}\n\n.Submarine {\n    z-index: 1;\n    position: relative;\n    left: 2rem;\n    width: 6rem;\n}\n\n.vertical .Battleship {\n    left: 0;\n    top: 3.3rem;\n}\n\n.vertical .Carrier {\n    left: 0;\n    top: 4.4rem;\n}\n\n.vertical .Cruiser {\n    left: 0;\n    top: 2.2rem;\n}\n\n.vertical .Destroyer {\n    left: 0;\n    top: 1.1rem;\n}\n\n.vertical .Submarine {\n    left: 0;\n    top: 2.2rem;\n}\n\n.cell:hover {\n    border: darkblue solid 1px;\n}\n\n.error-message {\n    display: flex;\n    grid-area: 5 / 1 / 6 / 3;\n    color: red;\n    justify-content: center;\n    font-size: .85rem;\n}\n\n.sunk-ships-container {\n    grid-area: 6 / 1 / 7 / 3;\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n}\n\n.sunk-ships-container li {\n    font-size: .8rem;\n}\n\n.sunk-ships-container h4 {\n    font-size: 1.1rem;\n}\n\n.player-sunk-ships-container ul {\n    list-style-type: none;\n    height: 70%;\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n}\n\n.footer-container {\n    background-color: rgba(0, 0, 255, .9);\n    height: 8%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding-right: .5%;\n}\n\n.credit-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding-bottom: .3%;\n}\n\nspan.is-hit {\n    height: 1rem;\n    width: 1rem;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n}\n\n.cell.has-ship.is-hit span {\n    display: none;\n}\n\n.explosion {\n    position: absolute;\n    height: 2rem;\n    width: 2rem;\n    z-index: 1;\n}\n\n.vertical img {\n    transform: rotate(270deg);\n}\n\n.hidden {\n    display: none;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["* {\n\tvertical-align: baseline;\n\tfont-weight: inherit;\n\tfont-family: inherit;\n\tfont-style: inherit;\n\tfont-size: 100%;\n\tborder: 0 none;\n\toutline: 0;\n\tpadding: 0;\n\tmargin: 0;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n.header-container {\n    background-color: rgba(0, 0, 255, .9);\n    height: 15%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#header-text {\n    font-size: 3rem;\n}\n\n.start-menu-container {\n    position: absolute;\n    z-index: 4;\n    height: 50%;\n    width: 90%;\n    top: 12%;\n    left: 5%;\n    background-color: darkblue;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.start-menu-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    gap: 10%;\n}\n\n.player1-menu-container, .player2-menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .5rem;\n}\n\n.label {\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: paleturquoise;\n}\n\n.start-menu-form p {\n    color: paleturquoise;\n}\n\n.start-menu-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15%;\n}\n\n.start-menu-button-container div {\n    display: flex;\n    flex-direction: column;\n    width: 25%;\n    align-items: center;\n    text-align: center;\n    gap: .5rem;\n}\n\n.start-menu-form input {\n    border-radius: .5rem;\n    padding: .2rem;\n}\n\n.instructions-container {\n    position: absolute;\n    top: 5%;\n    left: 5%;\n    width: 90%;\n    z-index: 3;\n    background-color: darkblue;\n    color: paleturquoise;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n}\n\n.instructions-player-name {\n    font-size: 2rem;\n    margin-top: 1rem;\n}\n\n.instructions-container h1 {\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n.available-ships-container {\n    background-color: darkblue;\n    position: absolute;\n    width: 90%;\n    height: 20%;\n    top: 75%;\n    left: 5%;\n    border: 1px solid black;\n    box-shadow: .5rem .5rem 1rem black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship-image-frame {\n    background-color: rgba(255, 255, 255, .2);\n    border: 2px solid black;\n    height: 8rem;\n    width: 8rem;\n    box-shadow: .2rem .2rem 1rem black;\n}\n\n.gameover-container {\n    position: absolute;\n    z-index: 3;\n    height: 50%;\n    width: 90%;\n    left: 5%;\n    top: 20%;\n    background-color: darkblue;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10%;\n    border: 1px black solid;\n}\n\n.gameover-text {\n    font-weight: bold;\n    font-size: 2.3rem;\n    color: paleturquoise;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow .15s,transform .15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow,transform;\n  font-size: 18px;\n}\n\nbutton:focus {\n  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n}\n\nbutton:hover {\n  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\n\nbutton:active {\n  box-shadow: #3c4fe0 0 3px 7px inset;\n  transform: translateY(2px);\n}\n\n.main-container {\n    height: 77%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .8);\n    display: grid;\n    grid-template-columns: 5% 95%;\n    grid-template-rows: 10% 5% 5% 60% 1.7% 10%;\n}\n\n.turn-announcement-container {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    font-weight: bold;\n}\n\n.turn-announcement-container h2 {\n    font-size: 2rem;\n}\n\n.board-info-container {\n    display: flex;\n    grid-area: 2 / 1 / 3 / 3;\n    align-items: end;\n    justify-content: center;\n    font-weight: bold;\n}\n\n.grid-container {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    height: 80%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.column-labels-container {\n    font-weight: bold;\n    display: grid;\n    grid-template-columns: repeat(10, 2rem);\n    grid-area: 3 / 2 / 4 / 3;\n    align-items: end;\n    justify-content: center;\n    text-align: center;\n    gap: .1rem;\n}\n\n.row-labels-container {\n    align-self: center;\n    font-weight: bold;\n    display: grid;\n    grid-area: 4 / 1 / 5 / 2;\n    align-items: center;\n    justify-content: end;\n    text-align: center;\n    grid-template-rows: repeat(10, 2rem);\n    gap: .15rem;\n}\n\n.grid {\n    display: grid;\n    height: min-content;\n    width: min-content;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: auto;\n    gap: 0;\n    align-items: center;\n    justify-content: center;\n}\n\n.cell {\n    height: 2rem;\n    width: 2rem;\n    border: black solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Battleship {\n    position: relative;\n    left: 3.3rem;\n    width: 8rem;\n}\n\n.Carrier {\n    position: relative;\n    left: 4.3rem;\n    width: 10rem;\n}\n\n.Cruiser {\n    position: relative;\n    left: 2.2rem;\n    width: 6rem;\n}\n\n.Destroyer {\n    width: 4rem;\n    position: relative;\n    left: 1rem;\n}\n\n.Submarine {\n    z-index: 1;\n    position: relative;\n    left: 2rem;\n    width: 6rem;\n}\n\n.vertical .Battleship {\n    left: 0;\n    top: 3.3rem;\n}\n\n.vertical .Carrier {\n    left: 0;\n    top: 4.4rem;\n}\n\n.vertical .Cruiser {\n    left: 0;\n    top: 2.2rem;\n}\n\n.vertical .Destroyer {\n    left: 0;\n    top: 1.1rem;\n}\n\n.vertical .Submarine {\n    left: 0;\n    top: 2.2rem;\n}\n\n.cell:hover {\n    border: darkblue solid 1px;\n}\n\n.error-message {\n    display: flex;\n    grid-area: 5 / 1 / 6 / 3;\n    color: red;\n    justify-content: center;\n    font-size: .85rem;\n}\n\n.sunk-ships-container {\n    grid-area: 6 / 1 / 7 / 3;\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n}\n\n.sunk-ships-container li {\n    font-size: .8rem;\n}\n\n.sunk-ships-container h4 {\n    font-size: 1.1rem;\n}\n\n.player-sunk-ships-container ul {\n    list-style-type: none;\n    height: 70%;\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n}\n\n.footer-container {\n    background-color: rgba(0, 0, 255, .9);\n    height: 8%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding-right: .5%;\n}\n\n.credit-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding-bottom: .3%;\n}\n\nspan.is-hit {\n    height: 1rem;\n    width: 1rem;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n}\n\n.cell.has-ship.is-hit span {\n    display: none;\n}\n\n.explosion {\n    position: absolute;\n    height: 2rem;\n    width: 2rem;\n    z-index: 1;\n}\n\n.vertical img {\n    transform: rotate(270deg);\n}\n\n.hidden {\n    display: none;\n}"],sourceRoot:""}]);const a=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,A){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&o[c[0]]||(void 0!==A&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=A),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(i," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},o=[],a=0;a<n.length;a++){var s=n[a],l=r.base?s[0]+r.base:s[0],c=A[l]||0,d="".concat(l," ").concat(c);A[l]=c+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=i(u,r);r.byIndex=a,e.splice(a,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var A=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<A.length;o++){var a=t(A[o]);e[a].references--}for(var s=r(n,i),l=0;l<A.length;l++){var c=t(A[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}A=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},788:(n,e,t)=>{t.d(e,{I4:()=>u,zc:()=>c,Re:()=>d,EG:()=>h,jB:()=>y,dF:()=>m,Vg:()=>I,s_:()=>B,ev:()=>b,ho:()=>p,HF:()=>g,qy:()=>C,yG:()=>f,zj:()=>x});const r=t.p+"fe3a5afa06df5c1303ed.png",i=t.p+"30809fcf66f5354f6e75.svg",A=t.p+"c03de8158ff04cbb01ac.svg",o=t.p+"3ac2e4ec6379d5843406.svg",a=t.p+"2d488239aa49fdc642fd.svg",s=t.p+"130dd9ed7df6a0d787c5.svg";var l=t(642);function c(n){const e=document.querySelector(".grid-container"),{grid:t}=n.gameboard,r=document.createElement("div");r.setAttribute("id",`${n.playerNumber}-grid`),r.classList.add("grid"),r.classList.add("hidden"),t.forEach((e=>{const t=document.createElement("div");t.setAttribute("id",`${n.playerNumber}-${e.coordinates}`),t.classList.add("cell"),r.appendChild(t),t.addEventListener("click",(()=>{document.querySelector("#error-message").textContent="";try{n.gameboard.receiveAttack(e.coordinates)}catch(n){t=n.message,document.querySelector("#error-message").textContent=t}var t}))})),e.appendChild(r)}function d(n){document.querySelector(`#${n.playerNumber}-grid`).classList.remove("hidden")}function p(n){document.querySelector(`#${n.playerNumber}-grid`).classList.add("hidden")}function u(n){document.querySelector(`#${n}`).classList.add("has-ship")}function m(n,e,t,r){const l=document.querySelector(`#${t}`);l.classList.add(r);const c=new Image;"Battleship"===e&&(c.src=i),"Carrier"===e&&(c.src=A),"Destroyer"===e&&(c.src=a),"Submarine"===e&&(c.src=s),"Cruiser"===e&&(c.src=o),c.classList.add(e),l.appendChild(c)}function h(n){const e=document.querySelector(`#${n}`),t=document.createElement("span");t.classList.add("is-hit"),e.appendChild(t),e.classList.add("is-hit")}function C(n){const e=document.querySelector(`#${n}`),t=new Image;t.src=r,t.classList.add("explosion"),e.appendChild(t)}function B(n,e){document.querySelector(".turn-text-span").textContent=n.name;const t=document.querySelector(".board-info-container");t.replaceChildren();const r=document.createElement("p");r.textContent=`${e.name}'s Board`,t.appendChild(r)}function f(n,e){const t=document.querySelector(`#${n.playerNumber}-sunk-ships-container`),r=document.querySelector(`#${n.playerNumber}-sunk-ships-list`);t.appendChild(r);const i=document.createElement("li");i.textContent=e.name,r.appendChild(i)}function g(n){document.querySelector(`#${n.playerNumber}-sunk-ships-container`).classList.add("hidden")}function I(n){document.querySelector(`#${n.playerNumber}-sunk-ships-container`).classList.remove("hidden")}function b(n){const e=document.querySelector(".gameover-container"),t=document.querySelector(".gameover-text-span"),r=document.querySelector(".play-again-button");t.textContent=n.name,r.addEventListener("click",(()=>{location.reload()})),e.classList.remove("hidden")}function x(n){const e=document.querySelector(".play-random-button"),t=document.querySelector(".play-choose-button"),r=document.querySelector("#player1-input"),i=document.querySelector("#player2-input"),A=document.querySelector(".start-menu-container");e.addEventListener("click",(()=>{const e=new l.A(r.value);let t;t=""===i.value?new l.A("Computer"):new l.A(i.value),n(e,t),A.classList.add("hidden")})),t.addEventListener("click",(()=>{const e=new l.A(r.value);let t;t=""===i.value?new l.A("Computer"):new l.A(i.value),n(e,t,!1),A.classList.add("hidden")}))}function y(n){const e=document.querySelector(".instructions-container"),t=document.querySelector(".available-ships-container");document.querySelector(".instructions-player-name").textContent=n.name,e.classList.remove("hidden"),t.classList.remove("hidden")}},607:(n,e,t)=>{t.d(e,{A:()=>r});class r{constructor(n){this.coordinates=n,this.hasShip=!1,this.ship=null,this.isHit=!1}}},417:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(607),i=t(17),A=t(788);class o{constructor(n){this.player=n,this.letterArray=["A","B","C","D","E","F","G","H","I","J"],this.grid=new Map,this.letterArray.forEach((n=>{for(let e=1;e<11;e+=1){const t=`${n}${e}`;this.grid.set(t,new r.A(t))}})),this.allShipsSunk=!1,this.startingShips=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}],this.shipsInUse=[],this.sunkShips=[],this.triedCoordinates=[]}placeShip(n,e,t,r){const o=new i.A(n,e,r),a=[],s=t.charAt(0),l=parseInt(t.charAt(1),10);if("vertical"===r){let n=this.letterArray.indexOf(s);if(n+o.length>10)throw Error("Ship placement extends out of range");for(let e=0;e<o.length;e+=1)a.push(`${this.letterArray[n]}${l}`),n+=1}else{if(l+o.length>10)throw Error("Ship placement extends out of range");for(let n=l;n<o.length+l;n+=1)a.push(`${s}${n}`)}a.forEach((n=>{if(this.grid.get(n).hasShip)throw Error("Ship placement overlaps another ship")})),a.forEach((n=>{const e=this.grid.get(n);e.hasShip=!0,e.ship=o,e.ship.coordinateList=a,A.I4(`${this.player.playerNumber}-${n}`)})),console.log(a),this.shipsInUse.push(o)}checkIfAllSunk(){this.sunkShips.length===this.shipsInUse.length&&(this.allShipsSunk=!0)}generateRandomCoordinates(){if(this.triedCoordinates.length>=100)throw Error("All coordinates failed");const n=`${this.letterArray[Math.floor(10*Math.random())]}${parseInt(Math.floor(10*Math.random()),10)+1}`;return this.triedCoordinates.includes(n)&&this.generateRandomCoordinates(),n}randomShipPlacement(){const n=this.startingShips;for(;n.length;){const e=n[0],t=this.generateRandomCoordinates();let r;r=0===Math.round(Math.random())?"vertical":"horizontal";try{this.placeShip(e.name,e.length,t,r,this.player),n.shift(),this.triedCoordinates.push(t)}catch{this.randomShipPlacement(),this.triedCoordinates.push(t)}}}receiveAttack(n){const e=this.grid.get(n);if(e.isHit)throw Error("This coordinate has already been hit");e.isHit=!0,A.EG(`${this.player.playerNumber}-${n}`),e.hasShip?(e.ship.hit(),A.qy(`${this.player.playerNumber}-${n}`),e.ship.isSunk&&(this.sunkShips.push(e.ship),A.yG(this.player,e.ship),A.dF(this.player,e.ship.name,`${this.player.playerNumber}-${e.ship.coordinateList[0]}`,e.ship.rotation),this.checkIfAllSunk(),this.allShipsSunk&&A.ev(this.player))):(this.player.isTurn=!0,this.player.opponent.isTurn=!1)}}},642:(n,e,t)=>{t.d(e,{A:()=>r});class r{constructor(n){this.name=n,this.playerNumber=null,this.gameboard=null,this.isTurn=!1,this.opponent=null,this.availableShipList=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}]}randomAttack(n){const e=`${["A","B","C","D","E","F","G","H","I","J"][Math.floor(10*Math.random())-1]}${parseInt(Math.floor(10*Math.random()),10)+1}`;try{n.receiveAttack(e)}catch(e){this.randomAttack(n)}}}},17:(n,e,t)=>{t.d(e,{A:()=>r});class r{constructor(n,e,t){this.name=n,this.length=e,this.hits=0,this.coordinatesList=null,this.isSunk=!1,this.rotation=t}hit(){this.hits+=1,this.hits>=this.length&&(this.isSunk=!0)}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var A=e[r]={id:r,exports:{}};return n[r](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),i=t.n(r),A=t(659),o=t.n(A),a=t(56),s=t.n(a),l=t(540),c=t.n(l),d=t(113),p=t.n(d),u=t(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals;var h=t(417),C=t(788);function B(n,e){if(n.gameboard.allShipsSunk||e.gameboard.allShipsSunk)return void C.ev(n);let t,r;n.isTurn?(t=n,r=e):(t=e,r=n),C.s_(t,r),C.ho(t),C.Re(r),C.HF(t),C.Vg(r)}function f(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n.isTurn=!0,n.playerNumber="player1",e.playerNumber="player2",n.opponent=e,e.opponent=n,n.gameboard=new h.A(n),e.gameboard=new h.A(e),C.zc(n),C.zc(e),t?(n.gameboard.randomShipPlacement(),e.gameboard.randomShipPlacement()):C.jB(n),window.addEventListener("click",(()=>{B(n,e)})),B(n,e)}window.addEventListener("load",(()=>{C.zj(f)}))})()})();
//# sourceMappingURL=game.bundle.js.map