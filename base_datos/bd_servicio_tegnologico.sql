-- 1. LIMPIEZA INICIAL: ELIMINAR TABLAS ANTIGUAS
-- Es crucial eliminar primero las tablas que tienen claves foráneas (FK) y luego las principales.
-- La tabla 'pedido' usa las FK de 'usuario' y 'servicio', así que va primero.
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS servicio;
DROP TABLE IF EXISTS usuario;

-- =======================================================
-- 2. CREACIÓN DE TABLAS CON ESTRUCTURA PROFESIONAL
-- =======================================================

-- TABLA 1: USUARIO (Seguridad y Roles)
CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    telefono VARCHAR(50) NULL,
    ciudad VARCHAR(255) NULL,
    direccion VARCHAR(255) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,          -- Clave para login y comunicación
    password_hash VARCHAR(255) NOT NULL,        -- Almacenamiento seguro de la contraseña
    rol VARCHAR(50) NOT NULL DEFAULT 'cliente', -- Permisos (e.g., 'cliente', 'administrador')
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

---

-- TABLA 2: SERVICIO (Contenido Web Profesional)
CREATE TABLE IF NOT EXISTS servicio (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    
    -- Campos mejorados para la presentación web
    descripcion_corta VARCHAR(255) NOT NULL,    -- Para las tarjetas y resúmenes (🟢 Breve)
    descripcion_extendida TEXT NOT NULL,        -- Para la página de detalle (🔵 Extendida)
    
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    imagen VARCHAR(255) NULL,                   -- Ruta a la imagen del servicio
    promocion TINYINT(1) NOT NULL DEFAULT 0,    -- 0 = No, 1 = Sí (útil para el front-end)
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

---

-- TABLA 3: PEDIDO (Transacciones y Conexión M:M)
CREATE TABLE IF NOT EXISTS pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_servicio INT NOT NULL,
    
    -- Datos transaccionales
    precio_venta DECIMAL(10, 2) NOT NULL,       -- Precio al momento de la compra
    fecha_contratacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_servicio VARCHAR(50) NOT NULL DEFAULT 'Activo', 
    fecha_finalizacion TIMESTAMP NULL,
    
    -- Datos de feedback
    calificacion TINYINT NULL,       
    comentario TEXT NULL,            
    
    -- Definición de Claves Foráneas
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
        ON DELETE RESTRICT 
        ON UPDATE CASCADE,
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio)
        ON DELETE RESTRICT 
        ON UPDATE CASCADE
);

-- =======================================================
-- 3. INSERCIÓN DE DATOS DE EJEMPLO EN SERVICIO
-- =======================================================

INSERT INTO servicio (nombre, descripcion_corta, descripcion_extendida, precio, imagen, promocion) VALUES
('Soporte técnico 24/7',
 'Atención remota y presencial para resolver incidencias técnicas en cualquier momento del día.',
 'Nuestro servicio de soporte técnico 24/7 garantiza asistencia inmediata y continua para tu infraestructura tecnológica. Ofrecemos atención remota y presencial ante incidencias, mantenimiento preventivo y resolución de problemas críticos. Contamos con técnicos especializados disponibles en todo momento para asegurar la operatividad de tus sistemas y minimizar tiempos de inactividad.',
 500.00, 'img/support.jpg', 1),
 
('Consultoría en ciberseguridad',
 'Protege tu negocio con auditorías, planes de contingencia y cumplimiento de normativas.',
 'Brindamos soluciones integrales en ciberseguridad orientadas a prevenir riesgos y proteger la información crítica de tu organización. Realizamos auditorías de seguridad, evaluaciones de vulnerabilidades, planes de contingencia y adecuación a normativas como GDPR o ISO 27001. Nuestro enfoque combina tecnología, procesos y capacitación para construir un entorno digital seguro y confiable.',
 800.00, 'img/security.jpg', 0),
 
('Mantenimiento y actualización de sistemas',
 'Actualización y optimización constante de software y hardware empresarial.',
 'Nos encargamos del mantenimiento preventivo y correctivo de los sistemas informáticos de tu empresa, asegurando su máximo rendimiento. Incluye la actualización de software, renovación de equipos, optimización de redes y soporte técnico especializado. Nuestro objetivo es garantizar la continuidad operativa y prolongar la vida útil de tus recursos tecnológicos.',
 450.00, 'img/maintenance.jpg', 1),
 
