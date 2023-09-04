const lodcategory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const tabCon =document.getElementById('tabcon');
    data.data.forEach(cartegory => {
        const div = document.createElement('div');
       
        div.innerHTML =
        `<a id="click" onclick = "onclicklod(${cartegory.category_id})" class=" rounded-sm tab text-lg font-semibold  bg-gray-300 hover:bg-red-500 hover:text-white">${cartegory.category}</a>`;
        tabCon.appendChild(div)
    });
}

const onclicklod = async (resbdata) => {
    const info = await fetch(`https://openapi.programming-hero.com/api/videos/category/${resbdata}`)
    const main = await info.json()
     sorts(main)
    const errors = document.getElementById('error');
    errors.innerHTML =''
   if(main.data.length === 0){
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <img  src = "icon.png" class =" m-auto ">
    <h1 class="max-w-[443px] mt-3 h-[88px] font-bold text-4xl text-center"> Oops!! Sorry, There is no content here</h1>
    `;
    errors.appendChild(div);
   }
    const cardContainer = document.getElementById('car-container')
    cardContainer.innerHTML =''
  main.data.forEach(alldata => {
    const sring = alldata.others.posted_date
    const num = parseInt(sring)
   const dateV = (Milisecond) =>{
      
      const minute = Math.floor((Milisecond/60)%60);
      const houres = Math.floor((Milisecond/60/60)%24);
      return {
       
        minute:minute,
        houres: houres
      }
      
   
  }
  //  console.log(dateV(25200))
 
   const dateValue = dateV(num);
   
 
   
    const div = document.createElement('div');
    div.innerHTML = 
    `<div class="card card-compact    bg-base-100 shadow-2xl">
    <figure class ="relative " ><span class =" ${num? num:'hidden'} rounded-sm text-xs px-2 py-1 absolute right-5 bottom-3 bg-slate-800 text-white">${dateValue.houres} hrs ${dateValue.minute} min ago</span><img class=" w-full h-44"  src="${alldata.thumbnail}" alt="Shoes" /></figure>
    <div class=" flex gap-5 mt-5">
        <div class=" px-1">
            <img class=" w-10 h-10  rounded-full" src="${alldata.authors[0].profile_picture}">
        </div>
      <div>
        <h1 class="card-title text-lg font-bold">${alldata.title}</h1>
        
        <div class="flex gap-3">
            <p class="text-sm text-[#171717B2]">${alldata.authors[0].profile_name}</p>
            <span> ${alldata.authors[0].verified ? '<img class=" w-5" src="download.png">': ""}  </span> 
        </div>
        <span class="text-[#171717B2]">${alldata.others.views}</span>
      </div>
    </div>
  </div>`;
  cardContainer.appendChild(div);
  })
   
   
}
lodcategory()
onclicklod('1000')
const newwindo = () =>{
  window.open('2index.html', 'blank');

}


const sorts = (dat) =>{
  // const dat = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
  // const mains = await dat.json()
    dat.data.sort((a,b)=> a.others.views.slice(0, -1) - b.others.views.slice(0, -1))
    // console.log(dat)

}


const arry = [
{name:'kgah', age:'15k'},
{name:'bavl', age:'12.2k',},
{name:'kalam', age:'23.2k',},
{name:'rokim', age:'11k',},
{name:'valau', age:'100k',}
];
// arry.sort((a.age.slice(0,a.age -1)));
// const v = arry[0].age.slice(0, -1)
 arry.sort((a,b)=> a.age.slice(0, -1) - b.age.slice(0, -1))
// console.log(arry)