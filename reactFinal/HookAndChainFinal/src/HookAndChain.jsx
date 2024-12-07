import React, { useEffect, useState } from "react";

function HookAndChain() {


    function genRanNumber() {
        const projects = [1, 2, 3, 4];
        const x = Math.floor(Math.random() * projects.length);
        const y = projects[x];
        console.log(y);
        document.getElementById("randomNum").innerHTML = y;
    }
      
    function genRanHex() {
        const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        console.log(genRanHex(6));
        document.getElementById("randomHex").innerHTML = genRanHex(6);
       
      }

    
//The code between here and the return is not functional. It is a work-in-progress
    const [colors, setColors] = useState([])
    const [getInspo, setGetInspo] = useState('https://www.thecolorapi.com/id?rgb=rgb(255,0,0)&format=json')

    const getColors = async () => {
        const res = await fetch(getInspo)
        const data = await res.json()

        console.log(data)

            }
      

    useEffect (() => {
        getColors()

    }, [])

   
return(

<div class="home-page">

<h1 class="font-sans font-light tracking-widest text-blue-900 text-9xl m-3">Hook & Chain</h1>

<p class="font-sans tracking-widest text-blue-950 text-3xl m-8">What will you create?</p>

<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card bg-gradient-to-br from-cyan-50 to-violet-100" id="cardOne">
      <div class="card-body">
        <h5 class="card-title font-serif text-blue-950 text-xl">Pick a Color</h5>
        <h4 class="font-sans text-blue-950 text-m p-4">Click the button to generate a random HEX code to pick a color for your project.</h4>
        <a class="btn hover:bg-violet-400 text-blue-900 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent rounded"
        onClick={genRanHex}>Let's Go</a>
        <div id="randomHex" class="font-serif text-blue-950 text-xl p-4"></div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-gradient-to-tr from-violet-100 to-cyan-50" id="cardTwo">
      <div class="card-body">
        <h5 class="card-title font-serif text-blue-950 text-xl">Pick a Project</h5>
        <h4 class="font-sans text-blue-950 text-m p-4">Click the button to generate a random number that corresponds with a project below.</h4>
        <a className="btn hover:bg-violet-400 text-blue-900 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent rounded"
        onClick={genRanNumber}>Let's Go</a>
        <div id="randomNum" class="font-serif text-blue-950 text-xl p-4"></div>
      </div>
    </div>
  </div>
</div>

<div class= "col-span-4 grid grid-cols-4 gap-0">
<div class="w-78 rounded overflow-hidden shadow-lg m-2">
  <div class="px-72 py-52" id= "catHat">
  </div>
  <div class="px-6 pt-4 pb-2">
  <p class="font-sans tracking-widest text-blue-950 text-3xl m-8">One</p>
  <p class="font-serif text-blue-950 text-xl p-4">Find the tutorial for this strawberry cat hat <a class="font-semibold"href="https://www.youtube.com/watch?v=y0IEmU_Eh8g" target="_blank">here</a></p>
</div>
</div>

<div class="w-70 rounded overflow-hidden shadow-lg m-2">
  <div class="px-72 py-52" id= "balaclava">
  </div>
  <div class="px-6 pt-4 pb-2">
  <p class="font-sans tracking-widest text-blue-950 text-3xl m-8">Two</p>
  <p class="font-serif text-blue-950 text-xl p-4">Find the tutorial for the granny squares on this balaclava <a class="font-semibold"href="https://youtu.be/IZV41RBDoKk" target="_blank">here</a></p>
</div>
</div>

<div class="w-70 rounded overflow-hidden shadow-lg m-2">
  <div class="px-72 py-52" id= "beanie">
  </div>
  <div class="px-6 pt-4 pb-2">
  <p class="font-sans tracking-widest text-blue-950 text-3xl m-8">Three</p>
  <p class="font-serif text-blue-950 text-xl p-4">Find the tutorial for this beanie with pom poms <a class="font-semibold"href="https://www.youtube.com/watch?v=Jsglwv2ZgQg" target="_blank">here</a></p>
</div>
</div>

<div class="w-70 rounded overflow-hidden shadow-lg m-2">
  <div class="px-72 py-52" id= "greenSweater">
  </div>
  <div class="px-6 pt-4 pb-2">
  <p class="font-sans tracking-widest text-blue-950 text-3xl m-8">Four</p>
  <p class="font-serif text-blue-950 text-xl p-4">Find the tutorial for this comfy sweater <a class="font-semibold"href="https://forthefrills.com/easy-ribbed-crochet-sweater-free-pattern/" target="_blank">here</a></p>
</div>
</div>

</div>


     </div>
     
)

}

export default HookAndChain ; 
