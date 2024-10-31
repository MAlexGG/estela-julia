import Navbar from "../../components/navbar/Navbar"
import MainImage from '../../components/mainImage/MainImage'
import styles from './Home.module.css'
import name from '../../assets/images/name.svg'
import disc from '../../assets/images/disc.jpg'
import credits from '../../assets/images/credits.jpg'
import Footer from "../../components/footer/Footer"

function Home() {
  return (
    <>
    <Navbar/>
    <img src={name} alt="Estela Julia" className={styles.txtName}/>
    <div className={styles.ctHome}>
      <p className={styles.txtStart}>Estela Julia es una artista multidisciplinar nacida en Pamplona en el año 2000. Es cantante, violoncellista, compositora y bailarina, con un estilo musical propio y ecléctico que fusiona en sus composiciones géneros como el jazz, el pop, el hip-hop, el latin, el flamenco y el folklore universal.</p>
      <MainImage/>
    </div>
    <p className={styles.txtBio}>Crece en un entorno familiar artístico con unos padres dedicados a la danza y la escenografía, y con un tío actor y músico.
    Estela comienza su formación en danza clásica y contemporánea con 6 años en la Escuela de Danza de Navarra, y poco tiempo después lo hace también con la danza española y el flamenco. Con 9 años empieza a tomar clases de música y violoncello y a los 14 accede al Conservatorio Profesional de Música Pablo Sarasate para cursar el grado medio de violoncello clásico. Dos años más tarde comienza a formarse en canto lírico en el mismo conservatorio pero su vena improvisativa y algo más moderna la impulsan a indagar en el jazz y el teatro musical, rama escénica que pudo explorar durante 6 años en los campamentos de Beauville Arts, en Francia.
    </p>
    <p className={styles.txtBio}>En el año 2019, tras cursar el Bachillerato de Artes Escénicas, Música y Danza en el instituto Plaza de la Cruz, Estela se traslada a Barcelona para estudiar el grado superior de canto jazz en la Escuela Superior de Música de Catalunya (ESMUC) al tiempo que concluye el grado medio de violoncello en el Conservatori Liceu. Durante esta etapa indaga en los diferentes géneros que le ofrece la carrera de jazz, incluyendo el latin jazz, la música brasileira o el folklore universal. Además no deja de bailar y ampliar su técnica con nuevos estilos de danza como el hip-hop, el dancehall y el claqué.</p>
    <p className={styles.txtBio}>Actualmente es licenciada en jazz y ejerce como profesora de canto y violoncello en la escuela Luthier, en Barcelona, al tiempo que lidera su cuarteto musical, con el que ofrece conciertos de jazz y música de autor en distintas localidades de España.</p>
    <p className={styles.txtBio}>“Estela Julia Quartet” fue finalista en el concurso Juventudes Musicales de España de Jazz en el año 2022 y ha concedido conciertos en lugares como el Consevatori Liceu, la Jazz Cava de Terrassa, la Sala Jamboree, L’Auditori o la sala Zentral de Pamplona.</p>
    <h2 id="discografia">DISCOGRAFÍA</h2>
    <div className={styles.ctDisc}>
      <img src={disc} alt="El álbum de Estela Julia, Quién soy" />
      <img src={credits} alt="Créditos" />
    </div>
    <p className={styles.txtBio}>Tras el lanzamiento de sus dos primeros singles “Olas” y “Orbea”, este año 2024 Estela Julia presenta su primer álbum de estudio titulado “Quién Soy”. Se trata de un LP grabado en directo durante 3 días en los Estudis Ground, en Girona, que reúne 10 canciones escritas y arregladas por su autora para una gran agrupación formada por Estela Julia a la voz, Sergi Boqué al piano y teclados, Miquel Casanova al contrabajo y bajo eléctrico, Gerard Pola a la batería, Víctor Franco a la guitarra española, Frederico Vannini a la guitarra eléctrica, Jesús Campos a la percusión, Paula del Río y Marta Fuster al violín, Carla Artigau al violoncello y Álvaro Belchí, Julia Rodríguez y María la Blanco a los coros.</p>
    <p className={styles.txtBio}>En sus letras, Estela relata vivencias personales, cuenta anécdotas divertidas, describe sensaciones evocadas por la naturaleza y las personas de su entorno presente y pasado, y se cuestiona a sí misma. En su eterna búsqueda de identidad musical, como ella lo llama, Estela aprovecha para contar y cantar temas escritos al detalle y con una estrecha relación letra-ritmo-melodía-armonía. De esta manera consigue crear unos estribillos pegadizos y unas estrofas con trama y desenlace.</p>
    <p className={styles.txtBio}>Este disco se compone íntegramente de canciones originales en castellano e inglés e incluye alguna coautoría junto a su pianista Sergi Boqué, autor de “Spring Up”, o su gran amigo Héctor Crespo, coautor de “Una Noche Rara”, canción para la que se rodó un videoclip también dirigido por Estela.</p>
    <p className={styles.txtBio}>El álbum debut de Estela Julia “Quién Soy” está disponible en físico y en todas las plataformas de streaming digitales (Spotify, Youtube, Apple Music, etc.).</p>
    <Footer/>
    </>
  )
}

export default Home