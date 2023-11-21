import { Component } from '@angular/core';
import { FestivoDto } from './entidades/festivo-dto';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { FestivosService } from './servicios/festivos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Festivos';

  public fechaSeleccionada: any;
  public ano: number = new Date().getFullYear();
  public columnas = [
    { name: 'Festivo', prop: 'festivo' },
    { name: 'Fecha', prop: 'fecha' },
  ];
  public festivos: FestivoDto[] = [];

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivoSeleccion: FestivoDto | undefined;

  constructor(
    private festivosService: FestivosService,

  ) {
  }

  public validarFecha() {
    let fecha = new Date(this.fechaSeleccionada);
    this.festivosService.verificarFecha(fecha).subscribe(
      respuesta => {
        window.alert(respuesta);
      }
    );
  }

  public obtenerFestivos() {
    this.festivosService.obtenerFestivos(this.ano)
      .subscribe(data => {
        this.festivos = data;
      },
        err => {
          window.alert(err.message)
        });
  }
}
