/**
 * Created By : Pramod Kumar  
 */
import { Component, OnInit,NgZone} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { LibraryService } from '../../../services/library/library.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-library-add',
	templateUrl: './library-add.component.html',
	styleUrls: ['./library-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class LibraryAddComponent implements OnInit {
	// create libraryAddForm of type FormGroup
	libraryAddForm: FormGroup;
	index: any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private libraryService: LibraryService, private toastr: ToastrService,private ngZone: NgZone) {

		// Check for route params
		this.route.params.subscribe(params => {
			this.index = params['id'];
			// check if ID exists in route & call update or add methods accordingly
			if (this.index && this.index !== null && this.index !== undefined) {
				this.getLibraryDetails(this.index);
			} else {
				this.createForm(null);
			}
		});
		
	}

	ngOnInit() {
	}

	// Submit library details form
	doRegister(){
		if(this.index===undefined)
		{
			this.libraryService.doRegisterLibrary(this.libraryAddForm.value, this.index).subscribe(
				(res) => {
				  console.log('Library successfully created!')
				  this.toastr.success('Library successfully created!', 'Success');
				  this.ngZone.run(() => this.router.navigateByUrl('/library'))
				}, (error) => {
				  console.log(error);
				});
		}else{
			// Submit student details form
	
			this.libraryService.updateLibrary(this.libraryAddForm.value, this.index).subscribe(
				(res) => {
				  console.log('User Updated successfully!')
				  this.toastr.success('User successfully updated!', 'Success');
				  this.ngZone.run(() => this.router.navigateByUrl('/users'))
				}, (error) => {
				  console.log(error);
				});
		}
		 
	}


	// If this is update form, get user details and update form
	getLibraryDetails(id) {
		this.libraryService.getLibraryDetails(id).subscribe(
        data => {
		  let libraryDetail ={libraryData:data} ;
		  console.log(data);
         this.createForm(libraryDetail);
          return;
        },
        error => {
          console.log(error);
        });

		
	}

	// If this is update request then auto fill form
	createForm(data) {
		if (data === null) {
			this.libraryAddForm = this.formBuilder.group({
				bookName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				authorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				publishOn: ['', [Validators.required, ValidationService.checkLimit(1000, 9999999999)]],
				authorEmail: ['', [Validators.required, ValidationService.emailValidator]]
			});
		} else {
			this.libraryAddForm = this.formBuilder.group({
				bookName: [data.libraryData.bookName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				authorName: [data.libraryData.authorName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				publishOn: [data.libraryData.publishOn, [Validators.required, ValidationService.checkLimit(1000, 9999999999)]],
				authorEmail: [data.libraryData.authorEmail, [Validators.required, ValidationService.emailValidator]]
			});
		}
	}

}

/**
 * Created By : Pramod Kumar  
 */