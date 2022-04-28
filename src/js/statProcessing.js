// export default class StatProcessor{
//     constructor(){

//     }

function getMonthlyEarningsByYear(paymentsAndDates){

    const paymentFigures = paymentsAndDates.map(item => {
        return{
            year: parseInt(item.ORD_DATE.slice(0, 5)),
            month: parseInt(item.ORD_DATE.slice(5, 8)),
            day: parseInt(item.ORD_DATE.slice(8, 11)),
            amount: item.ORD_AMOUNT                 
        }
    });

    paymentFigures.sort(function(a, b){
        return a.year - b.year || 
            a.month - b.month || 
            a.day - b.day
    });

    let dataSets = [
        {
            label: "",
            data: (function(){
                let data = [];
                data.length = 12;
                data.fill(0);
                return data;
            })() //this is actually calling itself
        }
    ];
    let yearIndex = 0;

    for(var i = 0; i < paymentFigures.length; i++){ //inefficient but less complex, 

        //const prevIndex = (i -1) >= 0 || 0;       console.log(prevIndex);
        let prevIndex = Math.max(i - 1, 0);
        const year = paymentFigures[i].year;
        const yearFromPreviousPayment = paymentFigures[prevIndex].year;

        if(year !== yearFromPreviousPayment){
            yearIndex++;
            dataSets[yearIndex] = {
                label: "",
                data: (function(){
                    let data = [];
                    data.length = 12;
                    data.fill(0);
                    return data;
                })()                     
            }
        }  

        //console.log(`i=${i}`)
        //console.log(JSON.stringify(paymentFigures[i]));


        const monthIndex = paymentFigures[i].month - 1;
        dataSets[yearIndex].data[monthIndex] += paymentFigures[i].amount;
        dataSets[yearIndex].label = paymentFigures[i].year.toString();
    };

    return dataSets;
}
//}

export {
    getMonthlyEarningsByYear
}