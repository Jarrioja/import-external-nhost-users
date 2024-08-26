# Import Users to Nhost

Este script lee un archivo CSV y crea o actualiza los usuarios en Nhost.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
NHOST_SUBDOMAIN="nhost-subdomain"
NHOST_REGION="us-east-1"
NHOST_ADMIN_SECRET="nhost-admin-secret"
CSV_FILE_PATH="users.csv"
```

2. Crea un archivo `users.csv` en la raíz del proyecto con las siguientes columnas:

```bash
displayName,email
Jesus Arrioja,jesusarrioja@example.com
jesus Arrioja,soporte@example.com
```

3. Ejecuta el script con `npm run start`.

## Ejemplo de uso

```bash
npm run start
```
