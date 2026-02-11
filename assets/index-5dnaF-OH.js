(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=["R","SR","SSR"],b={R:"border-gray-400 text-gray-400",SR:"border-blue-400 text-blue-400",SSR:"border-cream-can text-cream-can"};function d(){return u[Math.floor(Math.random()*u.length)]}const c="/bible-gacha-site",p=[{name:"PhrogPollen",profile:`${c}/phrog.png`,roles:["Director","Artistic Director","Artist"],blurb:"Christian YouTuber and artist.",rarity:"SSR"},{name:"Ms. Artist",profile:`${c}/placeholder.png`,roles:["Artistic Director","Artist"],blurb:"Loves to make gacha character splash art.",rarity:d()},{name:"Mr. Coder",profile:`${c}/placeholder.png`,roles:["Coder"],blurb:"Knows many languages, but is most fluent in GDScript and C#.",rarity:d()},{name:"Ms. Writer",profile:`${c}/placeholder.png`,roles:["Writer","Researcher"],blurb:"Writes stories and reads scripture.",rarity:d()},{name:"Mr. Business",profile:`${c}/placeholder.png`,roles:["Business","Marketing"],blurb:"Give him five talents and he'll come back with ten.",rarity:d()},{name:"Ms. Voice Actor",profile:`${c}/placeholder.png`,roles:["Voice Actor","Musician","Social Media"],blurb:"Her favorite Bible verse is Psalm 33:3.",rarity:d()}];function g(t){const o=b[t.rarity],s=o.split(/\s+/)[0],n=o.split(/\s+/).filter(e=>e.startsWith("text-"))[0];return`
        <div class="w-full flex-shrink-0 flex justify-center px-4">
            <div class="w-72 rounded-lg border-2 ${s} bg-kabul/80 overflow-hidden">
                <!-- Name -->
                <div class="px-4 pt-4 pb-2">
                    <h3 class="font-bold text-lg">${t.name}</h3>
                </div>

                <!-- Portrait -->
                <div class="px-4">
                    <img
                        src="${t.profile}"
                        alt="${t.name}"
                        class="w-full h-48 object-cover rounded border ${s}"
                    />
                </div>

                <!-- Roles & Info blurb -->
                <div class="px-4 py-3">
                    <p class="text-xs font-semibold ${n} mb-1">
                        ${t.roles.join(", ")}
                    </p>
                    <p class="text-sm leading-relaxed">${t.blurb}</p>
                </div>

                <!-- Rarity badge -->
                <div class="px-4 pb-4">
                    <span class="inline-block text-xs font-bold px-3 py-1 rounded-full border ${s} ${n}">
                        ★ ${t.rarity}
                    </span>
                </div>
            </div>
        </div>
    `}function h(){const t=document.getElementById("carousel-track"),o=document.getElementById("carousel-dots"),s=document.getElementById("carousel-prev"),n=document.getElementById("carousel-next");if(!t||!o||!s||!n)return;t.innerHTML=p.map(g).join("");let e=0;const r=p.length;for(let i=0;i<r;i++){const a=document.createElement("button");a.className="w-3 h-3 rounded-full transition-colors",a.setAttribute("aria-label",`Go to contributor ${i+1}`),a.addEventListener("click",()=>f(i)),o.appendChild(a)}function l(){t.style.transform=`translateX(-${e*100}%)`,o.querySelectorAll("button").forEach((a,m)=>{m===e?a.className="w-3 h-3 rounded-full bg-cream-can transition-colors":a.className="w-3 h-3 rounded-full bg-swirl/40 transition-colors"})}function f(i){e=i,l()}s.addEventListener("click",()=>{e=(e-1+r)%r,l()}),n.addEventListener("click",()=>{e=(e+1)%r,l()}),l()}document.addEventListener("DOMContentLoaded",h);
