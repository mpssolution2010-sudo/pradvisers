

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/precio-correcto')({
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
            El precio correcto puede marcar la diferencia
            al vender tu propiedad.
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Establecer un precio de mercadeo competitivo
            desde el principio es fundamental para atraer
            compradores y desarrollar una estrategia de
            venta exitosa en Puerto Rico.
          </p>

          <a
            href="#solicitar-orientacion"
            className="mt-10 inline-block rounded-xl bg-[#376b8b] px-8 py-4 font-bold text-white transition hover:bg-[#28536d]"
          >
            QUIERO ORIENTACIÓN SOBRE EL PRECIO DE MI PROPIEDAD
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
        ¿Qué ocurre cuando una propiedad sale al mercado
        con un precio incorrecto?
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          titulo: "Menos compradores interesados",
          descripcion:
            "Un precio demasiado alto puede reducir el interés de compradores que buscan propiedades similares.",
        },
        {
          titulo: "Más tiempo en el mercado",
          descripcion:
            "Una propiedad con un precio poco competitivo puede permanecer publicada durante más tiempo del esperado.",
        },
        {
          titulo: "Posibles reducciones de precio",
          descripcion:
            "Comenzar con un precio elevado puede hacer necesarias reducciones posteriores para recuperar el interés del mercado.",
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
        ANÁLISIS COMPARATIVO DE MERCADO
      </p>

      <h2 className="mb-6 text-3xl font-bold text-[#376b8b] md:text-4xl">
        ¿Cómo recomendamos el precio para mercadear tu propiedad?
      </h2>

      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
        Estudiamos diferentes factores del mercado inmobiliario
        para desarrollar una estrategia de precio que ayude
        a posicionar tu propiedad frente a posibles compradores.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          titulo: "Ventas comparables",
          descripcion:
            "Analizamos precios de venta de propiedades similares en la zona.",
        },
        {
          titulo: "Competencia actual",
          descripcion:
            "Evaluamos propiedades similares que actualmente se ofrecen en el mercado.",
        },
        {
          titulo: "Ubicación y características",
          descripcion:
            "Consideramos localización, tamaño, distribución y características de la propiedad.",
        },
        {
          titulo: "Condiciones del mercado",
          descripcion:
            "Estudiamos la oferta, la demanda y las tendencias inmobiliarias de la zona.",
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
      COMIENZA CON EL PRECIO CORRECTO
    </p>

    <h2 className="mb-6 text-3xl font-bold text-[#376b8b] md:text-4xl">
      ¿Estás considerando vender tu propiedad?
    </h2>

    <p className="mb-8 text-lg leading-relaxed text-gray-600">
      Completa nuestro formulario y uno de nuestros
      profesionales se comunicará contigo para conocer
      tu propiedad y orientarte sobre nuestro servicio
      de análisis comparativo de mercado.
    </p>

    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h3 className="mb-4 text-2xl font-bold text-[#376b8b]">
        Solicita orientación sobre el precio de mercadeo
      </h3>

      <p className="text-gray-600">
        Completa tus datos para que podamos comunicarnos contigo.
      </p>
      <form
  name="solicitudes-precio-correcto"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
 onSubmit={async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  formData.set("form-name", "solicitudes-precio-correcto");

  try {
    const response = await fetch("/form-precio-correcto.html", {
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
    value="solicitudes-precio-correcto"
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
    <option value="Multifamiliar">Multifamiliar</option>
    <option value="Otro">Otro</option>
  </select>
</div>
  
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    ¿Qué precio tienes en mente para vender tu propiedad?
  </label>
  <input
    type="number"
    name="precio_estimado"
    min="0"
    placeholder="Ej. 250000"
    className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#376b8b] focus:outline-none"
  />
</div>
    
<button
  type="submit"
  className="w-full rounded-xl bg-[#376b8b] px-6 py-4 font-bold text-white hover:bg-[#28536d]"
>
  SOLICITAR ORIENTACIÓN
</button>
</form>
      
    </div>
  </div>
</section>
      
    </main>
  );
}
