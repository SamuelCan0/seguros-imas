import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public logo='';
  public titulo='';
  public info='';
  servicio:String;
  public render="";

  constructor(private aRouter:ActivatedRoute) {
    this.servicio=this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.verificar();
  }

  verificar(){
    if (this.servicio==null) {
    }else{
      this.notificacion(this.servicio.toString());
      $('.offcanvas-start').toggleClass('open')
    }
  }


  notificacion(tipo:string){
    if(tipo=="vida"){
      this.logo='./assets/icons/cruz.png';
      this.titulo='Seguro de Vida';
      this.info='cubre el riesgo de muerte, supervivencia e incapacidad. Es decir cubre los riesgos que puedan afectar a la existencia, integridad o salud de las personas.';
    }
    if (tipo=="medico") {
      this.logo='./assets/icons/corazon.png';
      this.titulo='Seguro de Gastos Médicos Mayores';
      this.info='Brinda la seguridad financiera ante gastos de atención médica en caso de surgir un imprevisto; como un accidente o una enfermedad.';
    }
    if (tipo=="auto") {
      this.logo='./assets/icons/auto.png';
      this.titulo='Seguro de Autos';
      this.info='Tenemos paquetes que incluyen diferentes coberturas; Amplia, Limitada; Responsabilidad Civil. Contamos convenios con las mejores aseguradoras del país, con los mejores descuentos.';
    }
    if (tipo=="casa") {
      this.logo='./assets/icons/casa.png';
      this.titulo='Seguro de Daños';
      this.info='Protegemos tu patrimonio, negocio; contra daños sufridos por los riesgos a los q están expuestos los bienes materiales; así con pérdidas consecuenciales.';
    }
    if (tipo=="empresa") {
      this.logo='./assets/icons/edificio.png';
      this.titulo='Seguro de Bienes Empresariales';
      this.info='Cubre los daños materiales derivados de la operación normal de la maquinaria y los equipos electrónicos. Brinda protección en caso de robo de mercancías, materia prima, maquinaria y equipo.';
    }
    if (tipo=="respon") {
      this.logo='./assets/icons/persona.png';
      this.titulo='Seguro de Responsabilidad Civil';
      this.info='La cobertura de responsabilidad civil cubre los daños ocasionados a terceras personas y/o a sus bienes.';
    }
    if (tipo=="construccion") {
      this.logo='./assets/icons/engrane.png';
      this.titulo='RC Construcción';
      this.info='Cubre los daños que el asegurado pueda causar a un tercero a consecuencia de los trabajos de construcción o ingeniería civil, en obras públicas o privadas en territorio nacional.';
    }
    if (tipo=="finanza") {
      this.logo='./assets/icons/moneda.png';
      this.titulo='Finanza';
      this.info='Es el acuerdo suscrito en tres partes. Una parte, denominada afianzador (compañía de seguros), se compromete con otra parte denominada beneficiario (asegurado) a responder por el cumplimiento de un tercero denominado contratista, (afianzado)';
    }
    if (tipo=="carga") {
      this.logo='./assets/icons/camion.png';
      this.titulo='Seguro de Carga';
      this.info='Brinda la posibilidad de proteger las mercancías ante la ocurrencia de diversos riesgos que se puedan presentar durante todo su proceso de transporte, ya sea por vía fluvial, férrea, aérea o marítima.';
    }
    if (tipo=="avion") {
      this.logo='./assets/icons/avion.png';
      this.titulo='Seguro de Aeronaves';
      this.info='Protección de medios de transportes aéreos, en dónde se obtiene la cobertura de los daños propios al casco, motores y equipo de la aeronave, incluyendo la responsabilidad civil frente a tercero y pasajeros, así como los accidentes personales de la tripulación.';
    }
    if (tipo=="maritimo") {
      this.logo='./assets/icons/barco.png';
      this.titulo='Seguro Marítimo';
      this.info='Protege a los armadores y a los cargadores frente a la pérdida del buque o la carga.';
    }
    if (tipo=="resguardo") {
      this.logo='./assets/icons/candado.png';
      this.titulo='Resguardo';
      this.info='Contrato por el cual un asegurador toma a su cargo, total o parcialmente, un riesgo ya cubierto por otro asegurador, sin alterar lo convenido entre este y el asegurado.';
    }
    if (tipo=="tecnologia") {
      this.logo='./assets/icons/compu.png';
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
