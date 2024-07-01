import { Routes } from '@angular/router';
import { DetailComponent } from "./components/detail/detail.component";
import { TableComponent } from "./components/table/table.component";
import { BlocksComponent } from "./components/blocks/blocks.component";

export const routes: Routes = [
  { path: 'blocks', component: BlocksComponent },
  { path: 'table', component: TableComponent },
  { path: 'detail/:login', component: DetailComponent },
  { path: '', redirectTo: '/blocks', pathMatch: 'full' }
];
