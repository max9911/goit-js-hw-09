!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r,i,a=u("6JpON"),l={amount:document.querySelector('input[name="amount"]'),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),btn:document.querySelector(".btn")};function c(t,n){Math.random()>.3?setTimeout((function(){Promise.resolve({position:t,delay:n}).then((function(o){return e(a).Notify.success("Fullfiled promis ".concat(t," in ").concat(n,"ms"))}))}),n):setTimeout((function(){Promise.reject({position:t,delay:n}).catch((function(o){return e(a).Notify.failure("Rejected promis ".concat(t," in ").concat(n,"ms"))}))}),n)}l.btn.addEventListener("click",(function(e){e.preventDefault(),l.btn.disabled=!0;var t=Number(l.step.value)*Number(l.amount.value)+Number(l.delay.value);r=l.amount.value;for(var n=1;n<=r;n+=1)i=Number(l.delay.value)+Number(l.step.value*(n-1)),c(n,i);setTimeout((function(){l.btn.disabled=!1}),t+500)}))}();
//# sourceMappingURL=03-promises.9b65952b.js.map
