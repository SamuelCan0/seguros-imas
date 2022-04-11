import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public logo='';
  public titulo='';
  public info='';
  public info2='';
  public lista:String[]=[];
  public subTitulo='';
  servicio:String;
  public render="";

  constructor(private aRouter:ActivatedRoute) {
    this.servicio=aRouter.snapshot.paramMap.get("id")!;
  }

  ngOnInit(): void {
    this.notificacion(this.servicio);
  }

  notificacion(tipo:String){
    if(tipo=="vida"){
      this.logo='./assets/imgs/vida.PNG';
      this.titulo='Seguro de Vida';
      this.subTitulo='';
      this.lista=[];
      this.info2='Te cubre el riesgo de muerte, supervivencia e incapacidad. Es decir cubre los riesgos que puedan afectar a la existencia, integridad o salud de las personas.';
      this.info='Un seguro de vida brinda tranquilidad y respaldo económico a tus seres queridos en caso de que llegaras a faltar.';
    }
    if (tipo=="medico") {
      this.logo='./assets/imgs/medico.PNG';
      this.titulo='Seguro de Gastos Médicos Mayores';
      this.subTitulo='¿Que Cubre La Poliza de Gastos Médicos Mayores?';
      this.lista=["Hospitalización","Honorarios Médicos","Medicamentos","Estudios de Laboratorio","Tratamiento"];
      this.info='Brinda la seguridad financiera ante gastos de atención médica en caso de surgir un imprevisto; como un accidente o una enfermedad.';
    }
    if (tipo=="auto") {
      this.logo='./assets/imgs/auto.PNG';
      this.subTitulo='¿Que Cubre el Seguro de Auto?';
      this.lista=["Pérdida Total o Parcial","Gastos médicos para conductor y ocupantes del vehículo","Daños materiales","Responsabilidad Civil","Protección legal."];
      this.titulo='Seguro de Autos';
      this.info='Tenemos paquetes que incluyen diferentes coberturas; Amplia, Limitada; Responsabilidad Civil. Contamos convenios con las mejores aseguradoras del país, con los mejores descuentos.';
    }
    if (tipo=="casa") {
      this.logo='./assets/imgs/danos.PNG';
      this.titulo='Seguro de Daños';
      this.info='Asegura tu patrimonio y tus objetos de valor ante cualquier eventualidad o desastre natural.';
      this.info2='Además, en caso de tu vivienda quede inhabitable, se brinda apoyo para demolición, limpieza y acarreo de escombros.';
      this.lista=['Daños al hogar','Muebles','Ropa','Objetos de valor'];
      this.subTitulo='¿Que Cubre el Seguro de Daños?';
    }
    if (tipo=="empresa") {
      this.logo='./assets/imgs/empresa.PNG';
      this.subTitulo='¿Que Cubre la Poliza de Seguro de Bienes Empresariales?';
      this.titulo='Seguro de Bienes Empresariales';
      this.info='Cubre los daños materiales derivados de la operación normal de la maquinaria y los equipos electrónicos. Brinda protección en caso de robo de mercancías, materia prima, maquinaria y equipo. Dinero y valores.';
      this.lista=['Pérdidas por robo','incapacidad física del portador','Accidente de vehículo, o por incendio o explosión']
    }
    if (tipo=="respon") {
      this.logo='./assets/imgs/respon.PNG';
      this.titulo='Seguro de Responsabilidad Civil';
      this.info='La cobertura de responsabilidad civil cubre los daños ocasionados a terceras personas y/o a sus bienes.';
    }
    if (tipo=="construccion") {
      this.logo='./assets/imgs/constru.png';
      this.titulo='RC Construcción';
      this.info='Cubre los daños que el asegurado pueda causar a un tercero a consecuencia de los trabajos de construcción o ingeniería civil, en obras públicas o privadas en territorio nacional.';
    }
    if (tipo=="finanza") {
      this.logo='./assets/imgs/finanza.png';
      this.titulo='Finanza';
      this.info='Es el acuerdo suscrito en tres partes. Una parte, denominada afianzador (compañía de seguros), se compromete con otra parte denominada beneficiario (asegurado) a responder por el cumplimiento de un tercero denominado contratista, (afianzado)';
    }
    if (tipo=="carga") {
      this.logo='./assets/imgs/transport.PNG';
      this.titulo='Seguro de Carga';
      this.info='Brinda la posibilidad de proteger las mercancías ante la ocurrencia de diversos riesgos que se puedan presentar durante todo su proceso de transporte, ya sea por vía fluvial, férrea, aérea o marítima.';
    }
    if (tipo=="avion") {
      this.logo='./assets/imgs/viaje.PNG';
      this.titulo='Seguro de Viajes';
      this.subTitulo='Usando el Seguro de Viajes Cubres';
      this.lista=['Costos','Pérdidas de eventos inesperados','Beneficios Médicos','Cancelación de viaje','Asistencia las 24 horas'];
      this.info='Aseguramos tu viaje, para que siempre y en cualquier lugar del mundo estés protegido.';
    }
    if (tipo=="maritimo") {
      this.logo='./assets/imgs/maritimo.png';
      this.titulo='Seguro Marítimo';
      this.info='Protege a los armadores y a los cargadores frente a la pérdida del buque o la carga.';
    }
    if (tipo=="resguardo") {
      this.logo='./assets/imgs/trato.png';
      this.titulo='Resguardo';
      this.info='Contrato por el cual un asegurador toma a su cargo, total o parcialmente, un riesgo ya cubierto por otro asegurador, sin alterar lo convenido entre este y el asegurado.';
    }
    if (tipo=="tecnologia") {
      this.logo='./assets/imgs/tecno.png';
      this.titulo='Tecnología';
      this.info='Protección cibernética, la cual protege tu negocio contra los daños causados por un virus o ataque informático, así como ayuda a pegar el costo asociado a las restauración y recreación de datos.';
    }
    if (tipo=="membresia") {
      this.logo='./assets/icons/tarjeta.png';
      this.titulo='Membresía IMAS';
      this.info='La más completa en salud, asistencia médica, dentales, del hogar, y viajes, de comunicación, aprendizaje, ahorro y beneficio. Cuatro diferentes programas integrados en membresías que acompañan a los titulares y sus familias en el cuidado diario de su salud y economía.';
    }
  }

}
