// const indexdb = indexedDB.open('talek', 1);
// let db;
// indexdb.onerror=()=>{
//     console.log("error");
// };
// indexdb.onupgradeneeded=(event)=>{
//     db = event.target.result;
//     if (!db.objectStoreNames.contains('users')) {
//         db.createObjectStore('users',{keyPath: "username"});
//     }

// };
// indexdb.onsuccess=(event)=>{
//     db = event.target.result;
//     gradeData['Grade1'].learners.forEach(element => {
//      announcement({ id:element.id,username:element.name, Age:element.age})
//    });
   
//     retrieve()
// };

// function announcement(name) {
//     const transtion = db.transaction('users', "readwrite");
//     const store=transtion.objectStore('users');
//     store.add(name);

// }
// function retrieve(){
//     const transaction = db.transaction('users');
//     const store = transaction.objectStore(('users'));
//     const request = store.getAll();
//     request.onsuccess=()=>{
//      console.log(request.result);
//     }
       
// }

  export const downloadable= {
//     ["Mathematics","English","Kiswahili",
//   "Intergrated Science","Hygiene and Nutrition","Environmental studies",
//   "Language","Social Studies","Agriculture","Pretechnical Studies", "Christian Religious Education","Creative Arts"]
"Mathematics":[
{ title:"mathsPP1",file:"mathspp2.pdf",icon:"📝",type:"pdf"},
{ title:"mathspp2",file:"mathspp2.pdf",icon:"📝",type:"doc"},
{ title:"mathsG1",file:"mathsG1.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG2",file:"mathsG2.pdf",icon:"📝",type:"zip"},
{ title:"mathsG3",file:"mathsG3.pdf",icon:"📝",type:"rar"},
{ title:"mathsG4",file:"mathsG4.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG5",file:"mathsG5.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG6",file:"mathsG6.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG7",file:"mathsG7.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG8",file:"mathsG8.pdf",icon:"📝",type:"pdf"},
{ title:"mathsG9",file:"mathsG9.pdf",icon:"📝",type:"pdf"}
    ],

    "English":[
        { title:"englishPP1",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishpp2",file:"maths.pdf",icon:"📝",type:"doc"},
        { title:"englishG1",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishG2",file:"maths.pdf",icon:"📝",type:"zip"},
        { title:"englishG3",file:"maths.pdf",icon:"📝",type:"rar"},
        { title:"englishG4",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishG5",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishsG6",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishG7",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishG8",file:"maths.pdf",icon:"📝",type:"pdf"},
        { title:"englishG9",file:"maths.pdf",icon:"📝",type:"pdf"}  ],
    "Kiswahili":[
        { title:"kiswahili1",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahilipp2",file:"kiswahili.pdf",icon:"📝",type:"doc"},
        { title:"kiswahiliG1",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahiliG2",file:"kiswahili.pdf",icon:"📝",type:"zip"},
        { title:"kiswahiliG3",file:"kiswahili.pdf",icon:"📝",type:"rar"},
        { title:"kiswahiliG4",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG5",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahiliG6",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahiliG7",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahiliG8",file:"kiswahili.pdf",icon:"📝",type:"pdf"},
        { title:"kiswahiliG9",file:"kiswahili.pdf",icon:"📝",type:"pdf"}
    ],
    "Intergrated Science":[
        { title:"Intergrated ScienceG4",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG5",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG6",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG7",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG8",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"},
        { title:"Intergrated ScienceG9",file:"Intergrated Science.pdf",icon:"📝",type:"pdf"}
    ],
     "Agriculture":[
        { title:"agricultureG4",file:"agriculture.pdf",icon:"📝",type:"pdf"},
        { title:"agricultureG5",file:"agriculture.pdf",icon:"📝",type:"pdf"},
        { title:"agricultureG6",file:"agriculture.pdf",icon:"📝",type:"pdf"},
        { title:"agricultureG7",file:"agriculture.pdf",icon:"📝",type:"pdf"},
        { title:"agricultureG8",file:"agriculture.pdf",icon:"📝",type:"pdf"},
        { title:"agricultureG9",file:"agriculture.pdf",icon:"📝",type:"pdf"}
    ],
    "Pretechnical Studies":[
        { title:"pretechinical studiesPP1",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiespp2",file:"pretechinical studies.pdf",icon:"📝",type:"doc"},
        { title:"pretechinical studiesG1",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG2",file:"pretechinical studies.pdf",icon:"📝",type:"zip"},
        { title:"pretechinical studiesG3",file:"pretechinical studies.pdf",icon:"📝",type:"rar"},
        { title:"pretechinical studiesG4",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG5",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG6",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG7",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG8",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"},
        { title:"pretechinical studiesG9",file:"pretechinical studies.pdf",icon:"📝",type:"pdf"}
    ],
    "Social Studies":[
        { title:"SocialStudiesPP1",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiespp2",file:"SocialStudies.pdf",icon:"📝",type:"doc"},
        { title:"SocialStudiessG1",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG2",file:"SocialStudies.pdf",icon:"📝",type:"zip"},
        { title:"SocialStudiesG3",file:"SocialStudies.pdf",icon:"📝",type:"rar"},
        { title:"SocialStudiesG4",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG5",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG6",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG7",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG8",file:"SocialStudies.pdf",icon:"📝",type:"pdf"},
        { title:"SocialStudiesG9",file:"SocialStudies.pdf",icon:"📝",type:"pdf"}
    ],
    "Christian Religious Education":[
{ title:"Christian Religious EducationPP1",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious Educationpp2",file:"Christian Religious Education.pdf",icon:"📝",type:"doc"},
{ title:"Christian Religious EducationG1",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG2",file:"Christian Religious Education.pdf",icon:"📝",type:"zip"},
{ title:"Christian Religious EducationG3",file:"Christian Religious Education.pdf",icon:"📝",type:"rar"},
{ title:"Christian Religious EducationG4",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG5",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG6",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG7",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG8",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"},
{ title:"Christian Religious EducationG9",file:"Christian Religious Education.pdf",icon:"📝",type:"pdf"}
    ],
   "Creative Arts":[
        { title:"Creative ArtsPP1",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative Artspp2",file:"Creative Arts.pdf",icon:"📝",type:"doc"},
        { title:"Creative ArtsG1",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG2",file:"Creative Arts.pdf",icon:"📝",type:"zip"},
        { title:"Creative ArtsG3",file:"Creative Arts.pdf",icon:"📝",type:"rar"},
        { title:"Creative ArtsG4",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG5",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG6",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG7",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG8",file:"Creative Arts.pdf",icon:"📝",type:"pdf"},
        { title:"Creative ArtsG9",file:"Creative Arts.pdf",icon:"📝",type:"pdf"}
    ],
   " Language":[
        { title:"Languagepp1",file:"Language.pdf",icon:"📝",type:"pdf"},
        { title:"Languagepp2",file:"Language.pdf",icon:"📝",type:"doc"},
        { title:"LanguageGrade1",file:"Language.pdf",icon:"📝",type:"pdf"},
        { title:"LanguageGrade2",file:"Language.pdf",icon:"📝",type:"zip"},
        { title:"LanguageGrade3",file:"Language.pdf",icon:"📝",type:"rar"}
    ],
   "Hygiene and Nutrition":[
        { title:"Hygiene and NutritionPP1",file:"Hygiene and Nutrition.pdf",icon:"📝",type:"pdf"},
        { title:"Hygiene and Nutritionpp2",file:"Hygiene and Nutrition.pdf",icon:"📝",type:"doc"},
        { title:"Hygiene and NutritionG1",file:"Hygiene and Nutrition.pdf",icon:"📝",type:"pdf"},
        { title:"Hygiene and NutritionG2",file:"Hygiene and Nutrition.pdf",icon:"📝",type:"zip"},
        { title:"Hygiene and NutritionG3",file:"Hygiene and Nutrition.pdf",icon:"📝",type:"rar"}
    ],
    "Environmental studies":[
        { title:"environstudiesPP1",file:"environstudies.pdf",icon:"📝",type:"pdf"},
        { title:"environstudiespp2",file:"environstudies.pdf",icon:"📝",type:"doc"},
        { title:"environstudiesG1",file:"environstudies.pdf",icon:"📝",type:"pdf"},
        { title:"environstudiesG2",file:"environstudies.pdf",icon:"📝",type:"zip"},
        { title:"environstudiesG3",file:"environstudies.pdf",icon:"📝",type:"rar"}
       
    ]
  }
  export const arraySubjects=["Mathematics","English","Kiswahili",
  "Intergrated Science","Hygiene and Nutrition","Environmental studies",
  "Language","Social Studies","Agriculture","Pretechnical Studies", "Christian Religious Education","Creative Arts"]
   export const grade=["pp1","pp2 ","grade1","grade2",
  "grade3","grade4","grade5","grade6 ","grade7 ","grade8","grade9"]
  export const daysOfweek=['Monday','Tuesday','Wednesday','Thursday','Friday']
  export const timetableDraf={
    pp1:[
        {day:"Monday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    pp2:[
        {day:"Monday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade1:[
        {day:"Monday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade2:[
        {day:"Monday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade3:[
        {day:"Monday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade4:[
        {day:"Monday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade5:[
        {day:"Monday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade6:[
        {day:"Monday",time:{
            "8:00":arraySubjects[8],
            "8:40":arraySubjects[4],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[3],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[2],
            "8:40":arraySubjects[5],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade7:[
        {day:"Monday",time:{
            "8:00":arraySubjects[3],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }

    ],
    grade8:[
        {day:"Monday",time:{
            "8:00":arraySubjects[8],
            "8:40":arraySubjects[4],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[3],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[6],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },

    ],
    grade9:[
        {day:"Monday",time:{
            "8:00":arraySubjects[4],
            "8:40":arraySubjects[0],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Tuesday",time:{
            "8:00":arraySubjects[7],
            "8:40":arraySubjects[3],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Wednesday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Thursday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        },
        {day:"Friday",time:{
            "8:00":arraySubjects[0],
            "8:40":arraySubjects[1],
            "9:40":arraySubjects[2],
            "10:20":arraySubjects[3],
            "11:30":arraySubjects[4],
            "12:10":arraySubjects[5],
            "2:00":arraySubjects[8],
            "2:40":arraySubjects[9],
            "3:20":arraySubjects[10]}
        }
    ]
  }
  