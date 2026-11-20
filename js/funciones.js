// ==========================================================================
// CYBERTECH - SISTEMA DE COMERCIO ELECTRÓNICO (JavaScript)
// Universidad de Panamá - Facultad de Informática
// Asignatura: Programación para Web - Semestral II Semestre 2026
// Estudiante: Roberto Vasquez | Docente: Magíster Alma V. Bosquez
// ==========================================================================

// ==========================================
// 1. CATÁLOGO DE PRODUCTOS (50 productos, 10 por categoría)
// ==========================================
const productos = [
    {
        "id": 1,
        "nombre": "Laptop Lenovo IdeaPad 3",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 650.0,
        "descripcion": "Portátil eficiente con procesador Ryzen 5 para estudio, programación y oficina.",
        "imagen": "imagenes/producto1.jpg"
    },
    {
        "id": 2,
        "nombre": "Laptop HP 15 Core i5",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 720.0,
        "descripcion": "Laptop moderna con procesador Intel Core i5 y pantalla 15.6 pulgadas Full HD para proyectos.",
        "imagen": "imagenes/producto2.jpg"
    },
    {
        "id": 3,
        "nombre": "PC de Escritorio Dell OptiPlex",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 580.0,
        "descripcion": "Computadora de escritorio completa y robusta para oficina, teletrabajo y hogar.",
        "imagen": "imagenes/producto3.jpg"
    },
    {
        "id": 4,
        "nombre": "MacBook Air M2 13 pulgadas",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 1099.0,
        "descripcion": "Ultrabook ligera y potente con chip Apple M2, batería de 18 horas y pantalla Retina.",
        "imagen": "imagenes/producto4.jpg"
    },
    {
        "id": 5,
        "nombre": "Laptop ASUS Vivobook 16",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 680.0,
        "descripcion": "Pantalla expansiva de 16 pulgadas ideal para diseño gráfico, hojas de cálculo y multitarea.",
        "imagen": "imagenes/producto5.jpg"
    },
    {
        "id": 6,
        "nombre": "Laptop Acer Aspire 5",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 520.0,
        "descripcion": "Equipo accesible de alto rendimiento y durabilidad para tareas universitarias.",
        "imagen": "imagenes/producto6.jpg"
    },
    {
        "id": 7,
        "nombre": "PC Gamer Master Desktop",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 1250.0,
        "descripcion": "Torre de escritorio con gráfica NVIDIA GeForce RTX, 32GB RAM y refrigeración líquida.",
        "imagen": "imagenes/producto7.jpg"
    },
    {
        "id": 8,
        "nombre": "Laptop Lenovo ThinkPad E14",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 890.0,
        "descripcion": "Portátil corporativa de gran resistencia con seguridad biométrica y teclado ergonómico.",
        "imagen": "imagenes/producto8.jpg"
    },
    {
        "id": 9,
        "nombre": "All-in-One HP 24 pulgadas Touch",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 780.0,
        "descripcion": "Computadora todo-en-uno elegante con pantalla táctil Full HD de 24 pulgadas y altavoces.",
        "imagen": "imagenes/producto9.jpg"
    },
    {
        "id": 10,
        "nombre": "Mini PC ASUS PN50",
        "categoria": "computadoras",
        "categoriaNombre": "Computadoras",
        "precio": 430.0,
        "descripcion": "Computadora de factor ultra compacto y bajo consumo para optimizar tu espacio de trabajo.",
        "imagen": "imagenes/producto10.jpg"
    },
    {
        "id": 11,
        "nombre": "Samsung Galaxy A55 5G",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 420.0,
        "descripcion": "Smartphone 5G con pantalla Super AMOLED de 120Hz y triple cámara de alta resolución.",
        "imagen": "imagenes/producto11.jpg"
    },
    {
        "id": 12,
        "nombre": "iPhone 15 128GB",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 799.0,
        "descripcion": "Smartphone Apple de alto rendimiento con Dynamic Island, chip A16 y cámara de 48MP.",
        "imagen": "imagenes/producto12.jpg"
    },
    {
        "id": 13,
        "nombre": "Xiaomi Redmi Note 13 Pro",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 280.0,
        "descripcion": "Smartphone con cámara de 200MP, carga turbo de 67W y batería de larga duración.",
        "imagen": "imagenes/producto13.jpg"
    },
    {
        "id": 14,
        "nombre": "Motorola Edge 40 Neo",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 340.0,
        "descripcion": "Diseño ultradelgado con certificación contra agua IP68 y pantalla curva pOLED 144Hz.",
        "imagen": "imagenes/producto14.jpg"
    },
    {
        "id": 15,
        "nombre": "Samsung Galaxy S24 Ultra",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 1199.0,
        "descripcion": "El flagship definitivo con titanio, zoom óptico 100x y lápiz óptico S-Pen integrado.",
        "imagen": "imagenes/producto15.jpg"
    },
    {
        "id": 16,
        "nombre": "Google Pixel 8 Pro",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 850.0,
        "descripcion": "Fotografía computacional de nivel profesional y las funciones más avanzadas de Android.",
        "imagen": "imagenes/producto16.jpg"
    },
    {
        "id": 17,
        "nombre": "Honor Magic 6 Lite",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 290.0,
        "descripcion": "Pantalla con resistencia anticaídas 360°, batería masiva de 5800mAh y diseño prémium.",
        "imagen": "imagenes/producto17.jpg"
    },
    {
        "id": 18,
        "nombre": "POCO X6 Pro 5G",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 360.0,
        "descripcion": "Potencia gamer sobresaliente con procesador Dimensity 8300-Ultra y pantalla Flow AMOLED.",
        "imagen": "imagenes/producto18.jpg"
    },
    {
        "id": 19,
        "nombre": "iPhone 13 128GB",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 580.0,
        "descripcion": "Excelente equilibrio entre costo y rendimiento, modo cine en 4K y chip A15 Bionic.",
        "imagen": "imagenes/producto19.jpg"
    },
    {
        "id": 20,
        "nombre": "OnePlus Nord CE 3 Lite",
        "categoria": "celulares",
        "categoriaNombre": "Celulares",
        "precio": 230.0,
        "descripcion": "Cámara principal de 108MP, altavoces estéreo potentes y pantalla brillante a 120Hz.",
        "imagen": "imagenes/producto20.jpg"
    },
    {
        "id": 21,
        "nombre": "Audífonos Sony WH-CH520",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 45.0,
        "descripcion": "Audífonos inalámbricos con hasta 50 horas de reproducción y conexión multipunto.",
        "imagen": "imagenes/producto21.jpg"
    },
    {
        "id": 22,
        "nombre": "Parlante JBL Flip 6",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 95.0,
        "descripcion": "Sonido potente portátil a 2 vías, radiadores pasivos de bajos y protección IP67.",
        "imagen": "imagenes/producto22.jpg"
    },
    {
        "id": 23,
        "nombre": "Micrófono USB HyperX QuadCast",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 110.0,
        "descripcion": "Micrófono condensador con montura antivibración, filtro antipop y sensor táctil.",
        "imagen": "imagenes/producto23.jpg"
    },
    {
        "id": 24,
        "nombre": "AirPods 3ra Generación",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 169.0,
        "descripcion": "Audio espacial personalizado con seguimiento dinámico de la cabeza y estuche MagSafe.",
        "imagen": "imagenes/producto24.jpg"
    },
    {
        "id": 25,
        "nombre": "Audífonos Sony WH-1000XM5",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 320.0,
        "descripcion": "Cancelación de ruido líder en la industria con audio Hi-Res y llamadas ultra nítidas.",
        "imagen": "imagenes/producto25.jpg"
    },
    {
        "id": 26,
        "nombre": "Parlante Amazon Echo Dot 5",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 50.0,
        "descripcion": "Parlante inteligente con control por voz de Alexa, sonido mejorado y detección de movimiento.",
        "imagen": "imagenes/producto26.jpg"
    },
    {
        "id": 27,
        "nombre": "Barra de Sonido Samsung TV",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 135.0,
        "descripcion": "Sistema de audio envolvente 2.1 canales con subwoofer inalámbrico y modo juego.",
        "imagen": "imagenes/producto27.jpg"
    },
    {
        "id": 28,
        "nombre": "Audífonos Deportivos JBL Tune Flex",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 60.0,
        "descripcion": "Auriculares True Wireless ergonómicos resistentes al sudor con sonido Pure Bass.",
        "imagen": "imagenes/producto28.jpg"
    },
    {
        "id": 29,
        "nombre": "Micrófono Condensador Blue Yeti",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 125.0,
        "descripcion": "El estándar de oro para creadores de contenido, 4 patrones de captación y conexión USB.",
        "imagen": "imagenes/producto29.jpg"
    },
    {
        "id": 30,
        "nombre": "Parlante Anker Soundcore 2",
        "categoria": "audio",
        "categoriaNombre": "Audio",
        "precio": 40.0,
        "descripcion": "Parlante Bluetooth resistente al agua con tecnología BassUp y 24 horas de batería.",
        "imagen": "imagenes/producto30.jpg"
    },
    {
        "id": 31,
        "nombre": "Teclado Mecánico Redragon Kumara",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 55.0,
        "descripcion": "Teclado mecánico compacto TKL con switches Outemu Blue táctiles y retroiluminación.",
        "imagen": "imagenes/producto31.jpg"
    },
    {
        "id": 32,
        "nombre": "Mouse Inalámbrico Logitech M170",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 15.0,
        "descripcion": "Mouse inalámbrico confiable y compacto con alcance de 10 metros y batería de 1 año.",
        "imagen": "imagenes/producto32.jpg"
    },
    {
        "id": 33,
        "nombre": "Memoria USB Kingston 128GB 3.2",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 20.0,
        "descripcion": "Memoria USB 3.2 Gen 1 con carcasa metálica ultrarresistente y alta velocidad de lectura.",
        "imagen": "imagenes/producto33.jpg"
    },
    {
        "id": 34,
        "nombre": "Disco Sólido Externo SSD 1TB",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 90.0,
        "descripcion": "Unidad SSD externa portátil de 1050 MB/s resistente a golpes para copias de seguridad.",
        "imagen": "imagenes/producto34.jpg"
    },
    {
        "id": 35,
        "nombre": "Hub Adaptador USB-C 7 en 1",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 35.0,
        "descripcion": "Adaptador multipuerto con salida HDMI 4K, 3 puertos USB 3.0, lector SD y carga Power Delivery.",
        "imagen": "imagenes/producto35.jpg"
    },
    {
        "id": 36,
        "nombre": "Webcam Logitech C920 HD Pro",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 75.0,
        "descripcion": "Cámara web Full HD 1080p con micrófonos estéreo duales y corrección automática de luz.",
        "imagen": "imagenes/producto36.jpg"
    },
    {
        "id": 37,
        "nombre": "Soporte Ergonómico para Laptop",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 25.0,
        "descripcion": "Base de aluminio plegable con 6 niveles de altura para mejorar la postura y ventilación.",
        "imagen": "imagenes/producto37.jpg"
    },
    {
        "id": 38,
        "nombre": "Cargador Rápido GaN 65W",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 40.0,
        "descripcion": "Cargador inteligente con tecnología nitruro de galio para cargar laptop y celular a la vez.",
        "imagen": "imagenes/producto38.jpg"
    },
    {
        "id": 39,
        "nombre": "Teclado Inalámbrico Logitech K380",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 45.0,
        "descripcion": "Teclado Bluetooth multidispositivo ultra delgado compatible con Windows, Mac, iOS y Android.",
        "imagen": "imagenes/producto39.jpg"
    },
    {
        "id": 40,
        "nombre": "Mouse Pad Ergonómico XXL",
        "categoria": "accesorios",
        "categoriaNombre": "Accesorios",
        "precio": 18.0,
        "descripcion": "Tapete de escritorio de 90x40 cm con base antideslizante de goma y bordes con costura.",
        "imagen": "imagenes/producto40.jpg"
    },
    {
        "id": 41,
        "nombre": "Control Xbox Wireless Controller",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 65.0,
        "descripcion": "Mando ergonómico oficial inalámbrico con gatillos texturizados y compatibilidad universal.",
        "imagen": "imagenes/producto41.jpg"
    },
    {
        "id": 42,
        "nombre": "Mouse Gamer Logitech G502 HERO",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 50.0,
        "descripcion": "Sensor óptico de 25,600 DPI, 11 botones programables y sistema de pesas ajustables.",
        "imagen": "imagenes/producto42.jpg"
    },
    {
        "id": 43,
        "nombre": "Audífonos Gamer Razer BlackShark V2",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 85.0,
        "descripcion": "Sonido espacial THX, diafragmas TriForce de 50mm y micrófono cardioide HyperClear.",
        "imagen": "imagenes/producto43.jpg"
    },
    {
        "id": 44,
        "nombre": "Teclado Gamer Corsair K55 RGB",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 60.0,
        "descripcion": "Retroiluminación RGB dinámica de 3 zonas, 6 teclas macro dedicadas y reposamuñecas.",
        "imagen": "imagenes/producto44.jpg"
    },
    {
        "id": 45,
        "nombre": "Control DualSense PS5 Inalámbrico",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 70.0,
        "descripcion": "Gatillos adaptativos con resistencia dinámica y retroalimentación háptica inmersiva.",
        "imagen": "imagenes/producto45.jpg"
    },
    {
        "id": 46,
        "nombre": "Silla Gamer Ergonómica Cougar",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 185.0,
        "descripcion": "Estructura de acero reforzado, respaldo reclinable 180° y cojines lumbar/cervical.",
        "imagen": "imagenes/producto46.jpg"
    },
    {
        "id": 47,
        "nombre": "Volante y Pedales Logitech G29",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 260.0,
        "descripcion": "Simulador de carreras con Force Feedback de 2 motores, levas de acero y pedales sensibles.",
        "imagen": "imagenes/producto47.jpg"
    },
    {
        "id": 48,
        "nombre": "Micrófono Gamer Razer Seiren Mini",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 48.0,
        "descripcion": "Micrófono condensador ultracompacto para streaming con patrón de captación supercardioide.",
        "imagen": "imagenes/producto48.jpg"
    },
    {
        "id": 49,
        "nombre": "Mouse Gamer Redragon Cobra M711",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 28.0,
        "descripcion": "Sensor óptico de 10,000 DPI, iluminación RGB Chroma configurable y switches mecánicos.",
        "imagen": "imagenes/producto49.jpg"
    },
    {
        "id": 50,
        "nombre": "Audífonos Gamer HyperX Cloud II",
        "categoria": "gaming",
        "categoriaNombre": "Gaming",
        "precio": 89.0,
        "descripcion": "Sonido envolvente 7.1 con caja de control de audio USB, diadema de aluminio y espumas cómodas.",
        "imagen": "imagenes/producto50.jpg"
    }
];

