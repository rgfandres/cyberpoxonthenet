import App from './App.svelte';//primer componente de la pag

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

//la aplicacion apareceraen el body del archivo index.html. si queremos que salga
//en un sitio concreto: target: document.querySelector("...")...