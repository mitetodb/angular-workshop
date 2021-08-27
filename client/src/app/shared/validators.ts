import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter, startWith, switchMap } from 'rxjs/operators';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null;
    }

    return /^[a-zA-Z0-9\.-]{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {
        invalidEmail: true
    };
}

export function sameValueAsFactory(getTargetControl: () => AbstractControl | null) {
    let subsrciption: Subscription | null = null;

    return function (control: AbstractControl) {

        if (subsrciption) {
            subsrciption.unsubscribe();
            subsrciption = null;
        } 

        const targetControl = getTargetControl();
        if (!targetControl) { 
            return null; 
        }
        
        subsrciption = control.statusChanges
                .pipe(
                    filter(() => false),
                    startWith(null),
                    switchMap(() => targetControl.valueChanges)
                )
                .subscribe({ 
                    next: () => { control.updateValueAndValidity(); },
                    complete: () => {subsrciption = null; } 
                });
        
        return targetControl?.value === control?.value ? null : { sameValue: true };
    }
}
