// Create Product model to hold information about Products
// It hold an id for a key, productName for the product, productPrice for the price, and image of the Product 
class Product {
    constructor(id, productName, productPrice, productImageURL) {
      this.id = id;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productImageURL = productImageURL;
    }
  }
  
  // Export to other Files
  export default Product;
  