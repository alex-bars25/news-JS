import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ArticleResponse, SourceResponse } from '../types/types';


class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data?: ArticleResponse) => this.view.drawNews(data as ArticleResponse)));
        this.controller.getSources((data?: SourceResponse) => this.view.drawSources(data as SourceResponse));
    }
}

export default App;
