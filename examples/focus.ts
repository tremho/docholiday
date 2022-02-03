
let calculatorMixin = Base => class extends Base {
    calc() { }
};

let randomizerMixin = Base => class extends Base {
    randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

