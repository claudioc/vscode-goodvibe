
/* A class for smartobjects */
class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => {
          console.log("This is a string")
          console.log(this.isActive + " : " + this.isDisposed)
        }, 500);
    }

    interact() {
        this.activate();
    }

    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
