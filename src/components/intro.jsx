import firstImg from "../assets/image-web-3-mobile.jpg"
import OneImg from "../assets/image-retro-pcs.jpg"
import top_laptops from "../assets/image-top-laptops.jpg"
import gamingImg from "../assets/image-gaming-growth.jpg"
export const Intro = ()=>{
  
  return(
    <>
    <div class="md:flex md:flex-row justify-normal">
    <div class="md:w-[655px] p-1">
    <img src={firstImg} class="w-fit md:w-[700px] md:h-[440px]"/>
    <div class="p-1.5 md:flex md:flex-row md:justify-between">
    <div class="text-5xl  font-extrabold pt-1 pb-1 md:w-[400px]">The Bright Future of Web 3.0?</div>
    <div class="w-4/5">
    <div class="text-gray-400 text-sm p-1.5 md:w-[390px]">
    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
    </div>
    <button class="bg-red-400 uppercase p-3 text-white w-40 font-bold">
     Read more
    </button>
    </div>
    </div>
    </div>
    
    <div class="bg-slate-900 text-white  md:mr-2 pl-3 md:w-[300px] m-2 md:mt-1 h-max md:h-fit pt-3 pb-6">
    <div class="text-orange-400 font-bold text-2xl pb-3 pt-3">New</div>
    <div>
    <div class="text-2xl pt-3 mb-1.5 font-bold ">Hydrogen VS Electric Cars</div>
 <div class="text-sm text-gray-300 pb-4"> Will hydrogen-fueled cars ever catch up to EVs?</div><hr class="w-[90%]"/>
    <div class="text-2xl font-bold pt-3 mb-1.5">The Downsides of AI Artistry</div>
 <div class="text-sm text-gray-300 pb-3"> What are the possible adverse effects of on-demand AI image generation?</div>
 <hr class="w-[90%]"/>
    <div class="text-2xl font-bold pt-2 pb-3">  Is VC Funding Drying Up?</div>
 <div class="text-sm text-gray-300 pb-3"> Private funding by VC firms is down 50% YOY. We take a look at what that means.
</div>
    </div>
    </div>
    </div>
    
    <div class="m-2 md:flex md:flex-row md:justify-between">
    <div class="flex flex-row pt-4 pb-3">
    <img src={OneImg} class="w-20 h-25"/>
    <div class="ml-3">
    <div class="text-gray-400 font-bold text-3xl">01</div>
    <div class="text-slate-900 font-bold">Reviving Retro PCs</div>
    <div class="text-sm text-gray-400 w-52">What happens when old PCs are given modern upgrades?</div>
    </div>
    </div>
    
        <div class="flex flex-row pt-4 pb-3 md:ml-4">
    <img src={top_laptops} class="w-20 h-25"/>
    <div class="ml-3">
    <div class="text-gray-400 font-bold text-3xl">02</div>
    <div class="text-slate-900 font-bold ">Top 10 Laptops of 2022</div>
    <div class="text-sm text-gray-400 w-52">Our best picks for various needs and budgets.
</div>
    </div>
    </div>
    
        <div class="flex flex-row pt-4 pb-3">
    <img src={gamingImg} class="w-20 h-25"/>
    <div class="ml-3">
    <div class="text-gray-400 font-bold text-3xl">03</div>
    <div class="text-slate-900 font-bold ">The Growth of Gaming</div>
    <div class="text-sm text-gray-400 w-52">How the pandemic has sparked fresh opportunities.
</div>
    </div>
    </div>
    </div>
    
      <div class="bg-black text-white">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#" class="underline">Musinguzi Shafiq</a>.
  </div>
    </>
    )
}