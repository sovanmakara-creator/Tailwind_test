
import './style.css'
const btn = document.getElementById('btn');
      btn.addEventListener("click" , (even) =>{
        
        document.getElementById('title').classList.toggle("text-red-500");
      })