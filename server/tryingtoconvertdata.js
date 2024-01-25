const safeBackupData = [
    { Supplier_id: 'S_008', OnTimeDeliveries: 17 , KPI:123},
    { Supplier_id: 'S_011', OnTimeDeliveries: 12 , KP1:256},
    { Supplier_id: 'S_015', OnTimeDeliveries: 10 , KPI:1024}];



//console.log(nivoBarChartData);
// Extract the name of the first key
const firstKey = Object.keys(safeBackupData[0])[0];

// Extract the names of the rest of the keys
const restOfKeys = Object.keys(safeBackupData[0]).slice(1);

console.log("First Key:", firstKey);
console.log("Rest of the Keys:", restOfKeys);


// Function to execute a query and return a Promise
const convertdata = (data) => {
    const nivoBarChartData = data.map(item => ({
        id: item.Supplier_id,
        value: item.OnTimeDeliveries
      }));
    return nivoBarChartData;
  };
  
  // Export the executeQuery function
  module.exports = executeQuery;
  module.exports = {
      convertdata,
    };