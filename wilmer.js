let Form = document.getElementById("Form")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let Age = document.getElementById("age")
let Gender = document.getElementById("gender")
let Phone = document.getElementById("phone")
let School = document.getElementById("school")
let Country = document.getElementById("country")
// let button = document.getElementById("button")
let firstNameErr = document.getElementById("firstNameErr")
let lastNameErr = document.getElementById("lastNameErr")
let ageErr = document.getElementById("ageErr")
let genderErr = document.getElementById("genderErr")
let phoneErr = document.getElementById("phoneErr")
let schoolErr = document.getElementById("schoolErr")
let countryErr = document.getElementById("countryErr")
let Subject = document.getElementsByClassName("subject1")
let subjectErr = document.getElementById("subjectErr")
let sub1Score = document.getElementById("subject1-score")
let sub2Score = document.getElementById("subject2-score")
let sub3Score = document.getElementById("subject3-score")
let sub4Score = document.getElementById("subject4-score")
let sub5Score = document.getElementById("subject5-score")
let sub6Score = document.getElementById("subject6-score")
let sub7Score = document.getElementById("subject7-score")
let sub8Score = document.getElementById("subject8-score")
let Form2 = document.getElementById("ink")
let Result = document.getElementById("result")

// let points = 0;
let agePoints = 0;
let countryPoints = 0;

