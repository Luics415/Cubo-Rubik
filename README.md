Interactive 3D Rubik's Cube Web Application

Una aplicación web interactiva en 3D de un **Cubo de Rubik completamente jugable**, construida utilizando **HTML5, CSS3, JavaScript, Three.js y GSAP**.

Permite resolver el cubo en tiempo real, mover caras y capas de manera independiente con física y animación fluida, medir tus tiempos de resolución con un cronómetro integrado y realizar mezclas aleatorias.


Características Principales

-  Jugabilidad Completa:** Rotación independiente de caras y capas mediante gestos de arrastrar y soltar (*drag & drop*).
-  Temporizador Integrado:** Inicio automático al comenzar la interacción con el cubo para medir tiempos de resolución.
-  Función de Mezcla (Scramble):** Algoritmo de mezcla aleatoria de movimientos.
-  Diseño Minimalista & Moderno:** Interfaz estilizada tipo *glassmorphism* con rendimiento fluido a 60 FPS.
-  Responsivo:** Adaptado para diferentes tamaños de pantalla y dispositivos móviles.


Estructura del Proyecto

```text
.
├── index.html   # Estructura HTML de la interfaz y visor 3D
├── style.css    # Estilos CSS, diseño glassmorphism y maquetación
├── script.js    # Motor lógico 3D (Three.js), animaciones (GSAP) y temporizador
└── README.md    # Documentación del repositorio
```

<img width="1600" height="860" alt="image" src="https://github.com/user-attachments/assets/9151c5a0-b635-4abd-bae9-024ff9b26441" />


Cómo Ejecutar Localmente

No se requiere ningún paso de compilación complejo ni instalación de dependencias pesadas.

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/Luics415/rubik-cube-3d.git
   cd rubik-cube-3d
   ```

2. **Abrir en el navegador:**
   - Puedes abrir directamente el archivo `index.html` en cualquier navegador moderno.
   - O servirlo mediante un servidor local como **Live Server** (Extensión de VS Code) o Python:
     ```bash
     python -m http.server 8000
     ```
     Luego navega a `http://localhost:8000`.

<img width="1600" height="864" alt="image" src="https://github.com/user-attachments/assets/3812a3d0-df67-4afa-9ab6-36b948f8d301" />
     

Tecnologías Utilizadas

- **HTML5 / CSS3:** Estructura semántica e interfaz de usuario.
- **JavaScript (ES6+):** Lógica del temporizador e interacciones.
- **[Three.js](https://threejs.org/):** Renderizado y manipulado 3D en el navegador mediante WebGL.
- **[GSAP (TweenMax)](https://greensock.com/gsap/):** Animaciones fluidas para el giro de caras y transiciones.

<img width="1600" height="864" alt="image" src="https://github.com/user-attachments/assets/9f452d6f-e909-4b7f-8a34-63abe63a2535" />

<img width="1600" height="864" alt="image" src="https://github.com/user-attachments/assets/e6856758-3dcb-4337-9efc-0e4939366a7a" />

