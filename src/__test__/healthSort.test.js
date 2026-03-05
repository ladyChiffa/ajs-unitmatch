import getHealthSorted from '../healthSort';

test("healthSort simple", () => {
    const sorted = getHealthSorted([
        {name: "Max", health:10}, 
        {name: "Leo", health:51},
        {name: "Sprite", health:15},
        {name: "Tom", health:32}
    ]);
    expect(sorted).toEqual(
    [
        {name: "Leo", health:51},
        {name: "Tom", health:32},
        {name: "Sprite", health:15},
        {name: "Max", health:10} 
    ]        
    );
});

/*
const dataList = [
    [{name: "Max", health:100}, 'healthy'],
    [{name: "Max", health:51}, 'healthy'],
    [{name: "Max", health:50}, 'wounded'],
    [{name: "Max", health:32}, 'wounded'],
    [{name: "Max", health:15}, 'wounded'],
    [{name: "Max", health:14}, 'critical'],
    [{name: "Max", health:8}, 'critical']
];

const prefix = 'testing healthStatus for %s';
test.each(dataList)(prefix, (myCharacter, status) => {
    const result = getHealthStatus(myCharacter);
    expect(result).toBe(status);
});
*/
