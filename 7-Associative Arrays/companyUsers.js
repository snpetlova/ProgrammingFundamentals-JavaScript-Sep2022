function companyUsers(arr) {

   let res = {};
   
   arr.forEach(line => {
    let [companyName, personID] = line.split(' -> ');

    if (!res.hasOwnProperty(companyName)) {
        res[companyName] = [];
    }
    res[companyName].push(personID);
   });

   let sortedCompanies = Object.entries(res).sort((a,b) => a[0].localeCompare(b[0]));

   sortedCompanies.forEach(el => {
    const companyName = el[0];
    const allIDs = el[1]
    console.log(companyName);

    let uniqueIDs = new Set(allIDs); // set saves only unique values
    for(const id of uniqueIDs) {
        console.log(`-- ${id}`);
    }
   });

}companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])