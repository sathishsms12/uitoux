import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailForm: any = FormGroup;
  constructor(private toastr: ToastrService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.emailForm.get('email');
  }
  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Form Submitted!', this.emailForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
