
export let calculatorMixin = Base => class extends Base {
    calc() { }
};

export let randomizerMixin = Base => class extends Base {
    randomize() { }
};

export class Foo { }
export class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

