import { FormControl, ValidationErrors } from "@angular/forms";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

export class Luv2ShopValidators {

    static notOnlyWhitespace(control: FormControl) : ValidationErrors | null{

        if((control.value != null) && (control.value.trim().length === 0)) {
            console.log(`The form control value is ${control.value}`);
            console.log("Return invalid!!")
            return {'notOnlyWhitespace': true}
        }
        else {
            console.log(`The form control value is ${control.value}`);
            console.log("Returning valid!!");
            return null;
        }
    }
}``
