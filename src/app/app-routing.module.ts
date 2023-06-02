import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'nutrition-calculator', pathMatch: 'full' },
  {
    path: 'nutrition-calculator',
    loadChildren: () =>
      import('./nutrition-calculator/nutrition-calculator.module').then((m) => m.NutritionCalculatorModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
