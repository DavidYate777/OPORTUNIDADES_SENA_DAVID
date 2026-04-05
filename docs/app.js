// ══════════════════════════════════════════
//   DATOS BASE — 67 empresas divididas en secciones
// ══════════════════════════════════════════
const EMPRESAS_BASE = [
  {id:1,seccion:1,empresa:"VC@SOFT S A S",contacto:"Michell Gonzalez",direccion:"Cll 100 No. 17 A 36 Ofc 601",telefono:"6219348",correo:"sg-sst@vc-soft.com",fechaInicio:"03/03/2026",fechaFin:"31/12/2026"},
  {id:2,seccion:1,empresa:"INFORMATION WORKERS S.A.S",contacto:"VIVIANA LOZANO",direccion:"cra 13 93-35",telefono:"3208587339",correo:"recursohumano@iwco.co",fechaInicio:"03/03/2026",fechaFin:"30/04/2026"},
  {id:3,seccion:1,empresa:"GENSER POWER COLOMBIA",contacto:"Julian Andres Castañeda",direccion:"calle 100 13-21",telefono:"3102522520",correo:"Julian.castaneda@genserpower.com",fechaInicio:"04/03/2026",fechaFin:"19/08/2026"},
  {id:4,seccion:1,empresa:"VASS CONSULTORIA DE SISTEMAS COLOMBIA S A S",contacto:"Carrolina Molano",direccion:"Carrera 7 No. 76-57",telefono:"3142356122",correo:"carolina.molano@vasscompany.com",fechaInicio:"04/03/2026",fechaFin:"31/05/2026"},
  {id:5,seccion:1,empresa:"CONTINENTAL ASSIST COLOMBIA S A S",contacto:"N/A",direccion:"Autopista Norte 114-44",telefono:"3172759174",correo:"lrojas@continentalassist.com",fechaInicio:"05/03/2026",fechaFin:"30/06/2026"},
  {id:6,seccion:1,empresa:"ENFRAGEN COLOMBIA SAS",contacto:"Dahyana Hernandez",direccion:"Carrera 11 79-35",telefono:"3162868845",correo:"dahyana.hernandez@enfragen.com",fechaInicio:"05/03/2026",fechaFin:"07/08/2026"},
  {id:7,seccion:1,empresa:"TICSOCIAL SAS",contacto:"Tiffany Galindo",direccion:"calle 26 a 13-97 Edificio Bulevar Tequendama",telefono:"3160259088",correo:"nomina@ticsocial.com.co",fechaInicio:"06/03/2026",fechaFin:"30/04/2026"},
  {id:8,seccion:1,empresa:"NTT DATA COLOMBIA S.A.S.",contacto:"N/A",direccion:"N/A",telefono:"N/A",correo:"mariaisabel.rodriguezarias@nttdata.com",fechaInicio:"09/03/2026",fechaFin:"30/04/2026"},
  {id:9,seccion:1,empresa:"JAZZPLAT COLOMBIA S A S",contacto:"Alejandro Sanchez",direccion:"CARRERA 56 9 09",telefono:"3167139467",correo:"cristianalejandr.jcol@masorange.es",fechaInicio:"10/03/2026",fechaFin:"04/04/2026"},
  {id:10,seccion:1,empresa:"UNIVERSIDAD ANTONIO NARIÑO",contacto:"Julian David Amortegui",direccion:"UNIVERSIDAD ANTONIO NARIÑO",telefono:"3017875128",correo:"profesional.gestion.humana2@uan.edu.co",fechaInicio:"10/03/2026",fechaFin:"30/04/2026"},
  {id:11,seccion:1,empresa:"TECPETROL COLOMBIA SAS",contacto:"Maria José Vargas",direccion:"Calle 113 7-80",telefono:"3570000",correo:"tecpetrolrh-colombia@tecpetrol.com",fechaInicio:"10/03/2026",fechaFin:"31/05/2026"},
  {id:12,seccion:1,empresa:"ADO TECHNOLOGIES COLOMBIA SAS",contacto:"JESSICA MONTAÑA",direccion:"CALLE 93 16 46",telefono:"3197157728",correo:"ADMINISTRACION@ADO-TECH.COM",fechaInicio:"10/03/2026",fechaFin:"10/04/2026"},
  {id:13,seccion:1,empresa:"INDUSTRIA MILITAR",contacto:"JOHANA BONILLA",direccion:"BOGOTA (NO ESPECIFICA)",telefono:"207800",correo:"nini.bonilla@indumil.gov.co",fechaInicio:"11/03/2026",fechaFin:"10/04/2026"},
  {id:14,seccion:1,empresa:"COOPERATIVA DE AHORRO Y CREDITO BENEFICIAR",contacto:"BERTHA ROCIO SIERRA LIZARAZO",direccion:"CRA 7 No 34 - 22",telefono:"7490001",correo:"analistath@beneficiar.com.co",fechaInicio:"12/03/2026",fechaFin:"07/04/2026"},
  {id:15,seccion:1,empresa:"IDENTIDAD TELECOM SAS",contacto:"Hernando Reyes Cortes",direccion:"Cra 19 82-14",telefono:"3173995356",correo:"hreyes@identidadtech.com",fechaInicio:"12/03/2026",fechaFin:"16/04/2026"},
  {id:16,seccion:1,empresa:"SOPORTE Y LOGISTICA S.A.S",contacto:"JORGE BONILLA",direccion:"cl 93 15 59",telefono:"8540204",correo:"JORGEB@GROWER2BUYER.COM",fechaInicio:"13/03/2026",fechaFin:"30/06/2026"},
  {id:17,seccion:1,empresa:"GESTION PROFESIONAL EN SOLUCIONES INTEGRALES LTDA",contacto:"Misdalia",direccion:"carrera58b bis128b 50",telefono:"3214527570",correo:"contratacion.gpsi@gmail.com",fechaInicio:"13/03/2026",fechaFin:"30/04/2026"},
  {id:18,seccion:1,empresa:"WORLD VISION INTERNATIONAL",contacto:"N/A",direccion:"N/A",telefono:"N/A",correo:"nicolas_gambasica@wvi.org",fechaInicio:"13/03/2026",fechaFin:"22/04/2026"},
  {id:19,seccion:1,empresa:"SQDM S A S",contacto:"JHOANA GERALDYNE ROBLES",direccion:"Cl. 31 13A - 51",telefono:"3183733929",correo:"JhoanaRobles@sqdm.com",fechaInicio:"16/03/2026",fechaFin:"10/04/2026"},
  {id:20,seccion:1,empresa:"INSTALEAP S.A.S.",contacto:"Sonia Gonzalez",direccion:"calle 92 no. 15-78",telefono:"3157672175",correo:"sonia.gonzalez@instaleap.io",fechaInicio:"16/03/2026",fechaFin:"21/04/2026"},
  {id:21,seccion:1,empresa:"MULLEN LOWE SSP3 S.A.S",contacto:"YURANI HERNANDEZ",direccion:"KR 9 79A 19",telefono:"3102055089",correo:"yurani.hernandez@mullenloweholding.com",fechaInicio:"16/03/2026",fechaFin:"28/05/2026"},
  {id:22,seccion:1,empresa:"E-SOMOS ALIMENTACIÓN SAS",contacto:"N/A",direccion:"KR 14 139 SUR - 64",telefono:"3176355129",correo:"aux_gestionhumana_esa@e-somos.co",fechaInicio:"17/03/2026",fechaFin:"30/04/2026"},
  {id:23,seccion:2,empresa:"ELITE LOGISTICA Y RENDIMIENTO SAS",contacto:"Michel",direccion:"Av esperanza 96-10",telefono:"3156126912",correo:"N/A",fechaInicio:"17/03/2026",fechaFin:"31/12/2026"},
  {id:24,seccion:2,empresa:"HIKVISION COLOMBIA S.A.S.",contacto:"Sebastian Chaparro",direccion:"Calle 116 No. 21-50 Piso 7",telefono:"3102105864",correo:"sebastian.chaparro@hikvision.com",fechaInicio:"18/03/2026",fechaFin:"20/04/2026"},
  {id:25,seccion:2,empresa:"ENERGITEL S.A.S",contacto:"Magda Garcia",direccion:"cra 25 N 68-64",telefono:"3401297",correo:"gestionhumana@energitel.com",fechaInicio:"18/03/2026",fechaFin:"08/04/2026"},
  {id:26,seccion:2,empresa:"YES CONTACT & BPO S.A.S.",contacto:"HEIDY MORA",direccion:"CL 124 45 15",telefono:"3046687878",correo:"RECURSOS@YESBPO.CO",fechaInicio:"18/03/2026",fechaFin:"30/04/2026"},
  {id:27,seccion:2,empresa:"KIBERNUM SAS",contacto:"Angelica Prieto",direccion:"carrera 13 98 21",telefono:"3160258333",correo:"angelica.prieto@kibernum.com.co",fechaInicio:"19/03/2026",fechaFin:"21/04/2026"},
  {id:28,seccion:2,empresa:"PROTELA S.A.",contacto:"Dayana Carrillo",direccion:"Transversal 93 65A-82",telefono:"3176469157",correo:"dayana.carrillo@protela.com",fechaInicio:"19/03/2026",fechaFin:"30/04/2026"},
  {id:29,seccion:2,empresa:"INDIGO PARK COLOMBIA S.A.S.",contacto:"Yudi Guerrero",direccion:"Calle 97a 9a 50",telefono:"3163372495",correo:"seleccion@city-parking.com",fechaInicio:"19/03/2026",fechaFin:"30/04/2026"},
  {id:30,seccion:2,empresa:"FIDUCIARIA LA PREVISORA - FIDUPREVISORA",contacto:"Paula Andrea Sanchez Chaparo",direccion:"CALLE 72 10 03",telefono:"7566633",correo:"sya_psanchez@fiduprevisora.com.co",fechaInicio:"19/03/2026",fechaFin:"10/04/2026"},
  {id:31,seccion:2,empresa:"EKOOMEDIA S.A.S",contacto:"Laura Rodríguez",direccion:"Cra 19 95 55",telefono:"(601) 8052584",correo:"talento@ekoomedia.com",fechaInicio:"20/03/2026",fechaFin:"10/04/2026"},
  {id:32,seccion:2,empresa:"SATELCO INTERACTIVO S.A.S.",contacto:"Paula Camero",direccion:"CR 45 No 122 56",telefono:"3106780673",correo:"pcamerofr@gmail.com",fechaInicio:"20/03/2026",fechaFin:"30/04/2026"},
  {id:33,seccion:2,empresa:"KOA COMPAÑIA DE FINANCIAMIENTO S.A",contacto:"Valentina Bustos Hernadez",direccion:"Carrera 14 No 93 a - 30",telefono:"318 358841",correo:"vbustos@koa.co",fechaInicio:"20/03/2026",fechaFin:"30/04/2026"},
  {id:34,seccion:2,empresa:"NUEVA EPS S.A.",contacto:"Nathaly Ramirez",direccion:"Cra. 85 K 46A - 66",telefono:"4193000",correo:"nathaly.ramirez@nuevaeps.com.co",fechaInicio:"20/03/2026",fechaFin:"17/04/2026"},
  {id:35,seccion:2,empresa:"AMWELL COLOMBIA SAS",contacto:"Diana Espinosa",direccion:"N/A",telefono:"3017717140",correo:"diana.espinosa@amwell.com",fechaInicio:"20/03/2026",fechaFin:"31/05/2026"},
  {id:36,seccion:2,empresa:"SIMIL TECH SAS",contacto:"Alba Luz Peña Arias",direccion:"Calle 127 A No. 46 - 81",telefono:"3114593527",correo:"info@similtech.co",fechaInicio:"24/03/2026",fechaFin:"15/04/2026"},
  {id:37,seccion:2,empresa:"NETACTICA COLOMBIA SAS",contacto:"CAROLINA HERNANDEZ",direccion:"cra 15 88 21",telefono:"3185713623",correo:"admcolombia@netactica.com",fechaInicio:"25/03/2026",fechaFin:"06/04/2026"},
  {id:38,seccion:2,empresa:"GESTION DE SEGURIDAD ELECTRONICA - GSE SA",contacto:"Natalia Gutierrez",direccion:"Carrera 7 77-07",telefono:"3143425044",correo:"gina.gutierrez@paynet.com.co",fechaInicio:"25/03/2026",fechaFin:"10/04/2026"},
  {id:39,seccion:2,empresa:"FUNDACION UNIVERSITARIA MONSERRATE",contacto:"Marta Lucia Gomez",direccion:"CLL 68 62 - 11",telefono:"6013902202",correo:"psicologiagho@unimonserrate.edu.co",fechaInicio:"25/03/2026",fechaFin:"10/04/2026"},
  {id:40,seccion:2,empresa:"DISTRICARGO OPERATIONS S A COLOMBIA",contacto:"Lady Varon",direccion:"Cra. 106 15 25 Manzana22 Bodega 134c",telefono:"3143347969",correo:"lady.varon@grupodistri.com",fechaInicio:"25/03/2026",fechaFin:"15/04/2026"},
  {id:41,seccion:2,empresa:"HIGH TECH SOFTWARE S.A.S",contacto:"N/A",direccion:"cll 72 7 21",telefono:"322 8744573",correo:"Nathaly.garzon@blend360.com",fechaInicio:"25/03/2026",fechaFin:"30/04/2026"},
  {id:42,seccion:2,empresa:"DATAICO S.A.S",contacto:"Valentina Rincon",direccion:"CL 24 24-65",telefono:"3202404889",correo:"seleccion@dataico.com",fechaInicio:"25/03/2026",fechaFin:"25/04/2026"},
  {id:43,seccion:2,empresa:"INFOTRANS COLOMBIA SAS",contacto:"Sandra Bocanegra",direccion:"CL 26 85 D 55 Modulo 7",telefono:"7433281",correo:"sandra.bocanegra@pbs.group",fechaInicio:"25/03/2026",fechaFin:"07/04/2026"},
  {id:44,seccion:3,empresa:"S A C SEGURIDAD AUTOMATIZACION Y CONTROL S.A.S",contacto:"JOHANNA GOMEZ",direccion:"PARQUE EMPRESARIAL OIKOS CIEM OCCIDENTE",telefono:"3160244516",correo:"jgomez@sactecnologia.com",fechaInicio:"25/03/2026",fechaFin:"30/04/2026"},
  {id:45,seccion:3,empresa:"SIEMENS S. A.",contacto:"Juan Hernandez",direccion:"Torre Fura",telefono:"3107741155",correo:"juan.hernandez_perico@siemens.com",fechaInicio:"25/03/2026",fechaFin:"09/04/2026"},
  {id:46,seccion:3,empresa:"SOAIN SOFTWARE ASSOCIATES S A S",contacto:"Sofia Ruiz",direccion:"Calle 100 No 23 10",telefono:"3118013390",correo:"pruiz@soaint.com",fechaInicio:"25/03/2026",fechaFin:"06/04/2026"},
  {id:47,seccion:3,empresa:"COMSISTELCO S.A.S.",contacto:"Paola Andrea Bernal",direccion:"Carrera 20C 75A-27",telefono:"3157803480",correo:"talentohumano@comsistelco.com",fechaInicio:"26/03/2026",fechaFin:"25/04/2026"},
  {id:48,seccion:3,empresa:"Q-VISION (QUALITY VISION TECHNOLOGIES) S.A.",contacto:"sara orozco",direccion:"Edificio Zenn Office Cl. 93 16-46 Ofc. 404 B",telefono:"3017569685",correo:"sorozco@qvision.us",fechaInicio:"26/03/2026",fechaFin:"17/04/2026"},
  {id:49,seccion:3,empresa:"CABIFY SERVICIOS TN S.A.S.",contacto:"Alvaro riaño",direccion:"N/A",telefono:"3166203444",correo:"people@cabify.com",fechaInicio:"26/03/2026",fechaFin:"17/04/2026"},
  {id:50,seccion:3,empresa:"UNIDAD MEDICA Y DE DIAGNOSTICO S A",contacto:"Viviana Brochero",direccion:"Calle 93 19 - 25",telefono:"3157946165",correo:"yisselvbh@colmedica.com",fechaInicio:"27/03/2026",fechaFin:"30/04/2026"},
  {id:51,seccion:3,empresa:"CORPORACION COLOMBIANA DE LOGISTICA - C.C.L.",contacto:"CORPORACION COLOMBIANA DE LOGISTICA",direccion:"AV CALLE 22 68B-75",telefono:"3134880256",correo:"seleccion@ccl.com.co",fechaInicio:"27/03/2026",fechaFin:"09/04/2026"},
  {id:52,seccion:3,empresa:"FALABELLA SERVICIOS SAS",contacto:"Alejandra Rodriguez",direccion:"Calle 99 - 15",telefono:"3132009758",correo:"mrodriguezni@falabella.com.co",fechaInicio:"27/03/2026",fechaFin:"10/04/2026"},
  {id:53,seccion:3,empresa:"FUNDACIÓN ORIÉNTAME",contacto:"Maria Camila Gutierrez Sanchez",direccion:"calle 33 a no 16 - 55",telefono:"3217561326",correo:"cgutierrez@orientame.org.co",fechaInicio:"27/03/2026",fechaFin:"06/04/2026"},
  {id:54,seccion:3,empresa:"ARTEMISA TECH SAS",contacto:"ALEJANDRA BOHORQUEZ",direccion:"calle 75 54 13",telefono:"3209213208",correo:"contabilidad@artemisa.tech",fechaInicio:"27/03/2026",fechaFin:"10/04/2026"},
  {id:55,seccion:3,empresa:"PLANTACIONES UNIPALMA DE LOS LLANOS S.A.",contacto:"N/A",direccion:"KM 23 VIA CUMARAL VERACRUZ",telefono:"3115926410",correo:"CAMILA.AMADOR@UNIPALMA.COM",fechaInicio:"30/03/2026",fechaFin:"09/04/2026"},
  {id:56,seccion:3,empresa:"UNIQUE ARQUITECTURA Y DISEÑO SAS",contacto:"Alejandra Rodriguez",direccion:"cra 51 73 46",telefono:"3165626467",correo:"recursoshumanos@uniqueconcept.com.co",fechaInicio:"30/03/2026",fechaFin:"30/05/2026"},
  {id:57,seccion:3,empresa:"SOFTWARE QUALITY ASSURANCE S.A.",contacto:"Karen Torres",direccion:"Hotel tequendama",telefono:"3102452950",correo:"talentos1.sqa@sqasa.co",fechaInicio:"30/03/2026",fechaFin:"30/04/2026"},
  {id:58,seccion:3,empresa:"LER PREVENCIÓN LTDA",contacto:"Lina Enciso",direccion:"Av Cra 9 123- 86 oficina 604",telefono:"3171758382",correo:"linaenciso@lerprevencion.com",fechaInicio:"31/03/2026",fechaFin:"21/04/2026"},
  {id:59,seccion:3,empresa:"EMPRESA PRUEBA DISTRITO CAPITAL",contacto:"diana sarmiento",direccion:"carrera 13 65-10",telefono:"310000000",correo:"diana@gmail.com",fechaInicio:"31/03/2026",fechaFin:"20/05/2026"},
  {id:60,seccion:3,empresa:"LEGIS EDITORES S.A.",contacto:"lorena Pérez Páez",direccion:"Calle 94 13-72",telefono:"3102146154",correo:"lorena.perz@gmail.com",fechaInicio:"31/03/2026",fechaFin:"17/04/2026"},
  {id:61,seccion:3,empresa:"MERIDIAN CONSULTING LTDA",contacto:"LADY LORENA VINCHERY",direccion:"CALLE 67 7 35",telefono:"7469090",correo:"auxiliargh@meridian.com.co",fechaInicio:"31/03/2026",fechaFin:"18/04/2026"},
  {id:62,seccion:3,empresa:"PERSOM EMPRESA DE SERVICIOS TEMPORALES S.A.S",contacto:"ALEJANDRO GAITAN",direccion:"CR 27C 70 12",telefono:"3160106942",correo:"seleccion@persom.co",fechaInicio:"01/04/2026",fechaFin:"24/04/2026"},
  {id:63,seccion:3,empresa:"TRYCORE SAS",contacto:"Talento Humano",direccion:"Torre Colpatria Cra. 7 24-89 Piso 35-02",telefono:"1111111",correo:"samuel.guerrero@trycore.com.co",fechaInicio:"01/04/2026",fechaFin:"05/05/2026"},
  {id:64,seccion:3,empresa:"BESEDO SUCURSAL COLOMBIA",contacto:"maria ramirez",direccion:"KR 10 97 A - 13 ED BOGOTA ET 606",telefono:"3244541807",correo:"maria.ramirez@besedo.com",fechaInicio:"01/04/2026",fechaFin:"31/07/2026"},
  {id:65,seccion:3,empresa:"CANAL CLIMA S A S",contacto:"MAYERLI FORERO",direccion:"CRA 11 B No 99-25 PISO 10 EDIFICIO WEWORK",telefono:"3245162812",correo:"mayerli.forero@canalclima.com",fechaInicio:"01/04/2026",fechaFin:"31/05/2026"},
  {id:66,seccion:3,empresa:"LOGISMART SOLUCIONES INTELIGENTES DE LOGISTICA SAS",contacto:"Alexandra cardenas",direccion:"Av calle 12 79 A 25",telefono:"3213355801",correo:"yudy.cardenas@pharex.co",fechaInicio:"01/04/2026",fechaFin:"10/04/2026"},
  {id:67,seccion:3,empresa:"BIOTRONITECH COLOMBIA S.A.S",contacto:"Diana Duarte",direccion:"calle 123 N 7 - 50",telefono:"3160185694",correo:"asis.talentohumano@biotronitech.com.co",fechaInicio:"01/04/2026",fechaFin:"30/04/2026"}
];

