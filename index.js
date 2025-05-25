const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const buttonEl = document.getElementById('calculate');
const dob = document.getElementById('dateOfBirth');
dob.max = new Date().toISOString().split("T")[0];
buttonEl.addEventListener('click',function(){
    if(dob.value !== ''){
        
         const [year,month,date] = dob.value.split("-")
         console.log(year,month,date)   
         const presentYear = new Date().getFullYear();   
         const presentMonth = new Date().getMonth()+1; 
         const presentDate = new Date().getDate(); 
         console.log("present Date" , new Date())
         console.log(presentYear , presentMonth , presentDate)

         yearsEl.textContent = year ? presentYear - year  :''; 
         monthsEl.textContent = month ? Math.abs(presentMonth - month) :''; 
         daysEl.textContent = date ? presentDate -  date :''
        
    }
    else{
        alert("pls enter DOB")
    }
})