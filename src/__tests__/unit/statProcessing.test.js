import { getMonthlyEarningsByYear } from "../../js/statProcessing";

it("processes weekly anonymous earnings for each year", () => {
    //let statProcessor = new StatProcessor();
    const earningsDatasets = /* statProcessor. */getMonthlyEarningsByYear(rawData);
    console.log(JSON.stringify(earningsDatasets));
    expect(earningsDatasets[0].label).toBe("2020");
    expect(earningsDatasets[0].data[0]).toBe(400);
    expect(earningsDatasets[1].data[7]).toBe(7500);
});

const rawData = [
    {
        ORD_AMOUNT: 2500,
        ORD_DATE: "2021-08-20w34gwtg43tw34g"
    },
    {
        ORD_AMOUNT: 2500,
        ORD_DATE: "2021-08-18w34gwtg43tw34g"
    },
    {
        ORD_AMOUNT: 100,
        ORD_DATE: "2020-01-17sedrfgsregsergerg"
    },
    {
        ORD_AMOUNT: 300,
        ORD_DATE: "2020-01-15sedrfgsregsergerg"
    },    
    {
        ORD_AMOUNT: 1000,
        ORD_DATE: "2020-02-06---56-56-56"
    },
    {
        ORD_AMOUNT: 200,
        ORD_DATE: "2020-03-29999999999999"
    },
    {
        ORD_AMOUNT: 2500,
        ORD_DATE: "2021-08-07w34gwtg43tw34g"
    }
]