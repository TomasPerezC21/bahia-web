# Bahía — Web Store 🌊👙

[![Angular](https://img.shields.io/badge/Angular-21+-DD0031.svg?style=flat-square&logo=angular)](https://angular.io/)
[![Material Design](https://img.shields.io/badge/Angular--Material-Latest-blue.svg?style=flat-square&logo=angular)](https://material.angular.io/)
[![Vercel](https://img.shields.io/badge/Hosted-Vercel-black.svg?style=flat-square&logo=vercel)](https://vercel.com/)

**Bahía Miranda** es una tienda web minimalista y elegante diseñada para una marca familiar de bikinis y trajes de baño artesanales. El proyecto se centra en ofrecer una experiencia de usuario premium, con un sistema de navegación intuitivo y un proceso de compra simplificado basado en pedidos por correo electrónico.

---

## 🚀 Demo En Vivo
Puedes ver la versión actual desplegada en el siguiente enlace:
👉 **[bahia-web.vercel.app](https://bahia-web.vercel.app/)**

---

## ✨ Características Principales

-   **Diseño Premium & Responsive**: Interfaz moderna basada en una paleta de colores beige, arena y concha, totalmente adaptada a dispositivos móviles.
-   **Arquitectura Modular**: Construida mediante componentes independientes y reutilizables siguiendo las mejores prácticas de Angular.
-   **Gestión de Estado Moderna**: Utilización de **Angular Signals** para el manejo reactivo del carrito de compras.
-   **Checkout "Invisible"**: Sistema de pedidos integrado con **Web3Forms**, permitiendo que los clientes realicen sus compras sin pasarelas de pago complejas, enviando los detalles directamente a la administración.
-   **Tipografía Elegante**: Uso de *Playfair Display* para títulos display y *DM Sans* para el cuerpo de texto, logrando una estética de alta gama.

---

## 🛠️ Stack Tecnológico

-   **Framework**: [Angular 21](https://angular.dev/) (Standalone Components).
-   **Estilos**: [SCSS](https://sass-lang.com/) con metodología BEM y [Angular Material](https://material.angular.io/) para componentes de UI.
-   **Iconografía**: Google Material Icons.
-   **Integraciones**: Web3Forms para la comunicación vía email.
-   **Hosting**: Vercel.

---

## 📂 Estructura del Proyecto

```text
src/app/
├── components/       # Componentes reutilizables (Navbar, Hero, Footer...)
├── models/           # Interfaces y tipos de datos (Product, CartItem)
├── pages/            # Vistas principales (Home, Cart)
├── services/         # Lógica de negocio y estado global (CartService)
├── app.routes.ts     # Configuración del enrutamiento
└── styles.scss       # Design tokens y estilos globales
```

---

## ⚙️ Instalación Local

Si deseas clonar el proyecto y ejecutarlo en tu máquina:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/bahia-web.git
    ```
2.  **Instalar dependencias**:
    ```bash
    npm install
    ```
3.  **Ejecutar el servidor de desarrollo**:
    ```bash
    ng serve
    ```
    Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

---

## 🤝 Contacto

Desarrollado con ❤️ por [Tomas Perez](https://github.com/TomasPerezC21).

---
*Este proyecto es parte de un desarrollo personal para la marca Bahía Miranda.*
