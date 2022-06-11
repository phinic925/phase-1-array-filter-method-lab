// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(names,search){
    return names.filter(drivers => search.toLowerCase() === drivers.toLowerCase());

}
function fuzzyMatch(names,searchLetter){
    return names.filter(drivers => drivers.startsWith(searchLetter));

}
function matchName(names, nameStr){
    return names.filter(drivers=> drivers.name === nameStr);

}