// ==========================================
// 2. OBTENER CARRITO DESDE LOCALSTORAGE
// ==========================================
function obtenerCarrito() {
    let carrito = localStorage.getItem("carrito");
    if (carrito) {
        try {
            return JSON.parse(carrito);
        } catch (e) {
            console.error("Error al parsear el carrito:", e);
            return [];
        }
    }
    return [];
}

// ==========================================
// 3. GUARDAR CARRITO EN LOCALSTORAGE
// ==========================================
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ==========================================
// 4. AGREGAR PRODUCTO AL CARRITO
// ==========================================
function agregarCarrito(id) {
    id = parseInt(id);
    let carrito = obtenerCarrito();
    let producto = productos.find(p => p.id === id);

    if (!producto) {
        console.warn("Producto no encontrado:", id);
        return;
    }

    let productoExistente = carrito.find(p => p.id === id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    actualizarContador();
    mostrarNotificacion(producto.nombre + " fue agregado al carrito.");
    alert(producto.nombre + " fue agregado al carrito.");
}

// ==========================================
// 5. ACTUALIZAR CONTADOR DEL CARRITO (HEADER)
// ==========================================
function actualizarContador() {
    let carrito = obtenerCarrito();
    let cantidadTotal = 0;

    carrito.forEach(producto => {
        cantidadTotal += producto.cantidad;
    });

    let contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = cantidadTotal;
        // Animación suave de pulso
        contador.style.transform = "scale(1.25)";
        setTimeout(() => {
            contador.style.transform = "scale(1)";
        }, 200);
    }
}

