import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  declarations: [DashboardComponent, DetailComponent],
  imports: [CommonModule, HomeRoutingModule, LoaderModule],
  exports: [DashboardComponent,DetailComponent],
})
export class HomeModule {}
