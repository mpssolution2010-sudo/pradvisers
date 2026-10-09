
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/servicios/short-sale')({
  component: ShortSalePage,
});

function ShortSalePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#09243e]">
      {/* ENCABEZADO */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" aria-label="Property Advisers - Inicio">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-auto w-40 sm:w-48"
            />
          </a>

          <a
            href="/"
            className="rounded-lg border border-[#246b8e] px-4 py-2 text-sm font-bold text-[#246b8e] transition hover:bg-[#246b8e] hover:text-white"
          >
            INICIO
          </a>
        </div>
      </header>

{/* PORTADA SHORT SALE */}
<section
  
    className="relative flex min-h-[560px] items-center bg-cover bg-[80%_center] py-20 sm:min-h-[620px] sm:bg-center"
    style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(4,30,51,0.96) 0%, rgba(4,30,51,0.82) 42%, rgba(4,30,51,0.12) 100%), url('/images/short-sale-banner.jpg')",
  }}
>
<div className="relative z-10 mx-auto w-full max-w-7xl px-6">
    <div className="max-w-2x1">
    <p className="mb-5 font-semibold tracking-widest text-[#e0ad48]">
        SERVICIOS / SHORT SALE
      </p>


<h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
        Short Sale en
        <span className ="block text-[#e0ad48]">
          Puerto Rico
        </span>
      </h1>

      <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
        ¿Tu hipoteca se ha convertido en una carga?
      </h2>

      <p className ="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
        Un Short Sale podría ser una alternativa antes de una
        ejecución hipotecaria. En Property Advisers Real Estate
        te orientamos, analizamos tu situación y te acompañamos
        durante el proceso de venta.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#evaluacion"
          className="rounded-lg bg-[#e0ad48] px-6 py-4 text-center font-bold text-[#09243e] transition hover:bg-[#f1c66a]"
        >
          EVALUAR MI CASO
        </a>

        <a
 
          href="https://wa.me/17873935871?text=Saludos%2C%20deseo%20recibir%20orientaci%C3%B3n%20sobre%20Short%20Sale%20para%20mi%20propiedad."
          className="rounded-lg border-2 border-white px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#09243e]"
        >
          HABLAR POR WHATSAPP
        </a>
      </div>
    </div>
  </div>
</section>

{/* FORMULARIO DE EVALUACIÓN SHORT SALE */}
<section
  id="evaluacion"
  className="mx-auto max-w-4xl px-6 py-16"
>
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold text-[#09243e]">
      Evaluación confidencial de Short Sale
    </h2>
    <p className="mt-4 text-gray-600">
      Cuéntanos sobre tu propiedad y situación hipotecaria.
      Nuestro equipo evaluará la información para orientarte
      sobre las alternativas disponibles.
    </p>
  </div>
  
<form
  name="solicitudes-short-sale"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  formData.set("form-name", "solicitudes-short-sale");
  const response = await fetch("/form-short-sale.html",{
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded", 
  }, 
    body:new URLSearchParams(formData as any).toString()
  });
    if (response.ok) {
  window.location.href = "/gracias";
}  
  }}
    
    className="grid gap-5 rounded-2xl bg-white p-6 shadow-lg"
>
  <input
    type="hidden"
    name="form-name"
    value="solicitudes-short-sale"
  />
  <input type="hidden" name="bot-field" />

  <div>
    <label className="mb-2 block font-semibold">
      Nombre completo
    </label>
    <input
      type="text"
      name="nombre"
      required
      className="w-full rounded-lg border p-3"
      placeholder="Nombre y apellidos"
    />
  </div>

  <div>
    <label className="mb-2 block font-semibold">
      Teléfono
    </label>
    <input
      type="tel"
      name="telefono"
      required
      className="w-full rounded-lg border p-3"
      placeholder="787-000-0000"
    />
  </div>

  <div>
    <label className="mb-2 block font-semibold">
      Correo electrónico
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full rounded-lg border p-3"
      placeholder="correo@ejemplo.com"
    />
  </div>
  
<div>
  <label className="mb-2 block font-semibold">
    Municipio donde está ubicada la propiedad
  </label>
  <input
    type="text"
    name="municipio"
    required
    className="w-full rounded-lg border p-3"
    placeholder="Ej. San Juan, Carolina, Bayamón"
  />
</div>

<div>
  <label className="mb-2 block font-semibold">
    Tipo de propiedad
  </label>
  <select
    name="tipo_propiedad"
    required
    defaultValue=""
    className="w-full rounded-lg border p-3"
  >
    <option value="" disabled>
      Selecciona una opción
    </option>
    <option value="Casa">Casa</option>
    <option value="Apartamento">Apartamento</option>
    <option value="Multipropiedad">Propiedad multifamiliar</option>
    <option value="Comercial">Propiedad comercial</option>
    <option value="Otro">Otro</option>
  </select>
</div>

  
<div>
  <label className="mb-2 block font-semibold">
    Banco o institución hipotecaria
  </label>
  <input
    type="text"
    name="banco_hipotecario"
    className="w-full rounded-lg border p-3"
    placeholder="Nombre del banco o institución"
  />
</div>

<div>
  <label className="mb-2 block font-semibold">
    ¿Actualmente estás atrasado en los pagos?
  </label>
  <select
    name="estado_hipoteca"
    required
    defaultValue=""
    className="w-full rounded-lg border p-3"
  >
    <option value="" disabled>
      Selecciona una opción
    </option>
    <option value="Al dia">Estoy al día</option>
    <option value="1 a 3 meses">
      Entre 1 y 3 meses de atraso
    </option>
    <option value="4 a 6 meses">
      Entre 4 y 6 meses de atraso
    </option>
    <option value="Mas de 6 meses">
      Más de 6 meses de atraso
    </option>
    <option value="Prefiero conversar">
      Prefiero conversar sobre mi situación
    </option>
  </select>
</div>
  
<div>
  <label className="mb-2 block font-semibold">
    ¿Has recibido alguna notificación de ejecución hipotecaria?
  </label>
  <select
    name="notificacion_ejecucion"
    required
    defaultValue=""
    className="w-full rounded-lg border p-3"
  >
    <option value="" disabled>Selecciona una opción</option>
    <option value="Si">Sí</option>
    <option value="No">No</option>
    <option value="No estoy seguro">No estoy seguro</option>
  </select>
</div>
  
<button
  type="submit"
  className="rounded-lg bg-[#e0ad48] px-6 py-4 font-bold text-[#09243e] hover:bg-[#f1c66a]"
>
  ENVIAR MI SOLICITUD
</button>


</form>

</section>

    </main>
  );
}