// ==========================================
// 6. MOSTRAR CARRITO (carrito.html)
// ==========================================
function mostrarCarrito() {
    let contenedor = document.getElementById("carritoContenido");
    if (!contenedor) {
        return;
    }

    let carrito = obtenerCarrito();
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div class="producto" style="padding: 40px; text-align: center;">
                <div style="font-size: 60px; margin-bottom: 15px;">🛒</div>
                <h2>Tu carrito está vacío</h2>
                <p style="color: #64748b; margin: 10px 0 25px;">No tienes productos agregados todavía. ¡Explora nuestro catálogo tecnológico!</p>
                <div>
                    <a href="productos.html" class="boton">
                        🛍️ Ver productos del catálogo
                    </a>
                </div>
            </div>
        `;
        actualizarTotal();
        let contenedorResumen = document.querySelector(".resumen");
        if (contenedorResumen) {
            contenedorResumen.style.display = "none";
        }
        return;
    }

    let contenedorResumen = document.querySelector(".resumen");
    if (contenedorResumen) {
        contenedorResumen.style.display = "flex";
    }

    // Estructura en tabla estilizada como en la maqueta de la tarea
    let tablaHTML = `
        <div class="tabla-carrito-wrapper">
            <table class="tabla-carrito">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th style="text-align: center;">Cantidad</th>
                        <th>Subtotal</th>
                        <th style="text-align: center;">Acciones</th>
                    </tr>
                </thead>
                <tbody>
    `;

    carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        let imgRuta = producto.imagen || `imagenes/producto${producto.id}.jpg`;

        tablaHTML += `
            <tr>
                <td>
                    <div class="item-info">
                        <div class="item-miniatura">
                            <img src="${imgRuta}" alt="${producto.nombre}">
                        </div>
                        <div>
                            <div class="item-nombre">${producto.nombre}</div>
                            <div class="item-categoria">${producto.categoria ? producto.categoria.toUpperCase() : 'TECNOLOGÍA'}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <strong>$${producto.precio.toFixed(2)}</strong>
                </td>
                <td style="text-align: center;">
                    <div class="cantidad-controles">
                        <button type="button" onclick="cambiarCantidad(${producto.id}, -1)" title="Disminuir cantidad">-</button>
                        <strong>${producto.cantidad}</strong>
                        <button type="button" onclick="cambiarCantidad(${producto.id}, 1)" title="Aumentar cantidad">+</button>
                    </div>
                </td>
                <td>
                    <strong style="color: var(--accent);">$${subtotal.toFixed(2)}</strong>
                </td>
                <td style="text-align: center;">
                    <button class="btn-eliminar" onclick="eliminarProducto(${producto.id})" title="Eliminar este producto">
                        🗑️ Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    tablaHTML += `
                </tbody>
            </table>
        </div>
    `;

    contenedor.innerHTML = tablaHTML;
    actualizarTotal();
}

