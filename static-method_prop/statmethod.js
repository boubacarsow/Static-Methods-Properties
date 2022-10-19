class Governor {
    static doSomething1(governs){
        console.log('governs');
    }

    static doAnother(signDecrees){
        console.log('sign decrees');
    }

    static veto(laws){
        console.log('veto laws');
    }
}

Governor.veto();
Governor.doSomething1();
Governor.doAnother();


class Person {
    constructor(age, eyes, hair){
        this.eyes = eyes;
        this.hair = hair;
        this.age = age;
        //... more of the same
    }
    //methods
    aMethod(){
        console.log('ima method');
    }
}

class PostalWorker extends Person {
    constructor(a,b,c,d){
        super(a,b,c);
        this.d = d;
    }
    newMethod(){
        console.log('ima method');

    }
}

class Chef extends Person {
    constructor(a,b,c,d){
        super(a,b,c);
        this.d = d;
    }
    newMethod(){
        console.log('ima method');

    }
}