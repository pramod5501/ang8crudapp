/**
 * Created By : Pramod Kumar  
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentListComponent implements OnInit {
	studentList: any;
	studentListData: any;
	constructor(private studentService: StudentService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		this.getStudentList();
	}

	// Get student list from services
	getStudentList() {
		let userList = this.studentService.getAllStudents().subscribe(
        data => {
          this.studentListData = data;
          console.log(data);
          return;
        },
        error => {
          console.log(error);
        });
      
		
	}



	// Delete a student with its index

	  deleteStudent(student,index) {
    if(window.confirm('Are you sure?')) {
         this.studentService.deleteStudent(student._id).subscribe((data) => {
          this.studentListData.splice(index, 1);
        }
      )    
    }
  }

	
}
/**
 * Created By : Pramod Kumar  
 */
