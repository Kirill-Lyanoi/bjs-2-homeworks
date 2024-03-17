function parseCount(num) {
   const parseResult = Number.parseFloat(num);
    if(Number.isNaN(parseResult)) {
       throw new Error('Невалидное значение');
    }
    return parseResult;
    }

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(error) {
        console.log("Невалидное значение")
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
    if (a > b + c || b > a + c || c > a + b) {
        throw new Error("Треугольник с такими сторонами не существует");
    }
    }
    get perimeter() {
        return (this.a + this.b + this.c);
    }
    get area () {
        let p = this.perimeter / 2;
        return Number(Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c) ).toFixed(3));
} 
}
function getTriangle(a, b, c) {
   try {
    return new Triangle(a, b, c);
   }
   catch (error) {
    return {
        get perimeter(){
            return 'Ошибка! Треугольник не существует'
        }, 
        get area(){
            return 'Ошибка! Треугольник не существует'
        }
    }
   }
}