import Layout from '../components/Layout'

const Index = () =>{
	return (
		<Layout>
			<header className="background__index">
				<section className="intro">
					<h1 className="titulo">A DIGITAL TOOL</h1>					
					<p>Where you can learn English, review vocabulary or watch easy-to-understand grammar videos. 
A tool where you can listen to the pronunciation of each word and sing along with music videos.</p>
					<div>
						<a><button>Download</button></a> 
						<a><button className="buttonBlack">Open SALIN in your browser</button></a>
					</div>
				</section>
			</header>
			<section className="center col_2">
				<div>
					<img className="image_Muestra" src="screenVocabulary.jpeg" alt="image" />
					<img className="image_Muestra mg_lf_20" src="mustraVocabulary.jpeg" alt="image" />
				</div>
				<div className="width_400">
					<h1>Learn vocabulary</h1>
					<p>Learning English is more fun if you do them singing. In the video section you can find music 
and grammar videos that will help you learn English in a simple and fun way.</p>
				</div>
			</section>
			<section className="bg_white center col_2">
				<div className="width_400">
					<h1>Look videos</h1>
					<p>A section exclusively dedicated to elementary level vocabulary. 
It has attractive images and sounds to make it fun to learn and memorize each word.</p>
				</div>
				<div>
						<img className="image_reproductor" src="muestraReproductor.jpeg" alt="image" />
						<img className="image_Muestra" src="screenVideos.jpeg" alt="image" />
				</div>
			</section>
			<section className="textCener center">
				<div className="col_1">
					<h1>A RELIABLE DIGITAL TOOL TO HELP YOU LEARN ELEMENTARY ENGLISH</h1>
					<p className="mg_100">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
					<div className="mg_top_100">
						<img className="image_absolute_lf" src="screenVocabulary.jpeg" alt="image" />
						<img className="image_absolute_rg" src="screenVideos.jpeg" alt="image" />
						<img className="image_Muestra_l" src="app.jpeg"/>
				</div>
				</div>
			</section>
			<section className="textCener center mg_top_200">
				<h1>Ready to start your journey?</h1>
				<button className="buttonFin">Download</button>
			</section>
		</Layout>
	)
} 
export default Index;
