import './Home.css';
import { Icon } from "semantic-ui-react";

const Home = () => {
    return (
        <div>
            <div className="about-me-section">
                <h1>Sobre Mi</h1>
                <hr></hr>
                <h3>Carolina Losano</h3>
                <div className='sobre-mi'>
                    <h4>
                        <Icon name="user circle" size="big" /> ¿Quién soy?
                    </h4>
                    ¡Hola! Soy una apasionada diseñadora gráfica con una creatividad desbordante y una amplia experiencia en el campo del diseño. Desde una temprana edad, siempre sentí curiosidad por el arte y la expresión visual, lo que me llevó a explorar el mundo del diseño gráfico.
                </div>
                <br />
                <div className='sobre-mi'>
                    <h4>
                        <Icon name="arrow alternate circle right" size="big" /> Mi Trayectoria Profesional
                    </h4>
                    Durante mi trayectoria profesional, tuve la oportunidad de trabajar en diversos proyectos desafiantes, que me permitieron desarrollar mis habilidades y perfeccionar mi enfoque para crear soluciones creativas y efectivas para cada cliente.
                </div>
                <br />
                <div className='sobre-mi'>
                    <h4>
                        <Icon name="arrow alternate circle right" size="big" /> Objetivos Personales
                    </h4>
                    Mi objetivo es dar vida a las ideas y mensajes de mis clientes a través de un diseño atractivo y significativo. Me enfoco en escuchar atentamente las necesidades y metas de cada proyecto, para poder brindar un trabajo que supere las expectativas y genere un impacto positivo.
                </div>
            </div>

            {/* Tarjetas de planes */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Tarjeta 1 */}
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold mb-2">Plan Invididual</h2>
                    <p className="text-2xl font-bold mb-4">$25.000 x proyecto</p>
                    <ul className="text-left">
                        <li>1 calendario mensual para redes</li>
                        <li>5 piezas para redes</li>
                        <li>1 folleto A4</li>
                        <li>1 presentación (max 10 paginas)</li>
                    </ul>
                </div>

                {/* Tarjeta 2 */}
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold mb-2">Plan Promedio</h2>
                    <p className="text-2xl font-bold mb-4">$80.000 x mes</p>
                    <ul className="text-left">
                        <li>1 calendario mensual para redes</li>
                        <li>15 piezas para redes</li>
                        <li>2 folletos sin máximo de tamaño/pliegos</li>
                        <li>2 presentaciones de hasta 20 páginas</li>
                    </ul>
                </div>

                {/* Tarjeta 3 */}
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold mb-2">Plan Completo</h2>
                    <p className="text-2xl font-bold mb-4">$120.000 x mes</p>
                    <ul className="text-left">
                        <li>1 calendario mensual para redes</li>
                        <li>Seguimiento de las métricas</li>
                        <li>Reporte de RRSS</li>
                        <li>Cantidad ilimitada de piezas para redes</li>
                        <li>5 presentaciones de hasta 20 páginas</li>
                        <li>5 folletos / editorial sin limite de tamaño y pliegos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
