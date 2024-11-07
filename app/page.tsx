'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Palette, Sparkles, Feather, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveImage from '@/components/imageHero';


export default function Home() {


  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Enlace del logo o nombre con desplazamiento suave */}
          <Link href="/" onClick={handleLogoClick} className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-indigo-400 transition-colors duration-300">
            <Palette size={32} className="text-indigo-500" />
            <span className="ml-3 text-xl">DLL - Design Landing Labs</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#caracteristicas" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Características</Link>
            <Link href="#ejemplos" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Nuestros trabajos</Link>
            <Link href="#precios" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Precios</Link>
            <Link href="#contacto" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 body-font min-h-screen ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                Domina el Arte de las
                <br className="hidden lg:inline-block" />
                Páginas de Aterrizaje
              </h1>
              <p className="mb-8 leading-relaxed text-white text-lg">
                Eleva tu presencia en línea con nuestros diseños de páginas de aterrizaje impactantes. Capta la atención, inspira acción y gobierna tu dominio digital con elegancia y poder.
              </p>
              <div className="flex justify-center">
                <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Comienza Ahora
                </Button>
                <Button variant="outline" className="ml-4 inline-flex text-indigo-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Aprende Más
                </Button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 aspect-video relative">
              <InteractiveImage/>
            </div>

          </div>
        </section>
{/* Características Section */}
<section id="caracteristicas" className="text-gray-600 body-font min-h-screen flex flex-col justify-start pt-10">
  <div className="container px-5 py-10 mx-auto">
    <div className="text-center mb-12">
      <h2 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-6">Características Destacadas</h2>
      <p className="text-lg leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500 mb-10">
        Descubre las características magistrales que hacen que nuestras páginas de aterrizaje destaquen. Nuestros diseños están optimizados para captar la atención de tus visitantes, mejorar la experiencia de usuario y maximizar las conversiones. Nos enfocamos en ofrecer una estética profesional combinada con funcionalidades avanzadas que apoyen los objetivos de tu negocio y aseguren un impacto duradero en el mercado digital.
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:flex-nowrap -m-4 justify-center">
      <div className="p-6 md:w-1/3 flex flex-col text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 rounded-lg border-2 border-gray-200 hover:border-indigo-500 relative overflow-hidden m-4">
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-20 bg-indigo-500"></div>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white">
          <Sparkles size={32} />
        </div>
        <div className="flex-grow transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Diseño Impactante</h2>
          <p className="leading-relaxed text-base mb-4">
            Visuales impresionantes diseñados para cautivar a tu audiencia y dejar una impresión duradera. Cada página está cuidadosamente estructurada para resaltar los puntos clave de tu negocio y mantener el interés del visitante.
          </p>
          <p className="leading-relaxed text-base">
            Nuestro enfoque en el diseño visual asegura que cada elemento tenga un propósito y que las imágenes, colores y fuentes seleccionadas representen fielmente tu marca y estilo.
          </p>
        </div>
      </div>
      
      <div className="p-6 md:w-1/3 flex flex-col text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 rounded-lg border-2 border-gray-200 hover:border-indigo-500 relative overflow-hidden m-4">
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-20 bg-indigo-500"></div>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white">
          <Feather size={32} />
        </div>
        <div className="flex-grow transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Contenido Persuasivo</h2>
          <p className="leading-relaxed text-base mb-4">
            Texto convincente y elegante que habla a tu audiencia con la autoridad de un experto. Creamos contenido que no solo informa, sino que también inspira acción y fortalece la relación con tu marca.
          </p>
          <p className="leading-relaxed text-base">
            Nuestro equipo de redactores trabaja en colaboración con los diseñadores para crear una narrativa que mantenga el interés del visitante, logrando así mayores tasas de conversión.
          </p>
        </div>
      </div>

      <div className="p-6 md:w-1/3 flex flex-col text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 rounded-lg border-2 border-gray-200 hover:border-indigo-500 relative overflow-hidden m-4">
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-20 bg-indigo-500"></div>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white">
          <Globe size={32} />
        </div>
        <div className="flex-grow transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Alcance Global</h2>
          <p className="leading-relaxed text-base mb-4">
            Optimización SEO para asegurar que tu página de aterrizaje domine los resultados de búsqueda. Nuestras estrategias de SEO están diseñadas para mejorar la visibilidad de tu sitio y atraer tráfico de calidad.
          </p>
          <p className="leading-relaxed text-base">
            Con técnicas avanzadas, optimizamos cada aspecto de tu página para maximizar la relevancia en los motores de búsqueda, asegurando que tu marca llegue a la audiencia correcta en el momento adecuado.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Ejemplos Section */}