// ══════════════════════════════════════════
//   ESTADO GLOBAL
// ══════════════════════════════════════════
let usuario       = '';
let registros     = {};
let empresasExtra = [];
let filtroActivo  = 'todos';
let seccionActiva = 1;
let modalId       = null;
let modalEstado   = null;
let modalAplicado = false;

// ══════════════════════════════════════════
//   INIT
// ══════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  usuario = localStorage.getItem('sgva_usuario');
  if (!usuario) { window.location.href = 'index.html'; return; }

  registros     = JSON.parse(localStorage.getItem('sgva_registros') || '{}');
  empresasExtra = JSON.parse(localStorage.getItem('sgva_extras')    || '[]');

  document.getElementById('nombre-usuario').textContent = usuario;
  document.getElementById('avatar-initial').textContent = usuario.charAt(0).toUpperCase();

  actualizarConteosTabs();
  renderTabla();
  actualizarStats();
});

// ══════════════════════════════════════════
//   HELPERS
// ══════════════════════════════════════════
function todasLasEmpresas() {
  return [...EMPRESAS_BASE, ...empresasExtra];
}

function guardar() {
  localStorage.setItem('sgva_registros', JSON.stringify(registros));
  localStorage.setItem('sgva_extras',    JSON.stringify(empresasExtra));
}

function getReg(id) {
  return registros[id] || { aplicado: false, estado: null, descripcion: '' };
}

function formatearFecha(valor) {
  if (!valor) return 'N/A';
  if (valor.includes('/')) return valor;
  const [y, m, d] = valor.split('-');
  return `${d}/${m}/${y}`;
}

// ══════════════════════════════════════════
//   TABS DE SECCIÓN
// ══════════════════════════════════════════
function cambiarSeccion(n) {
  seccionActiva = n;
  filtroActivo  = 'todos';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${n}`).classList.add('active');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('f-todos').classList.add('active');
  document.getElementById('buscador').value = '';
  document.getElementById('table-title').textContent = `Sección ${n}`;
  renderTabla();
}

function actualizarConteosTabs() {
  [1, 2, 3].forEach(s => {
    const count = todasLasEmpresas().filter(e => e.seccion === s).length;
    document.getElementById(`tc-${s}`).textContent = count;
  });
}

// ══════════════════════════════════════════
//   RENDER TABLA
// ══════════════════════════════════════════
function renderTabla() {
  const busq  = document.getElementById('buscador').value.toLowerCase();
  const tbody = document.getElementById('tabla-body');

  const filtradas = todasLasEmpresas().filter(e => {
    if (e.seccion !== seccionActiva) return false;
    const texto = `${e.empresa} ${e.contacto} ${e.correo}`.toLowerCase();
    if (busq && !texto.includes(busq)) return false;
    const reg = getReg(e.id);
    if (filtroActivo === 'aplicadas')  return reg.aplicado;
    if (filtroActivo === 'proceso')    return reg.estado === 'proceso';
    if (filtroActivo === 'finalizado') return reg.estado === 'finalizado';
    if (filtroActivo === 'contratado') return reg.estado === 'contratado';
    return true;
  });

  document.getElementById('count-visible').textContent =
    `${filtradas.length} empresa${filtradas.length !== 1 ? 's' : ''}`;

  if (!filtradas.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="icon">🔍</div>No se encontraron empresas con ese filtro.</div></td></tr>`;
    return;
  }

  const labels = { pendiente:'Sin estado', proceso:'En proceso', finalizado:'Finalizado', contratado:'Contratado' };

  tbody.innerHTML = filtradas.map((e, i) => {
    const reg = getReg(e.id);
    const est = reg.estado || 'pendiente';
    return `
      <tr onclick="abrirModal(${e.id})">
        <td class="td-num">${i + 1}</td>
        <td class="td-empresa">
          <div class="empresa-name" title="${e.empresa}">${e.empresa}</div>
          <div class="empresa-sub">${e.correo}</div>
        </td>
        <td>${e.contacto}</td>
        <td>${e.telefono}</td>
        <td>
          <div class="fecha-range">
            <span class="fecha-inicio">↑ ${formatearFecha(e.fechaInicio)}</span>
            <span class="fecha-fin">↓ ${formatearFecha(e.fechaFin)}</span>
          </div>
        </td>
        <td class="td-aplicado" onclick="event.stopPropagation(); toggleAplicadoDirecto(${e.id})">
          <div class="check-aplicado ${reg.aplicado ? 'activo' : ''}"></div>
        </td>
        <td><span class="estado-badge estado-${est}">${labels[est]}</span></td>
        <td class="td-accion" onclick="event.stopPropagation(); abrirModal(${e.id})">
          <button class="btn-gestionar">Gestionar →</button>
        </td>
      </tr>`;
  }).join('');
}

