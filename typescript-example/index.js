var j; //: number => tip tanımıdır
j = 10.5;
console.log(j);
//j değişkeni number tipinde oldu
//string değeri atanamaz; bu Type safe olmak demek...
//fonksiyonda, tanımın bittiği, bloğun başladığı noktada tip tanımı yapılır.
var myFunction = function () {
    return 1;
};
function myFunction2() {
}
var function1 = myFunction();
var function2 = myFunction2();
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    //any ; herhangi bir tip
    ProductService.prototype.getAll = function () {
        return "Merhaba"; //1, true gibi farklı dönüş tiplerini de any kabul eder.
    };
    ProductService.prototype.getById = function (id) {
        return { id: 1, name: "Telefon", price: 10 };
    };
    return ProductService;
}());
