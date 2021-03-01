/**
 * Created By : Pramod Kumar  
 */

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Components
 import { StudentListComponent } from '../student/list/student-list.component';
 import { StudentDetailsComponent } from '../student/details/student-details.component';
 import { StudentAddComponent } from '../student/add/student-add.component';
  import{ StudentEditComponent } from '../student/edit/student-edit.component';

   // Library Components
 import { LibraryListComponent } from '../library/list/library-list.component';
 import { LibraryDetailsComponent } from '../library/details/library-details.component';
 import { LibraryAddComponent } from '../library/add/library-add.component';
  //import{ StudentEditComponent } from '../library/edit/library-edit.component';

 // Services
 import { routerTransition } from '../../services/config/config.service';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router,private toastr: ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
 	}

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: 'users',
 	component: StudentListComponent
 },
 {
 	path: 'users/add',
 	component: StudentAddComponent
 },
 {
 	path: 'users/update/:id',
 	component: StudentEditComponent
 },
 {
 	path: 'users/detail/:id',
 	component: StudentDetailsComponent
 },
 // library
 {
	path: 'library',
	component: LibraryListComponent
},
{
	path: 'library/add',
	component: LibraryAddComponent
},
{
	path: 'library/update/:id',
	component: LibraryAddComponent
},
{
	path: 'library/detail/:id',
	component: LibraryDetailsComponent
}
 ];

/**
 * Created By : Pramod Kumar  
 */