('Hosting y gestión de servidores',
 'Alojamiento y administración profesional de servidores físicos o en la nube.',
 'Ofrecemos servicios de hosting y gestión de servidores adaptados a las necesidades de tu empresa. Administramos entornos en la nube, híbridos o locales, con monitoreo continuo, copias de seguridad automáticas y medidas avanzadas de seguridad. Garantizamos disponibilidad, escalabilidad y rendimiento para que tus aplicaciones y servicios funcionen sin interrupciones.',
 600.00, 'img/hosting.jpg', 0),
 
('Marketing digital y SEO',
 'Impulsa tu marca con estrategias de posicionamiento web y campañas digitales efectivas.',
 'Diseñamos estrategias de marketing digital personalizadas que potencian la visibilidad y el crecimiento de tu marca. Nos especializamos en SEO, SEM, gestión de redes sociales, email marketing y campañas publicitarias multicanal. Nuestro enfoque orientado a resultados asegura un mayor alcance, tráfico cualificado y conversión de clientes potenciales.',
 750.00, 'img/marketing.jpg', 1),
 
('Diseño UX/UI profesional',
 'Creamos interfaces intuitivas, modernas y atractivas para sitios web y aplicaciones.',
 'Nuestro equipo de diseño UX/UI combina estética, funcionalidad y experiencia de usuario para desarrollar interfaces digitales efectivas. Realizamos investigación de usuarios, wireframes, prototipos y pruebas de usabilidad, logrando productos visualmente atractivos y fáciles de usar. Aumenta la satisfacción de tus clientes con un diseño que impulsa la interacción y la conversión.',
 950.00, 'img/design.jpg', 0),
 
('Implementación de ERP/CRM',
 'Sistemas integrados para la gestión de procesos empresariales y relación con clientes.',
 'Implementamos soluciones ERP y CRM adaptadas a las necesidades de las necesidades de cada empresa. Centraliza la información, automatiza procesos, optimiza recursos y mejora la relación con tus clientes. Nuestro equipo se encarga de la instalación, configuración, personalización y capacitación del personal, asegurando una integración eficiente y resultados medibles.',
 1200.00, 'img/erp-crm.jpg', 0),
 
('Capacitación tecnológica',
 'Formación práctica en programación, ofimática, seguridad informática y más.',
 'Ofrecemos programas de capacitación diseñados para desarrollar habilidades tecnológicas en profesionales y equipos de trabajo. Impartimos cursos y talleres presenciales o virtuales en áreas como programación, ofimática, administración de sistemas, redes y ciberseguridad. Fomentamos el aprendizaje práctico y actualizado para potenciar la competitividad laboral.',
 400.00, 'img/training.jpg', 1),
 
('Inteligencia artificial y automatización',
 'Soluciones inteligentes que optimizan procesos y mejoran la toma de decisiones.',
 'Desarrollamos proyectos basados en inteligencia artificial y automatización para modernizar la operación empresarial. Implementamos chatbots, sistemas de análisis de datos, reconocimiento de patrones y automatización de tareas repetitivas. Nuestras soluciones ayudan a reducir costos, aumentar la eficiencia y transformar la información en decisiones estratégicas de alto valor.',
 1500.00, 'img/ai.jpg', 0),
 
 ('Reparación y mantenimiento de computadores', 'Servicio técnico especializado en diagnóstico, reparación y mantenimiento preventivo de equipos de cómputo, garantizando su máximo rendimiento y durabilidad.', 'Ofrecemos un servicio integral de reparación y mantenimiento de computadores orientado a prolongar la vida útil de tus equipos y optimizar su desempeño. Realizamos diagnóstico avanzado de hardware y software, limpieza interna y externa, reemplazo de componentes, recuperación de datos, eliminación de virus y optimización del sistema operativo.
Nuestro equipo técnico está capacitado para atender tanto equipos de escritorio como portátiles, brindando soluciones rápidas, seguras y adaptadas a las necesidades de particulares y empresas. Aseguramos un servicio confiable, con garantía y soporte post-reparación para mantener tus sistemas siempre en perfecto estado de funcionamiento.', 400.00, 'img/training.jpg', 1);

select *from  servicio;
 