# 💾 Documentación del Esquema de Base de Datos

Este documento detalla la estructura de la base de datos `Service-Technologies`, diseñada para ser robusta, segura y escalable.

---

## 1. Tablas Principales y Propósito

| Tabla | Propósito | Notas Clave |
| :---: | :---: | :---: |
| **usuario** | Gestión de acceso y seguridad. | Diferencia roles (`cliente` vs `administrador`). Almacena contraseñas en hash (`password_hash`). |
| **servicio** | Catálogo de productos y servicios. | Optimizado para el frontend: tiene campos para descripción corta y extendida. |
| **pedido** | Registro de transacciones (compras/contratos). | Conecta usuarios y servicios (relación M:M). Maneja estados (`Activo`, `Finalizado`). |

---

## 2. Estructura Detallada de la Tabla `usuario`

| Campo | Tipo de Dato | Requisito | Propósito |
| :---: | :---: | :---: | :---: |
| `id_usuario` | INT | PK, AI | Identificador único. |
| `email` | VARCHAR(255) | NOT NULL, UNIQUE | Clave única para el login. |
| `password_hash` | VARCHAR(255) | NOT NULL | Almacena la contraseña cifrada (SEGURIDAD). |
| `rol` | VARCHAR(50) | DEFAULT 'cliente' | Nivel de permisos (`cliente`, `administrador`). |
| `fecha_registro` | TIMESTAMP | NOT NULL | Fecha en que se creó la cuenta. |

---

## 3. Estructura Detallada de la Tabla `servicio`

| Campo | Tipo de Dato | Requisito | Propósito |
| :---: | :---: | :---: | :---: |
| `id_servicio` | INT | PK, AI | Identificador único del servicio. |
| `nombre` | VARCHAR(150) | NOT NULL | Nombre comercial. |
| **`descripcion_corta`** | VARCHAR(255) | NOT NULL | Usado en tarjetas o listados (resumen). |
| **`descripcion_extendida`** | TEXT | NOT NULL | Usado en la página de detalle del servicio. |
| `precio` | DECIMAL(10, 2) | NOT NULL | Precio de venta. |
| `promocion` | TINYINT(1) | DEFAULT 0 | 1 si está en promoción, 0 si no lo está. |

---

## 4. Estructura Detallada de la Tabla `pedido` (Transacciones)

| Campo | Tipo de Dato | Requisito | Propósito |
| :---: | :---: | :---: | :---: |
| `id_pedido` | INT | PK, AI | Identificador único de la transacción. |
| `id_usuario` | INT | FK | **FOREIGN KEY** (Referencia al usuario que contrató). |
| `id_servicio` | INT | FK | **FOREIGN KEY** (Referencia al servicio contratado). |
| `estado_servicio` | VARCHAR(50) | DEFAULT 'Activo' | Estado del proyecto/servicio (Activo, Finalizado, Cancelado). |
| `calificacion` | TINYINT | NULL | Puntuación de la reseña (1-5). |
| `comentario` | TEXT | NULL | Texto de la reseña del cliente. |