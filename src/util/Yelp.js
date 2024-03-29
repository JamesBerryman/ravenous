const apiKey = "iCho3GNt3xhxqEoPIoJuzCurELTPEn5F2_Ue70uR8ioqG0KRmmiHRkpoiGDHv6-alt72_5EcYHxswmK-lWUgswRo5YJnRsdZleV632M7bwHFBKwREYlxm9VQ2J9_XXYx"

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
              },
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
              if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business =>  {
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.location.cateogry,
                    rating: business.location.rating,
                    reviewCount: business.location.review_count
                    }
                });
              }
          })

        }
};

export default Yelp;