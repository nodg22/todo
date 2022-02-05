export class TodoItem {
    
    sconstructor(id: number, task: string, complete: boolean = false) {
        
    }
    public printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)": ""}`);
    }
}