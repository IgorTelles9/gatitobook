import { AbstractControl } from '@angular/forms';

export function lowercasedValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLocaleLowerCase()) {
    return { not_lowercased: true };
  }
  return null;
}

