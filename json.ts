let item = {
    "_id": "clkf5kmkg00005p7zwyyc36bk",
    "productId": "11003",
    "productPrice": 3950,
    "qty": 1,
    "productData": "{\"price\": 3950, \"gender\": \"Men\", \"ageGroup\": \"Adults-Men\", \"brandName\": \"Puma\", \"createdBy\": \"ADMIN\", \"createdOn\": \"2023-07-23T08:02:30.163Z\", \"productId\": \"11003\", \"statusCode\": 1, \"variantName\": \"Fluctuation Red 154\", \"lastUpdatedBy\": null, \"lastUpdatedOn\": \"2023-07-23T08:02:30.163Z\", \"displayCategories\": \"Accessories\", \"productDisplayName\": \"Puma Men Fluctuation Red Dial Watch\", \"subCategory_typeName\": \"Watches\", \"masterCategory_typeName\": \"Accessories\", \"styleImages_default_imageURL\": \"http://cdn:80/images/11003.jpg\", \"productDescriptors_description_value\": \"<p>This watch from puma comes in a heavy duty design. The assymentric dial and chunky casing gives this watch a tough appearance perfect for navigating the urban jungle.<br /><br /><strong>Dial shape</strong>: Rectangle<br /><strong>Case diameter</strong>: 32 cm<br /><strong>Warranty</strong>: 2 Years<br /><br />Plastic case with a fixed bezel for added durability, style and comfort<br />Textured rubber straps with a tang clasp for comfort and style<br />Black dial with cat logo on the dial<br />Digital time display<br />Solid case back made of stainless steel for enhanced durability<br />Water resistant upto 100 metres</p>\"}",
    "orderId": "b016e03d-87ab-477f-b477-63df7482747e",
    "createdOn": 1690099445661,
    "createdBy": "USR_314b7038-fed5-41c2-ae9c-a272eaa5d1e4",
    "lastUpdatedOn": 1690099445824,
    "lastUpdatedBy": null,
    "statusCode": 1
};

console.log("Before: item = " + JSON.stringify(item, null,2));
console.log("\n######################################### +++++++++++++++++++++++++++++++++++ #####################################\n")

item.productData = JSON.parse(item.productData)

console.log("After: item = " + JSON.stringify(item, null, 2));
