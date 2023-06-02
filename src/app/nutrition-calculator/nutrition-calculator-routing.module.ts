import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionCalculatorComponent } from './components/nutrition-calculator/nutrition-calculator.component';

const routes: Routes = [{ path: '', component: NutritionCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionCalculatorRoutingModule {}
