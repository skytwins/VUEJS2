Vue.component ('usuarios', {
	template: `
		<div>
			<hr>
			<h1>Componente creado con VUE JS 2</h1>
			<h2>{{subtitulo}}</h2>
			<ul>
				<li v-for="(user, index) in users">
			 		{{user.name}} - {{user.email}}
				</li>
		    </ul>
			<hr>
		</div>
	`,
	mounted() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((respuesta) => {
			this.users = respuesta.data;
		});
	},
	data() {
		return {
			subtitulo: 'Ejemplo de componentes',
			users: null,
		}
	}
});
Vue.component ('frutas', {
	props: ['objeto'],
	template: `
		<div>
			<hr>
			<h1>Componente frutas</h1>
			<ul>
				<li v-for="(fruta, index) in objeto">
			 		{{fruta.nombre}} - {{fruta.color}}
				</li>
		    </ul>
			<hr>
		</div>
	`
});
Vue.component ('padre', {
	template: `
		<div>
			<h1>Componente Padre</h1>
			<div>
			     <hijo></hijo>
			</div>			
		</div>
	`
});
Vue.component ('hijo', {
	template: `
		<p style="background: yellow;">Texto de parrafo del componente hijo</p>
	`
});

Vue.filter('Mayusculas', (value) => value.toUpperCase());
new Vue ({
	el: 'main',
	data: {
		elegido: 'padre',
		texto: 'Hola Mundo desde VUEJS 2',
		nombres: 'Jose Luis',
		apellidos: 'Santa Cruz',
		nota: 5,
		peliculas: ['Spiderman Homecoming','Transformers','Avengers','Capitan America', 'Apocalipsis Zombie'],
		frutas: [
		  {nombre:"Manzana", color:"verde", precio:"bajo"},
		  {nombre:"Mango", color:"Amarillo", precio:"medio"},
		  {nombre:"Uva", color:"morado", precio:"alto"},
		  {nombre:"Fresa", color:"rojo", precio:"bajo"}		  
		],
		superfruta: {nombre:"Mandarina", color:"rojo", precio:"bajo"},
		query: '',
		peliculaNueva: null,
		confirmado: null
	},
	methods: {
		agregarPelicula(){
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva=null
		},
		eliminarPelicula(indice){
			this.peliculas.splice(indice, 1);
		},
		marcar(index){
			this.confirmado = index
		}

	},
	computed: {
		nombresYapellidos(){
			var fecha = new Date()
			return this.nombres + ' ' + this.apellidos + ' Nota:' + this.nota + ' Año:' + fecha.getFullYear();
		},

		peliculasOrdenadas() {
			return this.peliculas.sort()
		},

		buscarFruta(){
			return this.frutas.filter((fruta) => fruta.nombre.toLowerCase().includes(this.query.toLowerCase())); 
		}
	}
});

const vue2 = new Vue ({
	el:'#app',
	data: {
		texto: "Segunda instancia de VUEJS 2"
	}

})

const vue3 = new Vue ({
	el:'.appl',
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((respuesta) => {
			this.posts = respuesta.data;
		});
	},
	data: {
		texto: "Tercera instancia de VUEJS 2",
		posts: null
	}

})

