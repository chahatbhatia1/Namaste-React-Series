import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

/** 
* Header
	- Logo
	- Nav Items
	- Cart Icon
* Body
	- Search
	- RestaurantContainer
		- RestaurantCard
* Footer
	- Copyright
	- Links
    - Address
	- Contact
**/

const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "680128",
        "name": "The Burger Comopany\t",
        "uuid": "226baec8-3f85-4247-aa55-f519d25e165c",
        "city": "113",
        "area": "North Ajmer",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "2fef59a8d61cc3861c8f0fc1cbf12a8c",
        "cuisines": [
          "Fast Food",
          "Italian",
          "Beverages",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 4.5,
        "slugs": {
          "restaurant": "the-burger-comopany-north-ajmer-north-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "anasagar circular road jeevan vihar colony main road, opposite hotel lake vinora, LIC Colony, Ajmer, Rajasthan 305004, India",
        "locality": "Anasagar Circular Road",
        "parentId": 406417,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6307681~p=1~eid=00000187-d0d3-7dfb-1462-02c6004a0116",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "680128",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 4.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "127969",
        "name": "Cafe Ate Pm",
        "uuid": "fd09da23-782c-44b5-b33b-d4466f76cfea",
        "city": "113",
        "area": "South Ajmer",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "pzwrnmjnz5hkxberl6w3",
        "cuisines": [
          "Pastas",
          "Chinese",
          "Burgers",
          "Ice Cream",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "cafe-ate-pm-dhola-bhata-colony-central-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "OPP Saint Paul's school alwar gate ajmer",
        "locality": "Dhola Bhata Colony",
        "parentId": 52393,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "127969",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121260",
        "name": "7 Spices",
        "uuid": "87154298-2f63-400e-9129-af9d2bfddfb8",
        "city": "113",
        "area": "Railway Quarters",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "esguwqlbgdwlpvgx5vzl",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.10000000149011612,
        "slugs": {
          "restaurant": "7-spices-dhola-bhata-colony-central-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "Near Ajanta Cinema, Siddhi Complex, Dhola Bhata Colony, Ajmer",
        "locality": "",
        "parentId": 5054,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "121260",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.10000000149011612,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "644804",
        "name": "Rominus Pizza & Burger",
        "uuid": "e89a18e2-576c-4c2f-bee9-2ee2ad1565aa",
        "city": "113",
        "area": "Vaishali Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        "cuisines": [
          "Pizzas",
          "Snacks",
          "Beverages",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "rominuz-pizza-and-burger-north-ajmer-north-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "AJGF 19,20,21 Ground Floor Cine Mall, Gaurav Path, Vaishali Nagar, Ajmer, Rajasthan, 305004",
        "locality": "Gaurav Path",
        "parentId": 8387,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6594026~p=4~eid=00000187-d0d3-7dfb-1462-02c7004a045d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "644804",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
]

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44oEigIja_Oc2XIpDMQVSHrpTS1AZq6gjNA&usqp=CAU" alt="" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const RestaurantCard = ({resData}) => {
	const {name, cuisines, avgRating, cloudinaryImageId, maxDeliveryTime, costForTwo} = resData?.data;

	return (
		<div className="res-card">
			<img className="res-img" 
				src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} 
				alt="res-img" 
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>⭐️ {avgRating}</h4>
			<h4>{maxDeliveryTime} mins</h4>
			<p>{`₹${costForTwo/100} FOR TWO`}</p>
		</div>
	)
}

const Body = () => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

	return (
		<div className="body">
			<div className="search">
            <input 
                type="text" 
                placeholder="Search some restaurants..." 
                onChange={handleChange}
                value={searchText}
            />   
            </div>
			<div className="restaurant-container">
				{resList.map((resObj) => (
					<RestaurantCard key={resObj?.data?.id} resData={resObj} />
				))}
			</div>
		</div>
	)
}

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			{/* this is a comment */}
			<Body />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);