function checkEligibility() {
  // alert(firstName.value)
  if (firstName.value == '' || firstName.value == undefined) {
    firstNameErr.innerHTML = "*first name is required";
    firstNameErr.classList.add("errormsg");
  }
  if (lastName.value == '' || lastName.value == undefined) {
    lastNameErr.innerHTML = "*last name is required";
    lastNameErr.classList.add("errormsg");
  }
  if (Age.value == '' || Age.value == undefined) {
    ageErr.innerHTML = "*Age is required";
    ageErr.classList.add("errormsg");
  }
  if (Gender.value == "select" ) {
    genderErr.innerHTML = "*please choose gender";
    genderErr.classList.add("errormsg");
  }
  
  if (Phone.value == '' || Phone.value == undefined) {
    phoneErr.innerHTML = "*Phone is required";
    phoneErr.classList.add("errormsg");
  }
  if (School.value == '' || School.value == undefined) {
    schoolErr.innerHTML = "*School name is required";
    schoolErr.classList.add("errormsg");
  }
  if (Country.value == "selected") {
    countryErr.innerHTML = "*Choose region";
    countryErr.classList.add("errormsg");
  }
  

else {
  if (Age.value >= 18 && Age.value <= 24) {
    agePoints += 100
   
  }
 
  if (Age.value >= 25 && Age.value <= 30) {
    agePoints += 80
  
  }
 
  if (Age.value >= 31 && Age.value <= 35) {
    agePoints += 50
   
  }

  if (Age.value >= 36 && Age.value <= 40) {
    agePoints += 30
  
  }

  if (Age.value >= 41 ) {
    agePoints += 10
   
  }


  let Africa =  ["algeria", "angola", "benin", "botswana", "burkina faso", "burundi", "cabo verde", "cameroon", 
  "central african republic", "chad", "comoros", "congo", "cote d'ivoire", "djibouti", "egypt", "equatorial guinea", 
  "eritrea", "eswatini", "ethiopia", "gabon", "gambia", "ghana", "guinea", "guinea-bissau", "kenya", "lesotho", "liberia",
   "libya", "madagascar", "malawi", "mali", "mauritania", "mauritius", "morocco", "mozambique", "namibia", "niger", 
   "nigeria", "rwanda", "sao tome and principe", "senegal", "seychelles", "sierra leone", "somalia", "south africa", 
   "south sudan", "sudan", "tanzania", "togo", "tunisia", "uganda", "zambia", "zimbabwe"];
  let mark = Country.value.toLowerCase()
  if (Africa.includes(mark)) {
    countryPoints += 50
   
  }
  let Asia = ["afghanistan", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", "cambodia", "china", "east timor", "georgia", "india", "indonesia", "iran", "iraq", "israel", "japan", "jordan", "kazakhstan",
    "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia", "maldives", "mongolia", "myanmar", "nepal", "north korea",
    "oman", "pakistan", "palestine", "philippines", "qatar", "saudi arabia", "singapore", "south korea", "sri lanka",
    "syria", "tajikistan", "thailand", "turkmenistan", "u.a.e", "uzbekistan", "vietnam", "yemen"]
  let marked = Country.value.toLowerCase() 
    if (Asia.includes(marked)) {
      countryPoints += 40
     
    }
   
  let South = ["argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "suriname",
    "uruguay", "venezuela"];
  let marker = Country.value.toLowerCase();
    if (South.includes(marker)) {
      countryPoints += 30
    
    }
  let North = ["canada", "u.s.a", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica",
   "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "trinidad and tobago", "barbados", "dominica",
    "saint kitts and nevis", "saint lucia", "saint vincent and the grenadines", "grenada", "antigua and barbuda"];
  let mated = Country.value.toLowerCase();
    if (North.includes(mated)) {
      countryPoints += 20
      
    } 
    
  let oceania = ["australia", "new zealand", "fiji", "papua new guinea", "solomon islands", "vanuatu", "samoa", "kiribati",
    "micronesia", "marshall islands", "palau", "tuvalu", "nauru", "tonga"];
  let mate = Country.value.toLowerCase();
  if (oceania.includes(mate)) {
    countryPoints += 10
   
  }

  let Europe = ["albania", "andorra", "austria", "belarus", "belgium", "bosnia and herzegovina", "bulgaria", "croatia",
    "cyprus", "czech republic", "denmark", "estonia", "finland", "france", "germany", "greece", "hungary", "iceland",
    "ireland", "italy", "kosovo", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta", "moldova", "monaco",
    "montenegro", "netherlands", "north macedonia", "norway", "poland", "portugal", "romania", "russia", "san marino", 
    "serbia", "slovakia", "slovenia", "spain", "sweden", "switzerland", "ukraine", "united kingdom", "vatican city"];
    let martel = Country.value.toLowerCase();
    if (Europe.includes(martel)) {
      countryPoints += 10
    
    }
    console.log(firstName.value)
    
    let points = 0
    let subjectArr = Array.from(Subject);
    console.log(Array.isArray(subjectArr))
    let English = subjectArr.some(function (Subject) {
      return Subject.value === "english";
  });
  let Maths = subjectArr.some(function (Subject) {
    return Subject.value === "mathematics";
});

  if (!English) {
    subjectErr.innerHTML = "*English and Mathematics compulsory";
    subjectErr.classList.add("errormsg");
      // Add your logic to award 10 points here
  }
  else if (!Maths) {
    subjectErr.innerHTML = "*English and Mathematics compulsory";
    subjectErr.classList.add("errormsg");
  }
  else {
    let allScore = parseFloat(sub1Score.value) + parseFloat(sub2Score.value) + parseFloat(sub3Score.value) + 
    parseFloat(sub4Score.value) + parseFloat(sub5Score.value) + parseFloat(sub6Score.value) +
    parseFloat(sub7Score.value) + parseFloat(sub8Score.value)
    console.log(allScore)
    let Average = allScore / 8  
   if (Average >= 90 && Average <= 100) {
     points += 150
   }
   if (Average >= 85 && Average <= 89) {
    points += 140
  }
  if (Average >= 75 && Average <= 84) {
    points += 120
  }
  if (Average >= 65 && Average <= 74) {
    points += 100
  }
  if (Average >= 60 && Average <= 64) {
    points += 80
  }
  if (Average >= 50 && Average <= 59) {
    points += 50
  }
  if (Average >= 40 && Average <= 49) {
    points += 20
  }
  else if (Average >= 0 && Average <= 39) {
    points += 0
  }


  
console.log(agePoints)
// console.log(firstName.value)
let man = agePoints + points + countryPoints
if (man >= 180) {
  Result.innerHTML = "<p>Your total score points is " + man + "<br>" + "Congratulations " + firstName.value + " " + lastName.value + " You have been awarded scholarship at WILMER ACADEMY.";
}
else {
  Result.innerHTML = "<p>Your total score points is " + man + "<br>" + "Sorry " + firstName.value + " " + lastName.value + " Your points is below expectations, please try again next year.";
}
console.log(points)

 let myChart = document.getElementById("myChart").getContext("2d")

 Chart.defaults.font.family = "Lato";
 Chart.defaults.font.size = 20;
 Chart.defaults.font.color = "#777";

 let studentChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ["Age", "Country", "Grade"],
      
      datasets: [{
        label: "points",
        data: [agePoints, countryPoints, points],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(153, 102, 255, 0.6)"]
        , borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        fontSize: 20,
        hoverBorderColor:"#000"
      }]
    },
    options: {
      title:{
        display: true,
        text: "Students Points From Different Criteria",
        fontSize: 25
      },
      tooltips:{
        enabled: true,

      }
    }
  });
  }
      
}
Form.reset(); 
}