/* ==== HOLD INFORMATION FOR EACH PRODUCT ==== */

import Product from "../models/products";

// Product has a ID, Name, Price, Image and if item is checked
export const PRODUCTS = [
  new Product("i1", "Army Logo Playing Cards", 1.99, "https://vfwstoreproducts.azureedge.net/images/supply/1380-L.gif", false),
  new Product("i2", "US/ARMY Flag Pin", 3.50, "https://vfwstoreproducts.azureedge.net/images/supply/1604-L.gif", false),
  new Product("i3", "7 Emblem Set", 2800.00, "https://vfwstoreproducts.azureedge.net/images/supply/3409-L.gif", false),
];
