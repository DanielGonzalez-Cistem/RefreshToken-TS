# **Convención de Commits**

<div align="center">
    <img src="./shared/assets/icons/git-icon.svg" alt="Git Icon" width="200">
</div>

Mantener un repositorio organizado y consistente, es importante para tener un proyecto sano, en cuanto al manejo de control de versiones.

Dicho esto, **[Project-API](https://github.com/repository/Project-API)** recomienda la siguiente estrategía para la escritura y especificación de commits en este proyecto. El objetivo de estas convenciones, es mantener la organización y legibilidad de commits en el repositorio.

## **Estructura**

Para contribuir al proyecto, la estructura de commit a estipular, es la siguiente:

```
<type>[optional scope]: <code-incidence> <description>

[optional body]

[optional footer(s)]
```

A continuación se describirán las características de esta estructura:

- ✨ `<type>`: Defíne un prefíjo que índica el tipo de solución implementado para el commit.
- ✨ `[optional scope]` (opcional): Índica el ámbito o módulo sobre el que se esta implementando la solución. 
- ✨ `<code-incidence>`: Índica el código o la clave de incidencia que abarca el commit.
- ✨ `<description>`: Índica una descripción breve sobre la solución.
- ✨ `[optional body]` (opcional): Índica información más detallada sobre la solución. 
- ✨ `[optional footer(s)]` (opcional): Si existe un cambio que afecta a la lógica del proyecto, es requerido que se coloque en el pie de la confirmación dicha advertencia en lo que se soluciona el problema.

## **Lista de Prefíjos**

A continuación, se proporcionará una lista de prefíjos recomendados para iniciar:

- ✨ **feat:** Utilice "feat", cuando se esta confirmando una nueva característica en el proyecto, es decir, algo que no se ha creado antes ("feat", proviene de "feature").

- ✨ **fix:** Utilice "fix", cuando necesite indicar la corrección de una falla (bug) dentro del proyecto.

- ✨ **docs:** Utilice "docs", cuando la solución sea para determinar cambios en la documentación del proyecto.

- ✨ **refactor:** Utilice "refactor", cuando necesite indicar modificaciones y cambios en pro de optimizar y mejorar el diseño y/o arquitectura de la aplicación.

- ✨ **resolve-conflict:** Utilice "resolve-conflict", cuando necesite indicar un commit que resuelva conflictos de git.

- ✨ **chore:** Utilice "chore", cuando necesite indicar cambios o creación de archivos que no afecten a las funcionalidades programáticas principales del sistema.

- ✨ **upgrade:** Utilice "upgrade", cuando se necesite indicar actualización de una paqueteria.

- ✨ **downgrade:** Utilice "downgrade", cuando se necesite indicar desintalación de una paqueteria.

> Usted puede personalizar tantos como desee.

## **Referencias**

Las convenciones que aquí se describen, son basadas del sitio **[Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)**.


📌 **[Volver a README](./README.md)**

<br>

---
&copy; 2025 Cistem Innovacion S.A. de C.V. | Todos los derechos reservados.