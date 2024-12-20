export class Task {
	name: string
	done: boolean
	category?: Category
    
	private craeteAt: Date

	constructor(name: string, done: boolean, category: Category = Category.GENERAL) {
		this.name = name
		this.done = done
		this.category = category
		this.craeteAt = new Date()
	}

    logCreationDate(extra: string){
        console.log(`Task stworzony ${this.craeteAt} ${extra || ""}`);
    }
}

export enum Category {
	GENERAL = 'general',
	WORK = 'work',
	GYM = 'gym',
	HOBBY = 'hobby',
}