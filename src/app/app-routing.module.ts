import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [

  {
    path: '',
    component: TeacherComponent,
  },
  {
    path: 'students',
    component: StudentComponent,
  },
  {
    path: '**',
    component: TeacherComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
