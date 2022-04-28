import StatProcessor from "../../js/StatProcessor";

it("processes weekly anonymous earnings for each year", () => {
    let statProcessor = new StatProcessor();
    const earningsDatasets = statProcessor.getMonthlyEarningsByYear(rawData);
    expect(earningsDatasets[0].label).toBe("2020");
});

const rawData = [
    {
        ORD_AMOUNT: 100,
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
        ORD_DATE: "2021-01-20w34gwtg43tw34g"
    }
]