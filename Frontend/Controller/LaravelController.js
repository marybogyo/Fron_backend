import DataService from "../Model/DataServise.js";
import TablaView from "../View/TablaView.js";
export default class Controller{
    constructor(){
        this.dataService=new DataService();
        this.dataService.getData("kyras", this.megjelenit)
        
        $(window).on("sorTorles", (e)=>{
            //console.log(e.detail);
            this.dataService.deleteData("kyras", e.detail, this.hibaCallback)
        }) 
    }

    hibaCallback(err){
        console.log(err)
    }

    megjelenit(list){
       //console.log(list)
        //példány. a view-t/Táblázatot
        new TablaView(list, $(".adatok"));
    }

}