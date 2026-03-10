export default function getHealthSorted (characterList) {
    let str = JSON.stringify(characterList);
    let clone = JSON.parse(str);
    clone.sort((a, b) => b.health - a.health);
    return clone;
}