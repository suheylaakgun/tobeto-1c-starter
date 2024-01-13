let j: number; //: number => tip tanımıdır
j = 10.5;

console.log(j);

//j değişkeni number tipinde oldu
//string değeri atanamaz; bu Type safe olmak demek...

//fonksiyonda, tanımın bittiği, bloğun başladığı noktada tip tanımı yapılır.
const myFunction = () : number => {
    return 1
}

function myFunction2 () : void {

}

let function1 = myFunction();
let function2 = myFunction2();

class ProductService {
    //any ; herhangi bir tip
    getAll() : any {
        return "Merhaba" //1, true gibi farklı dönüş tiplerini de any kabul eder.
    }

    getById(id:number) : Product{
        return {id:1, name:"Telefon", price:10}
    }
}

interface Product{
    id:number,
    name:string,
    price:number
}

let productService = new ProductService();
let product = productService.getById(1);
console.log(product.price);