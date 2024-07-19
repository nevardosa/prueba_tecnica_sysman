import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroComponent } from './components/libro/libro.component';
import { NuevoLibroComponent } from './components/nuevo-libro/nuevo-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';


const routes: Routes = [
  { path: 'libro', component: LibroComponent },
  { path: 'nuevolibro', component: NuevoLibroComponent },
  { path: 'actualizarLibro/:id', component: ActualizarLibroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'LibroComponent' },
  { path: '**', pathMatch: 'full', redirectTo: 'LibroComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
