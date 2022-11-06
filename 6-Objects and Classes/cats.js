function cats(array) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        
        let cat = new Cat(name, age);

        cat.meow()
    }


}cats(['Mellow 2', 'Tom 5'])