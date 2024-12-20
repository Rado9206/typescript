export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.craeteAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task stworzony ${this.craeteAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
