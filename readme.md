# Store API

This API searchs the Database based on passed parameters and return filtered data as a json response.

This documentation describes how to request data from the API.

> GET Request: https://store-api-production-1fca.up.railway.app/api/v1/products?parameters

|Parameter|Description| Type|
|---|---|---|
|featured=| tells if a product is featured | Boolean|
|company= |  company name is provides, value must belong to ["ikea", "liddy", "caressa", "marcos"] | String|
|name=|  name of product, it can also be just a part of name not the whole product name| String|
|fields= | fetch only specified field, if multiple fields : seprate with comma, if missing : fetch all fields| String|
|sort=| sort the fetched data based on provided field in ascending order, to reverse the order write '-' before field, default sorting is based on date createAt| String|
|numericField= | filter on a specific numerical condition (<, <=, =, > or >=).Available numerical fields: price, rating | Number|
|limit=| maximum number of data to be send when request is made, default value is set to 10 | Number|

### Examples:

- fetch all data with featured true and company "caressa"

    [https://store-api-production-1fca.up.railway.app/api/v1/products?featured=true&company=caressa](https://store-api-production-1fca.up.railway.app/api/v1/products?featured=true&company=caressa)

- fetch all data with name containing chair, sorting data with respect to price in descending order and only fetching name, company and price

    [https://store-api-production-1fca.up.railway.app/api/v1/products?name=chair&sort=-price&fields=name,company,price](https://store-api-production-1fca.up.railway.app/api/v1/products?name=chair&sort=-price&fields=name,company,price)

- fetch all data with price<=60 and rating>4, also sorting the data based on name in ascending, price in descending order

    [https://store-api-production-1fca.up.railway.app/api/v1/products?numericField=price<=60,rating>4&sort=name,-price](https://store-api-production-1fca.up.railway.app/api/v1/products?numericField=price<=60,rating>4&sort=name,-price)



[live preview](https://store-api-production-1fca.up.railway.app/)