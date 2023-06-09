# Frontend técnico

Prueba técnica para el puesto de frontend en Perfilan utilizando svelte, conectado a la base de datos creada en supabase

#### Puede ver el proyecto [aquí](https://frontend-tecnico-psi.vercel.app/ "aquí")

## Estructura del proyecto

- **Src**
  - **Assets:** Iconos svg utilizados en el proyecto
  - **lib:**
    - **components**: Cada uno de los componentes del proyecto
    - **server**: createCliente a la base de datos y las funciones para trabajar con la base de datos
  - **App.svelte**: Archivo de inicio del proyecto, en el están las variables css del proyecto, se llama a la base de datos y se estructura el proyecto
- .env: Archivo con keys para conectarse a la base de datos
- \*Archivos de configuración de svelte

## Ejecutar el proyecto:

1.  Clonar el repositorio de forma local (y pide el `.env` para que todo funcione correctamente)
2.  Instalar dependencias con el comando

```
npm install
```

3. Ejecutar con el comando

```
npm start
```

4.  Ver proyecto en:
    - Ver proyecto: <http://localhost:5173/>
