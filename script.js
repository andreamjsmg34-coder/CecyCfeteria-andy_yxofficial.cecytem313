"use strict";

/* =========================================
   CECYCAFETERÍA
   Aplicación escolar de demostración
========================================= */


/* =========================================
   1. VARIABLES PRINCIPALES
========================================= */

const $ = (id) => document.getElementById(id);

let cuentasDemo = [
    {
        nombre: "Usuario de demostración",
        correo: "demo@cecycafeteria.mx",
        contrasena: "demo123"
    }
];
let usuarioActual = null;

let pedido = [];
let historialPedidos = [];
let numeroPedido = 1;

let categoriaActual = null;
let pedidoActual = null;


/* =========================================
   2. PRODUCTOS DEL MENÚ
========================================= */

const categorias = [
    {
        nombre: "Hamburguesas",
        imagen: "hamburguesa.jpg",
        productos: [
            { nombre: "Hamburguesa clásica", precio: 35, imagen: "hamburguesa-clasica.jpg" },
            { nombre: "Hamburguesa con queso", precio: 40, imagen: "hamburguesa-queso.jpg" },
            { nombre: "Hamburguesa hawaiana", precio: 45, imagen: "hamburguesa-hawaiana.jpg" },
            { nombre: "Hamburguesa doble", precio: 50, imagen: "hamburguesa-doble.jpg" }
        ]
    },
    {
        nombre: "Sándwiches",
        imagen: "sandwich.jpg",
        productos: [
            { nombre: "Sándwich de jamón y queso", precio: 25, imagen: "sandwich-jamon-queso.jpg" },
            { nombre: "Sándwich de pollo", precio: 30, imagen: "sandwich-pollo.jpg" },
            { nombre: "Sándwich de atún", precio: 30, imagen: "sandwich-atun.jpg" },
            { nombre: "Sándwich vegetariano", precio: 28, imagen: "sandwich-vegetariano.jpg" }
        ]
    },
    {
        nombre: "Tacos",
        imagen: "tacos.jpg",
        productos: [
            { nombre: "Tacos de bistec", precio: 35, imagen: "tacos-bistec.jpg" },
            { nombre: "Tacos de pollo", precio: 30, imagen: "tacos-pollo.jpg" },
            { nombre: "Tacos al pastor", precio: 35, imagen: "tacos-pastor.jpg" },
            { nombre: "Tacos de chorizo", precio: 30, imagen: "tacos-chorizo.jpg" }
        ]
    },
    {
        nombre: "Quesadillas",
        imagen: "quesadilla.jpg",
        productos: [
            { nombre: "Quesadilla de queso", precio: 25, imagen: "quesadilla-queso.jpg" },
            { nombre: "Quesadilla de pollo", precio: 30, imagen: "quesadilla-pollo.jpg" },
            { nombre: "Quesadilla de champiñones", precio: 28, imagen: "quesadilla-champinones.jpg" },
            { nombre: "Quesadilla de chorizo", precio: 30, imagen: "quesadilla-chorizo.jpg" }
        ]
    },
    {
        nombre: "Tortas",
        imagen: "torta.jpg",
        productos: [
            { nombre: "Torta de jamón", precio: 30, imagen: "torta-jamon.jpg" },
            { nombre: "Torta de pierna", precio: 35, imagen: "torta-pierna.jpg" },
            { nombre: "Torta de milanesa", precio: 40, imagen: "torta-milanesa.jpg" },
            { nombre: "Torta de pollo", precio: 35, imagen: "torta-pollo.jpg" }
        ]
    },
    {
        nombre: "Pizza",
        imagen: "pizza.jpg",
        productos: [
            { nombre: "Pizza de pepperoni", precio: 30, imagen: "pizza-pepperoni.jpg" },
            { nombre: "Pizza de jamón", precio: 30, imagen: "pizza-jamon.jpg" },
            { nombre: "Pizza hawaiana", precio: 35, imagen: "pizza-hawaiana.jpg" },
            { nombre: "Pizza de queso", precio: 25, imagen: "pizza-queso.jpg" }
        ]
    },
    {
        nombre: "Papas y Sabritas",
        imagen: "papas.jpg",
        productos: [
            { nombre: "Papas clásicas", precio: 25, imagen: "papas-clasicas.jpg" },
            { nombre: "Papas con queso", precio: 30, imagen: "papas-queso.jpg" },
            { nombre: "Papas con salsa", precio: 28, imagen: "papas-salsa.jpg" },
            { nombre: "Sabritas", precio: 18, imagen: "sabritas.jpg" }
        ]
    },
    {
        nombre: "Golosinas",
        imagen: "golosinas.jpg",
        productos: [
            { nombre: "Dulces", precio: 10, imagen: "dulces.jpg" },
            { nombre: "Chocolate", precio: 15, imagen: "chocolate.jpg" },
            { nombre: "Gomitas", precio: 12, imagen: "gomitas.jpg" },
            { nombre: "Paletas", precio: 8, imagen: "paletas.jpg" }
        ]
    },
    {
        nombre: "Bebidas",
        imagen: "bebidas.jpg",
        productos: [
            { nombre: "Agua natural", precio: 10, imagen: "agua.jpg" },
            { nombre: "Agua de jamaica", precio: 18, imagen: "agua-jamaica.jpg" },
            { nombre: "Agua de horchata", precio: 18, imagen: "agua-horchata.jpg" },
            { nombre: "Agua de sandía", precio: 18, imagen: "agua-sandia.jpg" },
            { nombre: "Agua de limón", precio: 18, imagen: "agua-limon.jpg" },
            { nombre: "Refresco", precio: 10, imagen: "refresco.jpg" }
        ]
    },
    {
        nombre: "Yogurt con fruta",
        imagen: "yogurt.jpg",
        productos: [
            { nombre: "Yogurt con fresa", precio: 25, imagen: "yogurt-fresa.jpg" },
            { nombre: "Yogurt con plátano", precio: 25, imagen: "yogurt-platano.jpg" },
            { nombre: "Yogurt con papaya", precio: 25, imagen: "yogurt-papaya.jpg" },
            { nombre: "Yogurt con sandía", precio: 25, imagen: "yogurt-sandia.jpg" },
            { nombre: "Yogurt con manzana", precio: 25, imagen: "yogurt-manzana.jpg" },
            { nombre: "Yogurt con fruta mixta", precio: 30, imagen: "yogurt-fruta-mixta.jpg" }
        ]
    },
    {
        nombre: "Ensaladas",
        imagen: "ensalada.jpg",
        productos: [
            { nombre: "Ensalada de frutas", precio: 30, imagen: "ensalada-frutas.jpg" },
            { nombre: "Ensalada mixta", precio: 30, imagen: "ensalada-mixta..jpg" },
            { nombre: "Ensalada de verduras", precio: 30, imagen: "ensalada-verduras.jpg" }
        ]
    },
    {
        nombre: "Cacahuates y botanas",
        imagen: "cacahuates.jpg",
        productos: [
            { nombre: "Cacahuates naturales", precio: 15, imagen: "cacahuates-naturales.jpg" },
            { nombre: "Cacahuates enchilados", precio: 15, imagen: "cacahuates-enchilados.jpg" },
            { nombre: "Cacahuates japoneses", precio: 15, imagen: "cacahuates-japoneses.jpg" }
        ]
    },
    {
        nombre: "Pan y repostería",
        imagen: "pan.jpg",
        productos: [
            { nombre: "Dona", precio: 15, imagen: "dona.jpg" },
            { nombre: "Dona de chocolate", precio: 18, imagen: "dona-chocolate.jpg" },
            { nombre: "Concha de vainilla", precio: 15, imagen: "concha-vainilla.jpg" },
            { nombre: "Concha de chocolate", precio: 15, imagen: "concha-chocolate.jpg" },
            { nombre: "Croissant", precio: 18, imagen: "croissant.jpg" },
            { nombre: "Pan dulce", precio: 15, imagen: "pan-dulce.jpg" }
        ]
    },
    {
        nombre: "Chilaquiles",
        imagen: "chilaquiles.jpg",
        productos: [
            { nombre: "Chilaquiles rojos", precio: 35, imagen: "chilaquiles-rojos.jpg" },
            { nombre: "Chilaquiles verdes", precio: 35, imagen: "chilaquiles-verdes.jpg" },
            { nombre: "Chilaquiles con pollo", precio: 45, imagen: "chilaquiles-pollo.jpg" },
            { nombre: "Chilaquiles con huevo", precio: 40, imagen: "chilaquiles-huevo.jpg" }
        ]
    }
];


