const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

let result = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

//Endpoint 7 : Define an endpoint /hotels using the get method.Send all the hotels as a JSON response.//
app.get('/hotels', (req, res) => {
  res.json({ hotels: result });
});

//Endpoint 1: Define an endpoint /hotels/sort/pricing using the get method.Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.Send the sorted hotels as a JSON response.//
const sortByPricing = (hotels, pricing) => {
  if (pricing === 'high-to-low') {
    return hotels.sort((a, b) => b.price - a.price);
  } else {
    return hotels.sort((a, b) => a.price - b.price);
  }
};
app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let hotels1 = result.slice();
  res.json({ hotels: sortByPricing(hotels1, pricing) });
});

//Endpoint 2 : Define an endpoint /hotels/sort/rating using the get method.Define a variable rating to create a condition to sort the hotels based on their rating (high-to-low or low-to-high).Send the sorted hotels as a JSON response.//
const sortByRating = (hotels, rating) => {
  if (rating === 'high-to-low') {
    return hotels.sort((a, b) => b.rating - a.rating);
  } else {
    return hotels.sort((a, b) => a.rating - b.rating);
  }
};
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let hotels2 = result.slice();
  res.json({ hotels: sortByRating(hotels2, rating) });
});

//Endpoint 3 :Define an endpoint /hotels/sort/reviews using the get method.Define a variable reviews to create a condition to sort the hotels “least-to-most” or “most-to-least”.Send the sorted hotels as a JSON response.//
const sortByReviews = (hotels, reviews) => {
  if (reviews === 'most-to-least') {
    return hotels.sort((a, b) => b.reviews - a.reviews);
  } else {
    return hotels.sort((a, b) => a.reviews - b.reviews);
  }
};
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let hotels3 = result.slice();
  res.json({ hotels: sortByReviews(hotels3, reviews) });
});

//Endpoint 4 : Define an endpoint /hotels/filter/amenity using the get method.Implement a function filterByAmenity that returns the hotels of the selected amenity.Send the filtered hotels as a JSON response.//
function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  let hotels4 = result.slice();
  res.json({
    hotels: hotels4.filter((s) => filterByAmenity(s, amenity)),
  });
});

//Endpoint 5 : Define an endpoint /hotels/filter/country using the get method.Implement a function filterByCountry that returns the hotels if it meets the selected country criteria.Send the filtered hotels as a JSON response.//
function filterByCountry(hotel, country) {
  return hotel.country.toLowerCase() === country.toLowerCase();
}
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;
  let hotels5 = result.slice();
  res.json({
    hotels: hotels5.filter((s) => filterByCountry(s, country)),
  });
});

//Endpoint 6 : Define an endpoint /hotels/filter/category using the get method.Implement a function filterByCategory that returns the hotels if it meets the selected category criteria.Send the filtered hotels as a JSON response.//
function filterByCategory(hotel, category) {
  return hotel.category.toLowerCase() === category.toLowerCase();
}
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  let hotels6 = result.slice();
  res.json({
    hotels: hotels6.filter((s) => filterByCategory(s, category)),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