// ==========================================
// 7. CAMBIAR CANTIDAD (+1 / -1)
// ==========================================
function cambiarCantidad(id, cambio) {
    id = parseInt(id);
    let carrito = obtenerCarrito();
    let producto = carrito.find(p => p.id === id);

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        let confirmar = confirm("¿Deseas remover este producto del carrito?");
        if (confirmar) {
            carrito = carrito.filter(p => p.id !== id);
        } else {
            producto.cantidad = 1;
        }
    }

    guardarCarrito(carrito);
    mostrarCarrito();
    actualizarContador();
}

// ==========================================
// 8. ELIMINAR PRODUCTO
// ==========================================
function eliminarProducto(id) {
    id = parseInt(id);
    let confirmar = confirm("¿Desea eliminar este producto del carrito?");
    if (!confirmar) {
        return;
    }

    let carrito = obtenerCarrito();
    carrito = carrito.filter(producto => producto.id !== id);

    guardarCarrito(carrito);
    mostrarCarrito();
    actualizarContador();
    mostrarNotificacion("Producto eliminado del carrito.");
}

// ==========================================
// 9. VACIAR CARRITO
// ==========================================
function vaciarCarrito() {
    let carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert("El carrito ya está vacío.");
        return;
    }

    let confirmar = confirm("¿Está seguro de que desea vaciar todo el carrito?");
    if (confirmar) {
        localStorage.removeItem("carrito");
        mostrarCarrito();
        actualizarContador();
        mostrarNotificacion("Se vació el carrito.");
    }
}

