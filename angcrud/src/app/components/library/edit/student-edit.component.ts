/**
 * Created By : Pramod Kumar  
 */
import { Component, OnInit,NgZone} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-student-edit',
	templateUrl: './student-edit.component.html',
	styleUrls: ['./student-edit.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentEditComponent implements OnInit {
	// create studentAddForm of type FormGroup
	studentEditForm: FormGroup;
	index: any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService, private toastr: ToastrService,private ngZone: NgZone) {

		// Check for route params
		this.route.params.subscribe(params => {
			this.index = params['id'];
			// check if ID exists in route & call update or add methods accordingly
			if (this.index && this.index !== null && this.index !== undefined) {
				this.getStudentDetails(this.index);
			} else {
				this.createForm(null);
			}
		});
		
	}

	ngOnInit() {
	}

	// Submit student details form
	updateUser(){
console.log(this.index);
		 this.studentService.updateUser(this.studentEditForm.value, this.index).subscribe(
        (res) => {
          console.log('User Updated successfully!')
          this.toastr.success('User successfully updated!', 'Success');
          this.ngZone.run(() => this.router.navigateByUrl('/users'))
        }, (error) => {
          console.log(error);
        });
	}
	

	// If this is update form, get user details and update form
	getStudentDetails(id) {
		this.studentService.getStudentDetails(id).subscribe(
        data => {
          let studentDetail = data;
         this.createForm(studentDetail);
          return;
        },
        error => {
          console.log(error);
        });

		
	}

	// If this is update request then auto fill form
	createForm(studentData) {
		if (studentData === null) {
			this.studentEditForm = this.formBuilder.group({
				first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				phone: ['', [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
				email: ['', [Validators.required, ValidationService.emailValidator]]
			});
		} else {
			console.log(studentData.firstName);
			this.studentEditForm = this.formBuilder.group({
				first_name: [studentData.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				last_name: [studentData.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				phone: [studentData.phone, [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
				email: [studentData.email, [Validators.required, ValidationService.emailValidator]]
			});
		}
	}

}

/**
 * Created By : Pramod Kumar  
 */