import { FormGroup } from '@angular/forms';
export function usernamePasswordSame(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username === password ? { usernamePasswordSame: true } : null;
  }
  return null;
}
