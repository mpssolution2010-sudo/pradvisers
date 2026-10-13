

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/alquileres')({
  component: PrecioCorrecto,
})

export default function PrecioCorrecto() {
  return (
    <main className="min-h-screen bg-white">

      
<header className="flex justify-end px-6 py-4">
  <a
    href="/"
    className="rounded-lg border border-[#246b8e] px-5 py-2 text-sm font-bold text-[#246b8e] transition hover:bg-[#246b8e] hover:text-white"
  >
    INICIO
  </a>
</header>
      
      <section className="bg-[#f5f5f5] px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 font-bold uppercase tracking-widest text-[#b59b51]">
            PROPERTY ADVISERS REAL ESTATE
          </p>

          <h1 className="mb-8 text-4xl font-bold text-[#376b8b] md:text-6xl">
            ¿Tienes una propiedad que deseas alquilar?
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
           En Property Advisers Real Estate te ayudamos
           a promocionar tu propiedad en alquiler,
           coordinar visitas y evaluar posibles inquilinos,
           para que puedas tomar decisiones informadas
           con el respaldo de un profesional de bienes raíces
           en Puerto Rico.
          </p>

          <a
            href="#solicitar-orientacion"
            className="mt-10 inline-block rounded-xl bg-[#376b8b] px-8 py-4 font-bold text-white transition hover:bg-[#28536d]"
          >
            QUIERO ALQUILAR MI PROPIEDAD
          </a>
        </div>
      </section>

      
<section className="bg-[#f5f5f5] px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-4 font-bold uppercase tracking-widest text-[#b59b51]">
        UNA DECISIÓN IMPORTANTE
      </p>

      <h2 className="text-3xl font-bold text-[#376b8b] md:text-4xl">
        ¿Por qué contar con un corredor de bienes raíces
         para alquilar tu propiedad?     
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          titulo: "Promoción profesional de tu propiedad",
          descripcion:
  "Promocionamos tu propiedad en alquiler mediante estrategias de mercadeo, fotografías y canales digitales para atraer posibles inquilinos.",
        },
        {
          titulo: "Evaluación inicial de posibles inquilinos",
          descripcion:
  "Coordinamos las solicitudes de alquiler y realizamos una evaluación inicial de los interesados, considerando la información y los requisitos establecidos para la propiedad, conforme a las leyes aplicables.",
        },
        {
          titulo: "Acompañamiento durante el proceso de alquiler",
          descripcion:
  "Te orientamos durante el proceso de alquiler, desde la coordinación de visitas y presentación de solicitudes hasta la selección del inquilino y la formalización del contrato.",
        },
      ].map((item) => (
        <div
          key={item.titulo}
          className="rounded-2xl border-t-4 border-[#b59b51] bg-white p-8 shadow-md"
        >
          <h3 className="mb-4 text-xl font-bold text-[#376b8b]">
            {item.titulo}
          </h3>

          <p className="leading-relaxed text-gray-600">
            {item.descripcion}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      
<section className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-4 font-bold uppercase tracking-widest text-[#b59b51]">
        ANÁLISIS DEL MERCADO DE ALQUILERES
      </p>

      <h2 className="mb-6 text-3xl font-bold text-[#376b8b] md:text-4xl">
        ¿Cómo determinamos un precio competitivo para alquilar tu propiedad?
      </h2>

      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
        Analizamos las propiedades disponibles en alquiler,
        las rentas de propiedades comparables, la ubicación
        y las características de tu inmueble para recomendar
        un precio de alquiler competitivo que permita atraer
        posibles inquilinos en el mercado de Puerto Rico.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          titulo: "Alquileres comparables",
          descripcion:
  "Analizamos los precios de alquiler de propiedades similares en la zona para recomendar una renta mensual competitiva.",
        },
        {
          titulo: "Competencia en el mercado de alquileres",
          descripcion:
  "Evaluamos las propiedades similares disponibles para alquilar en la zona, considerando sus precios, características y condiciones de alquiler.",
        },
        {
          titulo: "Ubicación y características de la propiedad",
          descripcion:
  "Consideramos la ubicación, el tamaño, las condiciones, las amenidades y otros atributos que pueden influir en el precio mensual de alquiler.",
        },
        {
          titulo: "Demanda de alquileres en la zona",
          descripcion:
  "Evaluamos la demanda de propiedades en alquiler y las tendencias del mercado local para recomendar una estrategia de precio competitiva.",
        },
      ].map((factor) => (
        <div
          key={factor.titulo}
          className="rounded-2xl border border-gray-200 bg-[#f5f5f5] p-8"
        >
          <h3 className="mb-4 text-xl font-bold text-[#376b8b]">
            {factor.titulo}
          </h3>

          <p className="leading-relaxed text-gray-600">
            {factor.descripcion}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="solicitar-orientacion"
  className="bg-[#f5f5f5] px-6 py-20"
>
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-4 font-bold uppercase tracking-widest text-[#b59b51]">
      COMIENZA A ALQUILAR TU PROPIEDAD
    </p>

    <h2 className="mb-6 text-3xl font-bold text-[#376b8b] md:text-4xl">
      ¿Estás listo para alquilar tu propiedad?
    </h2>

    <p className="mb-8 text-lg leading-relaxed text-gray-600">
      Completa nuestro formulario y uno de nuestros
      profesionales se comunicará contigo para conocer
      tu propiedad, orientarte sobre nuestros servicios
      de alquiler y explicarte cómo podemos ayudarte
      a encontrar posibles inquilinos.
    </p>

    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h3 className="mb-4 text-2xl font-bold text-[#376b8b]">
        Solicita orientación para alquilar tu propiedad
      </h3>

      <p className="text-gray-600">
        Completa tus datos para que podamos comunicarnos contigo.
      </p>
      <form
  name="solicitudes-alquileres"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
 onSubmit={async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
formData.set("form-name", "solicitudes-alquileres");

  try {
    const response = await fetch("/form-alquileres.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar el formulario");
    }

    window.location.href = "/gracias";
  } catch (error) {
    alert("No se pudo enviar la solicitud. Inténtalo nuevamente.");
  }
}}
  className="mt-8 grid gap-5 text-left"
>
  <input
    type="hidden"
    name="form-name"
    value="solicitudes-alquileres"
  />
  <input type="hidden" name="bot-field" />
      
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Nombre completo *
  </label>
  <input
    type="text"
    name="nombre"
    required
    placeholder="Escribe tu nombre completo"
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>

<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Número de teléfono *
  </label>
  <input
    type="tel"
    name="telefono"
    required
    placeholder="787-000-0000"
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>


      
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Correo electrónico *
  </label>
  <input
    type="email"
    name="email"
    required
    placeholder="correo@ejemplo.com"
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>

<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Municipio de la propiedad *
  </label>
  <input
    type="text"
    name="municipio"
    required
    placeholder="Ej. San Juan, Carolina, Caguas..."
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>
      
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Tipo de propiedad *
  </label>
  <select
    name="tipo_propiedad"
    required
    defaultValue=""
    className="w-full rounded-xl border border-gray-300 bg-white p-4 focus:border-[#376b8b] focus:outline-none"
  >
    <option value="" disabled>
      Selecciona el tipo de propiedad
    </option>
    <option value="Casa">Casa</option>
    <option value="Apartamento">Apartamento</option>
    <option value="Terreno">Terreno</option>
    <option value="Comercial">Propiedad comercial</option>
    <option value="Local comercial">Local comercial</option>
    <option value="Multifamiliar">Multifamiliar</option>
    <option value="Otro">Otro</option>
  </select>
</div>
  
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    ¿Qué renta mensual deseas recibir por tu propiedad?
  </label>
  <input
    type="number"
    name="renta_mensual"
    min="0"
    placeholder="Ej. 1500"
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>
    
<button
  type="submit"
  className="w-full rounded-xl bg-[#376b8b] px-6 py-4 font-bold text-white hover:bg-[#28536d]"
>
  SOLICITAR SERVICIO DE ALQUILER
</button>
</form>
      
    </div>
  </div>
</section>
      
    </main>
  );
}
