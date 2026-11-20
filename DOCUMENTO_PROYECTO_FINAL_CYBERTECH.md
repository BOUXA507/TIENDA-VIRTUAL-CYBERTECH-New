# UNIVERSIDAD DE PANAMÁ
## FACULTAD DE INFORMÁTICA, ELECTRÓNICA Y COMUNICACIÓN
### CURSO: PROGRAMACIÓN PARA WEB (INF-302) — SEMESTRAL II SEMESTRE 2026
**Docente:** Magíster Alma V. Bosquez  
**Estudiante:** Roberto Vasquez  
**Proyecto:** Creación de una tienda virtual inspirada en Jellini  
**Nombre Comercial de la Tienda:** Cybertech  
**Modalidad:** Individual | **Tipo:** Práctico  

---

## ÍNDICE DEL INFORME
1. [Objetivo General y Específicos](#1-objetivo-general-y-específicos)
2. [Análisis de la Tienda Jellini (jellini.com)](#2-análisis-de-la-tienda-jellini-jellinicom)
3. [Planificación de la Empresa y Tienda Cybertech](#3-planificación-de-la-empresa-y-tienda-cybertech)
   - 3.1. Nombre Comercial y Propuesta de Valor
   - 3.2. Diseño del Logotipo Original (No IA)
   - 3.3. Paleta Cromática y Estilo Visual
   - 3.4. Las 5 Categorías Definidas
   - 3.5. Catálogo Oficial de 50 Productos con Precios en Balboas (10 por Categoría)
4. [Estructura y Arquitectura del Proyecto](#4-estructura-y-arquitectura-del-proyecto)
5. [Programación y Funcionalidades Desarrolladas](#5-programación-y-funcionalidades-desarrolladas)
   - 5.1. HTML5 Semántico y Estructurado
   - 5.2. CSS3 Adaptable y Responsivo (Móvil, Tablet, Escritorio)
   - 5.3. JavaScript Dinámico y Persistencia con LocalStorage
6. [Simulación Completa del Proceso de Compra](#6-simulación-completa-del-proceso-de-compra)
7. [Guía para las 5 Capturas de Pantalla de Evidencia](#7-guía-para-las-5-capturas-de-pantalla-de-evidencia)
8. [Publicación Gratuita en GitHub Pages](#8-publicación-gratuita-en-github-pages)
9. [Guía para la Sustentación Final](#9-guía-para-la-sustentación-final)

---

## 1. Objetivo General y Específicos

### Objetivo General
Diseñar y desarrollar una tienda virtual funcional, aplicando los principios del comercio electrónico y la programación para web mediante la creación de un catálogo de productos, carrito de compras, registro de clientes y simulación integral del proceso de compra.

### Objetivos Específicos
- Investigar y analizar los elementos de interacción, presentación de catálogo y checkout de la tienda Jellini.
- Construir una tienda virtual propia con nombre comercial **Cybertech**, diseño responsivo y logotipo original.
- Implementar un catálogo estructurado con 50 productos organizados en 5 categorías (10 por cada categoría) tecnológicas.
- Desarrollar un carrito de compras funcional que utilice la API `localStorage` del navegador para persistir los productos seleccionados, cantidades y subtotales.
- Crear un buscador en tiempo real y filtros dinámicos por categoría sin recargar la página web.
- Diseñar un formulario de captura de datos y simular la confirmación de la orden con número de pedido único.

---

## 2. Análisis de la Tienda Jellini (jellini.com)

Conforme a las indicaciones de la Fase 1, se procedió a estudiar el sitio web oficial de Jellini para extraer sus mejores prácticas de experiencia de usuario (UX) e interfaz gráfica (UI):

| Criterio Evaluado | Observación en Jellini | Implementación Adaptada en Cybertech |
| :--- | :--- | :--- |
| **Página Principal (Home)** | Cuenta con un banner superior informativo, logotipo distintivo a la izquierda, barra de búsqueda centralizada y hero banner con ofertas destacadas. | `index.html` presenta una barra superior con datos de envío en Panamá, encabezado con logo de Cybertech, buscador y hero banner promocional. |
| **Barra de Beneficios** | Destaca 4 pilares: Entrega rápida, Soporte 24/7, Garantía y Descuentos para miembros. | Se incorporó una barra idéntica con iconos y tipografía clara: Envío Nacional, Garantía Oficial, Pagos Seguros y Soporte 24/7. |
| **Categorización** | Clasifica los productos mediante tarjetas interactivas que invitan a descubrir cada línea temática. | Se implementaron 5 tarjetas para Computadoras, Celulares, Audio, Accesorios y Gaming con redirección parametrizada. |
| **Catálogo y Presentación** | Cuadrículas limpias con fotografías de producto, etiquetas, nombre comercial, precio destacado y botón de acción directa. | `productos.html` despliega los 15 productos con imágenes vectoriales nítidas, tag de categoría, precio en $ y botón para agregar al carrito. |
| **Buscador y Filtros** | Permite filtrar por palabras clave y seleccionar categorías específicas. | Buscador en vivo mediante JavaScript (`onkeyup`) y botones de filtro con estado visual activo (`activo`). |
| **Carrito de Compras** | Permite visualizar los productos agregados, cambiar cantidades, calcular subtotales y proceder al pago. | `carrito.html` incluye tabla responsiva con botones de incremento/decremento (`+`/`-`), botón de eliminación y vaciado total. |
| **Proceso de Compra** | Solicita información de entrega y presenta métodos de pago simulados antes de confirmar la orden. | `contacto.html` valida los datos del cliente en Panamá (nombre, cédula, dirección, teléfono) y simula el pago con Yappy, tarjeta o transferencia. |

---

## 3. Planificación de la Empresa y Tienda Cybertech

### 3.1. Nombre Comercial y Propuesta de Valor
- **Nombre:** **Cybertech**
- **Slogan:** *Tecnología & Innovación en Panamá*
- **Misión:** Proveer a estudiantes, profesionales y gamers en Panamá de dispositivos tecnológicos de alta calidad con garantía oficial, asesoría personalizada y opciones de pago locales accesibles.
- **Visión:** Posicionarse como el referente virtual en Panamá en distribución de cómputo, smartphones y accesorios para gaming.

### 3.2. Diseño del Logotipo Original (No IA)
Siguiendo la instrucción explícita del usuario de utilizar un **logo original que no parezca hecho con Inteligencia Artificial**:
- Se evitó el uso de gráficos amorfos, robóticos sobrecargados o letras distorsionadas típicas de generadores automáticos.
- Se diseñó un logotipo vectorial geométrico basado en retícula, con proporciones áureas y líneas limpias:
  - **Isotipo:** Un hexágono perimetral que protege y enmarca un circuito electrónico en forma de **"C"** (representando *Cybertech*), complementado con nodos de conexión de datos y un núcleo central de energía.
  - **Logotipo Tipográfico:** Construido con tipografía geométrica en mayúsculas sostenidas (`CYBERTECH`), donde la palabra *TECH* resalta en degradado cyan/azul tecnológico, y un subtítulo ordenado: `TECNOLOGÍA & INNOVACIÓN`.
  - Se crearon dos variantes vectoriales y rasterizadas: `logo.svg`, `logo-blanco.svg` (para encabezados oscuros) y `logo.png`.

### 3.3. Paleta Cromática y Estilo Visual
- **Azul Marino Profundo (`#172554` / `#0F172A`):** Color primario institucional, genera confianza, formalidad y alta legibilidad.
- **Azul Eléctrico (`#2563EB` / `#1D4ED8`):** Color de acento para botones, enlaces y llamadas a la acción (*Call-to-Action*).
- **Cyan Tecnológico (`#0284C7` / `#38BDF8`):** Destaca badges, detalles de circuitos y estados activos.
- **Fondo Gris Claro (`#F8FAFC`):** Espacio neutro que resalta las tarjetas de productos sin cansar la vista.
- **Rojo Alerta (`#DC2626`):** Para el contador del carrito y botones destructivos como *Eliminar* y *Vaciar carrito*.
- **Verde Éxito (`#16A34A`):** Para confirmaciones y botones finales de compra.

### 3.4. Las 5 Categorías Definidas
1. **Computadoras:** Laptops y PCs de escritorio para estudio, programación y productividad.
2. **Celulares:** Smartphones de última generación con conectividad 5G y cámaras profesionales.
3. **Audio:** Dispositivos de audio inalámbrico, altavoces portátiles y micrófonos para conferencias.
4. **Accesorios:** Periféricos esenciales como teclados mecánicos, mouse ergonómicos y almacenamiento USB.
5. **Gaming:** Equipamiento especializado para videojuegos, controles, ratones RGB y audífonos 7.1.

### 3.5. Catálogo Oficial de 50 Productos con Precios en Balboas (10 por Categoría)

| ID | Categoría | Nombre del Producto | Precio (B/. / $) | Descripción del Producto | Archivo de Imagen |
| :-: | :--- | :--- | :-: | :--- | :--- |
| **1** | Computadoras | **Laptop Lenovo IdeaPad 3** | $650.00 | Portátil eficiente con procesador Ryzen 5 para estudio, programación y oficina. | `imagenes/producto1.jpg` |
| **2** | Computadoras | **Laptop HP 15 Core i5** | $720.00 | Laptop moderna con procesador Intel Core i5 y pantalla 15.6 pulgadas Full HD para proyectos. | `imagenes/producto2.jpg` |
| **3** | Computadoras | **PC de Escritorio Dell OptiPlex** | $580.00 | Computadora de escritorio completa y robusta para oficina, teletrabajo y hogar. | `imagenes/producto3.jpg` |
| **4** | Computadoras | **MacBook Air M2 13 pulgadas** | $1099.00 | Ultrabook ligera y potente con chip Apple M2, batería de 18 horas y pantalla Retina. | `imagenes/producto4.jpg` |
| **5** | Computadoras | **Laptop ASUS Vivobook 16** | $680.00 | Pantalla expansiva de 16 pulgadas ideal para diseño gráfico, hojas de cálculo y multitarea. | `imagenes/producto5.jpg` |
| **6** | Computadoras | **Laptop Acer Aspire 5** | $520.00 | Equipo accesible de alto rendimiento y durabilidad para tareas universitarias. | `imagenes/producto6.jpg` |
| **7** | Computadoras | **PC Gamer Master Desktop** | $1250.00 | Torre de escritorio con gráfica NVIDIA GeForce RTX, 32GB RAM y refrigeración líquida. | `imagenes/producto7.jpg` |
| **8** | Computadoras | **Laptop Lenovo ThinkPad E14** | $890.00 | Portátil corporativa de gran resistencia con seguridad biométrica y teclado ergonómico. | `imagenes/producto8.jpg` |
| **9** | Computadoras | **All-in-One HP 24 pulgadas Touch** | $780.00 | Computadora todo-en-uno elegante con pantalla táctil Full HD de 24 pulgadas y altavoces. | `imagenes/producto9.jpg` |
| **10** | Computadoras | **Mini PC ASUS PN50** | $430.00 | Computadora de factor ultra compacto y bajo consumo para optimizar tu espacio de trabajo. | `imagenes/producto10.jpg` |
| **11** | Celulares | **Samsung Galaxy A55 5G** | $420.00 | Smartphone 5G con pantalla Super AMOLED de 120Hz y triple cámara de alta resolución. | `imagenes/producto11.jpg` |
| **12** | Celulares | **iPhone 15 128GB** | $799.00 | Smartphone Apple de alto rendimiento con Dynamic Island, chip A16 y cámara de 48MP. | `imagenes/producto12.jpg` |
| **13** | Celulares | **Xiaomi Redmi Note 13 Pro** | $280.00 | Smartphone con cámara de 200MP, carga turbo de 67W y batería de larga duración. | `imagenes/producto13.jpg` |
| **14** | Celulares | **Motorola Edge 40 Neo** | $340.00 | Diseño ultradelgado con certificación contra agua IP68 y pantalla curva pOLED 144Hz. | `imagenes/producto14.jpg` |
| **15** | Celulares | **Samsung Galaxy S24 Ultra** | $1199.00 | El flagship definitivo con titanio, zoom óptico 100x y lápiz óptico S-Pen integrado. | `imagenes/producto15.jpg` |
| **16** | Celulares | **Google Pixel 8 Pro** | $850.00 | Fotografía computacional de nivel profesional y las funciones más avanzadas de Android. | `imagenes/producto16.jpg` |
| **17** | Celulares | **Honor Magic 6 Lite** | $290.00 | Pantalla con resistencia anticaídas 360°, batería masiva de 5800mAh y diseño prémium. | `imagenes/producto17.jpg` |
| **18** | Celulares | **POCO X6 Pro 5G** | $360.00 | Potencia gamer sobresaliente con procesador Dimensity 8300-Ultra y pantalla Flow AMOLED. | `imagenes/producto18.jpg` |
| **19** | Celulares | **iPhone 13 128GB** | $580.00 | Excelente equilibrio entre costo y rendimiento, modo cine en 4K y chip A15 Bionic. | `imagenes/producto19.jpg` |
| **20** | Celulares | **OnePlus Nord CE 3 Lite** | $230.00 | Cámara principal de 108MP, altavoces estéreo potentes y pantalla brillante a 120Hz. | `imagenes/producto20.jpg` |
| **21** | Audio | **Audífonos Sony WH-CH520** | $45.00 | Audífonos inalámbricos con hasta 50 horas de reproducción y conexión multipunto. | `imagenes/producto21.jpg` |
| **22** | Audio | **Parlante JBL Flip 6** | $95.00 | Sonido potente portátil a 2 vías, radiadores pasivos de bajos y protección IP67. | `imagenes/producto22.jpg` |
| **23** | Audio | **Micrófono USB HyperX QuadCast** | $110.00 | Micrófono condensador con montura antivibración, filtro antipop y sensor táctil. | `imagenes/producto23.jpg` |
| **24** | Audio | **AirPods 3ra Generación** | $169.00 | Audio espacial personalizado con seguimiento dinámico de la cabeza y estuche MagSafe. | `imagenes/producto24.jpg` |
| **25** | Audio | **Audífonos Sony WH-1000XM5** | $320.00 | Cancelación de ruido líder en la industria con audio Hi-Res y llamadas ultra nítidas. | `imagenes/producto25.jpg` |
| **26** | Audio | **Parlante Amazon Echo Dot 5** | $50.00 | Parlante inteligente con control por voz de Alexa, sonido mejorado y detección de movimiento. | `imagenes/producto26.jpg` |
| **27** | Audio | **Barra de Sonido Samsung TV** | $135.00 | Sistema de audio envolvente 2.1 canales con subwoofer inalámbrico y modo juego. | `imagenes/producto27.jpg` |
| **28** | Audio | **Audífonos Deportivos JBL Tune Flex** | $60.00 | Auriculares True Wireless ergonómicos resistentes al sudor con sonido Pure Bass. | `imagenes/producto28.jpg` |
| **29** | Audio | **Micrófono Condensador Blue Yeti** | $125.00 | El estándar de oro para creadores de contenido, 4 patrones de captación y conexión USB. | `imagenes/producto29.jpg` |
| **30** | Audio | **Parlante Anker Soundcore 2** | $40.00 | Parlante Bluetooth resistente al agua con tecnología BassUp y 24 horas de batería. | `imagenes/producto30.jpg` |
| **31** | Accesorios | **Teclado Mecánico Redragon Kumara** | $55.00 | Teclado mecánico compacto TKL con switches Outemu Blue táctiles y retroiluminación. | `imagenes/producto31.jpg` |
| **32** | Accesorios | **Mouse Inalámbrico Logitech M170** | $15.00 | Mouse inalámbrico confiable y compacto con alcance de 10 metros y batería de 1 año. | `imagenes/producto32.jpg` |
| **33** | Accesorios | **Memoria USB Kingston 128GB 3.2** | $20.00 | Memoria USB 3.2 Gen 1 con carcasa metálica ultrarresistente y alta velocidad de lectura. | `imagenes/producto33.jpg` |
| **34** | Accesorios | **Disco Sólido Externo SSD 1TB** | $90.00 | Unidad SSD externa portátil de 1050 MB/s resistente a golpes para copias de seguridad. | `imagenes/producto34.jpg` |
| **35** | Accesorios | **Hub Adaptador USB-C 7 en 1** | $35.00 | Adaptador multipuerto con salida HDMI 4K, 3 puertos USB 3.0, lector SD y carga Power Delivery. | `imagenes/producto35.jpg` |
| **36** | Accesorios | **Webcam Logitech C920 HD Pro** | $75.00 | Cámara web Full HD 1080p con micrófonos estéreo duales y corrección automática de luz. | `imagenes/producto36.jpg` |
| **37** | Accesorios | **Soporte Ergonómico para Laptop** | $25.00 | Base de aluminio plegable con 6 niveles de altura para mejorar la postura y ventilación. | `imagenes/producto37.jpg` |
| **38** | Accesorios | **Cargador Rápido GaN 65W** | $40.00 | Cargador inteligente con tecnología nitruro de galio para cargar laptop y celular a la vez. | `imagenes/producto38.jpg` |
| **39** | Accesorios | **Teclado Inalámbrico Logitech K380** | $45.00 | Teclado Bluetooth multidispositivo ultra delgado compatible con Windows, Mac, iOS y Android. | `imagenes/producto39.jpg` |
| **40** | Accesorios | **Mouse Pad Ergonómico XXL** | $18.00 | Tapete de escritorio de 90x40 cm con base antideslizante de goma y bordes con costura. | `imagenes/producto40.jpg` |
| **41** | Gaming | **Control Xbox Wireless Controller** | $65.00 | Mando ergonómico oficial inalámbrico con gatillos texturizados y compatibilidad universal. | `imagenes/producto41.jpg` |
| **42** | Gaming | **Mouse Gamer Logitech G502 HERO** | $50.00 | Sensor óptico de 25,600 DPI, 11 botones programables y sistema de pesas ajustables. | `imagenes/producto42.jpg` |
| **43** | Gaming | **Audífonos Gamer Razer BlackShark V2** | $85.00 | Sonido espacial THX, diafragmas TriForce de 50mm y micrófono cardioide HyperClear. | `imagenes/producto43.jpg` |
| **44** | Gaming | **Teclado Gamer Corsair K55 RGB** | $60.00 | Retroiluminación RGB dinámica de 3 zonas, 6 teclas macro dedicadas y reposamuñecas. | `imagenes/producto44.jpg` |
| **45** | Gaming | **Control DualSense PS5 Inalámbrico** | $70.00 | Gatillos adaptativos con resistencia dinámica y retroalimentación háptica inmersiva. | `imagenes/producto45.jpg` |
| **46** | Gaming | **Silla Gamer Ergonómica Cougar** | $185.00 | Estructura de acero reforzado, respaldo reclinable 180° y cojines lumbar/cervical. | `imagenes/producto46.jpg` |
| **47** | Gaming | **Volante y Pedales Logitech G29** | $260.00 | Simulador de carreras con Force Feedback de 2 motores, levas de acero y pedales sensibles. | `imagenes/producto47.jpg` |
| **48** | Gaming | **Micrófono Gamer Razer Seiren Mini** | $48.00 | Micrófono condensador ultracompacto para streaming con patrón de captación supercardioide. | `imagenes/producto48.jpg` |
| **49** | Gaming | **Mouse Gamer Redragon Cobra M711** | $28.00 | Sensor óptico de 10,000 DPI, iluminación RGB Chroma configurable y switches mecánicos. | `imagenes/producto49.jpg` |
| **50** | Gaming | **Audífonos Gamer HyperX Cloud II** | $89.00 | Sonido envolvente 7.1 con caja de control de audio USB, diadema de aluminio y espumas cómodas. | `imagenes/producto50.jpg` |

---

## 4. Estructura y Arquitectura del Proyecto

El código fuente del proyecto está organizado de manera modular y escalable dentro de la carpeta `TiendaVirtual`:

```
TiendaVirtual/
│
├── index.html                     # Página de inicio con hero, beneficios, categorías y destacados
├── productos.html                 # Catálogo interactivo con 15 productos, buscador y filtros
├── carrito.html                   # Módulo de compras: tabla dinámica, modificación y totales
├── contacto.html                  # Formulario de datos de cliente, pago simulado y confirmación
├── INFORME_PROYECTO_FINAL_CYBERTECH.docx # Documento formal de Word para entregar
├── DOCUMENTO_PROYECTO_FINAL_CYBERTECH.md # Informe completo en formato Markdown
│
├── css/
│   └── estilos.css                # Hoja de estilos completa, responsiva y adaptable
│
├── js/
│   └── funciones.js               # Lógica del carrito, LocalStorage, buscador y checkout
│
└── imagenes/
    ├── logo.svg                   # Logotipo oficial original a color
    ├── logo-blanco.svg            # Logotipo adaptado para fondos oscuros (header/footer)
    ├── logo.png                   # Formato rasterizado de respaldo
    ├── producto1.svg ... producto15.svg # Ilustraciones nítidas de los 15 productos
    └── producto1.png ... producto15.png # Formatos rasterizados de compatibilidad
```

---

## 5. Programación y Funcionalidades Desarrolladas

### 5.1. HTML5 Semántico y Estructurado
- Se implementaron etiquetas estructurales de HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`.
- En todas las páginas se incluyó el pie de página institucional con la información solicitada:
  > **© 2026 Cybertech | Desarrollado por Roberto Vasquez - Universidad de Panamá (Facultad de Informática).**

### 5.2. CSS3 Adaptable y Responsivo
- **Variables CSS (`:root`):** Centralizan la gestión cromática y facilitan el mantenimiento del código.
- **CSS Grid:** Utilizado en la sección de categorías (5 columnas en PC, 2 en tablets, 1 en móviles) y catálogo de productos (3 columnas en PC, 2 en tablets, 1 en celulares).
- **Flexbox:** Empleado en encabezados, barras de navegación, alineación de tarjetas de producto y botones de control del carrito.
- **Media Queries:** Diseñadas para puntos de quiebre en `1024px`, `768px` y `480px`, asegurando que la tienda se visualice a la perfección en cualquier pantalla.

### 5.3. JavaScript Dinámico y Persistencia con LocalStorage
1. **Array de Objetos:** Se definió el arreglo `productos` con los 15 artículos, almacenando `id`, `nombre`, `categoria`, `precio`, `descripcion` e `imagen`.
2. **`obtenerCarrito()` & `guardarCarrito()`:** Permiten sincronizar de forma bidireccional los productos con `localStorage`, garantizando que al recargar la página o navegar entre pestañas, el carrito conserve su estado.
3. **`agregarCarrito(id)`:** Busca el producto mediante su identificador, verifica si ya existe (incrementando su cantidad) o lo agrega como nuevo ítem. Dispara una notificación visual *Toast* y actualiza el contador.
4. **`actualizarContador()`:** Suma la cantidad total de artículos y actualiza la etiqueta `#contadorCarrito` en el menú superior.
5. **`mostrarCarrito()`:** Genera de manera dinámica la tabla de compras con subtotales individuales. Si el carrito está vacío, presenta un mensaje instructivo con enlace al catálogo.
6. **`cambiarCantidad(id, cambio)`:** Permite modificar las unidades con los botones `+` y `-`. Si la cantidad llega a cero, solicita confirmación para remover el artículo.
7. **`eliminarProducto(id)` & `vaciarCarrito()`:** Implementan diálogos interactivos de confirmación (`confirm()`) para prevenir eliminaciones accidentales.
8. **`filtrarProductos()`:** Captura el evento `onkeyup` del buscador y compara el texto ingresado contra el atributo `data-nombre` y `data-categoria` de cada tarjeta.
9. **`filtrarCategoria(cat)`:** Filtra las tarjetas según la categoría seleccionada y resalta visualmente el botón activo.

---

## 6. Simulación Completa del Proceso de Compra

El flujo de comercio electrónico en **Cybertech** sigue un ciclo de vida completo:

```
[1. Navegación en index.html o productos.html]
                  │
                  ▼
[2. Búsqueda y Selección de Productos con "Agregar al carrito"]
                  │
                  ▼
[3. Revisión de Ítems en carrito.html (Modificar cantidades, ver total)]
                  │
                  ▼
[4. Clic en "Continuar compra" hacia contacto.html]
                  │
                  ▼
[5. Diligenciamiento de Formulario (Nombre, Cédula, Dirección, Pago)]
                  │
                  ▼
[6. Validación de Campos y Generación de Pedido (#CYBER-XXXXXX)]
                  │
                  ▼
[7. Vaciado Automático del Carrito en LocalStorage y Comprobante Digital]
```

---

## 7. Guía para las 5 Capturas de Pantalla de Evidencia

Para el informe de entrega requerido por la **Magíster Alma V. Bosquez**, se sugiere tomar las siguientes 5 capturas de pantalla de la tienda en el navegador:

1. **Captura 1 — Página Principal (`index.html`):**
   - Mostrar el encabezado con el logo de Cybertech, la barra superior, el hero banner y la barra de beneficios inspirada en Jellini.
2. **Captura 2 — Catálogo de Productos con Buscador (`productos.html`):**
   - Escribir en el buscador la palabra *"Laptop"* o *"Gamer"* y capturar cómo el sistema filtra los productos en tiempo real mostrando el contador de resultados.
3. **Captura 3 — Filtro por Categorías (`productos.html`):**
   - Hacer clic en el botón *"Gaming"* o *"Celulares"* y evidenciar que solo se visualizan los productos correspondientes a esa categoría con su botón activo.
4. **Captura 4 — Carrito de Compras en Funcionamiento (`carrito.html`):**
   - Agregar 2 o 3 productos al carrito. Mostrar la tabla con las miniaturas, los precios unitarios, los controles de cantidad `+` y `-`, los subtotales calculados y el total general.
5. **Captura 5 — Confirmación de Compra (`contacto.html`):**
   - Llenar los datos del formulario (Nombre: Roberto Vasquez, Cédula, Dirección, Método de pago) y pulsar *"Confirmar Compra"*. Capturar la tarjeta verde de confirmación con el número de orden generado (ej. `#CYBER-849201`) y el carrito con contador en 0.

---

## 8. Publicación Gratuita en GitHub Pages

Para publicar la tienda virtual en Internet mediante GitHub Pages:

1. Crear una cuenta en [GitHub](https://github.com/) o iniciar sesión si ya se dispone de una.
2. Crear un repositorio público denominado **`cybertech-tienda`** o **`tiendavirtual-cybertech`**.
3. Subir todos los archivos y carpetas del proyecto:
   - `index.html`
   - `productos.html`
   - `carrito.html`
   - `contacto.html`
   - Carpeta `css/` con `estilos.css`
   - Carpeta `js/` con `funciones.js`
   - Carpeta `imagenes/` con el logo e imágenes de los productos
4. Ir a la pestaña **Settings** (Configuración) del repositorio.
5. En el menú lateral izquierdo, seleccionar la sección **Pages**.
6. En **Source / Branch**, seleccionar la rama `main` (o `master`) y el directorio `/ (root)`.
7. Hacer clic en **Save** (Guardar). En aproximadamente 1 minuto, GitHub generará una URL pública (ejemplo: `https://robertovasquez.github.io/cybertech-tienda/`).

---

## 9. Guía para la Sustentación Final

En la sustentación oral ante la docente, el estudiante **Roberto Vasquez** puede seguir este orden de demostración:

1. **Presentación:** Saludar y enunciar el nombre de la tienda: *Cybertech*, explicando que está inspirada en la arquitectura de *Jellini* y orientada a tecnología.
2. **Explicación del Logotipo:** Mostrar el isotipo original (hexágono con circuito 'C') y aclarar que fue creado manualmente con diseño vectorial limpio, evitando artefactos o estilos sobrecargados de IA.
3. **Página de Inicio:** Demostrar el menú navegable, el hero banner y cómo las tarjetas de categorías enlazan directamente a los productos filtrados.
4. **Catálogo y Filtros:** Mostrar los 15 productos, escribir en el buscador en vivo y alternar entre los botones de filtro por categoría.
5. **Carrito de Compras:** Agregar varios productos, abrir `carrito.html`, modificar cantidades con `+` y `-`, evidenciar que el subtotal y el total cambian inmediatamente, y explicar que los datos persisten al refrescar gracias a `LocalStorage`.
6. **Proceso de Compra:** Continuar a `contacto.html`, llenar el formulario, seleccionar un método de pago panameño (como Yappy o Transferencia) y presionar *"Confirmar Compra"*, mostrando el recibo con el número de orden y la limpieza del carrito.
7. **Pie de Página:** Resaltar el pie de página institucional con el nombre *Roberto Vasquez* y *Universidad de Panamá*.

---
**Proyecto desarrollado con excelencia académica para la Universidad de Panamá — 2026.**
