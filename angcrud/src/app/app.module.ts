import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { StudentEditComponent } from './components/student/edit/student-edit.component';

import { LibraryListComponent } from './components/library/list/library-list.component';
import { LibraryDetailsComponent } from './components/library/details/library-details.component';
import { LibraryAddComponent } from './components/library/add/library-add.component';
//import { LibraryEditComponent } from './components/library/edit/library-edit.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { AppRoutingModule } from './app-routing.module';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { GroupsAddComponent } from './components/groups/groups-add/groups-add.component';
import { DetailComponent } from './components/groups/detail/detail.component';

import { LayoutComponent } from './components/layout/layout.component';






@NgModule({
	declarations: [
		AppComponent,
		StudentListComponent,
		StudentDetailsComponent,
		StudentAddComponent,
		StudentEditComponent,
		LoginComponent,
		HomeComponent,
		FilterPipe,
		PhonePipe,
		HighlightStudentDirective,
		GroupsListComponent,
		GroupsAddComponent,
		DetailComponent,		
		LayoutComponent,
		LibraryListComponent,
		LibraryDetailsComponent,
		LibraryAddComponent
				
		
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
	],
	providers: [AuthService, UserService, StudentService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
