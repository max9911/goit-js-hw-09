function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u={amount:document.querySelector('input[name="amount"]'),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),btn:document.querySelector(".btn")};let l,a;function d(t,n){Math.random()>.3?setTimeout((()=>{Promise.resolve({position:t,delay:n}).then((o=>e(i).Notify.success(`Fullfiled promis ${t} in ${n}ms`)))}),n):setTimeout((()=>{Promise.reject({position:t,delay:n}).catch((o=>e(i).Notify.failure(`Rejected promis ${t} in ${n}ms`)))}),n)}u.btn.addEventListener("click",(function(e){e.preventDefault(),l=u.amount.value;for(let e=1;e<=l;e+=1)a=Number(u.delay.value)+Number(u.step.value*(e-1)),d(e,a)}));
//# sourceMappingURL=03-promises.70739340.js.map
