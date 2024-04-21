const ageCalculate =()=>{
    const today=new Date();
    const inputdate=new Date(document.getElementById("date-input").value);

    //extract birth details
    const birthdetails= {
        date: inputdate.getDate(),
        month: inputdate.getMonth() + 1,
        year: inputdate.getFullYear(),
       }

const currentYear=today.getFullYear();
const currentMonth=today.getMonth() +1;
const currentDate=today.getDate();

if(isFutureDate(birthdetails,currentYear,currentMonth,currentDate)){
    alert("Not Born Yet");
    displayResult("-","-","-");
    return;
}
const{years, months, days} = calculateAge(birthdetails,currentYear,currentMonth,currentDate);

displayResult(days,months,years);
};


const isFutureDate= (birthdetails,currentYear,currentMonth,currentDate)=>{
    return(
        birthdetails.year>currentYear||
        (birthdetails.year===currentYear &&
        (birthdetails.month>currentMonth ||
        (birthdetails.month===currentMonth &&
    birthdetails.date>currentDate)))
      );
};
const calculateAge =  (birthdetails,currentYear,currentMonth,currentDate)=>{
    let years= currentYear-birthdetails.year;
    let months,days;

    if(birthdetails.month>currentMonth){
        years--;
        months =12-(birthdetails.month-currentMonth);
    }
    else{
        months=currentMonth-birthdetails.month;
    }

    if(birthdetails.date>currentDate){
        months--;
        const lastMonth = currentMonth === 1 ? 12: currentMonth-1;
        const daysInLastMonth = getDaysInMonth (lastMonth,currentYear);
        days = daysInLastMonth - (birthdetails.date-currentDate);
    }
    else{
        days=currentDate-birthdetails.date;
    }
    return { years, months, days  };
};
const getDaysInMonth =(month,year) =>{
    const isLeapYear = year% 4 === 0 && (year% 100!=0 
    || year%400===0);
    const getDaysInMonth =[
    31,
    isLeapYear ? 29:28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
];
 return getDaysInMonth[month-1]
}

const displayResult= (bdate, bMonth, bYear) =>{
    document.getElementById("years").textContent= bYear;

    document.getElementById("months").textContent= bMonth;
    document.getElementById("days").textContent= bdate;
};

document.getElementById("calc-age-btn").addEventListener("click",ageCalculate);