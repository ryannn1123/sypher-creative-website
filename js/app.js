(() => {
 const fallback={services:[{icon:'✦',title:'Brand Identity',description:'Memorable identities that help ambitious brands stand out.'},{icon:'⌘',title:'Web Development',description:'Fast and accessible websites for every device.'},{icon:'◎',title:'Digital Marketing',description:'Creative campaigns that connect with people.'},{icon:'▶',title:'Multimedia',description:'Visual storytelling across platforms.'}],projects:[{category:'Branding',title:'Aurora Identity',description:'A bold identity for a lifestyle brand.',theme:'aurora'},{category:'Web Design',title:'Orbit Commerce',description:'A responsive storefront concept.',theme:'orbit'},{category:'Campaign',title:'Bloom Social',description:'An expressive social campaign concept.',theme:'bloom'}],testimonials:[{quote:'A thoughtful, creative digital experience.',name:'Sample client',role:'Illustrative testimonial'},{quote:'Beautiful design with accessibility in mind.',name:'Sample client',role:'Illustrative testimonial'}]};
 const $=s=>document.querySelector(s);
 const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;};
 function render(data){
  const services=$('#servicesGrid'),projects=$('#projectsGrid'),quotes=$('#testimonialsGrid');
  (data.services||[]).forEach(s=>{const c=el('article','tile service-tile');c.append(el('div','service-icon',({palette:'✦',code:'⌘',megaphone:'◎',video:'▶'})[s.icon]||s.icon||'✦'),el('h3','',s.title),el('p','',s.description));services.append(c);});
  (data.projects||[]).forEach(p=>{const c=el('article','tile project-tile'),art=el('div','project-art '+(['aurora','orbit','bloom'].includes(p.theme)?p.theme:'aurora'));art.append(el('span','project-symbol','✳'));c.append(art,el('span','project-category',p.category),el('h3','',p.title),el('p','',p.description));projects.append(c);});
  (data.testimonials||[]).forEach(t=>{const c=el('article','tile quote-tile');c.append(el('div','quote-mark','“'),el('blockquote','',t.quote),el('strong','',t.name),el('p','',t.role));quotes.append(c);});
 }
 async function load(){try{const r=await fetch('/api/content',{signal:AbortSignal.timeout(3000)});if(!r.ok)throw Error('API');render(await r.json());}catch{render(fallback);}}
 const info=window.SypherDetector.detect();
 $('#cpuValue').textContent=info.threads??'Unavailable';$('#memoryValue').textContent=info.memory?info.memory+' GB':'Unavailable';$('#screenValue').textContent=`${info.width} × ${info.height}`;$('#webglValue').textContent=info.gpu?'Supported':'Unavailable';$('#scoreValue').textContent=info.score+'/100';$('#motionValue').textContent=info.reduced?'Enabled':'Off';
 let choice='auto';try{choice=localStorage.getItem('sypher-mode')||'auto';}catch{}if(!['auto','high','medium','basic'].includes(choice))choice='auto';
 function update(){window.SypherAdaptive.apply(choice==='auto'?info.auto:choice,info);document.querySelectorAll('[data-select-mode]').forEach(b=>{const active=b.dataset.selectMode===choice;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
 document.querySelectorAll('[data-select-mode]').forEach(b=>b.addEventListener('click',()=>{choice=b.dataset.selectMode;try{localStorage.setItem('sypher-mode',choice);}catch{}update();}));
 const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');motionQuery.addEventListener?.('change',e=>{info.reduced=e.matches;$('#motionValue').textContent=e.matches?'Enabled':'Off';update();});
 update();setTimeout(()=>{$('#analyzer').classList.add('hidden');},650);
 $('#year').textContent=new Date().getFullYear();
 $('#menuToggle').addEventListener('click',()=>{const open=$('#siteNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('#siteNav a').forEach(a=>a.addEventListener('click',()=>{$('#siteNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));
 $('#contactForm').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget;const payload=Object.fromEntries(new FormData(form));$('#formStatus').textContent='Submitting demo message...';try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const d=await r.json();if(!r.ok)throw Error(d.error||'Request failed');$('#formStatus').textContent=d.message;form.reset();}catch{$('#formStatus').textContent='Demo API unavailable. Start the Node.js server with npm start.';}});
 load();
})();
