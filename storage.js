export default class Storage{
    constructor(){
        this._inicio = null;
        this._limite = 0;
    }

    add(nuevo){
        if(this._inicio == null){ // En caso de lista vacia
            this._inicio = nuevo;
            this._limite = 1;
            return(`Se añadio ${nuevo.info()}`);
        }
        else if(this._limite < 20){
            let temp = this._inicio;
            if(this._inicio._id > nuevo._id){ // En caso de que el 1er elemento tenga ID mayor que el ingresado
                temp.anterior = nuevo;
                nuevo.siguiente = temp;
                this._inicio = nuevo;
            }
            else{
                while((temp.siguiente != null) && (Number(temp._id) < Number(nuevo._id))){ // Recorre la lista
                    temp = temp.siguiente;
                }
                if(Number(temp._id) > Number(nuevo._id)){
                    temp.anterior.siguiente = nuevo;
                    nuevo.anterior = temp.anterior;
                    temp.anterior = nuevo;
                    nuevo.siguiente = temp;
                    this._limite++;
                    return(`Se añadio ${nuevo.info()}`);
                }
                else{
                    temp.siguiente = nuevo;
                    nuevo.anterior = temp;
                    this._limite++;
                    return(`Se añadio ${nuevo.info()}`);
                }
            }
        }else{return("La lista esta llena, no puedes ingresar mas productos")}
    }

    remove(id){
        let elim = null;
        if(id == this._inicio.getId()){
            elim = this._inicio;
            this._inicio = this._inicio.siguiente;
            if(this._inicio != null){
                this._inicio.anterior = null;
                this._limite--;
            }
            elim.siguiente = null;
            return(elim);
        }
        let temp = this._inicio;
        while(temp.siguiente != null && elim == null){
            if(temp.siguiente.getId() == id){
                elim = temp.siguiente;
                temp.siguiente = temp.siguiente.siguiente;
                temp.siguiente.siguiente.anterior = temp;
                elim.siguiente = null;
                elim.anterior = null;
            }
            else{
                temp = temp.siguiente;
            }
        }
        return(elim);
    }

    search(id){
        let temp = this._inicio;
        while(temp!=null){
            if(temp.getId() == id){
                return(temp);
            }
            temp = temp.siguiente;
        }
        return null;
    }

    showAll(){
        if(this._inicio == null){
            return("");
        }
        else{
            return(this._showAll(this._inicio));
        }
    }

    _showAll(n){
        if(n.siguiente == null){
            return(n.info());
        }
        else{
            return(n.info() + "<br>" + this._showAll(n.siguiente));
        }
    }

    showAllInv(){
        let temp = this._inicio;
        let text = "";
        if(this._inicio == null){
            return(text);
        }
        while(temp.siguiente!=null){
            temp = temp.siguiente;
        }
        while(temp!=null){
            text += `${temp.info()}<br>`;
            temp = temp.anterior;
        }
        return text;
    }

}