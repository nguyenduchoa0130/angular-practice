import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
  ],
})
export class CounterModule {}
