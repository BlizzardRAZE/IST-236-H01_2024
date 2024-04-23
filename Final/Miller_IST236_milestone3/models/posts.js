// Create Posts model to hold information about Post
// It hold an id for a key, districtId to show where the post exists in that district, the post's name (or number),
// postCounty to show where the post is in the county, postAddress to hold an address to the post, postPhoneNumber to hold a phone number,
// postDescription to hold a description about the post, postAddressURL to hold a link to google maps, and a postImageURL to hold a image of the post
class Post {
  constructor(
    id,
    districtId,
    postNumber,
    postCounty,
    postAddress,
    postPhoneNumber,
    postDescription,
    postAddressURL,
    postImageURL
  ) {
    this.id = id;
    this.districtId = districtId;
    this.postNumber = postNumber;
    this.postCounty = postCounty;
    this.postAddress = postAddress;
    this.postPhoneNumber = postPhoneNumber;
    this.postDescription = postDescription;
    this.postAddressURL = postAddressURL;
    this.postImageURL = postImageURL;
  }

  // Output Post Description
  toString() {
    return `${this.postDescription}`;
  }
}

// Export to other Files
export default Post;
