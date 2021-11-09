export default class Product{
    constructor(id,name,quantity,price){
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
        this._siguiente = null;
        this._anterior = null;
    }

    info(){
        return ` Id: ${this._id} | Nombre: ${this._name} | Precio: $${this._price} | Cantidad: ${this._quantity} | Total: ${this.getTotal()}`;
    }

    getId(){
        return(this._id);
    }

    getName(){
        return(this._name);
    }

    getQuantity(){
        return(this._quantity);
    }

    getPrice(){
        return(this._price);
    }

    getTotal(){
        let total = this._quantity * this._price;
        return(total);
    }
}