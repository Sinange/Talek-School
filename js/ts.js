import { arraySubjects,grade,timetableDraf,daysOfweek ,downloadable} from "./data.js";
function updateImage(){
  const  images=[
    // "bm.png",
    // "f1.webp",
    // "f2.webp",
    // "f3.webp",
    // "f4.png"
  ];
  let index=0;
   setInterval(()=>{
     index++;
     if (index>=images.length) {
     index=0;
     }
     const mc=document.querySelector('.mcontent');
     if(mc){
   mc.style.backgroundImage = `url("images/${images[index]}")`;
     }
   },500) 
}
// updateImage();

function updateText(welcome){
  let sentenceIndex=0;
  let charlength=0;
   const mc=document.querySelector('.mcontent');
   if(mc){
  const mcd=document.querySelector('.mcontent-text');
  const speak=(text)=>{
    const utter=new SpeechSynthesisUtterance(text);
    utter.pitch=1;
    utter.rate=1;
    speechSynthesis.speak(utter);
  };
  //  speak(welcome[0]);
  setInterval(()=>{
    const currentSentence=welcome[sentenceIndex];
  //  mc.textContent+=currentSentence.charAt(charlength)
    mcd.textContent=currentSentence.substring(0,charlength+1);
    charlength ++;
    if(charlength>=currentSentence.length){
      charlength=0;
    //  mc.textContent=""
    // speak(welcome[sentenceIndex])
      sentenceIndex++;
    }
    if(sentenceIndex>=welcome.length)
    {
      sentenceIndex=0;
    }
   
    
  },150)
}}
 function updateHeaderFooter(){
  const fileHeader=document.querySelector('header');
  if(fileHeader){
 fileHeader.innerHTML=`<nav class="nav-top">
  <button id="menu-toggle">📙</button>
  <a href="index.html">Home</a>
    <a href="grade.html">Grade</a>
    <a href="download.html">Download</a>
    <a href="login.html">Login</a>
    <a href="about.html">About</a>
</nav>`;
const fileFooter=document.querySelector('footer');
fileFooter.innerHTML=` All rights reserved 	&copy; ${new Date().getFullYear()}`;

document.addEventListener('DOMContentLoaded',(event)=>{
  const  menu=document.querySelector('#menu-toggle');
  const aside=document.querySelector('aside');
  if (menu && aside) {
    menu.addEventListener('click',(event)=>{
    aside.classList.toggle('active');
    menu.classList.toggle('open')
    })
  }
  
});
  }
}
updateHeaderFooter();
function loginUpdateNavbar(){
  const fileHeader=document.querySelector('header');
  if(fileHeader){
 fileHeader.innerHTML=`<nav class="nav-top">
  <button id="menu-toggle">📙</button>
  <a href="index.html">Home</a>
    <a href="grade.html">Grade</a>
    <a href="download.html">Download</a>
    <a href="about.html">About</a>
    <button id="logOut">LogOut</button>
</nav>`;
  const  menu=document.querySelector('#menu-toggle');
  const aside=document.querySelector('aside');
  if (menu && aside) {
    menu.addEventListener('click',(event)=>{
    aside.classList.toggle('active');
    menu.classList.toggle('open')
    })
  }
    const getStarted=document.querySelector('.getStarted');
   if(getStarted){
    getStarted.style.display="none"
   }
 

}
const  logout=document.getElementById('logOut');
if(logout){
  logout.style.background="#f1c40f";
  logout.style.borderRadius="10px";
  logout.style.padding="10px 10px ";
  logout.style.fontSize="18px";
  logout.style.fontWeight="bold";
  logout.addEventListener('click',(event)=>{
   localStorage.removeItem('activeUser');
    location.href="index.html";
  })
}
}
function updateAsidebar(role,isSmall=false){
    const about=isSmall?`<li><a href="about.html">About</a></li>`:"";
  const login=isSmall?`<li><a href="login.html">Login</a></li>`:"";
  const active=JSON.parse(localStorage.getItem("activeUser"));
  if(role==="student"){
     const aside=document.querySelector('aside');
     if(aside){
     aside.innerHTML=`
     <ul class="aside-content">
       <h3>Student Menu</h3>
       <li><a href="index.html">Dashboard</a></li>
       <li><a href="attendance.html">My Profile</a></li>
       <li><a href="assignments.html?value=assessments&detail=${active.sts}">My performance</a></li>
       <li><a href="assignments.html?value=timetable&detail=${active.sts}">Class Timetable</a></li>
        <li><a href="homework.html">Assignments</a></li>
       <li><a href="finances.html">Fees/Ledger</a></li>
       <li><a href="announcements.html">Announcements</a></li>
       ${login}   
      ${about}
       </ul>`;
   
     }
    }else if(role==="staff"){

      const aside=document.querySelector('aside');
      if(aside){
      aside.innerHTML=`
      <ul class="aside-content">
        <h3>Staff Menu</h3>
        <li><a href="index.html">Dashboard</a></li>
        <li><a href="attendance.html">My Profile</a></li>
        <li><a href="payment.html">Work</a></li>
        <li><a href="payment.html">Payment</a></li>
        <li><a href="reports.html">Reports</a></li>
        <li><a href="announcements.html">Announcements</a></li>
        ${login}
        ${about}
      </ul>`;
      }
    }else if(role==="teacher"){
      const aside=document.querySelector('aside');
      const parts=active.sts.split(" "); 
      const gradeClass=parts[1];
      if(aside){
      aside.innerHTML=`
      <ul class="aside-content">
        <h3>Teacher Menu</h3>
        <li><a href="index.html">Dashboard</a></li>
        <li><a href="attendance.html">My Profile</a></li>
        <li><a href="assignments.html?value=timetable&detail=${gradeClass}">My Timetable</a></li>
        <li><a href="grade.html?detail=${gradeClass}">StudentList</a></li>
        <li><a href="assignments.html?value=assessments&detail=${gradeClass}">GradeList</a></li>
        <li><a href="reports.html">Reports</a></li>
        <li><a href="homework.html">Assignments</a></li>
        <li><a href="download.html">Resources</a></li>
        ${login}
        ${about}
      </ul>`;    
      } 

  }else if(role==="admin"){
    const aside=document.querySelector('aside');
    if(aside){
    aside.innerHTML=`
    <ul class="aside-content">
      <h3>Admin Menu</h3>
      <li><a href="index.html">Dashboard</a></li>
      <li><a href="attendance.html?value=profile">My Profile</a></li>
      <li><a href="attendance.html">User Management</a></li>
      <li><a href="assignments.html">AcademicSetUp</a></li>
      <li><a href="finances.html">Finance/Accounts</a></li>
      <li><a href="announcements.html">AnnounceMent</a></li>
       <li><a href="reports.html">Reports</a></li>
      <li><a href="resources.html">SystemSettings</a></li>
      ${login}
      ${about}
    </ul>`;
    }
  }else{
    const aside=document.querySelector('aside');
    if(aside){
    aside.innerHTML=`
    <ul class="aside-content">
    <h3>Guest Menu</h3>
    <li><a href="index.html">Home/Overview</a></li>
    <li><a href="admission.html">Admission info</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="contactsus.html">ContactUs</a></li>
    <li><a href="newsevents.html">News/Events</a></li>
    ${login}
    </ul>`;
  }
}
 

}
function updateDashboard(role){
  const container=document.querySelector('.dashboard-grid');
  const divUser=document.querySelector('.card');
  if(divUser){
    const  child=divUser.children;
    if(role==='student'){
     const person=JSON.parse(localStorage.getItem("activeUser"));
      const fee=JSON.parse(localStorage.getItem('feesdetails'))||[];
     const fid=fee.find(item=>item.username===person.username);
     const assignment=JSON.parse(localStorage.getItem("assignments"))||[];
   const scored=JSON.parse(localStorage.getItem('score'))||[];
        const length=assignment.length-scored.length;
        console.log(length);
        
     
     divUser.innerHTML=`	<div class="card-card "></div>
      <div class="card-card"></div>
      <div class="card-card"></div>
      <div class="card-card"></div>`;
      const users=JSON.parse(localStorage.getItem('userdetails'))||[]
      const student=users.filter(student=>student.roles==='student');
const active=JSON.parse(localStorage.getItem('activeUser'));
const findlearner=student.filter(learner=>learner.sts===active.sts);
    const score=findlearner.map(item=>({username:item.username,
                                  Mat:0,Eng:0,Kis:0,Sci:0,Sst:0,ca:0,Total:0 ,rank:0}))
      const scores=JSON.parse(localStorage.getItem('learnerscores'))||score
      const find=scores.find(learner=>learner.username===active.username);
      //  <td>${}</td>
      child[0].innerHTML="Mean Grade <br>"+`${find?find.Total>=451?"EE":find.Total>=301?"ME":find.Total>=151?"AE":"BE":"BE"}`;
        child[1].innerHTML=`Balance<br>${fid?25000-Number(fid.amount):0}`;
       child[2].innerHTML=` Pending Assignments<br>${length?length:0}`;
       child[3].innerHTML="Attendance<br>"+"100%"
       child[0].addEventListener("click",(event)=>{
        location.href=`assignments.html?value=assessments&detail=${fid.grade}`;
        })
       child[1].addEventListener("click",(event)=>{
        location.href="finances.html"
        })
          child[2].addEventListener("click",(event)=>{
        location.href="homework.html"
        })
          child[3].addEventListener("click",(event)=>{
        location.href="finances.html"
        })
    }else if(role==='teacher'){
      divUser.innerHTML=`	<div class="card-card "></div>
      <div class="card-card"></div>
      <div class="card-card"></div>
      <div class="card-card"></div>`;
      const users=JSON.parse(localStorage.getItem("userdetails"))||[]; 
      const active=JSON.parse(localStorage.getItem("activeUser"));  
      const parts=active.sts.split(" ");
      const gradeClass=parts[1];
       const assignment=JSON.parse(localStorage.getItem("assignments"))||[];
      const student=users.filter(learner=>learner.roles==="student" && learner.sts===gradeClass);
      child[0].innerHTML="My Classes <br>"+grade.length;
      child[1].innerHTML="Assignments<br>"+assignment.length;
     child[2].innerHTML=" Students<br>"+student.length;
     child[3].innerHTML="Remaining Lessons<br>"+8;
          child[0].addEventListener("click",(event)=>{
   location.href=`grade.html?detail=${gradeClass}`
     })
       child[1].addEventListener("click",(event)=>{
        location.href="homework.html"
        })
     child[2].addEventListener("click",(event)=>{
   location.href=`grade.html?detail=${gradeClass}`
     })
        child[3].addEventListener("click",(event)=>{
          let time=new Date().getHours().toString().padStart(2,"0");
          console.log(time)
        location.href=`assignments.html?value=timetable&detail=${gradeClass}`
        })
     }else if(role==='admin'){
     showAllUsers();
    if(container){
      let inner="";
    const log=JSON.parse(localStorage.getItem("activityLog")) || [];
    if(log.length===0){
      inner=`
      <div class="dashboard-grid-table">
      <thead>
      <caption>RecentUpdates</caption>
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    </div>
      <div class="dashboard-grid-quick">
        <h3>QuickActions</h3>
        <button class="quick-action-b adduser">Add User</button>
        <button class="quick-action-b takeattendance">Take Attendance</button>
        <button class="quick-action-b printreport">Print Report</button>
      </div>`;
      container.innerHTML=inner;
      const caption=container.querySelector('caption');
      if(caption){
      caption.innerHTML=`No Updates`; }
      const adduser=container.querySelector('.adduser');
      if(adduser){
     adduser.addEventListener('click',(event)=>{
        location.href="login.html"
     })}
     const takeAttedance=container.querySelector('.takeattendace');
     if(takeAttedance){
     takeAttedance.addEventListener('click',(event)=>{
        location.href="grade.html"
     })}
     const printReport=container.querySelector('.printreport');
     if(printReport){
     printReport.addEventListener('click',(event)=>{
      
    const windowPrint=window.open('attendance.html',"_blank");
    console.log(windowPrint);
    if(windowPrint){
    windowPrint.addEventListener('load',(event)=>{
      windowPrint.print()
    })
  }
    

     })}
    }else{
    inner=`
    <div class="dashboard-grid-table">
     <table>
      <thead>
      <caption>RecentUpdates</caption>
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>`;
        log.forEach((log,index)=> {
        inner+=
        `<tr> 
          <td>${log.roles}</td>
          <td>${log.description}</td>
          <td>${log.date}</td>
          <td>${log.time}</td>
          <td><button class="deleteButton" data-index="${index}">Delete</button></td>
          </tr> `;
        });
        inner+=`
      </tbody>
    </table>
    </div>
      <div class="dashboard-grid-quick">
        <h3>QuickActions</h3>
        <button class="quick-action-b adduser">Add User</button>
        <button class="quick-action-b takeattendance">Take Attendance</button>
        <button class="quick-action-b printreport" >Print Report</button>
      </div>`
      container.innerHTML="";
      container.innerHTML=inner;
      const deleteButton=container.querySelectorAll('.deleteButton');
      if(deleteButton){
        deleteButton.forEach(button=>{
          button.addEventListener('click',(event)=>{
            const index=event.target.dataset.index;
             log.splice(index,1);
             localStorage.setItem("activityLog",JSON.stringify(log));
              updateDashboard('admin')
          })
        })
      }
      const adduser=container.querySelector('.adduser');
      if(adduser){
      adduser.addEventListener('click',(event)=>{
         location.href="login.html"
      })}
      const takeAttedance=container.querySelector('.takeattendance');
      if(takeAttedance){
      takeAttedance.addEventListener('click',(event)=>{
         location.href="login.html"
      })}
       const printReport=container.querySelector('.printreport');
     if(printReport){
     printReport.addEventListener('click',(event)=>{
      
    const windowPrint=window.open('attendance.html',"_blank");
    console.log(windowPrint);
    if(windowPrint){
    windowPrint.addEventListener('load',(event)=>{
      windowPrint.print()
    })
  }
    

     })}
    }
  }
    }else if(role==='staff'){
      const anouncements=JSON.parse(localStorage.getItem("announcements"))
      divUser.innerHTML=`	<div class="card-card "></div>
      <div class="card-card"></div>
      <div class="card-card"></div>
      <div class="card-card"></div>`;
        child[0].innerHTML="Asset Count<br>"+1000;
        child[1].innerHTML="Task Pending<br>"+10;
       child[2].innerHTML="Work Shift<br>"+"Onduty";
       child[3].innerHTML="Notifications<br>"+anouncements.length
  child[3].addEventListener("click",(event)=>{
   location.href=`announcements.html`
     })

      }
  }


}
function showAllUsers(){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
  const allUsers=localStorage.getItem("allusers");
  const databaseUsers=document.querySelector('.users');
  let usersToDisplay=[];
  let captionText="";
  switch(allUsers){
    case "all":
      captionText="Users in database";
      usersToDisplay=users;
      break;
      case "student":
        captionText="Students in database";
        usersToDisplay=users.filter(user=>user.roles==='student');
            break;
     case "teacher":
      captionText="Teacher in database";
      usersToDisplay=users.filter(user=>user.roles==='teacher');
            break;
      case "staff":
        captionText="Staff in database";
        usersToDisplay=users.filter(user=>user.roles==='staff');
            break;
      default:
        captionText="Users in database";
        usersToDisplay=users;
        break;
        }
  let inner="";
  if(databaseUsers){
    if(usersToDisplay.length===0){
      inner=`
      <div class="dashboard-grid">
      <h1>Users in database</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
        <th>phone</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>`;
    databaseUsers.innerHTML=inner;
    const container=document.querySelector('.edit-login');
    container.style.display="none";
      const caption=databaseUsers.querySelector("h1");
      if(caption){
        caption.textContent=`No ${allUsers?allUsers:""} data available` }
    }else{
      inner=`
      <div class="dashboard-grid">
       <h1>${captionText}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
        <th>phone</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>`;
      usersToDisplay.forEach((person)=> {
        const index=users.findIndex(uid=>uid.username===person.username && uid.roles===person.roles && uid.sts===person.sts &&  uid.phone===person.phone && uid.email===person.email);
        inner+=
        `<tr> 
          <td>${person.username}</td>
          <td>${person.roles}</td>
          <td>${person.sts}</td>
          <td>${person.phone}</td>
          <td>${person.email}</td>
          <td>${"********"}</td>
          <td><button class="editButton" data-index="${index}">Edit</button><button class="deleteButton" data-index="${index}">Delete</button></td>
          </tr> `;
      });
    inner+=`
    </tbody>
  </table>
  </div>;`;
    databaseUsers.innerHTML="";
    databaseUsers.innerHTML=inner;
    const editButton=databaseUsers.querySelectorAll('.editButton');
    const container=document.querySelector('.edit-login');
    container.style.display="none";
    editButton.forEach(button=>{
      button.addEventListener('click',(event)=>{
        const index=event.target.dataset.index;
        container.style.display="block";
    if(container){
      container.innerHTML=`
      <h3>Edit Details here</h3>
      <hr>
      <form action="" autocomplete="on" id="login-form" method="post">
        <label for="role">Role <br>
          <select name="role"  autocomplete="on" id="role">
          <option value="${users[index].roles}">${users[index].roles}</option>
          </select>
        </label> 
        <label for="username">Username
        <input type="text" autocomplete="on" placeholder="Eg.Brian Sinange" name="" id="username" value="${users[index].username}" required> 
        </label>
        <label id="ad" class="error-select" for="admin">Select Admin Type 
        <select name="admin"  autocomplete="on" id="admin">
        <option value="headTeacher">HeadTeacher</option>
        <option value="deputyHeadTeacher">DeputyHeadTeacher</option>
        <option value="seniorTeacher">SeniorTeacher</option>
        <option value="director">Director</option>
      </select>
      </label>
        </label>
        <label id="gd"  class="error-select" for="grade">Select Grade 
        <select name="grade"  autocomplete="on" id="grade">
        <option value="pp1">pp1</option>
        <option value="pp2">pp2</option>
        <option value="grade1">Grade1</option>
        <option value="grade2">Grade2</option>
        <option value="grade3">Grade3</option>
        <option value="grade4">Grade4</option>
        <option value="grade5 ">Grade5</option>
        <option value="grade6">Grade6</option>
        <option value="grade7">Grade7</option>
        <option value="grade8">Grade8</option>
        <option value="grade9">Grade9</option>
      </select>
      </label>
      <label id="st"  class="error-select" for="workingstaff">Select your Work 
      <select name="workingstaff"  autocomplete="on" id="workingstaff">
      <option value="matron">Matron</option>
      <option value="patron">Patron</option>
      <option value="cook">Cook</option>
      <option value="watchMan">WatchMan</option>
      <option value="driver">Driver</option>
      <option value="cleaner">Cleaner</option>
    </select>
    </label>

    <label id="ct"  class="error-select" for="classTeacher">You're  a classTeacher of grade
    <select name="gradeTeacher"  autocomplete="on" id="classteacher">
    <option value="classTeacher pp1">pp1</option>
    <option value="classTeacher pp2">pp2</option>
    <option value="classTeacher grade1">Grade1</option>
    <option value="classTeacher grade2">Grade2</option>
    <option value="classTeacher grade3">Grade3</option>
    <option value="classTeacher grade4">Grade4</option>
    <option value="classTeacher grade5">Grade5</option>
    <option value="classTeacher grade6">Grade6</option>
    <option value="classTeacher grade7">Grade7</option>
    <option value="classTeacher grade8">Grade8</option>
    <option value="classTeacher grade 9 ">Grade9</option>
    <option value="not ClassTeache r">Not a Class Teacher</option>
  </select>
  </label>
        <label class="error-phone" for="number">Phone
          <input type="tel" autocomplete="on" placeholder="0712345678" name="" id="number" value="${users[index].phone}" required> <br>
          </label>
          <label  class="error-email" for="email">Email
            <input type="email" autocomplete="on" placeholder="123@gmail.com" name="" id="email" value="${users[index].email}" required><br>
            </label>  
        <label class="error-pass" for="password">Password
          <input type="password" autocomplete="on" placeholder="..........." name="" id="password" value="${users[index].password}" required><br>
          </label>
        <input type="submit" value="Save " id="Register">
    <!-- <p>Already have an Account?<a class="AR" href="#">login In</a></p>-->
        <p id="main-login-error"></p> 
      </form>`;
      const gd=document.getElementById('gd');
  gd.style.display="none"
  const st=document.getElementById('st');
  st.style.display="none"
  const ad=document.getElementById('ad');
  ad.style.display="none";
  const admin=document.getElementById('admin');
  admin.style.display="none";
  const ct=document.getElementById('ct');
  ct.style.display="none";
  const grade=document.getElementById('grade');
  grade.style.display="none";
  const workingstaff=document.getElementById('workingstaff');
  workingstaff.style.display="none";
  const classTeacher=document.getElementById('classteacher');
  classTeacher.style.display="none";
  //find which role is selected 
  switch(users[index].roles){
    case "student":
      ad.style.display="none";
      admin.style.display="none";
        gd.style.display="block";
        grade.style.display="block";
        ct.style.display="none";
        st.style.display="none";
        workingstaff.style.display="none";
        classTeacher.style.display="none";
      
    break;
     case "teacher":
      ad.style.display="none";
      admin.style.display="none";
          ct.style.display="block";
          gd.style.display="none";
          st.style.display="none";
          grade.style.display="none";
          workingstaff.style.display="none";
          classTeacher.style.display="block" ;
        break;
    case "staff":
      ad.style.display="none";
      admin.style.display="none";
       st.style.display="block";
        workingstaff.style.display="block";
        ct.style.display="none";
        gd.style.display="none";
        grade.style.display="none";
        classTeacher.style.display="none" ;
        break;
        case "admin":
          ad.style.display="block";
          admin.style.display="block";
          st.style.display="none";
          workingstaff.style.display="none";
          ct.style.display="none";
          gd.style.display="none";
          grade.style.display="none";
          classTeacher.style.display="none" ;;
          break;
  }
  const roles=document.getElementById('role');
  roles.addEventListener('change',(event)=>{
  const roleValue=event.target.value;
  switch(roleValue){
  case "student":
    ad.style.display="none";
    admin.style.display="none";
      gd.style.display="block";
      grade.style.display="block";
      ct.style.display="none";
      st.style.display="none";
      workingstaff.style.display="none";
      classTeacher.style.display="none" ;
    
  break;
   case "teacher":
    ad.style.display="none";
    admin.style.display="none";
        ct.style.display="block";
        gd.style.display="none";
        st.style.display="none";
        grade.style.display="none";
        workingstaff.style.display="none";
        classTeacher.style.display="block";
      break;
  case "staff":
    ad.style.display="none";
    admin.style.display="none";
     st.style.display="block";
      workingstaff.style.display="block";
      ct.style.display="none";
      gd.style.display = "none";
      grade.style.display = "none";
      classTeacher.style.display = "none";

      break;
      case "admin":
          ad.style.display = "block";
          admin.style.display = "block";
          st.style.display = "none";
          workingstaff.style.display = "none";
          ct.style.display = "none";
          gd.style.display = "none";
          grade.style.display = "none";
          classTeacher.style.display = "none";
        break;
  
      }
    })
        const login = document.getElementById('login-form');
      if(login){
      login.addEventListener('submit',(event)=>{
       event.preventDefault();
       const selectedValue=roles.value;
          let status = "";
       switch(selectedValue){
         case "student":
           status=grade.value;
           break;
           case "teacher":
             status=classTeacher.value;
             break;
           case "staff":
             status=workingstaff.value;
         break;
       case "admin":
         status=admin.value;
     break;
       }
     const username=document.getElementById('username').value;
     const phone=document.getElementById('number').value;
     const email=document.getElementById('email').value;
     const password=document.getElementById('password').value;
     if(!/\d{10}/.test(phone)){
         const error=document.getElementById('main-login-error');
         const ee=document.querySelector('.error-phone');
       login.insertBefore(error,ee);
       if(error){
           error.style.display = "flex";
           error.textContent = "Invalid Phone Number!!!";
         setTimeout(() => {
           error.style.display="none"
         }, 2000);
         error.style.color='red';
     }
     return;
     }
     if(password.length<7||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[\d]/.test(password)||!/[!@#%^&*()+=|\{\};:'<.>?/`]/.test(password)){
       const error=document.getElementById('main-login-error');
       const ee=document.querySelector('.error-pass');
     login.insertBefore(error,ee);
     if(error){
         error.style.display = "flex";
       error.textContent="Password must be 7 chars, contain uppercase,lowercase,digit, and special char!!!"
       setTimeout(() => {
         error.style.display="none"
       }, 3000);
       error.style.color='red';
     }
     return;
     }
     if(roles&& username&& phone&&email&& password){
       const users=JSON.parse(localStorage.getItem("userdetails"))||[];
       const logger=JSON.parse(localStorage.getItem("activityLog"))||[];
         const obj = {
             roles: selectedValue,
             sts: status,
             username: username,
             phone: phone,
             email: email,
             password: password
         };
       const date=`${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
     const time=`${new Date().getHours().toString().padStart(2,"0")}:${new Date().getMinutes().toString().padStart(2,"0")}`;
         const log = {
             date: date,
             description: `${username} updated details`,
             roles: selectedValue,
             time: time,
             username: username
         };
     if(users){users[index]=obj;}
     if(logger){logger.push(log);}
     localStorage.setItem("userdetails",JSON.stringify(users));
     localStorage.setItem("activityLog",JSON.stringify(logger));
         container.style.display = "none";
     showAllUsers();
      }});
     }
    }
      })
    }) 
    const deleteButton=databaseUsers.querySelectorAll('.deleteButton');
    deleteButton.forEach(button=>{
      button.addEventListener('click',(event)=>{
        const index=event.target.dataset.index;
          const del = confirm("Delete User?");
        if(del){
          users.splice(index,1);
       }
        localStorage.setItem("userdetails",JSON.stringify(users));
        showAllUsers()
      })
    })
  }
}  
const userRoles= users.map(values=>{
     return values.roles
   });
   const divUser=document.querySelector('.card');
   if(divUser){
    divUser.innerHTML=
    `	<div class="card-card ">ActiveUsers</div>
    <div class="card-card ">Students</div>
    <div class="card-card ">Staff</div>
    <div class="card-card">Teachers</div>`;
    const  child=divUser.children;
    const admin=userRoles.filter(role=>{
      return role==='admin'||0;
    });
  const student=userRoles.filter(role=>{
    return role==='student'||0;
  });
  const teacher=userRoles.filter(role=>{
    return role==='teacher'||0;
  });
  const staff=userRoles.filter(role=>{
    return role==='staff'||0;
  });
  child[0].innerHTML="Users <br> "+Number(student.length +teacher.length+staff.length);
       child[0].addEventListener('click', (event) => {
           localStorage.setItem("allusers", "all");
           location.href = "attendance.html"
       });
  child[1].innerHTML="Students <br> "+Number(student.length);
       child[1].addEventListener('click', (event) => {
           localStorage.setItem("allusers", "student");
           location.href = "attendance.html"
       });
  child[2].innerHTML="Teachers <br> "+Number(teacher.length);
       child[2].addEventListener('click', (event) => {
           localStorage.setItem("allusers", "teacher");
           location.href = "attendance.html"
       });
   child[3].innerHTML="Staff<br>" +Number(staff.length);
   child[3].addEventListener('click',(event)=>{
    localStorage.setItem("allusers","staff");
    location.href="attendance.html"
   })

}
}
function gradeDataInsight(){
  const gradedata= document.querySelector('.aside-grade');
  let inner="";
  const active=JSON.parse(localStorage.getItem("activeUser"));  
  if(active){
  if(gradedata){
      inner = `
    <ul class="aside-content">
      <h3>Grades</h3>`;
      grade.forEach(grades=>{ 
        inner+=`
        <li><a href="#learner" data-grade="${grades}">${grades}</a></li>`
      })
      inner += `
      </ul>`;
      gradedata.innerHTML=inner;
      const grades= document.querySelectorAll('.aside-grade li a');
      grades.forEach(gd=>{
          gd.addEventListener('click',(event)=>{
            const detail=event.target.dataset.grade;
            console.log(detail);  
           showStudentList(detail);
           const  menu=document.querySelector('#menu-toggle');
        const aside=document.querySelector('aside');
        const cointainer=document.querySelector('.grade-data');
        if(menu && aside){
            aside.classList.toggle('active');
          menu.classList.toggle('open')
        }
        if(cointainer){
          cointainer.scrollIntoView({behavior:'smooth',block:'start'})
        }
          })
      })

  }}
}
function showStudentList(detail){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];  
  const active=JSON.parse(localStorage.getItem("activeUser"));  
  const student=users.filter(learner=>learner.roles==="student" &&learner.sts===detail);
  console.log(student);
  
  const values=student.some(learner=>learner.sts===detail);
  console.log(values);
  
  const gradedata=document.querySelector(".grade-data");
    let inner = "";
  if(gradedata){  
    if(active) {
  if(values){
        if(student.length===0){
            inner = `
      <div class="dashboard-grid">
      <h1>Student List</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>phone</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>`;
  gradedata.innerHTML=inner;
      const caption=databaseUsers.querySelector("h1");
      if(caption){
        caption.textContent=`No ${detail} data available` }
    }else{
      inner=`
      <div class="dashboard-grid">
       <h1>${detail}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>phone</th>
        <th>Email</th>
       
      </tr>
      </thead>
      <tbody>`;
     student.forEach((person)=> {
        inner+=
        `<tr> 
          <td>${person.username}</td>
          <td>${person.phone}</td>
          <td>${person.email}</td>
          </tr> `;
      });
            inner += `
    </tbody>
  </table>
  </div>`;
    gradedata.innerHTML="";
   gradedata.innerHTML=inner;
  
    }
  }else{
      inner = `
      <div class="dashboard-grid">
      <h1>${detail}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>phone</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>`;
      gradedata.innerHTML="";
      gradedata.innerHTML=inner;

  }
}else{
  gradedata.innerHTML=`<p>Please login to View your learner details</p><p style="color:green;">Page Redirecting to login page in 3 seconds</p> `
  setInterval(()=>{

    location.href='login.html'
  },2000)
}
}
}

function download(){
  const download= document.querySelector('.aside-grade-downloads');
  let inner;
  if(download){
      inner = `
      <ul class="aside-content">
        <h3>Download Materials</h3>`;
      Object.keys(downloadable).forEach(downloades => {
          inner += `
          <li><a href="#download" data-download="${downloades}">${downloades}</a></li>`
      });
      inner += `
        </ul>`;
      download.innerHTML=inner;
      
        const grades= document.querySelectorAll('.aside-grade-downloads li a');
        grades.forEach(gd=>{
            gd.addEventListener('click',(event)=>{
              const detail=event.target.dataset.download;
              console.log(detail);
             showDownloadData(detail);
             const  menu=document.querySelector('#menu-toggle');
          const aside=document.querySelector('aside');
          const cointainer=document.querySelector('.grade-download');
          if(menu && aside){
              aside.classList.toggle('active');
            menu.classList.toggle('open')
          }
          if(cointainer){
            cointainer.scrollIntoView({behavior:'smooth',block:'start'})
          }
            })
        })
  
    
  }
}
function showDownloadData(detail){
const value=Object.keys(downloadable).includes(detail);
  const downloadContent=downloadable[detail];
 downloadable.Agriculture
    let inner = "";
  const dArea=document.querySelector(".grade-download");
  if(dArea){
  if(value){
     
      downloadContent.forEach(subject => {
          inner += `
         <div class="download-item">
       <span class="download-icon">${subject.icon}</span>
       <div class="download-info">
       <h4>${subject.title}</h4>
       <p>Type:${subject.type}</p>
       </div>
       <a href="images/${subject.file}" download="" >Download</a>
         </div>
         `
      });
   
    dArea.innerHTML=inner;
  }else{
    dArea.innerHTML=inner;
  }
}
  
}
function academicSetUp(roles){
  const assignments= document.querySelector('.aside-assignments');
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
  const teachers=JSON.parse(localStorage.getItem("activeUser"));
  const activeUSer=JSON.parse(localStorage.getItem("activeUser"));
    const arrayTimetable = ["pp1", "pp2", "grade1", "grade2", "grade3", "grade4", "grade5", "grade6", "grade7", "grade8", "grade9"
    ];
let inner;
    const arrayAssessmnts = ["pp1 Assessment", "pp2 Assessment", "grade1 Assessment", "grade2 Assessment",
        "grade3 Assessment", "grade4 Assessment", "grade5 Assessment", "grade6 Assessment", "grade7 Assessment", "grade8 Assessment", "grade9 Assessment"
    ];
if(assignments){
if( roles==="admin"){
    inner = `
    <ul class="aside-content">
      <h3>Subjects</h3>`;
      arraySubjects.forEach(subject => {
        inner+=
       `<li><a href="#subjects"data-detail="${subject}">${subject}</a></li>`;
      });
      const teacher=users.filter(teacher=>teacher.roles==='teacher');
      inner+=`
     <h3 class="teacherData">${teacher.length===0?"No teacher data Found":"Teachers"}</h3>`;
    teacher.forEach(teachers => {
        inner +=
            `<li><a href="#teacher" data-detail="${teachers.sts}">${teachers.username}</a></li>`;
    });
    inner+=`
      <h3>Timetable</h3>`;
      arrayTimetable.forEach(timetable => {
        inner+=
         `<li><a href="#timetable" data-detail="${timetable}">${timetable}</a></li>`;
      });
      inner+=`
      <h3>Assessments</h3>`;
      arrayAssessmnts.forEach(assessment => {
        inner+=
       `<li><a href="#assessments"data-detail="${assessment}">${assessment}</a></li>`;
      });
    inner += `</ul>`;
    assignments.innerHTML=inner;
   const subjects= document.querySelectorAll(".aside-assignments li a");
   if(subjects){
    subjects.forEach(tab=>{
      tab.addEventListener("click",(event)=>{
        event.preventDefault();
        const detail=event.target.dataset.detail;
        const value=tab.getAttribute("href");
        updateContent(value,detail);
        console.log(detail);
        const  menu=document.querySelector('#menu-toggle');
        const aside=document.querySelector('aside');
        const cointainer=document.querySelector('.quick-move');
        if(menu && aside){
            aside.classList.toggle('active');
          menu.classList.toggle('open')
        }
        if(cointainer){
          cointainer.scrollIntoView({behavior:'smooth',block:'start'})
        }
      });
    }); 
   }
 } else if (roles==="teacher") {
    inner = `
      <ul class="aside-content">
        <h3>Subjects</h3>`;
        arraySubjects.forEach(subject => {
          inner+=
         `<li><a href="#subjects"data-detail="${subject}">${subject}</a></li>`;
        });
        const teacher=users.filter(teacher=>teacher.roles==='teacher');
        inner+=`
       <h3 class="teacherData">${teacher.length===0?"No teacher data Found":"Teachers"}</h3>`;
    teacher.forEach(teachers => {
        // console.log(teachers.sts.substring(""))
        inner +=
            `<li><a href="#teacher" data-detail="${teachers.sts}">${teachers.username}</a></li>`;
    });
      inner+=`
        <h3>Timetable</h3>`;
        arrayTimetable.forEach(timetable => {
          inner+=
           `<li><a href="#timetable" data-detail="${timetable}">${timetable}</a></li>`;
        });
        inner+=`
        <h3>Assessments</h3>`;
        arrayAssessmnts.forEach(assessment => {
          inner+=
         `<li><a href="#assessments"data-detail="${assessment}">${assessment}</a></li>`;
        });
    inner += `</ul>`;
    assignments.innerHTML = "";
      assignments.innerHTML=inner;
     const subjects= document.querySelectorAll(".aside-assignments li a");
     if(subjects){
      subjects.forEach(tab=>{
        tab.addEventListener("click",(event)=>{
          event.preventDefault();
          const detail=event.target.dataset.detail;
          const value=tab.getAttribute("href");
          updateContent(value,detail);
          const  menu=document.querySelector('#menu-toggle');
          const aside=document.querySelector('aside');
          const cointainer=document.querySelector('.quick-move');
          if(menu && aside){
              aside.classList.toggle('active');
            menu.classList.toggle('open')
          }
          if(cointainer){
            cointainer.scrollIntoView({behavior:'smooth',block:'start'})
          }
        });
      });  
    }

  }else if (roles=== "student"){
    inner = `
          <ul class="aside-content">
            <h3>Subjects</h3>`;
            arraySubjects.forEach(subject => {
              inner+=
             `<li><a href="#subjects"data-detail="${subject}">${subject}</a></li>`;
            });
          inner+=`
            <h3>Timetable</h3>`;
              inner+=
               `<li><a href="#timetable" data-detail="${activeUSer.sts}">${activeUSer.sts}</a></li>`;
            inner+=`
            <h3>Assessments</h3>`;
            arrayAssessmnts.forEach(assessment => {
              inner+=
             `<li><a href="#assessments"data-detail="${assessment}">${assessment}</a></li>`;
            });
            inner+=`</ul>`;
    assignments.innerHTML = "";
          assignments.innerHTML=inner;
         const subjects= document.querySelectorAll(".aside-assignments li a");
         if(subjects){
          subjects.forEach(tab=>{
            tab.addEventListener("click",(event)=>{
              event.preventDefault();
              const detail=event.target.dataset.detail;
              const value=tab.getAttribute("href");
              updateContent(value,detail);
              const  menu=document.querySelector('#menu-toggle');
              const aside=document.querySelector('aside');
              const cointainer=document.querySelector('.quick-move');
              if(menu && aside){
                  aside.classList.toggle('active');
                menu.classList.toggle('open')
              }
              if(cointainer){
                cointainer.scrollIntoView({behavior:'smooth',block:'start'})
              }
            });
          }); 
         }
   } else if( roles==="staff"){
    inner = `
            <ul class="aside-content">
              <h3>Subjects</h3>`;
              arraySubjects.forEach(subject => {
                inner+=
               `<li><a href="#subjects"data-detail="${subject}">${subject}</a></li>`;
              });
              const teacher=users.filter(teacher=>teacher.roles==='teacher');
              inner+=`
             <h3 class="teacherData">${teacher.length===0?"No teacher data Found":"Teachers"}</h3>`;
    teacher.forEach(teachers => {
        inner +=
            `<li><a href="#teacher" data-detail="${teachers.sts}">${teachers.username}</a></li>`;
    });
            inner+=`
              <h3>Timetable</h3>`;
              arrayTimetable.forEach(timetable => {
                inner+=
                 `<li><a href="#timetable" data-detail="${timetable}">${timetable}</a></li>`;
              });
              inner+=`
              <h3>Assessments</h3>`;
              arrayAssessmnts.forEach(assessment => {
                inner+=
               `<li><a href="#assessments"data-detail="${assessment}">${assessment}</a></li>`;
              });
    inner += `</ul>`;
    assignments.innerHTML = "";
            assignments.innerHTML=inner;
           const subjects= document.querySelectorAll(".aside-assignments li a");
           if(subjects){
            subjects.forEach(tab=>{
              tab.addEventListener("click",(event)=>{
                event.preventDefault();
                const detail=event.target.dataset.detail;
                const value=tab.getAttribute("href");
                updateContent(value,detail);
                console.log(detail);
                const  menu=document.querySelector('#menu-toggle');
                const aside=document.querySelector('aside');
                const cointainer=document.querySelector('.quick-move');
                if(menu && aside){
                    aside.classList.toggle('active');
                  menu.classList.toggle('open')
                }
                if(cointainer){
                  cointainer.scrollIntoView({behavior:'smooth',block:'start'})
                }
              });
            }); 
           }  
        } else if(roles==="guest"){
    inner = `
              <ul class="aside-content">
                <h3>Subjects</h3>`;
                arraySubjects.forEach(subject => {
                  inner+=
                 `<li><a href="#subjects" data-detail="${subject}">${subject}</a></li>`;
                });
                inner+=`</ul>`
                assignments.innerHTML=""
              assignments.innerHTML=inner;
             const subjects= document.querySelectorAll(".aside-assignments li a");
             if(subjects){
              subjects.forEach(tab=>{
                tab.addEventListener("click",(event)=>{
                  event.preventDefault();
                  const detail=event.target.dataset.detail;
                  const value=tab.getAttribute("href");
                  updateContent(value,detail);
                  console.log(detail);
                  const  menu=document.querySelector('#menu-toggle');
                  const aside=document.querySelector('aside');
                  const cointainer=document.querySelector('.quick-move');
                  if(menu && aside){
                    aside.classList.toggle('active');
                    menu.classList.toggle('open')
                  }
                  if(cointainer){
                    cointainer.scrollIntoView({behavior:'smooth',block:'start'})
                  }
                });
              }); 
             }
    }    
  }
}
function updateContent(value,details){
 const cointainer=document.querySelector('.quick-move');
 if(cointainer){
  switch (value) {
    case '#subjects':
      showUpdateSubjectContent(details);
      break;
      case '#teacher':
        showUpdateTeachersContent(details,);
        break;
        case '#timetable':
          showUpdateTimetableContent(details);
          break;
      case '#assessments':
        showUpdateAsessmentContent(details);
      break;
  }
 }

  function showUpdateSubjectContent(detail){
    const users=JSON.parse(localStorage.getItem("userdetails"))||[];
  const teacher=users.filter(teacher=>teacher.roles==='teacher');
  const active=JSON.parse(localStorage.getItem("activeUser"))
  const values=arraySubjects.includes(detail);
  const subjectAssigned=JSON.parse( localStorage.getItem("subjectAssigned"))||[];
  const sA= subjectAssigned.filter(teach=>teach.subject ===detail)
   const teacherUsername= sA.map(teach=>teach.username)
  let inner="";
  const roles=JSON.parse(localStorage.getItem("activeUser"));
 if (values){
  if(roles){
  if(roles.roles==="admin"){

 inner=`
 <div class="dashboard-grid">
  <h1>Details of ${detail}</h1>
 <table>
 <thead>
 <tr>
 <th>Subject</th>
 <th>Teachers</th>
  <th>Action</th>
  </tr>
  </thead>
  <tbody>`;
 if(teacher.length===0){
   inner+=`
   <tr> 
 <td>${detail}</td>
<td>${"Unasssigned"}</td>
<td><button class="editButton assign">Assign</button></td>
</tr>`;
 }else{
      teacher.forEach((subject,index)=>{
        const isAssigned=teacherUsername.includes(subject.username);
        inner+=`
         <tr> 
       <td>${detail}</td>
     <td>${subject.username}</td>`;
          inner+=`<td>${!isAssigned?`<button class="editButton assign" data-username="${subject.username}">Assign</button>`
          :`<button class="deleteButton" data-username="${subject.username}">Delete</button>`}</td>
          </tr>`; 
    
 });
}
inner+=`
</tbody>
</table>
</div>`
cointainer.innerHTML=inner;
const assigned=document.querySelector('.assign');
if(assigned && roles==='admin'){
assigned.addEventListener("click",(event)=>{
location.href='login.html';
showRegistration();
})}
const edit=document.querySelectorAll(".editButton");
edit.forEach(butt=>{
  butt.addEventListener('click',(event)=>{
    const username=event.target.dataset.username;
const find=subjectAssigned.some(teach=>teach.username===username&&teach.subject===detail);
if(!find){
subjectAssigned.push({   username:username,subject:detail})
}
localStorage.setItem("subjectAssigned",JSON.stringify(subjectAssigned));
showUpdateSubjectContent(detail)
  })
})
const deletes=document.querySelectorAll(".deleteButton");
deletes.forEach(butt=>{
  butt.addEventListener('click',(event)=>{
    const username=event.target.dataset.username;
const find=subjectAssigned.findIndex(teach=>teach.username===username&&teach.subject===detail);
subjectAssigned.splice(find,1)
localStorage.setItem("subjectAssigned",JSON.stringify(subjectAssigned));
showUpdateSubjectContent(detail)
  })
})
}else if(roles.roles==='teacher'){
  inner=`
  <div class="dashboard-grid">
   <h1>Details of ${detail}</h1>
  <table>
  <thead>
  <tr>
  <th>Subject</th>
  <th>Teachers</th>
   <th>Action</th>
   </tr>
   </thead>
   <tbody>`;
  if(teacher.length===0){
    inner+=`
    <tr> 
  <td>${detail}</td>
 <td>${"Unasssigned"}</td>
 <td>View Only</td>
 </tr>`;
  }else{
      const isAssigned=teacherUsername.includes(active.username);
          inner+=`
          <tr> 
        <td>${detail}</td>
      <td>${isAssigned?active.username:"Not assigned"}</td>`;
           inner+=` <td><button class="editButton">ViewTimetable</button></td>
           </tr>`; 
 }
 inner+=`
 </tbody>
 </table>
 </div>`;
 cointainer.innerHTML=inner;
const edit=document.querySelector(".editButton");
if(edit){
  edit.addEventListener('click',(event)=>{
    const split =active.sts.split(" ")
    showUpdateTimetableContent(split[1])
  })
}

}else{
  inner=`
 <div class="dashboard-grid">
  <h1>Details of ${detail}</h1>
 <table>
 <thead>
 <tr>
 <th>Subject</th>
 <th>Teachers</th>
  <th>Action</th>
  </tr>
  </thead>
  <tbody>`;
 if(teacher.length===0){
   inner+=`
   <tr> 
 <td>${detail}</td>
<td>${"Unasssigned"}</td>
<td>${"View Only"}</td>
</tr>`;
 }else{

       teacher.forEach((subject,index)=>{
          const isAssigned=teacherUsername.includes(subject.username);
         inner+=`
         <tr> 
       <td>${detail}</td>
     <td>${subject.username}</td>`;
          inner+=`<td>${isAssigned?"Assigned":"Not assigned"}</td>
          </tr>`; 
    
 });
}
inner+=`
</tbody>
</table>
</div>`;
cointainer.innerHTML=inner;
}
  }else{
    inner=`
 <div class="dashboard-grid">
  <h1>Detail of ${detail}</h1>
 <table>
 <thead>
 <tr>
 <th>Subject</th>
 <th>Teachers</th>
  <th>Action</th>
  </tr>
  </thead>
  <tbody>`;
 if(teacher.length===0){
   inner+=`
   <tr> 
 <td>${detail}</td>
<td>${"Unasssigned"}</td>
<td>${"View Only"}</td>
</tr>`;
 }else{
       teacher.forEach((subject,index)=>{
         inner+=`
         <tr> 
       <td>${detail}</td>
     <td>${subject.username}</td>`;
          inner+=`<td>View Only</td>
          </tr>`; 
    
 });
}
inner+=`
</tbody>
</table>
</div>`;
cointainer.innerHTML=inner;
  }
    }else{
       inner=` <div class="dashboard-grid">
        <h1>Detail of ${value}</h1>
        <table>
        <thead>
        <tr>
          <th>Subject</th>
          <th>Teachers</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        </div>`;
        cointainer.innerHTML=inner;
    }
 }
 function showUpdateTimetableContent(detail){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
const teacher=users.filter(teacher=>teacher.roles==='teacher');
const student =users.filter(student=>student.roles==='student');
 const subjectAssigned=JSON.parse( localStorage.getItem("subjectAssigned"))||[];
  const sA= subjectAssigned.filter(teach=>arraySubjects.includes(teach.subject))
  console.log(sA);
  
  //  const teacherUsername= sA.map(teach=>teach.username)
  
const obj=Object.keys(timetableDraf);
const values=obj.includes(detail);
const specificGRade=timetableDraf[detail];
 const breaks="BREAK"
 const lunch="LUNCH"
 const games="GAMES"
 const brea=breaks.split("")
 const lunc=lunch.split("")
 const gam=games.split("")
 let index=0;
let inner="";
// const grade4=timetableDraf.grade4;
switch (values){
  case true:
    inner=`
    <div class="dashboard-grid">
     <h1>Timetable of ${detail}</h1>
    <table>
    <thead>
    <tr>
    <th>Day</th>
    <th>Grade</th>
    <th>8:00<br>8:40</th>
    <th>8:40<br>9:20</th>
    <th>9:20<br>9:40</th>
    <th>9:40<br>10:20</th>
    <th>10:20<br>11:00</th>
    <th>11:00<br>12:30</th>
    <th>11:30<br>12:10</th>
    <th>12:10<br>12:50</th>
    <th>12:50<br>2:00</th>
    <th>2:00<br>2:40</th>
    <th>2:40<br>3:20</th>
    <th>3:20<br>4:00</th>
    </tr>
    </thead>
    <tbody>`;
   daysOfweek.forEach(data=>{
       inner += `
    <tr> 
  <td>${data}</td>
  <td>${detail}</td>`;
 const daylessons= specificGRade.filter(dat=>dat.day===data);
       const lesson1 = daylessons.find(dat => dat.time["8:00"]);
         let lessonTeacher1=subjectAssigned.find(item=>item.subject===lesson1.time["8:00"]);
       const lesson2 = daylessons.find(dat => dat.time["8:40"]);
         let lessonTeacher2=subjectAssigned.find(item=>item.subject===lesson2.time["8:40"]);
       const lesson3 = daylessons.find(dat => dat.time["9:40"]);
         let lessonTeacher3=subjectAssigned.find(item=>item.subject===lesson3.time["9:40"]);
       const lesson4 = daylessons.find(dat => dat.time["10:20"]);
         let lessonTeacher4=subjectAssigned.find(item=>item.subject===lesson4.time["10:20"]);
       const lesson5 = daylessons.find(dat => dat.time["11:30"]);
         let lessonTeacher5=subjectAssigned.find(item=>item.subject===lesson5.time["11:30"]);
       const lesson6 = daylessons.find(dat => dat.time["12:10"]);
         let lessonTeacher6=subjectAssigned.find(item=>item.subject===lesson6.time["12:10"]);
       const lesson7 = daylessons.find(dat => dat.time["2:00"]);
         let lessonTeacher7=subjectAssigned.find(item=>item.subject===lesson7.time["2:00"]);
       const lesson8 = daylessons.find(dat => dat.time["2:40"]);
          let lessonTeacher8=subjectAssigned.find(item=>item.subject===lesson8.time["2:40"]);
 
     inner+=`
   <td>${lesson1.time["8:00"]+`<br>${lessonTeacher1?lessonTeacher1.username:""}`}</td>
   <td>${lesson2.time["8:40"]+`<br>${lessonTeacher2?lessonTeacher2.username:""}`}</td>`

   inner+=`
   <td>${brea[index]}</td>
   <td>${lesson3.time["9:40"]+`<br>${lessonTeacher3?lessonTeacher3.username:""}`}</td>
   <td>${lesson4.time["10:20"]+`<br>${lessonTeacher4?lessonTeacher4.username:""}`}</td>
     <td>${brea[index]}</td>
   <td>${lesson5.time["11:30"]+`<br>${lessonTeacher5?lessonTeacher5.username:""}`}</td>
   <td>${lesson6.time["12:10"]+`<br>${lessonTeacher6?lessonTeacher6.username:""}`}</td>
     <td>${lunc[index]}</td>
   <td>${lesson7.time["2:00"]+`<br>${lessonTeacher7?lessonTeacher7.username:""}`}</td>
   <td>${lesson8.time["2:40"]+`<br>${lessonTeacher8?lessonTeacher8.username:""}`}</td> 
    <td>${gam[index]}</td>`;
   inner+=`
   </tr>`;
     index++;
});
      inner += `
  </tbody>
</table>
</div>;`;

cointainer.innerHTML=inner;
    break;
    case false:
        inner = ` <div class="dashboard-grid">
      <h1>Timetable of  ${value}</h1>
      <table>
      <thead>
      <tr>
      <th>Time<br>Day</th>
      <th>Grade<br>Day</th>
      <th>8:00<br>8:40</th>
      <th>8:40<br>9:20</th>
      <th>9:20<br>9:40</th>
      <th>9:40<br>10:20</th>
      <th>10:20<br>11:00</th>
      <th>11:30<br>12:10</th>
      <th>12:10<br>12:50</th>
      <th>2:00<br>2:40</th>
      <th>2:40<br>3:20</th>
      <th>3:20<br>4:00</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>;`;
      cointainer.innerHTML=inner;
      break;
} 
}
function showUpdateTeachersContent(detail){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
const teacher=users.filter(teacher=>teacher.sts===detail);
const values=teacher.some(sts=>sts.sts===detail);
const username=teacher.find(teach=>teach.sts===details);
const active=JSON.parse(localStorage.getItem("activeUser"));
 const subjectAssigned=JSON.parse( localStorage.getItem("subjectAssigned"))||[];
  const sA= subjectAssigned.filter(teach=>teach.username===username.username)
   const teacherSubject= sA.map(teach=>teach.subject)
       const subject = teacherSubject.join(",");
let inner="";
if (values){
  if(active){
  if(active.roles==="admin"){
      inner = `
    <div class="dashboard-grid">
     <h1>Subjects of  ${username.username}</h1>
    <table>
    <thead>
    <tr>
    <th>Teacher</th>
    <th>Status</th>
    <th>Subjects</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr> 
    <td>${username.username}</td>
    <td>${detail}</td> 
    <td>${subject}</td>
   <td><button class="editButton" data-index="">Edit</button><button class="deleteButton" data-index="">Delete</button></td>
  </tr>
  </tbody>
</table>
</div>;`;
cointainer.innerHTML=inner;
const edit=document.querySelector(".editButton");
const deletes=document.querySelector(".deleteButton")
edit.addEventListener('click',(event)=>{
  inner+=`
  <div class="main-fee">
 <form action="" method="" id="formremove">
 <label for="subject">Remove Subject
 <select name="subject"  id="subject">`
 teacherSubject.forEach(subject=>{
  inner+=` 
   <option value="${subject}">${subject}</option> `
 })
 inner+=`
 </select>
 </label>
 <br>
 <input type="submit" value="Remove subject">
 `
cointainer.innerHTML=inner
const form=document.querySelector("#formremove");
console.log(form);

if(form){
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const selected=document.getElementById("subject").value;
    const find=subjectAssigned.findIndex(item=>item.subject===selected && item.username===username.username);
    if(find)
subjectAssigned.splice(find,1);
    localStorage.setItem("subjectAssigned",JSON.stringify(subjectAssigned));
    showUpdateTeachersContent(detail)
  })
}
})
deletes.addEventListener('click',(event)=>{
  let  find=subjectAssigned.findIndex(item=>item.username===username.username);
   while(find !== -1){
    subjectAssigned.splice(find,1);
     find=subjectAssigned.findIndex(item=>item.username===username.username);
   }
    localStorage.setItem("subjectAssigned",JSON.stringify(subjectAssigned));
    showUpdateTeachersContent(detail)
})

  }else if(active.roles==="teacher"){
    inner=`
    <div class="dashboard-grid">
     <h1>Subjects of  ${username.username}</h1>
    <table>
    <thead>
    <tr>
    <th>Teacher</th>
    <th>Status</th>
    <th>Subjects</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr> 
    <td>${username.username}</td>
    <td>${detail}</td> 
    <td>${subject}</td>`;
    if(username.username===active.username){
    inner+= `
   <td><button class="editButton" >Edit</button></td>`
  }else{
    inner+=`<td>View Only</td>`;
}
inner+=`
  </tr>
  </tbody>
</table>
</div>`;
cointainer.innerHTML=inner;
const edit=document.querySelector('.editButton');
edit.addEventListener('click',(event)=>{
  inner+=`
  <div class="main-fee">
 <form action="" method="" id="formremove">
 <label for="subject">Remove Subject
 <select name="subject"  id="subject">`
 teacherSubject.forEach(subject=>{
  inner+=` 
   <option value="${subject}">${subject}</option> `
 })
 inner+=`
 </select>
 </label>
 <br>
 <input type="submit" value="Remove subject">
 `
cointainer.innerHTML=inner
const form=document.querySelector("#formremove");
console.log(form);

if(form){
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const selected=document.getElementById("subject").value;
    const find=subjectAssigned.findIndex(item=>item.subject===selected && item.username===username.username);
    if(find)
subjectAssigned.splice(find,1);
    localStorage.setItem("subjectAssigned",JSON.stringify(subjectAssigned));
    showUpdateTeachersContent(detail)
  })
}
})
  }else{
      inner = `
    <div class="dashboard-grid">
     <h1>Subjects of  ${username.username}</h1>
    <table>
    <thead>
    <tr>
    <th>Teacher</th>
    <th>Status</th>
    <th>Subjects</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr> 
    <td>${username.username}</td>
    <td>${detail}</td> 
    <td>${subject}</td>
   <td>View Only</td>
  </tr>
  </tbody>
</table>
</div>;`;
cointainer.innerHTML=inner;
  } 
}else{
      inner = `
  <div class="dashboard-grid">
   <h1>Timetable of  ${username.username}</h1>
  <table>
  <thead>
  <tr>
  <th>Teacher</th>
  <th>Status</th>
  <th>Subjects</th>
  <th>Action</th>
  </tr>
  </thead>
  <tbody>
  <tr> 
  <td>${username.username}</td>
  <td>${detail}</td> 
  <td>${subject}</td>
 <td>View Only</td>
</tr>
</tbody>
</table>
</div>;`;
cointainer.innerHTML=inner;
} 
}else{
    inner = ` <div class="dashboard-grid">
      <h1>Timetable of  ${value}</h1>
      <table>
      <thead>
      <tr>
        <th>Subject</th>
        <th>Teachers</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>;`;
      cointainer.innerHTML=inner;
} 

}

function showUpdateAsessmentContent(detail){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
const teacher=users.filter(teacher=>teacher.roles==='teacher');
const student=users.filter(student=>student.roles==='student');
    const splt = detail.split(" ");
const gradeClass=splt[0];
const findlearner=student.filter(learner=>learner.sts===gradeClass);
const values=student.some(learner=>learner.sts===gradeClass);
    const active = JSON.parse(localStorage.getItem("activeUser"));
 const as=["Mat","Eng","Kis","Sci","Sst","ca"]
  
let scores=JSON.parse(localStorage.getItem("learnerscores"))||[]
const sortedScores=[...scores].sort((a,b)=>b.Total-a.Total)
sortedScores.forEach((stude,i)=>{
const originalIndex=scores.findIndex(s=>s.username===stude.username);
scores[originalIndex].rank=i+1;
});
let currentRank=1;
for (let i = 0; i < sortedScores.length; i++) {
  if(i>0 &&sortedScores[i].Total<sortedScores[i-1].Total){
    currentRank=i+1
  }
  const originalIndex=scores.findIndex(s=>s.username===sortedScores[i].username);
  scores[originalIndex].rank=currentRank;
  
}
if (values){
  if (active){
    if(active.roles==="admin"){
         let inner="";
    inner=`
    <div class="dashboard-grid">
     <h1>Exam for ${gradeClass}</h1>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Mat</th>
    <th>RUB</th>
    <th>Eng</th>
    <th>RUB</th>
    <th>Kis</th>
    <th>RUB</th>
    <th>Sci</th>
    <th>RUB</th>
    <th>Sst</th>
    <th>RUB</th>
    <th>C/A</th>
    <th>RUB</th>
    <th>Total</th>
    <th>RUB</th>
    <th>Rank</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>`;
    if(scores.length===0){
      scores=findlearner.map(item=>({username:item.username,
                                  Mat:0,Eng:0,Kis:0,Sci:0,Sst:0,ca:0,Total:0 ,rank:0}))
               localStorage.setItem("learnerscores",JSON.stringify(scores));                   
      inner+= `
      <tr> 
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td><button class="deletesButton" data-index="${index}">deletes</button><button class="deleteButton" data-index="${index}">Delete</button></td>
      </tr>`;
     }else{
         scores.forEach((subject,index)=>{ 
    
         inner+=
        `<td>${subject.username}</td>
      <td>${subject.Mat}</td>
      <td>${subject.Mat>=76?"EE":subject.Mat>=54?"ME":subject.Mat>=26?"AE":"BE"}</td>
      <td>${subject.Eng}</td>
      <td>${subject.Eng>=76?"EE":subject.Eng>=54?"ME":subject.Eng>=26?"AE":"BE"}</td>
      <td>${subject.Kis}</td>
      <td>${subject.Kis>=76?"EE":subject.Kis>=54?"ME":subject.Kis>=26?"AE":"BE"}</td>
      <td>${subject.Sci}</td>
      <td>${subject.Sci>=76?"EE":subject.Sci>=54?"ME":subject.Sci>=26?"AE":"BE"}</td>
      <td>${subject.Sst}</td>
      <td>${subject.Sst>=76?"EE":subject.Sst>=54?"ME":subject.Sst>=26?"AE":"BE"}</td>
      <td>${subject.ca}</td>
      <td>${subject.ca>=76?"EE":subject.ca>=54?"ME":subject.ca>=26?"AE":"BE"}</td>
      <td>${subject.Total}</td>
      <td>${subject.Total>=451?"EE":subject.Total>=301?"ME":subject.Total>=151?"AE":"BE"}</td>
      <td>${subject.rank}</td>`
            const teacherClass=active.sts.split(" ");
               const parts = teacherClass[1];
          if(gradeClass===parts){
            inner+=`
            <td><button class="editButton"data-index=${index}>Edit</button>
            <button class="deleteButton" >Delete</button></td>
            </tr>`;
          } else { 
             inner+=`
             <td>View Only</td>
             </tr>`;
        }
     });
   }
  inner+=`
  </tbody>
  </table>
  </div>`
  cointainer.innerHTML=inner;  
const edit=document.querySelectorAll(".editButton")
edit.forEach(ed=>{
ed.addEventListener('click',(event)=>{
  const index=Number(ed.dataset.index);
 inner=`
  <div class="main-fee">
  <h3>${scores[index].username}</h3>
 <form action="" method="post" id="formadd">

 <label for="score">Add Subject Marks`

 as.forEach(subject=>{
  inner+=` 
  <div class="ma">${subject}  <input type="number" name="score" id="score" data-subject="${subject}"></div>`
 })
 inner+=`
 </label>
 <input type="submit" value="Submit Marks">
 </form>
 </div>
 `
 cointainer.innerHTML=inner;
  const formadd=document.getElementById("formadd")
  formadd.addEventListener('submit',(event)=>{
      event.preventDefault()
     const marks=formadd.querySelectorAll(".ma")
  marks.forEach(mark=>{
    const input=mark.querySelector("input");
    const score=input.value;
    const sub=input.dataset.subject;
 scores[index][sub]=Number(score)
  })
const s=scores[index];
 s.Total=s.Mat+s.Eng+s.Kis+s.Sci+s.Sst+s.ca;
  localStorage.setItem("learnerscores",JSON.stringify(scores));
 showUpdateAsessmentContent(detail);
    })
})

})
const deleteButton=document.querySelectorAll(".deleteButton");
deleteButton.forEach(del=>{
 del.addEventListener('click',(event)=>{
  const index=Number(event.target.dataset.index);
  scores.splice(index,1);
  localStorage.setItem("learnerscores",JSON.stringify(scores));
 location.reload()

  })
})

  }else if(active.roles==="teacher"){
    let inner=""
    inner=`
    <div class="dashboard-grid">
    <h1>Exam for ${gradeClass}</h1>
   <table>
   <thead>
   <tr>
   <th>Name</th>
   <th>Mat</th>
   <th>RUB</th>
   <th>Eng</th>
   <th>RUB</th>
   <th>Kis</th>
   <th>RUB</th>
   <th>Sci</th>
   <th>RUB</th>
   <th>Sst</th>
   <th>RUB</th>
   <th>C/A</th>
   <th>RUB</th>
   <th>Total</th>
   <th>RUB</th>
   <th>Rank</th>
   <th>Action</th>
   </tr>
   </thead>
   <tbody>`;
    if(scores.length===0){
      scores=findlearner.map(item=>({username:item.username,
                                  Mat:0,Eng:0,Kis:0,Sci:0,Sst:0,ca:0,Total:0 ,rank:0}))
                                   localStorage.setItem("learnerscores",JSON.stringify(scores)); 
      inner+= `
      <tr> 
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>ViewOnly</td>
      </tr>`;
     }else{
   scores.forEach((subject,index)=>{ 
    
         inner+=
        `<td>${subject.username}</td>
      <td>${subject.Mat}</td>
      <td>${subject.Mat>=76?"EE":subject.Mat>=54?"ME":subject.Mat>=26?"AE":"BE"}</td>
      <td>${subject.Eng}</td>
      <td>${subject.Eng>=76?"EE":subject.Eng>=54?"ME":subject.Eng>=26?"AE":"BE"}</td>
      <td>${subject.Kis}</td>
      <td>${subject.Kis>=76?"EE":subject.Kis>=54?"ME":subject.Kis>=26?"AE":"BE"}</td>
      <td>${subject.Sci}</td>
      <td>${subject.Sci>=76?"EE":subject.Sci>=54?"ME":subject.Sci>=26?"AE":"BE"}</td>
      <td>${subject.Sst}</td>
      <td>${subject.Sst>=76?"EE":subject.Sst>=54?"ME":subject.Sst>=26?"AE":"BE"}</td>
      <td>${subject.ca}</td>
      <td>${subject.ca>=76?"EE":subject.ca>=54?"ME":subject.ca>=26?"AE":"BE"}</td>
      <td>${subject.Total}</td>
      <td>${subject.Total>=451?"EE":subject.Total>=301?"ME":subject.Total>=151?"AE":"BE"}</td>
      <td>${subject.rank}</td>`
            const teacherClass=active.sts.split(" ");
               const parts = teacherClass[1];
          if(gradeClass===parts){
            inner+=`
            <td><button class="editButton"data-index=${index}>Edit</button>
            <button class="deleteButton" data-index=${index}>Delete</button></td>
            </tr>`;
          } else { 
             inner+=`
             <td>View Only</td>
             </tr>`;
        }
     });
   }
  inner+=`
  </tbody>
  </table>
  </div>`
  cointainer.innerHTML=inner;  
const edit=document.querySelectorAll(".editButton")
edit.forEach(ed=>{
ed.addEventListener('click',(event)=>{
  const index=Number(ed.dataset.index);
 inner=`
  <div class="main-fee">
  <h3>${scores[index].username}</h3>
 <form action="" method="post" id="formadd">

 <label for="score">Add Subject Marks`

 as.forEach(subject=>{
  inner+=` 
  <div class="ma">${subject}  <input type="number" name="score" id="score" data-subject="${subject}"></div>`
 })
 inner+=`
 </label>
 <input type="submit" value="Submit Marks">
 </form>
 </div>
 `
 cointainer.innerHTML=inner;
  const formadd=document.getElementById("formadd")
  formadd.addEventListener('submit',(event)=>{
      event.preventDefault()
     const marks=formadd.querySelectorAll(".ma")
  marks.forEach(mark=>{
    const input=mark.querySelector("input");
    const score=input.value;
    const sub=input.dataset.subject;
 scores[index][sub]=Number(score)
  })
const s=scores[index];
 s.Total=s.Mat+s.Eng+s.Kis+s.Sci+s.Sst+s.ca;
  localStorage.setItem("learnerscores",JSON.stringify(scores));
 showUpdateAsessmentContent(detail);
    })
})

})
const deleteButton=document.querySelectorAll(".deleteButton");
deleteButton.forEach(del=>{
 del.addEventListener('click',(event)=>{
  const index=Number(event.target.dataset.index);
  scores.splice(index,1);
  localStorage.setItem("learnerscores",JSON.stringify(scores));
 location.reload()

  })
})
  }else{
       let inner=""
    inner=`
    <div class="dashboard-grid">
    <h1>Exam for ${gradeClass}</h1>
   <table>
   <thead>
   <tr>
   <th>Name</th>
   <th>Mat</th>
   <th>RUB</th>
   <th>Eng</th>
   <th>RUB</th>
   <th>Kis</th>
   <th>RUB</th>
   <th>Sci</th>
   <th>RUB</th>
   <th>Sst</th>
   <th>RUB</th>
   <th>C/A</th>
   <th>RUB</th>
   <th>Total</th>
   <th>RUB</th>
   <th>Rank</th>
   <th>Action</th>
   </tr>
   </thead>
   <tbody>`;
    if(scores.length===0){
      scores=findlearner.map(item=>({username:item.username,
                                  Mat:0,Eng:0,Kis:0,Sci:0,Sst:0,ca:0,Total:0 ,rank:0}))
                                   localStorage.setItem("learnerscores",JSON.stringify(scores)); 
      inner+= `
      <tr> 
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>${""}</td>
      <td>View Only</td>
      </tr>`;
     }else{
          scores.forEach((subject,index)=>{ 
         inner+=
        `<td>${subject.username}</td>
      <td>${subject.Mat}</td>
      <td>${subject.Mat>=76?"EE":subject.Mat>=54?"ME":subject.Mat>=26?"AE":"BE"}</td>
      <td>${subject.Eng}</td>
      <td>${subject.Eng>=76?"EE":subject.Eng>=54?"ME":subject.Eng>=26?"AE":"BE"}</td>
      <td>${subject.Kis}</td>
      <td>${subject.Kis>=76?"EE":subject.Kis>=54?"ME":subject.Kis>=26?"AE":"BE"}</td>
      <td>${subject.Sci}</td>
      <td>${subject.Sci>=76?"EE":subject.Sci>=54?"ME":subject.Sci>=26?"AE":"BE"}</td>
      <td>${subject.Sst}</td>
      <td>${subject.Sst>=76?"EE":subject.Sst>=54?"ME":subject.Sst>=26?"AE":"BE"}</td>
      <td>${subject.ca}</td>
      <td>${subject.ca>=76?"EE":subject.ca>=54?"ME":subject.ca>=26?"AE":"BE"}</td>
      <td>${subject.Total}</td>
      <td>${subject.Total>=451?"EE":subject.Total>=301?"ME":subject.Total>=151?"AE":"BE"}</td>
      <td>${subject.rank}</td>
       <td>View Only</td>
      </tr>`;
     });
   }
  inner+=`
  </tbody>
  </table>
  </div>`

  cointainer.innerHTML=inner;
  }}
  }else{
       let inner=""
    inner = ` <div class="dashboard-grid">
   <h1>Exam for ${gradeClass}</h1>
   <table>
   <thead>
   <tr>
   <th>Name</th>
   <th>Mat</th>
   <th>RUB</th>
   <th>Eng</th>
   <th>RUB</th>
   <th>Kis</th>
   <th>RUB</th>
   <th>Sci</th>
   <th>RUB</th>
   <th>Sst</th>
   <th>RUB</th>
   <th>C/A</th>
   <th>RUB</th>
   <th>Total</th>
   <th>RUB</th>
   <th>Rank</th>
   <th>RUB</th>
   <th>Action</th>
   </tr>
   <tbody>
   </tbody>
   </table>
   </div>`;
   cointainer.innerHTML=inner;}
  } 
}
function registerAdmin(){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
  const logger=JSON.parse(localStorage.getItem("activityLog"))||[];
if(users.length===0 && logger.length===0){
    const Admin = {
        roles: "admin",
        sts: "system",
        username: "admin",
        phone: "0123456789",
        email: "admin@gmail.com",
        password: "@Admin1"
    };
  const date=`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
  const time=`${new Date().getHours().toString().padStart(2,"0")}:${new Date().getMinutes().toString().padStart(2,"0")}`;
    const log = {
        roles: "admin",
        description: "Admin signed Up",
        username: "admin",
        date: date,
        time: time
    };
  if(users){users.push(Admin);}
 if(logger){logger.push(log);}
  localStorage.setItem("userdetails",JSON.stringify(users));
  localStorage.setItem("activityLog",JSON.stringify(logger));
}
}
registerAdmin();
function forgotPassword(){
const container=document.querySelector('.main-login');
if(container){
  container.addEventListener('click',(event)=>{
    if(event.target .classList.contains('CA')){
        container.innerHTML=`
    <h3>Update your password  here</h3>
    <hr>
    <form action="" autocomplete="on" id="update-password">
      <label for="username"class="error-username" >Username 
      <input type="text" autocomplete="on" placeholder="Eg.Brian Sinange" name="" id="username" required> 
      </label>  
      <label class="error-pass" for="password"> New Password
        <input type="password" autocomplete="on" placeholder="..........." name="" id="password" required>
        </label> 
      <input type="submit" value="Update" id="login">
     <p>Return to login Page? <a class="AR" href="#">Login</a></p>
      <p id="main-login-error"></p>
    </form>`;
     const update=document.getElementById('update-password');
  if(update){
  update.addEventListener('submit',(event)=>{
   event.preventDefault();
   if(event.target.id==='update-password'){
 const username=document.getElementById('username').value;
 const password=document.getElementById('password').value;
  const loginItem=JSON.parse(localStorage.getItem("userdetails"))||[];
  // console.log(loginItem);
  
  if(password.length<7||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[\d]/.test(password)||!/[!@#%^&*()+=|\{\};:'<.>?/`]/.test(password)){
    const error=document.getElementById('main-login-error');
    const ee=document.querySelector('.error-pass');
 update.insertBefore(error,ee);
  if(error){
      error.style.display = "flex";
    error.textContent="Not a valid Password format";
    setTimeout(() => {
      error.style.display="none"
    }, 2000);
    error.style.color='red';
  
  }
  return;
  }
  if(username && password){
  const foundUser=loginItem.find(item=>item.username===username);
  if(foundUser){
      const obj={
        roles:foundUser.roles,
  sts:foundUser.sts,
  username:foundUser.username,
  phone:foundUser.phone,
  email:foundUser.email,
  password:password};

const logger=JSON.parse(localStorage.getItem("activityLog"))||[];
console.log(typeof logger);
   
const index=loginItem.findIndex(uid=>uid.username===foundUser.username && uid.roles===foundUser.roles && uid.sts===foundUser.sts &&  uid.phone===foundUser.phone && uid.email===foundUser.email);
    if(loginItem){
      loginItem[index]=obj;
    }
      const date=`${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
     const time=`${new Date().getHours().toString().padStart(2,"0")}:${new Date().getMinutes().toString().padStart(2,"0")}`;
         const log = {
             date: date,
             description: `${foundUser.username} updated password`,
             roles: foundUser.roles,
             time: time,
             username:foundUser.username
         };
         if(logger){
          logger.push(log);
         }
         localStorage.setItem("activeUser",JSON.stringify(obj));
          localStorage.setItem("userdetails",JSON.stringify(loginItem));
     localStorage.setItem("activityLog",JSON.stringify(logger));
          showLogin()
     }else{
        const error=document.getElementById('main-login-error');
    const ee=document.querySelector('.error-username');
 update.insertBefore(error,ee);
  if(error){
      error.style.display = "flex";
    error.textContent="Username not found";
    setTimeout(() => {
      error.style.display="none"
    }, 2000);
    error.style.color='red';
  
  }

     }
      
  }
  }});
}
    
    }else if(event.target .classList.contains('AR')){
      showLogin(); }
  });
  

}
}
forgotPassword()
function fees(){
  const divfees=document.querySelector(".fees");
  const user=JSON.parse(localStorage.getItem("activeUser"));
  const active=JSON.parse(localStorage.getItem("userdetails"))||[];
  const students=active.filter(student=>student.roles==="student");
  const student=students.map((stude,index)=>({username:stude.username, index:index,roles:stude.roles,grade:stude.sts, date:"",amount:0 }));
  const arrayStudent =JSON.parse(localStorage.getItem("feesdetails"))||student;
  let inner="";

      if(divfees){
 if(user.roles==="admin") {
if (arrayStudent.length===0){
  inner=`
 <div class="dashboard-grid">
      <h1>${"No fees for students in database"}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Grade</th>
        <th>Amount</th>
        <th>OutStanding Balance</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>
`;
divfees.innerHTML=inner;
}else{
 inner=`
      <div class="dashboard-grid" id="dgtb">
       <h1>${"Fees for Students in database"}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
          <th>Grade</th>
        <th>Total fees Paid</th>
        <th>OutStanding Balance</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>`;
      arrayStudent.forEach(person=>{
        inner+=
        `<tr"> 
          <td>${person.username}</td>
          <td>${person.roles}</td>
          <td>${person.grade}</td>
          <td>${person.amount}</td>
          <td><strong>KSh ${25000-Number(person.amount)}<strong></td>
          <td><button class="editButton" data-name="${person.username}"data-index="${person.index}">Edit</button>
          <button class="deleteButton showFee" data-name="${person.username}">Details</button></td>
          </tr> `;
      });
    inner+=`
    </tbody>
  </table>
  </div>`
;
  divfees.innerHTML=inner;
 
  const showfee=divfees.querySelectorAll(".showFee");
  showfee.forEach(item=>{
    item.addEventListener('click',(event)=>{
 const name=event.target.dataset.name;
  const findLeaner=arrayStudent.find(learner=>learner.username===name);
  if(findLeaner){
    inner=`

     <div class="dashboard-grid" id="dg">
   <img src="images/backspace-fill.svg" id="backButton"></img>
   <img  src="images/printer-fill.svg" id="printButton"></img>
     <img  src="images/save.svg" id="saveButton"></img>
<table class="export">
  <tr>
    <th>Student Info</th>
    <td>${findLeaner.username} (${findLeaner.grade}) </td>
  </tr>
  <tr>
    <th>Fee Structure</th>
    <td>
      <table>
        <tr><td>Acomodation:</td><td>KSh 10,000</td></tr>
         <tr><td>Tuition:</td><td>KSh 15,000</td></tr>
        <tr><td><strong>Total:</strong></td><td><strong>KSh 25,000</strong></td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>Payment History</th>
    <td>
      <table>`
        inner+=`
        <tr><td>${findLeaner.date}</td><td>KSh ${findLeaner.amount}</td><td>Bank Transfer</td></tr>
        <tr><td><strong>Outstanding Balance:</strong></td><td><strong>KSh ${25000-Number(findLeaner.amount)}</strong></td><td></td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>Payment Options</th>
    <td>Mpesa (Till: 123456), Bank Transfer (Account: Talek School, 1234567890)</td>
  </tr>
</table>
</div>`
  divfees.innerHTML=inner;
const backButton=document.getElementById("backButton");
if(backButton){
  backButton.addEventListener("click",(event)=>{
location.reload()

  })

}
  const saveButton=document.getElementById("saveButton");
if(saveButton){
  let  table=document.querySelector(".export");
table.setAttribute("border","1")
  saveButton .addEventListener("click",(event)=>{
let  table=document.querySelector(".export");
table.setAttribute("border","1")
if(table){
let content=`<html><body>${table.outerHTML}<body><html>`;
console.log(content);

    let blob=new Blob([content],{type:"application/vnd.ms-word"});
    let link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download='table.doc'
    link.click()
    location.reload()
  }})}
const printButton=document.getElementById("printButton");
if(printButton){
  printButton.addEventListener("click",(event)=>{
  window.print()
  })

}
}
  
    })
  })
  const deletes=divfees.querySelectorAll(".deletesButton");
  deletes.forEach(item=>{
    item.addEventListener('click',(event)=>{
        const name=event.target.dataset.name;
        const findLeaner=arrayStudent.find(learner=>learner.username===name);
      const index=event.target.dataset.index;
  inner=`
  <div class="main-fee" id="divfee">
     <img src="images/backspace-fill.svg" id="backButton"></img>
<form action="" method="post" autocomplete="on" id="formfee">
    <h3>Update Fee</h3>
    <hr>
     <label for="name">LearnersName
        <input type="text"  placeholder="name" id="name" value="${findLeaner.username}" readonly required>
    </label>
   <label for="date">Date
        <input type="date" id="date"placeholder="date" name="date" required>
    </label>
    <label for="amount">Amount
        <input type="number" id="amount"placeholder="amount" name="amount" required>
    </label>
    
    <input type="submit" value="Update">
</form>
</div>`
divfees.innerHTML=inner;
const backButton=document.getElementById("backButton");
if(backButton){
  backButton.addEventListener("click",(event)=>{
location.reload()

  })

}
     const form=document.getElementById("formfee");
       if(form){
  form .addEventListener('submit',(event)=>{
    event.preventDefault();
     const nam=document.getElementById("name").value;
 const date=document.getElementById("date").value;
 const amount=document.getElementById("amount").value;
    if(date && amount){
      const obj={
        username:nam,
        index:findLeaner.index,
        roles:findLeaner.roles,
        grade:findLeaner.grade,
        date:date,
        amount:amount
      }

     arrayStudent[index]=obj;
    localStorage.setItem("feesdetails",JSON.stringify(arrayStudent)); 
    location.reload() 
     }
  })
   
  }

    })
  })

}

}else if(user.roles==="student"){
    const findLeaner=arrayStudent.find(learner=>learner.username===user.username);
  inner=`
     <div class="dashboard-grid" id="dg">
     <img  src="images/printer-fill.svg" id="printButton"></img>
<table>
  <tr>
    <th>Student Info</th>
    <td>${findLeaner.username} (${findLeaner.grade}) </td>
  </tr>
  <tr>
    <th>Fee Structure</th>
    <td>
      <table>
        <tr><td>Acomodation:</td><td>KSh 10,000</td></tr>
         <tr><td>Tuition:</td><td>KSh 15,000</td></tr>
        <tr><td><strong>Total:</strong></td><td><strong>KSh 25,000</strong></td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>Payment History</th>
    <td>
      <table>
        <tr><th>Date</th><th>Amount</th><th>Method</th></tr>`;
        inner+=`
        <tr><td>${findLeaner.date}</td><td>KSh ${findLeaner.amount}</td><td>Bank Transfer</td></tr>
        <tr><td><strong>Outstanding Balance:</strong></td><td><strong>KSh ${25000-Number(findLeaner.amount)}</strong></td><td></td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>Payment Options</th>
    <td>Mpesa (Till: 123456), Bank Transfer (Account: Talek School, 1234567890)</td>
  </tr>
</table>
</div>`
  divfees.innerHTML=inner;
  const printButton=document.getElementById("printButton");
if(printButton){
  printButton.addEventListener("click",(event)=>{
  window.print()
  })

}
  }
}
}
function HomeWork(){
  const home=document.querySelector(".homework");
  const aside=document.querySelector(".aside-homework");
  const active=JSON.parse(localStorage.getItem("activeUser"));
const assignment=JSON.parse(localStorage.getItem("assignments"))||[];
  let inner="";
  if(active){
  if(active.roles==='teacher'){
 if(aside){
    inner=`<ul class="aside-content">
      <h3> Give Assignments</h3>`;
         grade.forEach(grad=>{
           inner+=
       `<h3>${grad}</h3>`;
    arraySubjects.forEach((subject,index) => { 
        inner+=
       `<li><a href="#${grad}"data-index="${index}" data-detail="${subject}">${subject}</a></li>`;
      });
      })
      
    aside.innerHTML=inner;
     const asubject=document.querySelectorAll(".aside-homework li a");
    if(asubject){
      asubject.forEach(subj=>{
        subj.addEventListener('click',(event)=>{
          const value=event.target.getAttribute('href');
              const detail=event.target.dataset.detail;
                const index=event.target.dataset.index;
              getAsssignments(value,detail,index);
               const  menu=document.querySelector('#menu-toggle');
          const aside=document.querySelector('aside');
    
          if(menu && aside){
              aside.classList.toggle('active');
               menu.classList.toggle('open')
          }
          if(home){
            home.scrollIntoView({behavior:'smooth',block:'start'})
          }
          
        })
      })
      
    }
  
  }
   if(home){
  inner=`
   <div id="questionList"></div>
<div class="main-fee">
 <form action="" method="" id="form-question">
 <select name="subject"  id="subject">`
 arraySubjects.forEach(subject=>{
  inner+=` 
   <option value="${subject}">${subject}</option> `
 })
inner+=`     
 </select>
</label>
<label for="question">Question
    <input type="text" id="question" name="question" required>
</label>
<label for="answer">Answer
    <input type="text" id="answer" name="answer" required>
</label>
 <input type="submit" value="Send Question">
 </form>
 
  </div>`
home.innerHTML=inner
const  fquestion=document.getElementById('form-question');
if(fquestion){
  fquestion.addEventListener('submit',(event)=>{
    event.preventDefault()
    const  subject=document.getElementById('subject').value;
const  question=document.getElementById('question').value;
const  answer=document.getElementById('answer').value;
if(subject&& question && answer){
const obj={
  subject:subject,
  question :question,
  answer:answer
}
let  subjec=assignment.find(item=>item.subject===subject)
if(subjec){
  subjec.question.push(obj)
}else{
  const  newobj={
    subject:subject,
    question:[obj]
  }
  assignment.push(newobj);
}
console.log(assignment);
localStorage.setItem("assignments",JSON.stringify(assignment))
fquestion.reset()
}
  })
}
   }
  }else{
    if(aside){
    inner=`<ul class="aside-content">
      <h3>Assignments</h3>
      <h3>${active.sts}</h3>`;
      arraySubjects.forEach(subject => {
        inner+=` 
       <li><a href="#subjects"data-detail="${subject}">${subject}</a></li>`;
      });
    aside.innerHTML=inner;
     const asubject=document.querySelectorAll(".aside-homework li a");
    if(asubject){
    
      asubject.forEach(subj=>{
        subj.addEventListener('click',(event)=>{
          const value=event.target.getAttribute('href');
              const detail=event.target.dataset.detail;
              giveAsssignments(value,detail);
               const  menu=document.querySelector('#menu-toggle');
          const aside=document.querySelector('aside');
    
          if(menu && aside){
              aside.classList.toggle('active');
               menu.classList.toggle('open')
          }
          if(home){
            home.scrollIntoView({behavior:'smooth',block:'start'})
          }
          
        })
      })
      
    }
  }
  }
}
}
function getAsssignments(value,detail){
  const assignment=JSON.parse(localStorage.getItem("assignments"))||[];
  const qlist=document.querySelector("#questionList");
  if(qlist){
    let inner=""
    inner+=`
  <form id="main-fee">`
       const selected=assignment.find(item=>item.subject===detail)
       if(selected){
        inner+=`  <h1>${detail}<h1>`;
    selected.question.forEach(que=>{
       inner+= ` 
  <div class="main-fee">${que.question}  <input type="text" data-answer="${que.answer}"></div>`
      })
     inner +=`
           <input type="submit" value="Submit Assignment">
    </form>`
    }else{
        inner+=`<div class="main-fee">
        ${"No questions"} </div></form>`
      }
    
   
qlist.innerHTML=inner;


  }  
 
  

}  
function giveAsssignments(value,detail){
const assignment=JSON.parse(localStorage.getItem("assignments"))||[];
const active=JSON.parse(localStorage.getItem("activeUser"));
 const home=document.querySelector(".homework");
  const scored=JSON.parse(localStorage.getItem('score'))||[];
       const selected=assignment.find(item=>item.subject===detail);    
  let inner=""

   if(home){
    inner+=`
  <form id="mainfee">`

       if(selected){
        const scor=scored.find(item=>item.subject===selected.subject)
          if(!scor){
        inner+=`
    <table>
    <tr>
     <th>Subject</th>
     <th>Name</th>
     <th>Score</th>
    </tr>
    <tr>
     <td>${detail} </td>
     <td>${active.username}  (${active.sts}) </td>
     <td> Score:<strong>${""}</strong> </td>
    </tr>
    </table>`;
    selected.question.forEach(que=>{
       inner+= ` 
  <div class="main-fee">${que.question}  <input type="text" data-answer="${que.answer}"></div>`
      })
     inner +=`
           <input type="submit" value="Submit Assignment">
    </form>`
    }else{    
  inner+=` 
    <table>
    <tr>
     <th>Subject</th>
     <th>Name</th>
     <th>Score</th>
    </tr>
    <tr>
     <td>${detail}) </td>
     <td>${active.username}  (${active.sts}) </td>
     <td> Score:<strong>${scor.score}</strong> </td>
    </tr>
    </table> `
    home.innerHTML=inner;   
    }
    }else{
        inner+=`<div class="main-fee">
        ${"No questions"} </div></form>`
      }
    
home.innerHTML=inner;
const  quizForm=home.querySelector("#mainfee");
if(quizForm){
  quizForm.addEventListener('submit',(event)=>{
event.preventDefault();
let score=0;
const question=document.querySelectorAll(".main-fee");
if(question){
  console.log(question);
  
  question.forEach(q=>{
    const input=q.querySelector('input');
    const correctAnswer=input.dataset.answer;
    console.log(correctAnswer);
    
    const  userAnswer=input.value;
    q.classList.remove('correct','wrong');

    if(userAnswer===correctAnswer){
      score++;
      q.classList.add('correct')
      input.setAttribute('disabled','disabled')
    }else{
      q.classList.add('wrong')
       input.setAttribute('disabled','disabled')
    }
  })
}
const tscore=document.querySelector(".score");
 let yourScore=`${(score/selected.question.length*100).toFixed(1)}%`;
 console.log(yourScore);
 if(tscore)tscore.textContent='You scored '+ yourScore;
const sre={
  subject:selected.subject,
  score:yourScore
}
scored.push(sre);
localStorage.setItem("score",JSON.stringify(scored))

setTimeout(() => {
  location.reload()
}, 3000);
})
 
}
  } else{

  }

 
  

} 
function staffreports(){
   const reportsDiv = document.getElementById('reports');
   if(reportsDiv){
      let inner=""
      const  active=JSON.parse(localStorage.getItem("activeUser"));
      const reports =JSON.parse(localStorage.getItem("reports"))||[];
      if(active.roles==="staff"||active.roles==='teacher'){
    reports.forEach(reports => {
       
      inner+=`
          <div class="report">
            <h2>${reports.title}</h2>
            <p>${reports.message}</p>
             <button class="deleteButton"  data-announce="${reports.id}">Delete</button>
          </div>`;
       
    });      
  inner+=`
<div class="main-fee">
 <form action="" method="" id="form-report">
<label for="title">Title
    <input type="text" id="title" name="title" required>
</label>
<textarea id="feedback"  name="feedback" placeholder="Make a report?"></textarea>
 <input type="submit" value="Send report">

 </form>
  </div>`
   reportsDiv.innerHTML=inner;
   const  form=document.getElementById('form-report');

   if(form){
   form.addEventListener('submit',event=>{
event.preventDefault();
const title=document.getElementById('title').value;
   const message=document.getElementById('feedback').value;
   if(title && message) {
    const obj={
      id:Date.now(),
  title:title,
  message:message,
 }

reports.push(obj)
localStorage.setItem("reports",JSON.stringify(reports));
   location.reload();
   }
   })   
  }
   const  button=document.querySelectorAll(".deleteButton");
       button.forEach(butt=>{   
            butt.addEventListener('click',(event)=>{
              console.log("cliked");
              const id=Number(event.target.dataset.announce);
       const index=reports.findIndex(item=>item.index===id);
        console.log(index);     
        reports.splice(index,1);
              localStorage.setItem('reports', JSON.stringify(reports));
            
                   location.reload();
          })
          })
         }else{
           const seenreports = JSON.parse(localStorage.getItem('seenreports')) || [];
      if(reports.length>0){
           reports.forEach(report => {
       if (!seenreports.includes(report.id)) {
      inner+=`
          <div class="reports">
            <h2>${report.title}</h2>
            <p>${report.message}</p>
            <button class="dismiss"  data-announce="${report.id}">Dismiss</button>
          </div>`;
       ;
      }
    });
    reportsDiv.innerHTML=inner;
       const  button=document.querySelectorAll(".dismiss");
          button.forEach(butt=>{
            butt.addEventListener('click',(event)=>{
              const id=Number(event.target.dataset.announce);
              if(seenreports){ seenreports.push(id)
              localStorage.setItem('seenreports', JSON.stringify(seenreports));
            }
                   location.reload();
          })
          })
         }else{
          inner=`<h3>No announcements made</h3>`
         reportsDiv.innerHTML=inner;
         }}
        }
}
staffreports();
function workPayment(){
const payment=document.querySelector(".payment");
let inner="";
if(payment){
inner=` <div class="tab" id="payment">
    <div class="summary-cards">
      <div class="card">
        <h4>This Month</h4>
        <p>KSh <span id="month-total">0</span></p>
      </div>
      <div class="card">
        <h4>Pending</h4>
        <p>KSh <span id="pending-total">0</span></p>
      </div>
      <div class="card">
        <h4>Next Payout</h4>
        <p id="next-payout">Apr 30</p>
      </div>
    </div>`
payment.innerHTML=inner;
}
}
workPayment()

function opentab(){
  const  button=document.querySelector("#job");
 if(button){
  button.addEventListener("click",event=>{
  const main=document.querySelector(".main-job");
  if(main){
  main.style.display="block"}
});
const a=document.getElementsByClassName('tablinks');
if(a){
const tabcontent=document.getElementsByClassName("tab-content");
 tabcontent[0].style.display="block";
    a[0].addEventListener('click', (event) => {
        tabcontent[0].style.display = "block";
        tabcontent[1].style.display = "none";
    });
    a[1].addEventListener('click', event => {
        tabcontent[0].style.display = "none";
        tabcontent[1].style.display = "block";
    });
a[2].addEventListener('click',event=>{
  const main=document.querySelector(".main-job");
  if(main){
  main.style.display="none"}
})
  }}
  const  formjob=document.getElementById('form-job');
  const  formAdmission=document.getElementById('form-admission');
if(formjob){
  const errorName=formjob.querySelector(".error-username");
  const errorId=formjob.querySelector(".error-id");
  const errorPhone=formjob.querySelector(".error-phone");
  const errorFile=formjob.querySelector(".error-file");
  const error = formjob.querySelector('#main-job-error');
  console.log(error);
  formjob.addEventListener('submit',(event)=>{
    event.preventDefault();
    const  workingStaff=formjob.querySelector('#workingstaff').value;
    const name=formjob.querySelector('#username').value;
    const phone=formjob.querySelector('#number').value;
    const idCard=formjob.querySelector('#id').value;
    const  file=formjob.querySelector('#file').files[0];
    const email=formjob.querySelector('#email').value;
      if(error){ if(name.trim().length<5){
      formjob.insertBefore(error,errorName);
       error.style.display="flex";
        setTimeout(() => {
          error.style.display="none"
        }, 2000);
        error.textContent="Name too Short"
        error.style.color="red"
        return;
      }}
     if(phone.trim().length<10){
      formjob.insertBefore(error,errorPhone);
        error.style.display="flex";
        setTimeout(() => {
          error.style.display="none"
        }, 2000);
        error.textContent="Invalid Phone NUmber"
        error.style.color="red"
        return;
      }
if(idCard.trim().length<6){
  formjob.insertBefore(error,errorId);
        error.textContent="Invalid iD NUmber"
        error.style.display="flex";
        setTimeout(() => {
          error.style.display="none"
        }, 2000);
        error.style.color="red"
        return;
      }
      if(file.size >1024*1024){
        formjob.insertBefore(error,errorFile);
         error.style.display="flex";
        setTimeout(() => {
          error.style.display="none"
        }, 2000);
        error.textContent="Invalid passportPhoto"
        error.style.color="red"
        return;
      }
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('card', idCard);
      formData.append("workingStaff",workingStaff);
      formData.append('file', file);
      formData.append('email', email);
      
   
// console.log(file,file.size,file.type);
const submitFile =async()=>{
  await fetch("./php/save.php",{
    method:"POST",
    body:formData
  }).then(res=>res.json()).then(data=>{
      formjob.insertBefore(error,error);
      const main=document.querySelector(".main-job");
      main.style.display="block"
      setTimeout(() => {
        main.style.display="none"
        location.href="index.html"
      },1000)
    error.textContent=data.status+"fully applied for the job";
    error.style.color="green"
  }).catch(errors=>{
    const main=document.querySelector(".main-job");
    formjob.insertBefore(error,error);
    error.style.display="block"
    setTimeout(() => {
      error.style.display="none"
    }, 2000);
    error.textContent=errors;
    error.style.color="red"
main.style.display="block"
  })
};
submitFile();
  })

}
if(formAdmission){
  const errorName=formAdmission.querySelector(".error-username");
  const errorId=formAdmission.querySelector(".error-id");
  const errorPhone=formAdmission.querySelector(".error-phone");
  const errorFile=formAdmission.querySelector(".error-file");
  formAdmission.addEventListener('submit',(event)=>{
    event.preventDefault();
    const  workingStaff=formAdmission.querySelector('#grade').value;
    const name=formAdmission.querySelector('#username').value;
    const phone=formAdmission.querySelector('#number').value;
    const idCard=formAdmission.querySelector('#id').value;
    const  file=formAdmission.querySelector('#file').files[0];
    const email=formAdmission.querySelector('#email').value;
    const error = formAdmission.querySelector('#main-admission-error');
    if(error){ if(name.trim().length < 5){
    formAdmission.insertBefore(error,errorName);
     error.style.display="flex";
      setTimeout(() => {
        error.style.display="none"
      }, 2000);
      error.textContent="Name too Short"
      error.style.color="red"
      return;
    }}
   if(phone.trim().length<10){
    formAdmission.insertBefore(error,errorPhone);
      error.style.display="flex";
      setTimeout(() => {
        error.style.display="none"
      }, 2000);
      error.textContent="Invalid Phone NUmber"
      error.style.color="red"
      return;
    }
if(idCard.trim().length<6){
formAdmission.insertBefore(error,errorId);
      error.textContent="Invalid iD NUmber"
      error.style.display="flex";
      setTimeout(() => {
        error.style.display="none"
      }, 2000);
      error.style.color="red"
      return;
    }
    if(file.size >1024*1024){
      formAdmission.insertBefore(error,errorFile);
       error.style.display="flex";
      setTimeout(() => {
        error.style.display="none"
      }, 2000);
      error.textContent="Invalid passport Photo"
      error.style.color="red"
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('card', idCard);
    formData.append("workingStaff",workingStaff);
    formData.append('file', file);
    formData.append('email', email);
    
 
// console.log(file,file.size,file.type);
const submitFile =async()=>{
await fetch("./php/save.php",{
  method:"POST",
  body:formData
}).then(res=>res.json()).then(data=>{
  const main=document.querySelector(".main-job");
  formAdmission.insertBefore(error,error);   
  error.style.display="block"
  setTimeout(() => {
      main.style.display="none"
      location.href="index.html"
    },1000)
  error.textContent=data.status+"fully applied for admission";
  error.style.color="green"
}).catch(errors=>{
  const main=document.querySelector(".main-job");
  error.style.display="block"
  setTimeout(() => {
    formAdmission.insertBefore(error,error);
    error.style.display="none"
  }, 2000);
  error.textContent=errors;
  error.style.color="red"
main.style.display="block"
});
};
submitFile();
});
  }
}
function contactUS(){
  const  contactusForm=document.querySelector("#contactForm");
 const error= document.createElement('p');

  if(contactusForm){
 const name=contactusForm.querySelector("#name");
  const email=contactusForm.querySelector("#email");
  console.log(email);
  const feedback=contactusForm.querySelector("#feedback");
  contactusForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  const value=name.value;
  const emails=email.value;
  const feed=feedback.value;
if(value.trim().length <5){
   contactusForm.insertBefore(error,name);
  error.textContent="Name length is too short"
error.style.display="block"
  setTimeout(() => {
    error.style.display="none"
  }, 1000);
   error.style.color="red"
  return;  
  }
if(feed.trim().length <6){
  error.textContent="Describe how we may help you"
  error.style.color="red"
  contactusForm.insertBefore(error,feedback);
  error.style.display="block"
  setTimeout(() => {
    error.style.display="none"
  }, 1000);
   error.style.color="red"
  return; 
 }
 const form =new FormData(contactusForm);
  form.append("name",value);
  form.append("email",emails)
  form.append("feedback",feed)
  console.log(form);
 const  sendQuery=async()=>{
  await fetch("./php/query.php",{
  method:"POST",
  body:form,
  }).then(response=> response.json())
  .then(data=>{
    error.textContent=data.message;
    const submit=contactusForm.querySelector("#send");
    contactusForm.insertBefore(error,submit);
  error.style.display="block"
  setTimeout(() => {
    error.style.display="none"
  }, 1000);
   error.style.color="green"
  }).catch(errors=>{
    const submit=contactusForm.querySelector("#send");
    contactusForm.insertBefore(error,submit);
  error.style.display="block"
  setTimeout(() => {
    error.style.display="none"
  }, 1000);
   error.style.color="red"
    error.textContent=errors;
  })
 }
sendQuery();
 })
 }
}
contactUS();
function showProfile(){
   const users=JSON.parse(localStorage.getItem("userdetails"))||[];
    const person=JSON.parse(localStorage.getItem("activeUser"));
      const databaseUsers=document.querySelector('.users');
       let captionText="User"
      if(person){
    captionText=`This is your  profile ${person.username}`}
  let inner="";
  if(databaseUsers){
      inner=`
      <div class="dashboard-grid">
       <h1>${captionText}</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
        <th>phone</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>`;
        const index=users.findIndex(uid=>uid.username===person.username && uid.roles===person.roles && uid.sts===person.sts &&  uid.phone===person.phone && uid.email===person.email);
        inner+=
        `<tr> 
          <td>${person.username}</td>
          <td>${person.roles}</td>
          <td>${person.sts}</td>
          <td>${person.phone}</td>
          <td>${person.email}</td>
          <td>${"********"}</td>
          <td><button class="editButton" data-index="${index}">Edit</button></td>
          </tr> `;
    inner+=`
    </tbody>
  </table>
  </div>;`;
    databaseUsers.innerHTML="";
    databaseUsers.innerHTML=inner;
    const editButton=databaseUsers.querySelector('.editButton');
    const container=document.querySelector('.edit-login');
    container.style.display="none";
     editButton.addEventListener('click',(event)=>{
        const index=event.target.dataset.index;
        container.style.display="block";
    if(container){
      container.innerHTML=`
      <h3>Edit Details here</h3>
      <hr>
      <form action="" autocomplete="on" id="login-form" method="post">
        <label for="role">Role <br>
          <select name="role"  autocomplete="on" id="role">
          <option value="${person.roles}">${person.roles}</option>
          </select>
        </label> 
        <label for="username">Username
        <input type="text" autocomplete="on" placeholder="Eg.Brian Sinange" name="" id="username" value="${person.username}" required> 
        </label>
        <label id="ad" class="error-select" for="admin">Select Admin Type 
        <select name="admin"  autocomplete="on" id="admin">
        <option value="headTeacher">HeadTeacher</option>
        <option value="deputyHeadTeacher">DeputyHeadTeacher</option>
        <option value="seniorTeacher">SeniorTeacher</option>
        <option value="director">Director</option>
      </select>
      </label>
        </label>
        <label id="gd"  class="error-select" for="grade">Select Grade 
        <select name="grade"  autocomplete="on" id="grade">
        <option value="pp1">pp1</option>
        <option value="pp2">pp2</option>
        <option value="grade1">Grade1</option>
        <option value="grade2">Grade2</option>
        <option value="grade3">Grade3</option>
        <option value="grade4">Grade4</option>
        <option value="grade5 ">Grade5</option>
        <option value="grade6">Grade6</option>
        <option value="grade7">Grade7</option>
        <option value="grade8">Grade8</option>
        <option value="grade9">Grade9</option>
      </select>
      </label>
      <label id="st"  class="error-select" for="workingstaff">Select your Work 
      <select name="workingstaff"  autocomplete="on" id="workingstaff">
      <option value="matron">Matron</option>
      <option value="patron">Patron</option>
      <option value="cook">Cook</option>
      <option value="watchMan">WatchMan</option>
      <option value="driver">Driver</option>
      <option value="cleaner">Cleaner</option>
    </select>
    </label>

    <label id="ct"  class="error-select" for="classTeacher">You're  a classTeacher of grade
    <select name="gradeTeacher"  autocomplete="on" id="classteacher">
    <option value="classTeacher pp1">pp1</option>
    <option value="classTeacher pp2">pp2</option>
    <option value="classTeacher grade1">Grade1</option>
    <option value="classTeacher grade2">Grade2</option>
    <option value="classTeacher grade3">Grade3</option>
    <option value="classTeacher grade4">Grade4</option>
    <option value="classTeacher grade5">Grade5</option>
    <option value="classTeacher grade6">Grade6</option>
    <option value="classTeacher grade7">Grade7</option>
    <option value="classTeacher grade8">Grade8</option>
    <option value="classTeacher grade 9 ">Grade9</option>
    <option value="not ClassTeacher">Not a Class Teacher</option>
  </select>
  </label>
        <label class="error-phone" for="number">Phone
          <input type="tel" autocomplete="on" placeholder="0712345678" name="" id="number" value="${person.phone}" required> <br>
          </label>
          <label  class="error-email" for="email">Email
            <input type="email" autocomplete="on" placeholder="123@gmail.com" name="" id="email" value="${person.email}" required><br>
            </label>  
        <label class="error-pass" for="password">Password
          <input type="password" autocomplete="on" placeholder="..........." name="" id="password" value="${person.password}" required><br>
          </label>
        <input type="submit" value="Save " id="Register">
    <!-- <p>Already have an Account?<a class="AR" href="#">login In</a></p>-->
        <p id="main-login-error"></p> 
      </form>`;
      const gd=document.getElementById('gd');
  gd.style.display="none"
  const st=document.getElementById('st');
  st.style.display="none"
  const ad=document.getElementById('ad');
  ad.style.display="none";
  const admin=document.getElementById('admin');
  admin.style.display="none";
  const ct=document.getElementById('ct');
  ct.style.display="none";
  const grade=document.getElementById('grade');
  grade.style.display="none";
  const workingstaff=document.getElementById('workingstaff');
  workingstaff.style.display="none";
  const classTeacher=document.getElementById('classteacher');
  classTeacher.style.display="none";
  //find which role is selected 
  switch(person.roles){
    case "student":
      ad.style.display="none";
      admin.style.display="none";
        gd.style.display="block";
        grade.style.display="block";
        ct.style.display="none";
        st.style.display="none";
        workingstaff.style.display="none";
        classTeacher.style.display="none";
      
    break;
     case "teacher":
      ad.style.display="none";
      admin.style.display="none";
          ct.style.display="block";
          gd.style.display="none";
          st.style.display="none";
          grade.style.display="none";
          workingstaff.style.display="none";
          classTeacher.style.display="block" ;
        break;
    case "staff":
      ad.style.display="none";
      admin.style.display="none";
       st.style.display="block";
        workingstaff.style.display="block";
        ct.style.display="none";
        gd.style.display="none";
        grade.style.display="none";
        classTeacher.style.display="none" ;
        break;
        case "admin":
          ad.style.display="block";
          admin.style.display="block";
          st.style.display="none";
          workingstaff.style.display="none";
          ct.style.display="none";
          gd.style.display="none";
          grade.style.display="none";
          classTeacher.style.display="none" ;;
          break;
  }
  const roles=document.getElementById('role');
  roles.addEventListener('change',(event)=>{
  const roleValue=event.target.value;
  switch(roleValue){
  case "student":
    ad.style.display="none";
    admin.style.display="none";
      gd.style.display="block";
      grade.style.display="block";
      ct.style.display="none";
      st.style.display="none";
      workingstaff.style.display="none";
      classTeacher.style.display="none" ;
    
  break;
   case "teacher":
    ad.style.display="none";
    admin.style.display="none";
        ct.style.display="block";
        gd.style.display="none";
        st.style.display="none";
        grade.style.display="none";
        workingstaff.style.display="none";
        classTeacher.style.display="block";
      break;
  case "staff":
    ad.style.display="none";
    admin.style.display="none";
     st.style.display="block";
      workingstaff.style.display="block";
      ct.style.display="none";
      gd.style.display = "none";
      grade.style.display = "none";
      classTeacher.style.display = "none";

      break;
      case "admin":
          ad.style.display = "block";
          admin.style.display = "block";
          st.style.display = "none";
          workingstaff.style.display = "none";
          ct.style.display = "none";
          gd.style.display = "none";
          grade.style.display = "none";
          classTeacher.style.display = "none";
        break;
  
      }
    })
        const login = document.getElementById('login-form');
      if(login){
      login.addEventListener('submit',(event)=>{
       event.preventDefault();
       const selectedValue=roles.value;
          let status = "";
       switch(selectedValue){
         case "student":
           status=grade.value;
           break;
           case "teacher":
             status=classTeacher.value;
             break;
           case "staff":
             status=workingstaff.value;
         break;
       case "admin":
         status=admin.value;
     break;
       }
     const username=document.getElementById('username').value;
     const phone=document.getElementById('number').value;
     const email=document.getElementById('email').value;
     const password=document.getElementById('password').value;
     if(!/\d{10}/.test(phone)){
         const error=document.getElementById('main-login-error');
         const ee=document.querySelector('.error-phone');
       login.insertBefore(error,ee);
       if(error){
           error.style.display = "flex";
           error.textContent = "Invalid Phone Number!!!";
         setTimeout(() => {
           error.style.display="none"
         }, 2000);
         error.style.color='red';
     }
     return;
     }
     if(password.length<7||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[\d]/.test(password)||!/[!@#%^&*()+=|\{\};:'<.>?/`]/.test(password)){
       const error=document.getElementById('main-login-error');
       const ee=document.querySelector('.error-pass');
     login.insertBefore(error,ee);
     if(error){
         error.style.display = "flex";
       error.textContent="Password must be 7 chars, contain uppercase,lowercase,digit, and special char!!!"
       setTimeout(() => {
         error.style.display="none"
       }, 3000);
       error.style.color='red';
     }
     return;
     }
     if(roles&& username&& phone&&email&& password){
       const users=JSON.parse(localStorage.getItem("userdetails"))||[];
       const logger=JSON.parse(localStorage.getItem("activityLog"))||[];
         const obj = {
             roles: selectedValue,
             sts: status,
             username: username,
             phone: phone,
             email: email,
             password: password
         };
       const date=`${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
     const time=`${new Date().getHours().toString().padStart(2,"0")}:${new Date().getMinutes().toString().padStart(2,"0")}`;
         const log = {
             date: date,
             description: `${username} updated details`,
             roles: selectedValue,
             time: time,
             username: username
         };
     if(users){users[index]=obj;}
     if(logger){logger.push(log);}
     localStorage.setItem("userdetails",JSON.stringify(users));
     localStorage.setItem("activityLog",JSON.stringify(logger));
     localStorage.setItem("activeUser",JSON.stringify(obj))
         container.style.display = "none";
     showProfile();
      }});
     }
    }
      })
   
  }
}  
function announcements(){
   const announcementsDiv = document.getElementById('announcements');
   if(announcementsDiv){
      let inner=""
      const  active=JSON.parse(localStorage.getItem("activeUser"));
      const announcements =JSON.parse(localStorage.getItem("announcements"))||[];
      if(active.roles==="admin"){
    announcements.forEach(announcement => {
       
      inner+=`
          <div class="announcement">
            <h2>${announcement.title}</h2>
            <p>${announcement.message}</p>
             <button class="deleteButton"  data-announce="${announcement.id}">Delete</button>
          </div>`;
       
    });      
  inner+=`
<div class="main-fee">
 <form action="" method="" id="form-annoncement">
<label for="title">Title
    <input type="text" id="title" name="title" required>
</label>
<textarea id="feedback"  name="feedback" placeholder="Make an Announcement?"></textarea>
 <input type="submit" value="Send Announcement">

 </form>
  </div>`
   announcementsDiv.innerHTML=inner;
   const  form=document.getElementById('form-annoncement');

   if(form){
   form.addEventListener('submit',event=>{
event.preventDefault();
const title=document.getElementById('title').value;
   const message=document.getElementById('feedback').value;
   if(title && message) {
    const obj={
      id:Date.now(),
  title:title,
  message:message,
 }

announcements.push(obj)
localStorage.setItem("announcements",JSON.stringify(announcements));
   location.reload();
   }
   })   
  }
   const  button=document.querySelectorAll(".deleteButton");
       button.forEach(butt=>{   
            butt.addEventListener('click',(event)=>{
              console.log("cliked");
              const id=Number(event.target.dataset.announce);
       const index=announcements.findIndex(item=>item.index===id);
        console.log(index);     
        announcements.splice(index,1);
              localStorage.setItem('announcements', JSON.stringify(announcements));
            
                   location.reload();
          })
          })
         }else{
           const seenreports = JSON.parse(localStorage.getItem('seenreports')) || [];
      if(announcements.length>0){
           announcements.forEach(announcement => {
       if (!seenreports.includes(announcement.id)) {
      inner+=`
          <div class="announcement">
            <h2>${announcement.title}</h2>
            <p>${announcement.message}</p>
            <button class="dismiss"  data-announce="${announcement.id}">Dismiss</button>
          </div>`;
       ;
      }
    });
    announcementsDiv.innerHTML=inner
       const  button=document.querySelectorAll(".dismiss");
          button.forEach(butt=>{
            butt.addEventListener('click',(event)=>{
              const id=Number(event.target.dataset.announce);
              if(seenreports){ seenreports.push(id)
              localStorage.setItem('seenreports', JSON.stringify(seenreports));
            }
                   location.reload();
          })
          })
         }else{
          inner=`<h3>No announcements made</h3>`
          announcementsDiv.innerHTML=inner;
         }}
        }
}
announcements()
function showLogin(){
  const container=document.querySelector('.main-login');
  if(container){
    container.innerHTML=`
    <h3>Login here</h3>
    <hr>
    <form action="" autocomplete="on" id="login-form" method="post">
      <label for="role">Role <br>
        <select name="role"  id="role">
          <option value="admin">Admin</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
      <label for="username">Username 
      <input type="text" autocomplete="on" placeholder="Eg.Brian Sinange" name="" id="username" required> 
      </label>  
      <label class="error-pass" for="password">Password
        <input type="password" autocomplete="on" placeholder="..........." name="" id="password" required>
        </label> 
      <input type="submit" value="Login" id="login">
     <p>Forgot Password? <a class="CA" href="#">ResetPassword</a></p>
      <p id="main-login-error"></p>
    </form>`;

    attachLogin();
  }
}
  showLogin();
  function showRegistration(){
    const container=document.querySelector('.main-login');
    if(container){
      container.innerHTML=`
      <h3>Register here</h3>
      <hr>
      <form action="" autocomplete="on" id="login-form" method="post">
        <label  class="error-role" for="role">Choose role in school
          <select name="role"  autocomplete="on" id="role">
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="teacher">Teacher</option>
          </select>
        </label> 

        <label for="username">Username
        <input type="text" autocomplete="on" placeholder="Eg.Brian Sinange" name="" id="username" required> 
        </label>
        <label id="ad" class="error-select" for="admin">Select Admin Type 
        <select name="admin"  autocomplete="on" id="admin">
        <option value="headTeacher">HeadTeacher</option>
        <option value="deputyHeadTeacher">DeputyHeadTeacher</option>
        <option value="seniorTeacher">SeniorTeacher</option>
        <option value="director">Director</option>
      </select>
      </label>
        <label id="gd"  class="error-select" for="grade">Select Grade 
        <select name="grade"  autocomplete="on" id="grade">
        <option value="pp1">pp1</option>
        <option value="pp2">pp2</option>
        <option value="grade1">Grade1</option>
        <option value="grade2">Grade2</option>
        <option value="grade3">Grade3</option>
        <option value="grade4">Grade4</option>
        <option value="grade5 ">Grade5</option>
        <option value="grade6">Grade6</option>
        <option value="grade7">Grade7</option>
        <option value="grade8">Grade8</option>
        <option value="grade9">Grade9</option>
      </select>
      </label>
      <label id="st"  class="error-select" for="workingstaff">Select your Work 
      <select name="workingstaff"  autocomplete="on" id="workingstaff">
      <option value="matron">Matron</option>
      <option value="patron">Patron</option>
      <option value="cook">Cook</option>
      <option value="watchMan">WatchMan</option>
      <option value="driver">Driver</option>
      <option value="cleaner">Cleaner</option>
    </select>
    </label>

    <label id="ct"  class="error-select" for="classTeacher">You're  a classTeacher of grade
    <select name="gradeTeacher"  autocomplete="on" id="classteacher">
    <option value="classTeacher pp1">pp1</option>
    <option value="classTeacher pp2">pp2</option>
    <option value="classTeacher grade1">Grade1</option>
    <option value="classTeacher grade2">Grade2</option>
    <option value="classTeacher grade3">Grade3</option>
    <option value="classTeacher grade4">Grade4</option>
    <option value="classTeacher grade5">Grade5</option>
    <option value="classTeacher grade6">Grade6</option>
    <option value="classTeacher grade7">Grade7</option>
    <option value="classTeacher grade8">Grade8</option>
    <option value="classTeacher grade 9 ">Grade9</option>
    <option value="not ClassTeacher">Not a Class Teacher</option>
  </select>
  </label>
        <label class="error-phone" for="number">Phone
          <input type="tel" autocomplete="on" placeholder="0712345678" name="" id="number" required>
          </label>
          <label  class="error-email" for="email">Email
            <input type="email" autocomplete="on" placeholder="123@gmail.com" name="" id="email" required>
            </label>  
        <label class="error-pass" for="password">Password
          <input type="password" autocomplete="on" placeholder="..........." name="" id="password" required>
          </label>
        <input type="submit" value="Register" id="Register">
    <!-- <p>Already have an Account?<a class="AR" href="#">login In</a></p>-->
        <p id="main-login-error"></p> 
      </form>`;
attachRegister()

}
}
//clicked on login or registerButton
function attachRegister(){
  const gd=document.getElementById('gd');
  gd.style.display="none";
  const st=document.getElementById('st');
  st.style.display="none";
  const ad=document.getElementById('ad');
  ad.style.display="block";
  const admin=document.getElementById('admin');
  admin.style.display="block";
  const ct=document.getElementById('ct');
  ct.style.display="none";
  const grade=document.getElementById('grade');
  grade.style.display="none";
  const workingstaff=document.getElementById('workingstaff');
  workingstaff.style.display="none";
  const classTeacher=document.getElementById('classteacher');
  classTeacher.style.display="none";
  //find which role is selected 
  const roles=document.getElementById('role');
  roles.addEventListener('change',(event)=>{
  const roleValue=event.target.value;
  const ct=document.getElementById('ct');
  const gd=document.getElementById('gd');
  const grade=document.getElementById('grade');
  const classTeacher=document.getElementById('classteacher');
  const workingstaff=document.getElementById('workingstaff');
  const st=document.getElementById('st');
  const ad=document.getElementById('ad');
  ad.style.display="none";
  const admin=document.getElementById('admin');
  admin.style.display="none";
  
  switch(roleValue){
  case "student":
    ad.style.display="none";
    admin.style.display="none";
      gd.style.display="block";
      grade.style.display="block";
      ct.style.display="none";
      st.style.display="none";
      workingstaff.style.display="none";
      classTeacher.style.display="none";
    
  break;
   case "teacher":
    ad.style.display="none";
    admin.style.display="none";
        ct.style.display="block";
        gd.style.display="none";
        st.style.display="none";
        grade.style.display="none";
        workingstaff.style.display="none";
        classTeacher.style.display="block" ;
      break;
  case "staff":
    ad.style.display="none";
    admin.style.display="none";
     st.style.display="block";
      workingstaff.style.display="block";
      ct.style.display="none";
      gd.style.display="none";
      grade.style.display="none";
      classTeacher.style.display="none" ;
      break;
      case "admin":
        ad.style.display="block";
        admin.style.display="block";
        st.style.display="none"
        workingstaff.style.display="none";
        ct.style.display="none";
        gd.style.display="none";
        grade.style.display="none";
        classTeacher.style.display="none" ;
        break;
  
      }
    
  });
 const login=document.getElementById('login-form');
 if(login){
 login.addEventListener('submit',(event)=>{
  event.preventDefault();
  const selectedValue=roles.value;
  let status="";
  switch(selectedValue){
    case "student":
      status=grade.value;
      break;
      case "teacher":
        status=classTeacher.value;
        break;
      case "staff":
        status=workingstaff.value;
    break;
  case "admin":
    status=admin.value;
break;
  }
const username=document.getElementById('username').value;
const phone=document.getElementById('number').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
if(!selectedValue){
  const error=document.getElementById('main-login-error');
  const ee=document.querySelector('.error-role');
login.insertBefore(error,ee);
if(error){
  error.style.display="flex";
  error.textContent="Select a Role in school";
  setTimeout(() => {
    error.style.display="none"
  }, 2000);
  error.style.color='red';
}
return;
}
if(!status){
  const error=document.getElementById('main-login-error');
  const ee=document.querySelector('.error-select');
login.insertBefore(error,ee);
if(error){
  error.style.display="flex";
  error.textContent="Select a Specific in school";
  setTimeout(() => {
    error.style.display="none"
  }, 2000);
  error.style.color='red';
}
return;
}
if(!/\d{10}/.test(phone)){
    const error=document.getElementById('main-login-error');
    const ee=document.querySelector('.error-phone');
  login.insertBefore(error,ee);
  if(error){
    error.style.display="flex";
    error.textContent="Invalid Phone Number!!!";
    setTimeout(() => {
      error.style.display="none"
    }, 2000);
    error.style.color='red';
}
return;
}
if(password.length<7||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[\d]/.test(password)||!/[!@#%^&*()+=|\{\};:'<.>?/`]/.test(password)){
  const error=document.getElementById('main-login-error');
  const ee=document.querySelector('.error-pass');
login.insertBefore(error,ee);
if(error){
  error.style.display="flex";
  error.textContent="Password must be 7 chars, contain uppercase,lowercase,digit, and special char!!!";
  setTimeout(() => {
    error.style.display="none"
  }, 3000);
  error.style.color='red';
}
return;
}
if(selectedValue && status && username && phone && email && password){
  const users=JSON.parse(localStorage.getItem("userdetails"))||[];
  const logger=JSON.parse(localStorage.getItem("activityLog"))||[];
const obj={roles:selectedValue,
  sts:status,
  username:username,
  phone:phone,
  email:email,
  password:password};

  const  dup=users.some(user=>user.username===username||user.email===email);
  if(dup){
    const error=document.getElementById('main-login-error');
    error.style.display="flex";
    error.textContent="Username or Email already exists!!!";
    setTimeout(() => {
      error.style.display="none"
    }, 3000);
    error.style.color='red';
    return;
  }
  
  const date=`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
const time=`${new Date().getHours().toString().padStart(2,"0")}:${new Date().getMinutes().toString().padStart(2,"0")}`;
const log={
  date:date,
  description:`${username} signed Up`,
  roles:selectedValue,
  time:time,
  username:username};
if(users){users.push(obj);}
if(logger){logger.push(log);}
localStorage.setItem("userdetails",JSON.stringify(users));
localStorage.setItem("activityLog",JSON.stringify(logger));
location.href="index.html"
 }});
}
}
function attachLogin(){
  const login=document.getElementById('login-form');
  if(login){
  login.addEventListener('submit',(event)=>{
   event.preventDefault();
 const roles=document.getElementById('role').value;
 const username=document.getElementById('username').value;
 const password=document.getElementById('password').value;
  const loginItem=JSON.parse(localStorage.getItem("userdetails"))||[];
  if(password.length<7||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[\d]/.test(password)||!/[!@#%^&*()+=|\{\};:'<.>?/`]/.test(password)){
    const error=document.getElementById('main-login-error');
    const ee=document.querySelector('.error-pass');
  login.insertBefore(error,ee);
  if(error){
      error.style.display = "flex";
    error.textContent="Not a valid Password format";
    setTimeout(() => {
      error.style.display="none"
    }, 2000);
    error.style.color='red';
  }
  return;
  }
  if(roles && username&& password){
    const foundUser=loginItem .find(user=>user.roles===roles && user.username===username &&user.password===password);
  if(foundUser){
     const lg =localStorage.setItem("activeUser",JSON.stringify(foundUser));
      console.log(lg);
 location.href="index.html"
}else{ 
   const error=document.getElementById('main-login-error');
  if(error){
      error.style.display = "flex";
      error.textContent = "Invalid credentials Retry Again!!!";
    setTimeout(() => {
      error.style.display="none"
    }, 1000);
    error.style.color='red';
  }

}}

}); }}

onload=()=>{
  const size=innerWidth <= 375;
  const ls=localStorage.getItem("activeUser");
  const urlParams=new URLSearchParams(window.location.search);
  const detail=urlParams.get('detail');
  const value=urlParams.get('value');
  if(ls){
 const  parse=JSON.parse(ls);
    showDownloadData("Mathematics");

  if(parse && parse.roles==='student'){
   updateAsidebar("student",size);
    loginUpdateNavbar();
    updateDashboard(parse.roles);
    academicSetUp(parse.roles);
    showProfile()
  let   welcome=["Welcome,back,Student!","Check your assignments today","Strive to excel in all your grades"]
    updateText(welcome);
    if(value==="timetable") {
      updateContent("#timetable",detail)
    }else if(value==="assessments"){
      updateContent("#assessments",detail)
    }else if(value==="teacher"){
      updateContent("#teacher",detail)
    }else if(value==="subject"){
      updateContent("#subjects",detail)
    }else{
      showStudentList(detail)
      giveAsssignments("",'Mathematics');
    }
   } else if(parse &&  parse.roles==='teacher'){
      updateAsidebar("teacher",size);
      loginUpdateNavbar();
      updateDashboard(parse.roles);
      academicSetUp(parse.roles);
      showProfile()
     let  welcome=["Welcome Teacher!","Give Assignments","Previous assignments have been submitted"];
      updateText(welcome);
   if(value==="timetable") {
      updateContent("#timetable",detail)
    }else if(value==="assessments"){
      updateContent("#assessments",detail)
    }else if(value==="teacher"){
      updateContent("#teacher",detail)
    }else if(value==="subject"){
      updateContent("#subjects",detail)
    }else{
      showStudentList(detail)
    }
    } else if(parse &&  parse.roles==='staff'){
      updateAsidebar("staff",size);
      loginUpdateNavbar();
      updateDashboard(parse.roles);
      academicSetUp(parse.roles);
      showProfile()
     let  welcome=["Welcome Staff !","Do you Duties on Time","New Roles will be assigned soon"]
      updateText(welcome);
      if(value==="timetable") {
        updateContent("#timetable",detail)
      }else if(value==="assessments"){
        updateContent("#assessments",detail)
      }else if(value==="teacher"){
        updateContent("#teacher",detail)
      }else if(value==="subject"){
        updateContent("#subjects",detail)
      }else{
        showStudentList(detail)
      }
  }else if(parse &&  parse.roles==='admin'){
    updateAsidebar("admin",size);
    loginUpdateNavbar();
    updateDashboard(parse.roles);
    academicSetUp(parse.roles);
    updateContent("#subjects","Mathematics")
    if(value==="profile"){
      showProfile()
    }else{
     showAllUsers();
    }
      showRegistration();
 
   let  welcome=["Welcome Administrator!","System Status: All systems Operational","Manage Student and Staff effectively"]
    updateText(welcome);
    if(value==="timetable") {
      updateContent("#timetable",detail)
    }else if(value==="assessments"){
      updateContent("#assessments",detail)
    }else if(value==="teacher"){
      updateContent("#teacher",detail)
    }else if(value==="subject"){
      updateContent("#subjects",detail)
    }else{
      showStudentList(detail)
    }
  }else{
    updateAsidebar("guest",size);
    academicSetUp("guest");
   let  welcome=["Welcome to Talek School","School Motto is Strive to excel"];
    updateText(welcome);
    showDownloadData("Mathematics");
   opentab();
   showStudentList("pp1")
  }
}else{
  updateAsidebar("guest",size);
  academicSetUp("guest");
  let  welcome=["Welcome to Talek School","School Motto is Strive to excel"];
   updateText(welcome);
   showDownloadData("Mathematics");
   showStudentList("pp1")
   opentab();
}
gradeDataInsight();
download();
fees()
HomeWork();
showStudentList("pp1")
};
onresize=()=>{
  const size=innerWidth<=375;
  const ls=localStorage.getItem("activeUser");
  if(ls){
  const parse=JSON.parse(ls);
  updateAsidebar(parse.roles,size);
  academicSetUp(parse.roles);
  }else{
    updateAsidebar('guest',size);
    academicSetUp('guest')
  }
 
gradeDataInsight();
download();
HomeWork()
};

