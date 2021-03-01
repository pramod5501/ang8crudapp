/**
 * Created By : Pramod Kumar  
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { LibraryService } from '../../../services/library/library.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-libsrary-list',
	templateUrl: './library-list.component.html',
	styleUrls: ['./library-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class LibraryListComponent implements OnInit {
	libraryList: any;
	libraryListData: any;
	constructor(private libsraryService: LibraryService, private toastr: ToastrService) { }
	// Call library list function on page load
	ngOnInit() {
		this.getLibrarytList();
	}

	// Get library list from services
	getLibrarytList() {
		let userList = this.libsraryService.getAllLibrary().subscribe(
        data => {
          this.libraryListData = data;
          console.log(data);
          return;
        },
        error => {
          console.log(error);
        });
      
		
	}



	// Delete a library with its index

	  deleteLibrary(library,index) {
    if(window.confirm('Are you sure?')) {
         this.libsraryService.deleteLibrary(library._id).subscribe((data) => {
          this.libraryListData.splice(index, 1);
        }
      )    
    }
  }

	
}
/**
 * Created By : Pramod Kumar  
 */
