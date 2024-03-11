// Create Countries model to hold information for each country
class Country {
    constructor(id, countryName, countryImageURL){
        this.id = id; 
        this.countryName = countryName; 
        this.countryImageURL = countryImageURL;
    }

    
}

// Export to other files
export default Country;