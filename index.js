import{a as y,S as d,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="54842065-4aabfdb1463b75fbfdf76b66f",h="https://pixabay.com/api/";function b(o){return y.get(h,{params:{key:g,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function P(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:p})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${a}">
                <img
                    class="gallery-image"
                    src="${i}"
                    alt="${e}"
                    />
                </a>
                <ul class="gallery-stat-list">
                    <li class="gallery-stat-item">
                        <p><b>Likes</b></p>
                        <p>${t}</p>
                    </li>
                    <li class="gallery-stat-item">
                        <p><b>Views</b></p>
                        <p>${s}</p>
                    </li>
                    <li class="gallery-stat-item">
                        <p><b>Comments</b></p>
                        <p>${m}</p>
                    </li>
                    <li class="gallery-stat-item">
                        <p><b>Downloads</b></p>
                        <p>${p}</p>
                    </li>
                </ul>
            </li>
            `).join("");n.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){n.innerHTML=""}function S(){c.classList.add("loader")}function u(){c.classList.remove("loader")}const f=document.querySelector(".form");u();f.addEventListener("submit",q);function q(o){o.preventDefault();const i=o.target.elements["search-text"].value.trim();if(!i)return l.warning({title:"Caution",message:"Please enter your query!",position:"topRight",timeout:7e3});w(),S(),$(i)}function $(o){b(o).then(r=>{r.length>0?P(r):l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:7e3})}).catch(()=>{l.error({message:"Something went wrong! Please try new query!",position:"center",timeout:7e3})}).finally(()=>{f.reset(),u()})}
//# sourceMappingURL=index.js.map
