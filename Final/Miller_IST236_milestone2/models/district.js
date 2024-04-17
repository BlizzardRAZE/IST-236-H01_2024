// Create Districts model to hold information about Districts
// It hold an id for a key, districtState to say where its pulling the districtNumbers from, and a districtNumber to show the districts in the state
class District {
  constructor(id, districtState, districtNumber) {
    this.id = id;
    this.districtState = districtState;
    this.districtNumber = districtNumber;
  }
}

// Export to other Files
export default District;
