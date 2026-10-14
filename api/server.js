const express = require('express');
const path = require('path');
const app = express();
const root = path.resolve(__dirname, '..');
app.use(express.json());
app.use(express.static(root));
const content = {
  services: [
    {icon:'palette',title:'Brand Identity',description:'Memorable brand systems, logos, and visual guidelines for ambitious businesses.'},
    {icon:'code',title:'Web Development',description:'Fast, accessible, responsive websites built for real people and real devices.'},
    {icon:'megaphone',title:'Digital Marketing',description:'Strategic campaigns and creative storytelling that connect with audiences.'},
    {icon:'video',title:'Multimedia Production',description:'Video, motion, and digital assets designed to bring ideas to life.'}
  ],
  projects: [
    {category:'Branding',title:'Aurora Identity',description:'A bold identity system for a modern lifestyle brand.',theme:'aurora'},
    {category:'Web Design',title:'Orbit Commerce',description:'An accessible storefront with delightful shopping experiences.',theme:'orbit'},
    {category:'Campaign',title:'Bloom Social',description:'A fresh digital campaign built around authentic connection.',theme:'bloom'}
  ],
  testimonials: [
    {quote:'Sypher translated our ideas into a digital experience that feels genuinely us.',name:'Alex Rivera',role:'Sample client · Aurora'},
    {quote:'The team balanced beautiful design with usability across our customers’ devices.',name:'Jamie Cruz',role:'Sample client · Orbit'}
  ]
};
app.get('/api/content', (_req,res)=>res.json(content));
app.get('/api/health', (_req,res)=>res.json({status:'ok',service:'Sypher Creative Solutions API'}));
app.post('/api/contact',(req,res)=>{
  const {name,email,message} = req.body || {};
  if (![name,email,message].every(x=>typeof x==='string' && x.trim()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'Please provide a name, valid email, and message.'});
  // Demonstration endpoint only. No messages are stored or sent.
  res.json({success:true,message:'Demo submission received. Connect a mail provider to deliver real messages.'});
});
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Sypher running at http://localhost:${port}`));
