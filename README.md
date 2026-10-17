# login-app-camilo

Formulario de inicio de sesión con HTML, CSS y JavaScript.
Proyecto integrador del taller de Git y GitHub, CECAR.

Autor: Camilo Andrés Rodríguez Arrieta

## Estrategia de ramas

Usamos GitHub Flow:

- `main` siempre contiene una versión estable y desplegable.
- Cada funcionalidad se desarrolla en una rama corta (por ejemplo `feature/formulario-login`).
- Los cambios llegan a `main` solo mediante Pull Request revisado por un compañero.
- Los commits siguen la convención Conventional Commits.

## Justificación

El equipo es pequeño y el proyecto es una aplicación web simple, sin varias versiones en soporte,
por lo que Git Flow sería excesivo. GitHub Flow mantiene pocas ramas, integra rápido y encaja con
la verificación automática de GitHub Actions en cada Pull Request.