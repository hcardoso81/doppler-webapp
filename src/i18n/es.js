import signupBannerImagePath from '../img/signup-es.png';
import loginBannerImagePath from '../img/login-es.png';

// Basic constants
const year = new Date().getFullYear();
const urlDopplerLegacy = process.env.REACT_APP_DOPPLER_LEGACY_URL;
const urlSite = `https://www.fromdoppler.com`;
const urlHelp = `https://help.fromdoppler.com/es`;
const patchForBlank = `rel="noopener noreferrer"`;
const urlShopify = process.env.REACT_APP_SHOPIFY_URL;

// Common URLs
const urlHelpAdvancedReports = `${urlHelp}/reportes-avanzados`;
const urlPrivacy = `${urlSite}/legal/privacidad`;
const urlPrivacyFromSignup = `${urlPrivacy}?utm_source=app&utm_medium=landing&utm_campaign=signup`;
const urlPrivacyFromSignup_HTMLEncoded = `${urlPrivacy}?utm_source=app&amp;utm_medium=landing&amp;utm_campaign=signup`;
const urlPrivacyFromLogin = `${urlPrivacy}?utm_source=app&utm_medium=landing&utm_campaign=login`;
const urlPrivacyFromForgot = `${urlPrivacy}?utm_source=app&utm_medium=landing&utm_campaign=restablecimiento-contrasenia`;
const mailtoSupport = `mailto:soporte@fromdoppler.com`;
const urlControlPanel = `${urlDopplerLegacy}/ControlPanel`;
const urlBuyMonthly = `${urlControlPanel}/AccountPreferences/UpgradeAccount?Plan=monthly`;
const urlSiteTracking = `${urlControlPanel}/CampaignsPreferences/SiteTrackingSettings`;
const urlSiteFromSignup = `${urlSite}/?utm_source=app&utm_medium=landing&utm_campaign=signup`;
const urlSiteFromLogin = `${urlSite}/?utm_source=app&utm_medium=landing&utm_campaign=login`;
const urlSiteFromForgot = `${urlSite}/?utm_source=app&utm_medium=landing&utm_campaign=restablecimiento-contrasenia`;
const urlSiteContact = `${urlSite}/contacto/`;
const urlControlPanelMain = `${urlControlPanel}/ControlPanel`;
const urlMasterSubscriber = `${urlDopplerLegacy}/Lists/MasterSubscriber/`;

