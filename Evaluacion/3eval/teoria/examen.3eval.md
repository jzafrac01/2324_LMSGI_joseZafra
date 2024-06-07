# Examen LMSGI 3ª Evaluación

**Normas del Examen**

- Si necesitas añadir algún fichero adicional, existe una carpeta de `res` donde puedes añadir los ficheros necesarios.
- Se permite la consulta de los apuntes del módulo, así como la consulta de los ejercicios realizados por cada alumno.

**Restriciones**

- No se permite consultar internet, excepto la documentación oficial de las tecnologías utilizadas (PlantUML, Mermaid, JUnit5, etc.).
- No se puede tener activo ninguna herramienta que facilite la generación de código (Copilot, o otros asistentes de código).

**Entrega**

Crear una carpeta en tu repositorio con el nombre `Evaluacion` y crear dentro la carpeta `3eval`.

- **Parte teórica**: crear carpeta `teoria` y crear debtro fichero 01.teoria.md
- **Parte práctica**: crear carpeta `practica` y copiar dentro vuestra página web.<br>
  ↘️ Recordar (aquellos con Astro) no agregar carpeta `node_modules` al comprimido.

- La entrega se realizará en un fichero comprimido, con el nombre `3eval_examen_{nombre_alumno}.zip` y subir a Moodle.

## Parte teórica (2 puntos)

1. ¿ Qué entiendes por el modelo de caja en CSS, por qué es tan importante en el diseño web, e indica las propiedades más importantes que se utilizan para ello ?

```text
El modelo caja es como se comportan los elementos, es tan importante porque hay que saber el flujo en el que se comportan los diferentes elementos.
```

2. ¿ Qué es el Overflow en diseño Web y cómo podemos controlar su comportamiento ?

``text
Hablamos de overflow cuando el contenido de la caja sale del flujo. Se pued controlar con la propiedad overflow.

````

3. ¿ Cuando múltiples reglas CSS aplican a un mismo elemento, cómo se resuelve la prioridad de aplicación de las mismas. Enumeralas las reglas y comenta algo sobre ellas ?

```text
La prioridad primero funciona por especifidad, después en cascada.
También hay otra opción que es una mala práctica.
````

4. ¿ Qué son las propiedades abrevidadas en CSS. Pon un ejemplo de ello ?

```text

```

## Parte Práctica (8 puntos)

Como parte de la evaluación práctica del Bloque de Desarrollo Web, se pide incluir la siguiente funcionalidad en la web que habéis desarrollado en el proyecto.

### Realizar:

- **Agrega una seción en la página principal** de tu proyecto, donde se muestre un panel con los precios de los servicios (da igual si no hay servicios o productos).
- **Agregar también un menu (Precios)** que navegue a la sección de precios (desde cualquier parte de la web).

El panel debe tener un diseño similar al siguiente:

![Panel de precios](res/img/section-pricing.png)

En modo móvil, el panel debe tener un diseño similar al siguiente:

![Panel de precios](res/img/section-pricing-movil.png)

El punto de corte son los 768px o 48em.

#### Guía de estilos

**Colores:**

- Fondo: #457b9d
- Fondo tarjeta: #023047;
- Color boton: hsl(130, 100%, 62%);

**Tipografía:**

- Familia: 'Source Sans 3', sans-serif;

### Criterios de evaluación

- Diseño **(7 puntos)**

  - Visualización (3 puntos)

    - La visualización no es correcta, pero los elementos básicos están presentes. (+1 puntos)
    - La visualización es correcta, pero no es perfecta. (+2 puntos)
    - La visualización es perfecta. (+4 puntos)

  - Se utiliza Flexbox o Grid para la maquetación. (+1 punto)
  - Se usan unidades relativas para el diseño (+0.5 puntos)
  - Se aplican los colores y tipografías indicadas. (+0.3 puntos)
  - Se accede a la sección desde un menú de navegación. (+1 puntos)

- Diseño Responsivo **(3 puntos)**
  - El diseño es responsivo. (+1 punto)
  - Se utilizan media queries para adaptar el diseño en móvil. (+0.5 puntos)
  - El diseño es correcto según la imagen de referencia en móvil. (+1.5 puntos)

_Puntos extra_

- Se utiliza un efecto de hover en los botones. (+0.5 puntos)
- Se usa la técnica CSS Nested para la maquetación. (+1 puntos)
- La tarjeta presenta un efecto "levanta" al hacer hover. (+0.5 puntos)

## Anexos

### Textos

**Plan individual (Anual)**

- ✅ Acceso a todos los cursos.
- ✅ Centraliza todo en un único pago.
- ✅ El mejor ahorro para el plan individual.
- ✅ Contenido de calidad impartido por profesionales.
- ✅ Nuevo contenido cada semana.
- ✅ Acceso a la comunidad
- ✅ Certificados al completar los cursos

**Plan individual (Mensual)**

- ✅ Acceso a todos los cursos.
- ✅ Contenido de calidad impartido por profesionales.
- ✅ Nuevo contenido cada semana.
- ✅ Acceso a la comunidad
- ✅ Certificados al completar los cursos

**Plan Empresa**

- ✅ Gestión centralizada de cuentas.
- ✅ Todo los beneficios del plan individual.
- ✅ Reducción de precios por incremento de cuentas.
- ✅ Informe trimestral de progreso.
- ✅ Y muchos más beneficios.
