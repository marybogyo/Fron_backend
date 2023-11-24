export default class DataService{
    constructor(){
        //console.log("DataService");
        axios.defaults.baseURL="http://127.0.0.1:8000/api/";
    }
    getData(vegpont, callback){
        axios
        .get(vegpont)
        .then(function (response){
            callback(response.data);
        })
        .catch(function(error){
            //console.log(error);
        })
        .finally(function (){

        });
    }
    postData(){}
    putData(){}
    deleteData(vegpont, id, hibaCallback){
        console.log(id);
        axios
        .delete(vegpont+"/"+id)
        .then(function(response){
            callback(response);
        })
        .catch(function (error){
            hibaCallback(error)
        })
        .finally(function(){
            
        })
    }
}