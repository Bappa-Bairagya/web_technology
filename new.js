class mycar{
    constructor(name,year){
this.name=name;
this.year=year;
    }
    age(){
        const date= new Date();
        return date.getFullYear() - this.year
    }
}
const car=new mycar("bappa",2003)

console.log(car.age());
