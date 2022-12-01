import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalAddComponent } from "./personal/personal-add/personal-add.component";
import { PersonalAdminComponent } from "./personal/personal-admin/personal-admin.component";
import { PersonalEditComponent } from "./personal/personal-edit/personal-edit.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { CargosAddComponent } from "./cargos/cargos-add/cargos-add.component";
import { CargosAdminComponent } from "./cargos/cargos-admin/cargos-admin.component";
import { CargosEditComponent } from "./cargos/cargos-edit/cargos-edit.component";
import { SaludAddComponent } from "./salud/salud-add/salud-add.component";
import { SaludAdminComponent } from "./salud/salud-admin/salud-admin.component";
import { SaludEditComponent } from "./salud/salud-edit/salud-edit.component";
import { PensionAddComponent } from "./pension/pension-add/pension-add.component";
import { PensionAdminComponent } from "./pension/pension-admin/pension-admin.component";
import { PensionEditComponent } from "./pension/pension-edit/pension-edit.component";


const rutas:Routes = [
    { path: '', component: DashboardComponent},

    { path: 'personal', component: PersonalAdminComponent},
    { path: 'personal/add', component: PersonalAddComponent},
    { path: 'personal/edit', component: PersonalEditComponent},

    { path: 'cargos', component: CargosAdminComponent},
    { path: 'cargos/add', component: CargosAddComponent},
    { path: 'cargos/edit', component: CargosEditComponent},
    
    { path: 'salud', component: SaludAdminComponent},
    { path: 'salud/add', component: SaludAddComponent},
    { path: 'salud/edit', component: SaludEditComponent},

    { path: 'pension', component: PensionAdminComponent},
    { path: 'pension/add', component: PensionAddComponent},
    { path: 'pension/edit', component: PensionEditComponent},

  ]
  
@NgModule({
    declarations: [
      DashboardComponent,

      PersonalAdminComponent,
      PersonalAddComponent,
      PersonalEditComponent,

      CargosAddComponent,
      CargosAdminComponent,
      CargosEditComponent,

      SaludAddComponent,
      SaludAdminComponent,
      SaludEditComponent,

      PensionAddComponent,
      PensionAdminComponent,
      PensionEditComponent,
      
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
