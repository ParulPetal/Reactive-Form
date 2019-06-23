
import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const cnfpassword = control.get('cnfpassword');
  if (password.pristine || cnfpassword.pristine) {
    return null;
  }
  return password && cnfpassword && password.value !== cnfpassword.value ? { 'misMatch': true } : null;
}