
var mobJson='{"productId":1000,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'

var mobJson_object=JSON.parse(mobJson);

console.log(mobJson_object.seller["name"]+" "+"shipped a "+mobJson_object.product["name"]+" "+mobJson_object.product["series"]+" "+"worth "+mobJson_object["price"]+" "+"with productId:"+mobJson_object.productId);