/* =========================================
   3. HERRAMIENTAS GENERALES
========================================= */

function mostrarPantalla(id) {
    document.querySelectorAll(".pantalla").forEach((pantalla) => {
        pantalla.classList.add("oculto");
    });

    const pantallaSeleccionada = $(id);

    if (pantallaSeleccionada) {
        pantallaSeleccionada.classList.remove("oculto");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function formatoPrecio(precio) {
    return precio.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
}

function crearMensajeVacio(texto) {
    const mensaje = document.createElement("p");
    mensaje.className = "mensaje-vacio";
    mensaje.textContent = texto;
    return mensaje;
}

function crearImagen(ruta, descripcion) {
    const imagen = document.createElement("img");

    imagen.src = `img/${ruta}`;
    imagen.alt = descripcion;
    imagen.loading = "lazy";

    imagen.addEventListener("error", () => {
        imagen.onerror = null;
        imagen.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="400" height="250">
                    <rect width="100%" height="100%" fill="#e7f7ec"/>
                    <text x="50%" y="50%"
                          text-anchor="middle"
                          dominant-baseline="middle"
                          font-size="28">🍃 CecyCafetería</text>
                </svg>
            `);
    });

    return imagen;
}

function crearBoton(texto, clase, accion) {
    const boton = document.createElement("button");

    boton.type = "button";
    boton.textContent = texto;
    boton.className = clase;
    boton.addEventListener("click", accion);

    return boton;
}


/* =========================================
   4. INICIO DE SESIÓN Y REGISTRO
========================================= */

function iniciarSesion(evento) {
    evento.preventDefault();

    const correo = $("correo").value.trim().toLowerCase();
    const contrasena = $("contrasena").value;
    const mensaje = $("mensajeLogin");

    mensaje.textContent = "";

    const cuenta = cuentasDemo.find((usuario) => {
        return usuario.correo === correo &&
            usuario.contrasena === contrasena;
    });

    if (!cuenta) {
        mensaje.textContent =
            "No encontramos esa cuenta en esta sesión. Revisa tus datos o crea una cuenta.";
        return;
    }

    usuarioActual = {
        nombre: cuenta.nombre,
        correo: cuenta.correo
    };

    $("formLogin").reset();

    entrarAplicacion();
}

function registrarCuenta(evento) {
    evento.preventDefault();

    const nombre = $("nombreRegistro").value.trim();
    const correo = $("correoRegistro").value.trim().toLowerCase();
    const contrasena = $("contrasenaRegistro").value;
    const mensaje = $("mensajeRegistro");

    mensaje.textContent = "";

    if (nombre.length < 2) {
        mensaje.textContent = "Escribe tu nombre completo.";
        return;
    }

    if (contrasena.length < 6) {
        mensaje.textContent =
            "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    const existe = cuentasDemo.some((usuario) => {
        return usuario.correo === correo;
    });

    if (existe) {
        mensaje.textContent =
            "Ya existe una cuenta con ese correo en esta sesión.";
        return;
    }

    cuentasDemo.push({
        nombre: nombre,
        correo: correo,
        contrasena: contrasena
    });

    usuarioActual = {
        nombre: nombre,
        correo: correo
    };

    $("formRegistro").reset();

    entrarAplicacion();
}

function entrarAplicacion() {
    $("aplicacion").classList.remove("oculto");
    $("pantallaLogin").classList.add("oculto");
    $("pantallaRegistro").classList.add("oculto");

    mostrarPantalla("pantallaInicio");
    mostrarCategorias();
    actualizarContadorCarrito();
}

function cerrarSesion() {
    usuarioActual = null;
    pedido = [];
    pedidoActual = null;
    categoriaActual = null;

    actualizarPedido();
    actualizarContadorCarrito();

    $("aplicacion").classList.add("oculto");
    $("mensajeLogin").textContent = "";
    $("mensajeRegistro").textContent = "";

    mostrarPantalla("pantallaLogin");
}


/* =========================================
   5. NAVEGACIÓN
========================================= */

function irAlInicio() {
    mostrarPantalla("pantallaInicio");
}

function irAlMenu() {
    categoriaActual = null;

    $("seccionProductos").classList.add("oculto");
    $("categoriasMenu").classList.remove("oculto");
    $("buscarProducto").value = "";

    mostrarPantalla("pantallaMenu");
    mostrarCategorias();
}

function irAlCarrito() {
    actualizarPedido();
    mostrarPantalla("pantallaPedido");
}

function irAlHistorial() {
    mostrarHistorial();
    mostrarPantalla("pantallaHistorial");
}


/* =========================================
   6. CATEGORÍAS
========================================= */

function mostrarCategorias() {
    const contenedorInicio = $("categoriasDestacadas");
    const contenedorMenu = $("categoriasMenu");

    contenedorInicio.replaceChildren();
    contenedorMenu.replaceChildren();

    categorias.forEach((categoria, indice) => {
        const tarjeta = document.createElement("button");

        tarjeta.type = "button";
        tarjeta.className = "tarjeta-categoria";
        tarjeta.setAttribute(
            "aria-label",
            `Ver categoría ${categoria.nombre}`
        );

        tarjeta.appendChild(
            crearImagen(categoria.imagen, categoria.nombre)
        );

        const titulo = document.createElement("h3");
        titulo.textContent = categoria.nombre;

        tarjeta.appendChild(titulo);

        tarjeta.addEventListener("click", () => {
            mostrarProductos(indice);
        });

        contenedorMenu.appendChild(tarjeta);

        if (indice < 4) {
            contenedorInicio.appendChild(tarjeta.cloneNode(true));

            const tarjetaInicio =
                contenedorInicio.lastElementChild;

            tarjetaInicio.addEventListener("click", () => {
                mostrarProductos(indice);
            });
        }
    });
}


/* =========================================
   7. MOSTRAR PRODUCTOS
========================================= */

function mostrarProductos(indice) {
    const categoria = categorias[indice];

    if (!categoria) {
        return;
    }

    categoriaActual = indice;

    $("tituloCategoria").textContent = categoria.nombre;
    $("categoriasMenu").classList.add("oculto");
    $("seccionProductos").classList.remove("oculto");

    mostrarListaProductos(categoria.productos);
    mostrarPantalla("pantallaMenu");
}

function mostrarListaProductos(productos) {
    const contenedor = $("listaProductos");
    contenedor.replaceChildren();

    if (productos.length === 0) {
        contenedor.appendChild(
            crearMensajeVacio("No encontramos productos.")
        );
        return;
    }

    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-producto";

        tarjeta.appendChild(
            crearImagen(producto.imagen, producto.nombre)
        );

        const informacion = document.createElement("div");
        informacion.className = "info-producto";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("span");
        precio.className = "precio-producto";
        precio.textContent = formatoPrecio(producto.precio);

        const boton = crearBoton(
            "Agregar al carrito",
            "boton-principal",
            () => agregarAlCarrito(producto)
        );

        informacion.append(titulo, precio, boton);
        tarjeta.appendChild(informacion);
        contenedor.appendChild(tarjeta);
    });
}


/* =========================================
   8. BUSCAR PRODUCTOS
========================================= */

function buscarProductos() {
    const texto = $("buscarProducto").value
        .trim()
        .toLowerCase();

    const resultados = [];

    categorias.forEach((categoria, indiceCategoria) => {
        categoria.productos.forEach((producto) => {
            const coincideProducto = producto.nombre
                .toLowerCase()
                .includes(texto);

            const coincideCategoria = categoria.nombre
                .toLowerCase()
                .includes(texto);

            if (coincideProducto || coincideCategoria) {
                resultados.push({
                    ...producto,
                    categoria: categoria.nombre,
                    indiceCategoria
                });
            }
        });
    });

    $("categoriasMenu").classList.add("oculto");
    $("seccionProductos").classList.remove("oculto");
    $("tituloCategoria").textContent = texto
        ? `Resultados para: ${texto}`
        : "Todos los productos";

    const contenedor = $("listaProductos");
    contenedor.replaceChildren();

    if (resultados.length === 0) {
        contenedor.appendChild(
            crearMensajeVacio(
                "No encontramos productos con ese nombre."
            )
        );
        return;
    }

    resultados.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-producto";

        tarjeta.appendChild(
            crearImagen(producto.imagen, producto.nombre)
        );

        const informacion = document.createElement("div");
        informacion.className = "info-producto";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const categoria = document.createElement("p");
        categoria.textContent = producto.categoria;

        const precio = document.createElement("span");
        precio.className = "precio-producto";
        precio.textContent = formatoPrecio(producto.precio);

        const boton = crearBoton(
            "Agregar al carrito",
            "boton-principal",
            () => agregarAlCarrito(producto)
        );

        informacion.append(titulo, categoria, precio, boton);
        tarjeta.appendChild(informacion);
        contenedor.appendChild(tarjeta);
    });
}


/* =========================================
   9. CARRITO
========================================= */

function agregarAlCarrito(producto) {
    const existente = pedido.find((item) => {
        return item.nombre === producto.nombre;
    });

    if (existente) {
        existente.cantidad++;
    } else {
        pedido.push({
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    actualizarPedido();
    actualizarContadorCarrito();

    alert(`${producto.nombre} se agregó al carrito.`);
}

function cambiarCantidad(nombre, cambio) {
    const producto = pedido.find((item) => {
        return item.nombre === nombre;
    });

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        pedido = pedido.filter((item) => {
            return item.nombre !== nombre;
        });
    }

    actualizarPedido();
    actualizarContadorCarrito();
}

function eliminarDelCarrito(nombre) {
    pedido = pedido.filter((item) => {
        return item.nombre !== nombre;
    });

    actualizarPedido();
    actualizarContadorCarrito();
}

function calcularTotal() {
    return pedido.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);
}

function actualizarContadorCarrito() {
    const contador = pedido.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    $("contadorCarrito").textContent = contador;
}

function actualizarPedido() {
    const contenedor = $("listaPedido");
    contenedor.replaceChildren();

    if (pedido.length === 0) {
        contenedor.appendChild(
            crearMensajeVacio(
                "Tu carrito está vacío. ¡Explora el menú para agregar productos!"
            )
        );
    } else {
        pedido.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.className = "producto-pedido";

            const informacion = document.createElement("div");

            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const precio = document.createElement("p");
            precio.textContent =
                `${formatoPrecio(producto.precio)} por unidad`;

            const cantidad = document.createElement("p");
            cantidad.textContent = `Cantidad: ${producto.cantidad}`;

            const subtotal = document.createElement("p");
            subtotal.textContent =
                `Subtotal: ${formatoPrecio(
                    producto.precio * producto.cantidad
                )}`;

            informacion.append(titulo, precio, cantidad, subtotal);

            const acciones = document.createElement("div");

            acciones.append(
                crearBoton("+", "boton-secundario", () => {
                    cambiarCantidad(producto.nombre, 1);
                }),
                crearBoton("−", "boton-secundario", () => {
                    cambiarCantidad(producto.nombre, -1);
                }),
                crearBoton("Eliminar", "boton-secundario", () => {
                    eliminarDelCarrito(producto.nombre);
                })
            );

            tarjeta.append(informacion, acciones);
            contenedor.appendChild(tarjeta);
        });
    }

    $("subtotalPedido").textContent = formatoPrecio(calcularTotal());
    $("totalPedido").textContent = formatoPrecio(calcularTotal());

    $("btnConfirmarPedido").disabled = pedido.length === 0;
}


/* =========================================
   10. CONFIRMAR PEDIDO
========================================= */

function confirmarPedido() {
    if (pedido.length === 0) {
        alert("Agrega al menos un producto antes de confirmar.");
        return;
    }

    if (!usuarioActual) {
        alert("Inicia sesión para continuar.");
        mostrarPantalla("pantallaLogin");
        return;
    }

    pedidoActual = {
        numero: numeroPedido++,
        usuario: usuarioActual.nombre,
        fecha: new Date().toLocaleString("es-MX"),
        productos: pedido.map((producto) => ({ ...producto })),
        total: calcularTotal(),
        estado: "En preparación"
    };

    historialPedidos.unshift(pedidoActual);

    $("numeroPedido").textContent =
        String(pedidoActual.numero).padStart(4, "0");

    $("mensajeConfirmacion").textContent =
        `Gracias, ${usuarioActual.nombre}. Tu pedido quedó registrado en esta demostración.`;

    $("estadoPedido").textContent = pedidoActual.estado;

    pedido = [];

    actualizarPedido();
    actualizarContadorCarrito();

    mostrarPantalla("pantallaConfirmacion");
}


/* =========================================
   11. TICKET
========================================= */

function mostrarTicket() {
    if (!pedidoActual) {
        alert("Primero debes confirmar un pedido.");
        return;
    }

    const contenedor = $("contenidoTicket");
    contenedor.replaceChildren();

    const datos = [
        `Pedido: ${String(pedidoActual.numero).padStart(4, "0")}`,
        `Cliente: ${pedidoActual.usuario}`,
        `Fecha: ${pedidoActual.fecha}`,
        `Estado: ${pedidoActual.estado}`,
        "-----------------------------"
    ];

    datos.forEach((texto) => {
        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        contenedor.appendChild(parrafo);
    });

    pedidoActual.productos.forEach((producto) => {
        const parrafo = document.createElement("p");

        parrafo.textContent =
            `${producto.nombre} x${producto.cantidad}: ` +
            formatoPrecio(producto.precio * producto.cantidad);

        contenedor.appendChild(parrafo);
    });

    const total = document.createElement("h3");
    total.textContent = `Total: ${formatoPrecio(pedidoActual.total)}`;

    contenedor.appendChild(total);

    mostrarPantalla("pantallaTicket");
}


/* =========================================
   12. HISTORIAL
========================================= */

function mostrarHistorial() {
    const contenedor = $("listaHistorial");
    contenedor.replaceChildren();

    if (historialPedidos.length === 0) {
        contenedor.appendChild(
            crearMensajeVacio(
                "Todavía no has realizado pedidos en esta sesión."
            )
        );
        return;
    }

    historialPedidos.forEach((pedidoGuardado) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-historial";

        const informacion = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent =
            `Pedido #${String(pedidoGuardado.numero).padStart(4, "0")}`;

        const fecha = document.createElement("p");
        fecha.textContent = pedidoGuardado.fecha;

        const total = document.createElement("p");
        total.textContent =
            `Total: ${formatoPrecio(pedidoGuardado.total)}`;

        const estado = document.createElement("p");
        estado.textContent = `Estado: ${pedidoGuardado.estado}`;

        informacion.append(titulo, fecha, total, estado);

        const boton = crearBoton(
            "Ver ticket",
            "boton-secundario",
            () => {
                pedidoActual = pedidoGuardado;
                mostrarTicket();
            }
        );

        tarjeta.append(informacion, boton);
        contenedor.appendChild(tarjeta);
    });
}


/* =========================================
   13. CONECTAR TODOS LOS BOTONES
========================================= */

function configurarEventos() {
    $("formLogin").addEventListener("submit", iniciarSesion);

    $("formRegistro").addEventListener("submit", registrarCuenta);

    $("btnMostrarRegistro").addEventListener("click", () => {
        $("mensajeRegistro").textContent = "";
        mostrarPantalla("pantallaRegistro");
    });

    $("btnVolverLogin").addEventListener("click", () => {
        $("mensajeLogin").textContent = "";
        mostrarPantalla("pantallaLogin");
    });

    $("btnCerrarSesion").addEventListener("click", cerrarSesion);

    $("btnInicio").addEventListener("click", irAlInicio);

    $("btnMenu").addEventListener("click", irAlMenu);

    $("btnExplorarMenu").addEventListener("click", irAlMenu);

    $("btnPedidos").addEventListener("click", irAlHistorial);

    $("btnCarrito").addEventListener("click", irAlCarrito);

    $("btnSeguirComprando").addEventListener("click", irAlMenu);

    $("btnVolverCategorias").addEventListener("click", () => {
        $("buscarProducto").value = "";
        $("seccionProductos").classList.add("oculto");
        $("categoriasMenu").classList.remove("oculto");
        mostrarCategorias();
    });

    $("buscarProducto").addEventListener("input", buscarProductos);

    $("btnConfirmarPedido").addEventListener("click", confirmarPedido);

    $("btnVerTicket").addEventListener("click", mostrarTicket);

    $("btnVolverInicio").addEventListener("click", irAlInicio);

    $("btnTicketInicio").addEventListener("click", irAlInicio);

    $("btnHistorialInicio").addEventListener("click", irAlInicio);
}


/* =========================================
   14. INICIAR APLICACIÓN
========================================= */

function iniciarAplicacion() {
    configurarEventos();

    mostrarCategorias();
    actualizarPedido();
    actualizarContadorCarrito();

    $("aplicacion").classList.add("oculto");

    mostrarPantalla("pantallaLogin");
}

document.addEventListener("DOMContentLoaded", iniciarAplicacion);