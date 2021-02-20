const app = {
    data() {
        return {
            tasks: [{title: 'siamese', image: './images/1.jpg', done: false, undone: true, show: true },
                    {title: 'exotic', image: './images/2.jpg', done: false, undone: true, show: true },
                    {title: 'persian', image: './images/3.jpg', done: false, undone: true, show: true }
                ],
            
            search: {click: false, nclick: true},
            boxsearch: '',
            notFound: false,
            photo: '',
            photoShow: false
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
            this.tasks[index].undone = !this.tasks[index].undone
        },

        statusSearch(){
            this.search.click = !this.search.click
            this.search.nclick = !this.search.nclick
            this.boxsearch= ''
            this.showList();

        },

        showPhoto(index){
            this.photo = this.tasks[index].image
            this.photoShow = true
        },

        closePhoto(){
            this.photoShow = false
        },

        searchPhoto(){
            if(this.boxsearch){
                for (let index = 0; index < this.tasks.length; index++){
                    const texts = this.tasks[index];
                    if(texts.title !== this.boxsearch.toLowerCase()){
                        texts.show = false
                        this.notFound = false
                    }
                    if(texts.title.includes(this.boxsearch.toLowerCase())){
                        texts.show =true
                        this.notFound = false
                    }
                    if(this.tasks.every(texts => !texts.show)){
                        this.notFound = true
                    }
                }
            }else{
                this.showList();
            }
        },

        showList(){
            for (let index = 0; index < this.tasks.length; index++){
                this.tasks[index].show = true
                this.notFound = false
            }
        }

        
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.done).length
        }
    }
    
}
Vue.createApp(app).mount('#app')