// ==========================================
// 10. ACTUALIZAR TOTAL
// ==========================================
function actualizarTotal() {
    let total = calcularTotal();
    let elemento = document.getElementById("totalCarrito");
    if (elemento) {
        elemento.textContent = total.toFixed(2);
    }
}

// ==========================================
// 11. CALCULAR TOTAL GENERAL
// ==========================================
function calcularTotal() {
    let carrito = obtenerCarrito();
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}

// ==========================================
// 12. BUSCADOR DE PRODUCTOS (productos.html)
// ==========================================
function filtrarProductos() {
    let input = document.getElementById("buscador");
    if (!input) return;

    let texto = input.value.toLowerCase().trim();
    let productosHTML = document.querySelectorAll("#listaProductos .producto");
    let btnLimpiar = document.querySelector(".btn-limpiar");
    let visibles = 0;

    if (btnLimpiar) {
        btnLimpiar.style.display = texto.length > 0 ? "block" : "none";
    }

    productosHTML.forEach(producto => {
        let nombre = (producto.getAttribute("data-nombre") || "").toLowerCase();
        let categoria = (producto.getAttribute("data-categoria") || "").toLowerCase();

        if (nombre.includes(texto) || categoria.includes(texto)) {
            producto.style.display = "flex";
            visibles++;
        } else {
            producto.style.display = "none";
        }
    });

    let contadorResultados = document.getElementById("contadorResultados");
    if (contadorResultados) {
        contadorResultados.textContent = `Mostrando ${visibles} de ${productosHTML.length} productos`;
    }
}