<section id="ejemplos" className="text-gray-600 body-font bg-white min-h-screen">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-12">
      <h2 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-6">Nuestros Trabajos</h2>
      <p className="text-lg leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500 mb-10">
        Explora algunos de nuestros diseños de landing pages más impactantes. Cada proyecto está cuidadosamente elaborado para maximizar el impacto visual y funcional, asegurando la mejor experiencia para tus usuarios.
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-row gap-6 justify-center">
      <div className="w-1/3 p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-80">
          <Image
            alt="gallery"
            className="w-full h-full object-cover"
            src="/images/products/a.jpg"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-indigo-500 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <div className="text-center text-white px-4">
              <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">E-COMMERCE</h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">Tienda de Moda Online</h1>
              <p className="leading-relaxed mb-4">Landing page para una tienda de moda con diseño elegante y conversión optimizada.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-1/3 p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-80">
          <Image
            alt="gallery"
            className="w-full h-full object-cover"
            src="/images/products/b.jpg"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-indigo-500 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <div className="text-center text-white px-4">
              <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">TECNOLOGÍA</h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">App Innovadora</h1>
              <p className="leading-relaxed mb-4">Página de aterrizaje para una aplicación móvil con animaciones y diseño futurista.</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="w-1/3 p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-80">
          <Image
            alt="gallery"
            className="w-full h-full object-cover"
            src="/images/products/z.jpeg"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-indigo-500 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <div className="text-center text-white px-4">
              <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">SERVICIOS</h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">Consultoría Empresarial</h1>
              <p className="leading-relaxed mb-4">Landing page profesional para servicios de consultoría con diseño limpio y confiable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Texto general debajo de las imágenes */}
    <div className="mt-12 text-center text-gray-500 text-base leading-relaxed">
      <p>
        Nuestros trabajos cuentan con la descripción de las tecnologías utilizadas de fuente confiable y la manera de programar es legible, lo que hace que todo sea más rápido y ordenado. Esto asegura que no deban preocuparse por futuros inconvenientes, manteniendo el rendimiento y la funcionalidad óptimos.
      </p>
    </div>
  </div>
</section>


{/* Precios Section */}
<section id="precios" className="text-gray-600 body-font overflow-hidden min-h-screen pt-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h2 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900">Planes de Precios</h2>
      <p className="lg:w-2/3 mx-auto text-lg leading-relaxed text-gray-500 mb-12">
        Selecciona el plan que mejor se adapte a tus necesidades digitales. Cada opción ofrece características únicas para que puedas establecer tu presencia en línea con seguridad, diseño impactante y resultados efectivos. ¡No esperes más y elige el plan ideal para ti!
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center -m-4">
      {/* Plan BÁSICO */}
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-10 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BÁSICO</h2>
          <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">$99.000</h1>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Diseño de Una Página Simple
          </p>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Optimización SEO Básica
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>1 Ronda de Revisiones
          </p>
          <Button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-full transition-all duration-300 transform hover:scale-105">
            Elegir Plan
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Plan PRO */}
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-10 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$149.000</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Diseño de Página Multi-Sección
          </p>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Optimización SEO Avanzada
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>3 Rondas de Revisiones
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>1 semana de mantenimiento gratuito
          </p>
          <Button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded-full transition-all duration-300 transform hover:scale-105">
            Elegir Plan
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>

      {/* Plan PREMIUM */}
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-10 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$299.000</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Diseño de Sitio Web Completo (Hasta 3 Páginas)
          </p>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Estrategia SEO Completa
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Rondas de Revisiones ilimitadas
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>1 mes de mantenimiento gratuito
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pasarelas de pago
          </p>
          <Button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-full transition-all duration-300 transform hover:scale-105">
            Elegir Plan
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Contacto Section */}
<section id="contacto" className="text-gray-600 body-font relative bg-white min-h-screen flex items-center">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h2 className="sm:text-5xl text-4xl font-semibold title-font mb-6 text-gray-900">Contáctanos</h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-500">
        ¿Listo para llevar tu presencia digital al siguiente nivel? Queremos conocer tus ideas y ayudarte a materializarlas. Completa el formulario a continuación y comencemos a trabajar juntos en tu proyecto web.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-lg text-gray-600">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-lg text-gray-600">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-48 text-lg outline-none text-gray-700 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="p-4 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded-full text-xl transition-all duration-300 transform hover:scale-105">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Palette size={32} className="text-indigo-500" />
            <span className="ml-3 text-xl">DLL - Design Landing Labs</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} DLL - Design Landing Labs —
            <a href="https://twitter.com/designlandinglabs" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@designlandinglabs</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-indigo-500 transition-colors duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 hover:text-indigo-500 transition-colors duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 hover:text-indigo-500 transition-colors duration-300">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 hover:text-indigo-500 transition-colors duration-300">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}