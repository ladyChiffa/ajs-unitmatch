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