// ==========================================
// 13. LIMPIAR BUSCADOR
// ==========================================
function limpiarBuscador() {
    let input = document.getElementById("buscador");
    if (input) {
        input.value = "";
        filtrarProductos();
        input.focus();
    }
}

// ==========================================
// 14. FILTRAR POR CATEGORÍA (productos.html)
// ==========================================
function filtrarCategoria(categoria) {
    let productosHTML = document.querySelectorAll("#listaProductos .producto");
    let botonesFiltro = document.querySelectorAll(".filtros button");
    let visibles = 0;

    // Actualizar botón activo
    botonesFiltro.forEach(boton => {
        let onclickAttr = boton.getAttribute("onclick") || "";
        if (onclickAttr.includes(`'${categoria}'`)) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });

    // Limpiar texto de buscador al cambiar de categoría
    let inputBuscador = document.getElementById("buscador");
    if (inputBuscador) {
        inputBuscador.value = "";
        let btnLimpiar = document.querySelector(".btn-limpiar");
        if (btnLimpiar) btnLimpiar.style.display = "none";
    }

    productosHTML.forEach(producto => {
        let categoriaProducto = producto.getAttribute("data-categoria");
        if (categoria === "todos" || categoriaProducto === categoria) {
            producto.style.display = "flex";
            visibles++;
        } else {
            producto.style.display = "none";
        }
    });

    let contadorResultados = document.getElementById("contadorResultados");
    if (contadorResultados) {
        contadorResultados.textContent = `Mostrando ${visibles} de ${productosHTML.length} productos`;
    }
}

