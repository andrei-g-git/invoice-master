export default class StatProcessor{
    constructor(/* data */){
        //this.rawStats = data;
    }

    // setStats(data) {
    //     this.rawStats = data;
    // }

    getMonthlyEarningsByYear(paymentsAndDates){
        // const rawDates = paymentsAndDates.map(item => item.ORD_DATE);
        // const payments = paymentsAndDates.map(item => item.ORD_AMOUNT);
        // const validDates = rawDates.map(item => item.slice(0, 11)); //"yyyy-mm-dd"




        // const dateObjects = validDates.map(item => { 
        //     return {
        //         year: parseInt(item.slice(0, 5)),
        //         month: parseInt(item.slice(5, 8)),
        //         day: parseInt(item.slice(8, 11)) 
        //     }
        // });

        const paymentFigures = paymentsAndDates.map(item => {
            return{
                year: parseInt(item.slice(0, 5)),
                month: parseInt(item.slice(5, 8)),
                day: parseInt(item.slice(8, 11)),
                amount: item.ORD_AMOUNT                 
            }
        });

        let dataSets = [];
        let yearIndex = 0;
        let monthIndex = 0;
        let data = [0];

        for(var i = 0; i < dateObjects.length; i++){
            let prevIndex = (i - 1) >= 0 || 0;
            //if(i > 0){
                const year = dateObjects[i].year;
                const yearFromPreviousPayment = dateObjects[prevIndex].year;
                const month = dateObjects[i].month;
                const monthFromPreviousPayment = dateObjects[prevIndex].month;

                if(year === yearFromPreviousPayment){
                    
                    if(month === monthFromPreviousPayment){
                        data[monthIndex] += payments[i]; //this isn't going to work if the payments aren't already sorted by date ...
                    }
                }

                dataSets[yearIndex] = {
                    label: 
                    data
                }                
            //}

        }
    }
}