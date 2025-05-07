const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l,w){
    console.log('Solving for rectangle with dimensions:${l},${w}');
    if(l<=0||w<=0){//if statement to make sure if L or W is less than 0
        console.log('rectangle must be greater than zero. values:${l},${w}');}
        else{console.log('Area of rectangle:${rect.area(l,w)}');
            console.log('Perimeter of rectangle: ${rect.perimeter(l.w)}');
    }
}
//calling the function
solveRect(6,2);