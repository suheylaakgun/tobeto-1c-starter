let j; //: number => tip tanımıdır
j = 10.5;
console.log(j);
//j değişkeni number tipinde oldu
//string değeri atanamaz; bu Type safe olmak demek...
//fonksiyonda, tanımın bittiği, bloğun başladığı noktada tip tanımı yapılır.
const myFunction = () => {
    return 1;
};
function myFunction2() {
}
let function1 = myFunction();
let function2 = myFunction2();
class ProductService {
    //any ; herhangi bir tip
    getAll() {
        return "Merhaba"; //1, true gibi farklı dönüş tiplerini de any kabul eder.
    }
    getById(id) {
        return { id: 1, name: "Telefon", price: 10 };
    }
}
let productService = new ProductService();
let product = productService.getById(1);
console.log(product.price);