// ══════════════════════════════════════════
//   STATS
// ══════════════════════════════════════════
function actualizarStats() {
  const vals = Object.values(registros);
  document.getElementById('stat-total').textContent      = todasLasEmpresas().length;
  document.getElementById('stat-aplicadas').textContent  = vals.filter(r => r.aplicado).length;
  document.getElementById('stat-proceso').textContent    = vals.filter(r => r.estado === 'proceso').length;
  document.getElementById('stat-contratado').textContent = vals.filter(r => r.estado === 'contratado').length;
}

// ══════════════════════════════════════════
//   FILTROS
// ══════════════════════════════════════════
function filtrar() { renderTabla(); }

function filtrarEstado(estado) {
  filtroActivo = estado;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`f-${estado}`)?.classList.add('active');
  renderTabla();
}

// ══════════════════════════════════════════
//   TOGGLE APLICADO DIRECTO
// ══════════════════════════════════════════
function toggleAplicadoDirecto(id) {
  const reg = getReg(id);
  reg.aplicado = !reg.aplicado;
  registros[id] = reg;
  guardar();
  renderTabla();
  actualizarStats();
  mostrarToast(reg.aplicado ? '✓ Marcada como aplicada' : 'Marca removida');
}

// ══════════════════════════════════════════
//   MODAL GESTIONAR
// ══════════════════════════════════════════
function abrirModal(id) {
  const emp = todasLasEmpresas().find(e => e.id === id);
  const reg = getReg(id);
  modalId       = id;
  modalEstado   = reg.estado;
  modalAplicado = reg.aplicado;

  document.getElementById('m-empresa').textContent  = emp.empresa;
  document.getElementById('m-contacto').textContent = `👤 ${emp.contacto}  ·  ✉ ${emp.correo}`;
  document.getElementById('m-dir').textContent      = emp.direccion;
  document.getElementById('m-tel').textContent      = emp.telefono;
  document.getElementById('m-correo').textContent   = emp.correo;
  document.getElementById('modal-desc').value       = reg.descripcion || '';

  actualizarToggleUI();
  actualizarEstadoUI();
  document.getElementById('modal-overlay').classList.add('open');
}

function cerrarModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  modalId = null;
}

function cerrarModalOverlay(e) {
  if (e.target === document.getElementById('modal-overlay')) cerrarModal();
}

function toggleAplicado() {
  modalAplicado = !modalAplicado;
  actualizarToggleUI();
}

function actualizarToggleUI() {
  const t = document.getElementById('toggle-aplicado');
  const l = document.getElementById('toggle-label');
  modalAplicado
    ? (t.classList.add('on'),    l.textContent = '¡Ya apliqué a esta empresa!')
    : (t.classList.remove('on'), l.textContent = 'No he aplicado aún');
}

function selEstado(estado) {
  modalEstado = modalEstado === estado ? null : estado;
  actualizarEstadoUI();
}

function actualizarEstadoUI() {
  ['proceso', 'finalizado', 'contratado'].forEach(s => {
    const el = document.getElementById(`opt-${s}`);
    el.className = 'estado-opt';
    if (modalEstado === s) el.classList.add(`selected-${s}`);
  });
}

function guardarModal() {
  if (!modalId) return;
  registros[modalId] = {
    aplicado:    modalAplicado,
    estado:      modalEstado,
    descripcion: document.getElementById('modal-desc').value.trim()
  };
  guardar();
  renderTabla();
  actualizarStats();
  cerrarModal();
  mostrarToast('✓ Cambios guardados correctamente');
}