// ==========================================
// 15. PROCESO DE COMPRA (contacto.html)
// ==========================================
function configurarFormulario() {
    let formulario = document.getElementById("formularioCompra");
    if (!formulario) {
        return;
    }

    // Actualizar resumen lateral si existe
    actualizarResumenCheckout();

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let carrito = obtenerCarrito();
        if (carrito.length === 0) {
            alert("⚠️ No puede realizar una compra porque el carrito está vacío.\nPor favor agregue productos desde el catálogo.");
            window.location.href = "productos.html";
            return;
        }

        let nombre = document.getElementById("nombre").value.trim();
        let cedula = document.getElementById("cedula") ? document.getElementById("cedula").value.trim() : "N/D";
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let direccion = document.getElementById("direccion").value.trim();
        let metodo = document.getElementById("metodo").value;
        let entrega = document.getElementById("entrega") ? document.getElementById("entrega").value : "Envío a domicilio";

        let totalCompra = calcularTotal();
        let ordenNumero = "CYBER-" + Math.floor(100000 + Math.random() * 900000);
        let fechaActual = new Date().toLocaleDateString("es-PA", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        let mensaje = document.getElementById("mensajeCompra");
        if (mensaje) {
            mensaje.innerHTML = `
                <div class="confirmacion-tarjeta">
                    <div style="font-size: 55px; margin-bottom: 10px;">🎉</div>
                    <h2>¡Compra Confirmada Exitosamente!</h2>
                    <p style="font-size: 16px; color: #475569;">
                        Gracias por tu compra en <strong>Cybertech</strong>, <strong>${nombre}</strong>.
                    </p>
                    <div class="confirmacion-datos">
                        <p><strong>N° de Pedido:</strong> <span style="color: var(--accent); font-weight: 800;">#${ordenNumero}</span></p>
                        <p><strong>Fecha y hora:</strong> ${fechaActual}</p>
                        <p><strong>Cédula / ID:</strong> ${cedula}</p>
                        <p><strong>Correo electrónico:</strong> ${correo}</p>
                        <p><strong>Teléfono de contacto:</strong> ${telefono}</p>
                        <p><strong>Dirección de entrega:</strong> ${direccion}</p>
                        <p><strong>Tipo de entrega:</strong> ${entrega}</p>
                        <p><strong>Método de pago:</strong> ${metodo}</p>
                        <hr style="margin: 12px 0; border: none; border-top: 1px dashed #cbd5e1;">
                        <p style="font-size: 18px; color: var(--primary);">
                            <strong>Total pagado:</strong> <span style="color: var(--accent); font-weight: 800;">$${totalCompra.toFixed(2)} Balboas / USD</span>
                        </p>
                    </div>
                    <p style="font-size: 13px; color: #64748b; margin-bottom: 20px;">
                        Hemos enviado el comprobante de simulación a <em>${correo}</em>. En breve nuestro equipo coordinará la entrega en Panamá.
                    </p>
                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="window.print()" class="boton boton-outline">
                            🖨️ Imprimir Comprobante
                        </button>
                        <a href="index.html" class="boton">
                            🏠 Volver al Inicio
                        </a>
                    </div>
                </div>
            `;
            mensaje.scrollIntoView({ behavior: "smooth" });
        }

        // Vaciar el carrito y reiniciar
        localStorage.removeItem("carrito");
        actualizarContador();
        formulario.reset();
        actualizarResumenCheckout();
    });
}

// ==========================================
// 16. RESUMEN LATERAL EN CHECKOUT
// ==========================================
function actualizarResumenCheckout() {
    let previewContenedor = document.getElementById("checkoutItemsPreview");
    let totalSpan = document.getElementById("checkoutTotal");
    let subtotalSpan = document.getElementById("checkoutSubtotal");

    if (!previewContenedor) return;

    let carrito = obtenerCarrito();
    let total = calcularTotal();

    if (carrito.length === 0) {
        previewContenedor.innerHTML = `<p style="font-size: 13px; color: #94a3b8; text-align: center; padding: 15px 0;">El carrito está vacío.</p>`;
    } else {
        let html = "";
        carrito.forEach(p => {
            html += `
                <div class="checkout-item-mini">
                    <span>${p.nombre} (x${p.cantidad})</span>
                    <strong>$${(p.precio * p.cantidad).toFixed(2)}</strong>
                </div>
            `;
        });
        previewContenedor.innerHTML = html;
    }

    if (subtotalSpan) subtotalSpan.textContent = `$${total.toFixed(2)}`;
    if (totalSpan) totalSpan.textContent = `$${total.toFixed(2)}`;
}

// ==========================================
// 17. NOTIFICACIÓN VISUAL TOAST
// ==========================================
function mostrarNotificacion(mensaje) {
    let toast = document.getElementById("cyberToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cyberToast";
        toast.className = "toast-notificacion";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<span>🛒</span> <span>${mensaje}</span>`;
    toast.classList.add("mostrar");

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 2800);
}

// ==========================================
// 18. DETECTAR PARÁMETROS DE URL (ej. ?cat=gaming)
// ==========================================
function verificarParametrosURL() {
    let urlParams = new URLSearchParams(window.location.search);
    let categoria = urlParams.get("cat");
    if (categoria) {
        filtrarCategoria(categoria);
    }
}

// ==========================================
// 19. INICIALIZACIÓN GLOBAL AL CARGAR EL DOM
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    actualizarContador();
    mostrarCarrito();
    configurarFormulario();
    verificarParametrosURL();
});


// ==========================================
// 20. CONTROL DEL MENÚ MÓVIL
// ==========================================
function toggleMenu() {
    let nav = document.getElementById("menuNav") || document.querySelector("header nav");
    if (nav) {
        nav.classList.toggle("nav-abierto");
    }
}
