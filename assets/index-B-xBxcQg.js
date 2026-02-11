(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=["Common","Uncommon","Rare","Super Rare","Ultra Rare"],m={Common:"border-gray-400 text-gray-400",Uncommon:"border-avocado text-avocado",Rare:"border-blue-400 text-blue-400","Super Rare":"border-purple-400 text-purple-400","Ultra Rare":"border-cream-can text-cream-can"};function c(){return d[Math.floor(Math.random()*d.length)]}const u=[{name:"PhrogPollen",profile:"/phrog.png",roles:["Director","Artistic Director","Artist"],blurb:"Christian YouTuber and artist.",rarity:"Ultra Rare"},{name:"Ms. Artist",profile:"/placeholder.png",roles:["Artistic Director","Artist"],blurb:"Loves to make gacha character splash art.",rarity:c()},{name:"Mr. Coder",profile:"/placeholder.png",roles:["Coder"],blurb:"Knows many languages, but is most fluent in GDScript and C#.",rarity:c()},{name:"Ms. Writer",profile:"/placeholder.png",roles:["Writer","Researcher"],blurb:"Writes stories and reads scripture.",rarity:c()},{name:"Mr. Business",profile:"/placeholder.png",roles:["Business","Marketing"],blurb:"Give him five talents and he'll come back with ten.",rarity:c()},{name:"Ms. Voice Actor",profile:"/placeholder.png",roles:["Voice Actor","Musician","Social Media"],blurb:"Her favorite Bible verse is Psalm 33:3.",rarity:c()}];function b(t){const o=m[t.rarity],n=o.split(/\s+/)[0],s=o.split(/\s+/).filter(e=>e.startsWith("text-"))[0];return`
        <div class="w-full flex-shrink-0 flex justify-center px-4">
            <div class="w-72 rounded-lg border-2 ${n} bg-kabul/80 overflow-hidden">
                <!-- Name -->
                <div class="px-4 pt-4 pb-2">
                    <h3 class="font-bold text-lg">${t.name}</h3>
                </div>

                <!-- Portrait -->
                <div class="px-4">
                    <img
                        src="${t.profile}"
                        alt="${t.name}"
                        class="w-full h-48 object-cover rounded border ${n}"
                    />
                </div>

                <!-- Roles & Info blurb -->
                <div class="px-4 py-3">
                    <p class="text-xs font-semibold ${s} mb-1">
                        ${t.roles.join(", ")}
                    </p>
                    <p class="text-sm leading-relaxed">${t.blurb}</p>
                </div>

                <!-- Rarity badge -->
                <div class="px-4 pb-4">
                    <span class="inline-block text-xs font-bold px-3 py-1 rounded-full border ${n} ${s}">
                        ★ ${t.rarity}
                    </span>
                </div>
            </div>
        </div>
    `}function g(){const t=document.getElementById("carousel-track"),o=document.getElementById("carousel-dots"),n=document.getElementById("carousel-prev"),s=document.getElementById("carousel-next");if(!t||!o||!n||!s)return;t.innerHTML=u.map(b).join("");let e=0;const r=u.length;for(let a=0;a<r;a++){const i=document.createElement("button");i.className="w-3 h-3 rounded-full transition-colors",i.setAttribute("aria-label",`Go to contributor ${a+1}`),i.addEventListener("click",()=>p(a)),o.appendChild(i)}function l(){t.style.transform=`translateX(-${e*100}%)`,o.querySelectorAll("button").forEach((i,f)=>{f===e?i.className="w-3 h-3 rounded-full bg-cream-can transition-colors":i.className="w-3 h-3 rounded-full bg-swirl/40 transition-colors"})}function p(a){e=a,l()}n.addEventListener("click",()=>{e=(e-1+r)%r,l()}),s.addEventListener("click",()=>{e=(e+1)%r,l()}),l()}document.addEventListener("DOMContentLoaded",g);