// ══════════════════════════════════════════
//   MODAL AGREGAR EMPRESA
// ══════════════════════════════════════════
function abrirModalAgregar() {
  document.getElementById('add-empresa').value   = '';
  document.getElementById('add-contacto').value  = '';
  document.getElementById('add-telefono').value  = '';
  document.getElementById('add-correo').value    = '';
  document.getElementById('add-direccion').value = '';
  document.getElementById('add-inicio').value    = '';
  document.getElementById('add-fin').value       = '';
  document.getElementById('add-seccion').value   = String(seccionActiva);
  document.getElementById('error-agregar').style.display = 'none';
  document.getElementById('modal-agregar-overlay').classList.add('open');
}

function cerrarModalAgregar() {
  document.getElementById('modal-agregar-overlay').classList.remove('open');
}

function cerrarModalAgregarOverlay(e) {
  if (e.target === document.getElementById('modal-agregar-overlay')) cerrarModalAgregar();
}

function guardarNuevaEmpresa() {
  const empresa  = document.getElementById('add-empresa').value.trim();
  const inicio   = document.getElementById('add-inicio').value;
  const fin      = document.getElementById('add-fin').value;
  const seccion  = parseInt(document.getElementById('add-seccion').value);

  if (!empresa || !inicio || !fin) {
    document.getElementById('error-agregar').style.display = 'block';
    return;
  }

  const maxId = Math.max(...todasLasEmpresas().map(e => e.id), 100);
  const nueva = {
    id:          maxId + 1,
    seccion,
    empresa,
    contacto:    document.getElementById('add-contacto').value.trim()  || 'N/A',
    telefono:    document.getElementById('add-telefono').value.trim()  || 'N/A',
    correo:      document.getElementById('add-correo').value.trim()    || 'N/A',
    direccion:   document.getElementById('add-direccion').value.trim() || 'N/A',
    fechaInicio: inicio,
    fechaFin:    fin
  };

  empresasExtra.push(nueva);
  guardar();
  actualizarConteosTabs();
  actualizarStats();

  if (seccion === seccionActiva) renderTabla();
  cerrarModalAgregar();
  mostrarToast(`✓ Empresa "${empresa}" agregada a Sección ${seccion}`);
}

// ══════════════════════════════════════════
//   TOAST
// ══════════════════════════════════════════
let toastTimer;
function mostrarToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════
//   SESIÓN
// ══════════════════════════════════════════
function cerrarSesion() {
  localStorage.removeItem('sgva_usuario');
  window.location.href = 'index.html';
}