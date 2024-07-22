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
  constructor(private toastr: ToastrService, private fb: FormBuilder) { }

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
      this.toastr.success('successfully submited', 'Success');
      this.emailForm.controls['email'].setValue('');
      this.emailForm.reset()
    } else {
      this.toastr.warning('Email is invalid', 'Warning');
    }
  }
}