export default {
  common: {
    advanced_preferences: `Integraciones y Preferencias Avanazadas`,
    back: `Atrás`,
    cancel: `Cancelar`,
    connect: `Conectar`,
    control_panel: `Panel de Control`,
    control_panel_advanced_pref_url: `${urlControlPanelMain}?section=AdvancedPreferences`,
    control_panel_url: `${urlControlPanelMain}`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacy}).`,
    empty_data: `Tu dominio no tiene datos para mostrar en esta sección aún.`,
    feature_no_available: `La funcionalidad no está disponible aún`,
    hide: `Ocultar`,
    message: `Mensaje`,
    recaptcha_legal_HTML: `
    Sitio protegido por reCAPTCHA. <a href="https://policies.google.com/privacy?hl=es">Política de Privacidad</a>
    y <a href="https://policies.google.com/terms?hl=es">Condiciones del Servicio</a> de Google.
    `,
    send: `Enviar`,
    show: `Mostrar`,
    synchronizing: `Syncronizando`,
    unexpected_error: `¡Ouch! Ocurrio un error inesperado, intenta nuevamente`,
  },
  default_banner_data: {
    background_url: 'https://cdn.fromdoppler.com/doppler-ui-library/v2.5.0/img/violet-yellow.png',
    description: 'Clásicos y pop-ups con suscripción Simple o Doble Opt-In. ¡Tú eliges cómo quieres que luzcan, qué datos solicitar y dónde ubicarlos!',
    functionality: 'Formularios de suscripción',
    image_url: 'https://cdn.fromdoppler.com/doppler-ui-library/v2.5.0/img/login-es.png',
    title: 'Suma contactos a tus Listas con Formularios personalizados',
  },
  empty_notification_text: `No tienes notificaciones pendientes.`,
  feature_panel: {
    email_automation: `Email Automation`,
    email_automation_description: `Llega con el mensaje adecuado en el momento justo`,
    email_automation_remarks: `Envía Emails 100% personalizados de acuerdo al comportamiento y los intereses de tus Suscriptores. ¡Gana tiempo y ahorra dinero!`,
    forms: `Formularios de suscripción`,
    forms_description: `Suma contactos a tus Listas con Formularios personalizados`,
    forms_remarks: `Clásicos y pop-ups con suscripción Simple o Doble Opt-In. ¡Tú eliges cómo quieres que luzcan, qué datos solicitar y dónde ubicarlos!`,
  },
  footer: {
    iso: `Certificación de Calidad ISO 9001:2008`,
  },
  forgot_password: {
    back_login: `¿Recordaste tu Contraseña? ¡Haz clic aquí y vuelve atrás!`,
    back_login_after_forgot: `Volver al Log in`,
    blocked_account_MD: `Tu cuenta se encuentra cancelada. Para más información [contáctanos](${urlSiteContact}).`,
    button_request: `Solicitar`,
    confirmation_message_HTML: `
      <p>
        ¡Revisa tu casilla!
      </p>
      <p>
        Encontrarás un Email con los pasos a seguir.
      </p>
      `,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromForgot}).`,
    description: `¡No te preocupes! Nos sucede a todos. Ingresa tu Email y te ayudaremos a recuperarla.`,
    expired_link: `¡Link expirado! Por favor haz click en ¿No recuerdas tu contraseña?.`,
    image_path: `${loginBannerImagePath}`,
    max_attempts_sec_question: `No ha respondido correctamente. Por favor, inicie nuevamente el proceso para reestablecer su contraseña de Doppler. `,
    pass_reset_ok: `¡Tu Contraseña ha sido actualizada exitosamente!`,
    placeholder_email: `¡Psst! Es el Email con el que creaste tu cuenta`,
    url_site: `${urlSiteFromForgot}`,
  },
  header: {
    help_url: `${urlHelp}`,
  },
  loading: `Cargando...`,
  login: {
    button_login: `Ingresa`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromLogin}).`,
    enter_doppler: `Ingresa a tu cuenta`,
    enter_doppler_sub: `¡Hoy es un buen día para potenciar tu negocio con el poder del Email, Automation & Data Marketing!`,
    error_payment_HTML: `La cuenta está bloqueda, por favor <a href="${mailtoSupport}">contáctate con Soporte</a>.`,
    forgot_password: `¿No recuerdas tu Contraseña?`,
    head_description: `Atrae, convierte y fideliza clientes con el poder del Email Marketing Automation. ¡Ingresa a Doppler!`,
    head_title: `Email Marketing Automation gratis y con envíos ilimitados | Doppler`,
    image_path: `${loginBannerImagePath}`,
    label_user: `Nombre de Usuario: `,
    placeholder_email: `¡Psst! Es tu Email`,
    signup: `Regístrate gratis`,
    url_site: `${urlSiteFromLogin}`,
    you_want_create_account: `¿Aún no tienes una cuenta?`,
  },
  master_subscriber: {
    header_title: `Reporte de Actividad General del Suscriptor`,
    page_description: `Mediante este reporte usted podrá conocer la actividad general de un suscriptor determinado`,
    page_title: `Doppler | Historial por Suscriptor`,
    search_form: {
      aria_label: `Formulario de filtros para buscar Historial de Suscriptores`,
      aria_search_field: `Ingrese un Email, Nombre o Apellido para buscar Historial de Suscriptor`,
      search_field_placeholder: `Busca un suscriptor por su Email, Nombre o Apellido...`,
      search_form_legend: `Busqueda avanzada de Historial de Suscriptor`,
    },
    table_result: {
      aria_label_email: `Email`,
      aria_label_lastname: `Apellido`,
      aria_label_name: `Nombre`,
      aria_label_score: `Puntuación`,
      aria_label_state: `Estado`,
      aria_label_table: `Resultado de Historial de Suscriptores`,
    },
  },
  master_subscriber_current_search: {
    grid_email: `Email`,
    grid_firstname: `Nombre`,
    grid_lastname: `Apellido`,
    grid_ranking: `Ranking`,
    grid_status: `Estado`,
  },
  master_subscriber_sent_campaigns: {
    grid_campaign: `Campaña`,
    grid_clicks: `Clicks Unicos`,
    grid_delivery: `Comportamiento`,
    grid_subject: `Asunto`,
  },
  reports: {
    allow_enable_trial_HTML: `
      <p>
        Activa el periodo de prueba y accede a Reportes detallados sobre el comportamiento de los
        usuarios en tu Sitio Web o E-commerce. Descubre cuáles son las páginas más visitadas, cuántos
        visitantes poseen un Email que Doppler ha identificado y cuántos no. ¿Necesitas ayuda?
        <a target="_blank" href="${urlHelpAdvancedReports}" ${patchForBlank}>HELP</a>.
      </p>
      `,
    allow_enable_trial_button: `Activa período de prueba`,
    allow_enable_trial_title: `Prueba Automation de Comportamiento en Sitio por tiempo limitado`,
    datahub_not_domains_title: `Agrega el dominio de tu Web y analiza el comportamiento de tus usuarios`,
    no_domains_HTML: `
      <p>
        Registra el o los dominios sobre los que quieres realizar el seguimiento y accede a Reportes
        detallados. Descubre cuáles son las páginas más visitadas de tu Sitio Web o E-commerce, cuántos
        visitantes poseen un Email que Doppler ha identificado y cuántos no. ¿Necesitas ayuda?
        <a target="_blank" href="${urlHelpAdvancedReports}" ${patchForBlank}>HELP</a>.
      </p>
      `,
    no_domains_button: `Agrega tu dominio`,
    no_domains_button_destination: `${urlSiteTracking}`,
    upgrade_account_free_HTML: `
      <p>
        Contrata un Plan Pago y accede a Reportes detallados sobre el comportamiento de los usuarios en
        tu Sitio Web o E-commerce. Descubre cuáles son las páginas más visitadas, cuántos visitantes
        poseen un Email que Doppler ha identificado y cuántos no. ¿Necesitas ayuda? Presiona
        <a target="_blank" href="${urlHelpAdvancedReports}" ${patchForBlank}>HELP</a>.
      </p>
      <p>
        Contratando cualquier Plan Pago podrás utilizar esta funcionalidad de forma bonificada por tiempo
        limitado. <a href="${urlBuyMonthly}">COMPRA AHORA</a>.
      </p>
      `,
    upgrade_account_free_title: `Analiza el comportamiento de los usuarios y optimiza tus acciones`,
  },
  reports_box: {
    to: `a`,
    visits_description_with_email: `Número total de usuarios que visitaron tu Sitio Web y cuyo Correo Electrónico ha sido identificado por Doppler. Si un usuario ingresó varias veces, solo se contabilizará una.`,
    visits_description_without_emails: `Número total de usuarios que visitaron tu Sitio Web y cuyo Correo Electrónico no ha sido identificado por Doppler. Si un usuario ingresó varias veces, solo se contabilizará una.`,
    visits_with_email: `Usuarios con Email`,
    visits_without_emails: `Usuarios sin Email`,
    without_included: `(sin incluir)`,
  },
  reports_daily_visits: {
    title: `Páginas vistas únicas`,
    tooltip_page_views: `Páginas vistas: `,
    tooltip_with_email: `Usuarios con Email: `,
    tooltip_without_email: `Usuarios sin Email: `,
  },
  reports_filters: {
    all_pages: `Todas las paginas`,
    description_HTML: `
      <p>
        Descubre cuáles son las páginas más visitadas de tu Sitio Web o E-commerce, cuántos
        visitantes poseen un Email que Doppler ha identificado y cuántos no. ¡Sigue el recorrido de
        los usuarios, detecta puntos de fuga y oportunidades de mejora! Si necesitas ayuda, presiona
        <a target="_blank" href="${urlHelpAdvancedReports}" ${patchForBlank}>HELP</a>.
      </p>
      `,
    domain: `Dominio`,
    domain_not_verified_MD: `Tu dominio no está verificado. Es necesario para comenzar a obtener datos sobre tus visitas. [VERIFICAR DOMINIO](${urlSiteTracking}).`,
    pages: `Página`,
    rank_time: `Período de tiempo analizado`,
    title: `Analiza el comportamiento de los usuarios y optimiza tu estrategia`,
    today: `Hoy`,
    verified_domain: `Última visita registrada:`,
    week_with_plural: `{weeksCount, plural, =0 {sin semanas} one {# semana}other {# semanas} }`,
  },
  reports_hours_visits: {
    few_visits: `0 a {max}`,
    lot_visits: `+{min}`,
    medium_visits: `{min} a {max}`,
    title: `Días de semana y horas`,
    users: `Páginas vistas:`,
    users_with_email: `Usuarios con email:`,
    users_without_email: `Usuarios sin email:`,
  },
  reports_pageranking: {
    more_results: `Mostrar mas resultados`,
    top_pages: `Páginas más visitadas`,
    total_visits: `Visitantes únicos`,
    visits_with_email: `Usuarios con email`,
    visits_without_email: `Usuarios sin email`,
  },
  reports_partials_campaigns: {
    campaign_name: `Campaña: `,
    campaign_state: `Estado de la Campaña: `,
    campaign_subject: `Asunto: `,
    campaign_summary: `Resumen de la Campaña`,
    delivery_rate: `Tasa de entrega`,
    emails_delivered: `Emails Entregados:`,
    hard_and_soft: `Rebotes hard y soft`,
    header_title: `Reportes parcial de Campañas`,
    last_click_date: `Último Click:`,
    last_open_date: `Última Apertura:`,
    not_open: `No Abiertos`,
    opened: `Abiertos`,
    page_description: `Reportes parcial de Campañas`,
    page_title: `Doppler | Reportes parcial de Campañas`,
    total_clicks: `Clicks Totales:`,
    total_forwarded: `Cantidad de Reenvíos:`,
    total_openings: `Total de Aperturas:`,
    total_recipients: `Destinatarios totales`,
    total_sent_so_far: `Total enviados hasta el momento`,
    total_subscribers: `Total de Suscriptores:`,
    total_unsubscribers: `Cantidad de Remociones:`,
    unique_clicks: `Clicks Únicos:`,
    unique_opens: `Aperturas Únicas:`,
  },
  reports_title: `Doppler | Reportes`,
  shopify: {
    admin_apps: `Panel de control de Shopify`,
    admin_apps_url: `https://{shopName}/admin/apps`,
    connect_url: `${urlShopify}/install`,
    error_cannot_access_api: `Ouch! No pudimos conectar con la API de Shopify, por favor vuelve a intentarlo luego.`,
    header_disconnected_warning: `Al presionar "Conectar" serás redirigido a Shopify, donde podrás realizar todos los pasos necesarios para integrar.`,
    header_store: `Nombre de la cuenta:`,
    header_subtitle: `Envía automáticamente los Contactos de tu tienda y toda su información a una Lista de Doppler. Además, podrás importar los productos de tu tienda en
    Plantillas de Email y crear Automations de Carrito Abandonado y Producto Visitado. ¿Tienes dudas? Presiona <a target="_blank" href="${urlHelp}/como-integrar-doppler-y-shopify/" ${patchForBlank}>HELP</a>.`,
    header_synchronization_date: `Fecha de última sincronización:`,
    header_title: `Conecta Doppler con tu tienda Shopify`,
    list_subtitle: `Puedes sincronizar los datos manualmente cuando gustes.`,
    list_title: `Lista sincronizada`,
    no_list_available: `Esperando Lista...`,
    table_list: `Nombre de la Lista`,
    table_shopify_customers_count: `Suscriptores`,
    title: `Doppler | Shopify`,
  },
  signup: {
    activate_account_instructions: `* Al hacer click en el botón que aparece en el Email, activarás tu cuenta y estarás listo para disfrutar todos los beneficios de Doppler.`,
    button_signup: `Crea tu cuenta gratis`,
    check_inbox: `Revisa tu casilla. ¡Tienes un Email!`,
    check_inbox_icon_description: `Fíjate en tu correo electrónico`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromSignup}).`,
    do_you_already_have_an_account: `¿Tienes una cuenta?`,
    email_not_received: `¿No has recibido el Email?`,
    head_description: `Atrae, convierte y fideliza clientes con el poder del Email Marketing Automation. ¡Ingresa a Doppler!`,
    head_title: `Email Marketing Automation gratis y con envíos ilimitados | Doppler`,
    image_path: `${signupBannerImagePath}`,
    label_email: `Email: `,
    label_firstname: `Nombre: `,
    label_lastname: `Apellido: `,
    label_password: `Contraseña: `,
    label_phone: `Teléfono: `,
    legal_HTML: `
      <p>
        Doppler te informa que los datos de carácter personal que nos proporciones al rellenar el presente
        formulario serán tratados por Doppler LLC como responsable de esta web.
      </p>
      <p>
        <strong>Finalidad:</strong> Darte de alta en nuestra plataforma y brindarte los servicios que nos
        requieras.
      </p>
      <p>
        <strong>Legitimación:</strong> Consentimiento del interesado.
      </p>
      <p>
        <strong>Destinatarios:</strong> Tus datos serán guardados por Doppler, Zoho como CRM, Google como
        proveedor del servicio de reCAPTCHA, Digital Ocean, Cogeco Peer1 y Rackspace como empresas de
        hosting.
      </p>
      <p>
        <strong>Información adicional:</strong> En la
        <a target="_blank" href="${urlPrivacyFromSignup_HTMLEncoded}" ${patchForBlank}>Política de Privacidad</a> de Doppler
        encontrarás información adicional sobre la recopilación y el uso de su información personal por
        parte de Doppler, incluida información sobre acceso, conservación, rectificación, eliminación,
        seguridad, transferencias transfronterizas y otros temas.
      </p>
      `,
    log_in: `Ingresa`,
    no_more_resend_HTML: `¿Aún no has recibido el Email? Ya te lo hemos reenviado, si no llega en los próximos minutos, por favor <a href="${mailtoSupport}">contáctate con Soporte</a>.`,
    placeholder_email: `Tu Email será tu Nombre de Usuario`,
    placeholder_password: `Escribe tu clave secreta`,
    placeholder_phone: `9 11 2345-6789`,
    privacy_policy_consent_HTML: `
      Acepto la <a target="_blank" href="${urlPrivacyFromSignup_HTMLEncoded}" ${patchForBlank}>Política de Privacidad</a>
      de Doppler.
      `,
    promotions_consent: `Quiero recibir promociones de Doppler y sus aliados.`,
    resend_email: `Reenvíalo`,
    sign_up: `Email, Automation & Data Marketing`,
    sign_up_sub: `Atrae, Convierte y Fideliza. Envíos ilimitados y gratis hasta 500 Suscriptores.`,
    thanks_for_registering: `Gracias por registrarte`,
    url_site: `${urlSiteFromSignup}`,
  },
  subscriber: {
    status: {
      active: 'Activo',
      inactive: 'Activo no Asociado a Listas',
      pending: 'Pendiente',
      standBy: 'En Espera de Ampliación de Plan',
      unsubscribed_by_client: 'Removido por el Cliente',
      unsubscribed_by_hard: 'Removido por Rebote Hard',
      unsubscribed_by_never_open: 'Removido por No Aperturas',
      unsubscribed_by_soft: 'Removido por Rebote Soft',
      unsubscribed_by_subscriber: 'Removido por el Suscriptor',
    },
  },
  subscriber_gdpr: {
    empty_data: 'Este Suscriptor no ha aceptado ni rechazado ningun permiso.',
    empty_html_text: 'Sin texto legal definido',
    gpdr_state_breadcrumb: 'Estado RGPD del Suscriptor',
    header_description: 'Aquí encontrarás todos los consentimientos dados por tu Suscriptor.',
    header_title: 'Estado RGPD del Suscriptor',
    page_description: 'Estado de permisos RGPD del Suscriptor',
    page_title: 'Estado RGPD del Suscriptor',
    permission_description: 'Texto personalizado',
    permission_name: 'Nombre del campo',
    permission_value: 'Valor',
    value_false: 'Rechazado',
    value_none: 'Sin respuesta',
    value_true: 'Aceptado',
  },
  subscriber_history: {
    alt_image: 'Preview de la Campaña',
    behaviour_history_breadcrumb: 'Comportamiento histórico del suscriptor',
    delivery_status: {
      hardBounced: 'Rebotado Hard',
      notOpened: 'No Abierto',
      opened: 'Abierto',
      softBounced: 'Rebotado Soft',
    },
    description: 'Aquí podrás conocer el historial de comportamiento en Campañas de tus Suscriptores.',
    empty_data: 'Hasta el momento no hay Campañas enviadas',
    subscriber_breadcrumb: 'Suscriptores',
    subscriber_breadcrumb_url: `${urlMasterSubscriber}`,
    table_result: {
      aria_label_table: `Resultado de Historial de Campañas`,
    },
    title: 'Comportamiento histórico del suscriptor',
    unsubscribed_date: 'Fecha de Remoción:',
  },
  trafficSources: {
    direct: `Directo`,
    email: `Email`,
    organic: `Búsqueda Orgánica`,
    paid: `Publicidad en Buscadores`,
    referral: `Referencia`,
    social: `Redes Sociales`,
    title: `Fuentes de trafico`,
    users_with_email: `Usuarios con email`,
    users_without_email: `Usuarios sin email`,
  },
  upgradePlanForm: {
    message_placeholder: `Tu mensaje`,
    plan_select: `Selecciona el Plan`,
    title: `Solicita una actualización de tu Plan`,
  },
  validation_messages: {
    error_account_is_blocked_invalid_pass_HTML: `
      Por seguridad hemos bloqueado tu cuenta momentáneamente.
      <a href="${mailtoSupport}">Contáctanos<a>.
      `,
    error_account_is_canceled_HTML: `
      Tu cuenta se encuentra cancelada. Para más información
      <a target="_blank" href="${mailtoSupport}">contáctanos</a>.
      `,
    error_checkbox_policy: `¡Ouch! No has aceptado la Política de Privacidad de Doppler.`,
    error_email_already_exists: `¡Ouch! Ya posees una cuenta en Doppler.`,
    error_invalid_captcha: `¡Ouch! No pudimos validar que seas humano, por favor refresca la pantalla e intenta nuevamente.`,
    error_invalid_domain_to_register_account: `¡Ouch! Email inválido para crear una cuenta.`,
    error_invalid_email_address: `¡Ouch! El formato del Email es incorrecto`,
    error_invalid_login: `¡Ouch! Hay un error en tu Usuario o Contraseña. Vuelve a intentarlo.`,
    error_invalid_name: `¡Ouch! Escribe usando solo letras y no números.`,
    error_min_length: `¡Ouch! Minimo de caracteres invalido.`,
    error_min_length_2: `¡Ouch! Escribe al menos dos caracteres.`,
    error_password_character_length: `8 caracteres como mínimo`,
    error_password_digit: `Un número`,
    error_password_letter: `Una letra`,
    error_password_safe: `¡Tu Contraseña es segura!`,
    error_phone_invalid: `¡Ouch! Escribe un teléfono válido.`,
    error_phone_invalid_country: `¡Ouch! El código de país no es válido.`,
    error_phone_too_long: `¡Ouch! El número de teléfono es demasiado largo.`,
    error_phone_too_short: `¡Ouch! El número de teléfono es demasiado corto.`,
    error_register_denied: `¡Alto ahí! Has alcanzado el límite de cuentas permitido.`,
    error_required_field: `¡Ouch! El campo está vacío.`,
    error_unexpected_HTML: `
      Error inesperado. Por favor, intenta nuevamente* o
      <a href="${mailtoSupport}">contacta a Soporte</a>.
      <br/><br/>
      <i>*Si tienes ad blockers instalados,
      recomendamos deshabilitarlos en el reintento.</i>
      `,
  },
};
