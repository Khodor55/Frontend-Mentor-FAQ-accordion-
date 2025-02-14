
let details = document.querySelector('.details');

let data = [
  {
      name: "Is Frontend Mentor free?",
      desc : "  Frontend Mentor offers realistic coding challenges to help developers improve their  fron Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  }
  ,
  {
      name : "Can I use Frontend Mentor projects in my portfolio?",
      desc : "      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  }
  ,
  {
      name : " How can I get help if I'm stuck on a Frontend Mentor challenge?",
      desc : "      The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
  ,
  {
      name : "   What is Frontend Mentor, and how will it help me?",
      desc : " Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for   all levels and ideal for portfolio building."
  }
  

]
data.forEach((item , index)  => {
  details.innerHTML +=`
  <div class="card">
          <div class="text">
            <h5>${item.name}</h5>
            <img src="assets/images/icon-plus.svg" id="plusIcon" onclick="displayInfo(${index})" alt="" srcset="">
            <img src="assets/images/icon-minus.svg" id="minusIcon" onclick="noneInfo(${index})" alt="" srcset="">
          </div>
          <p class="info">
           ${item.desc}
          </p>
        </div>
        
  `
})
let info = document.querySelectorAll(".info");
let imgP = document.querySelectorAll("#plusIcon");
let imgM = document.querySelectorAll("#minusIcon");
function displayInfo(index){
  console.log(index);
  info[index].style.display = 'block';
  imgP[index].style.display = 'none';
  imgM[index].style.display ='block'
}
function noneInfo(index){
  console.log(index);
  info[index].style.display = 'none';
  imgP[index].style.display = 'block';
  imgM[index].style.display ='none'
}