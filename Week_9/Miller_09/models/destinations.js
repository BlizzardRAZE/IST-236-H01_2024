// Create Destinations model to hold information for each Destination
class Destination {
    constructor(id, countryId, destinationName, destinationCost, destinationFoundedYear, destinationUserRating, destinationDescription, destinationImageURL){
        this.id = id;
        this.countryId = countryId;
        this.destinationName = destinationName;
        this.destinationCost = destinationCost;
        this.destinationFoundedYear = destinationFoundedYear;
        this.destinationUserRating = destinationUserRating;
        this.destinationDescription = destinationDescription;
        this.destinationImageURL = destinationImageURL;
    }

    // Output Destination Description
    toString() {
        return `${this.destinationDescription}`;
      }

}

// Export to other files
export default Destination;