export default function getHealthSorted (characterList) {
    characterList.sort((a, b) => b.health - a.health)
    return characterList;
}