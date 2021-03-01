/**
 * Created By : Pramod Kumar  
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Services
import { LibraryService } from '../../../services/library/library.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-library-details',
	templateUrl: './library-details.component.html',
	styleUrls: ['./library-details.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class LibraryDetailsComponent implements OnInit {
	index: any;
	libraryDetail: any;
	constructor(private router: Router, private route: ActivatedRoute, private libraryService: LibraryService, private toastr: ToastrService) {
		// Get user detail index number sent in params
		this.route.params.subscribe(params => {
			this.index = params['id'];

			if (this.index && this.index != null && this.index !== undefined) {
				this.getLibraryDetails(this.index);
			}
		});
	}

	ngOnInit() {
	}

	// Get library details
	getLibraryDetails(id) {
		 this.libraryService.getLibraryDetails(id).subscribe(
        data => {
          this.libraryDetail = data;
         this.toastr.success('User Details', 'Success');
          return;
        },
        error => {
          console.log(error);
        });
		
	}

}

/**
 * Created By : Pramod Kumar  
 */
