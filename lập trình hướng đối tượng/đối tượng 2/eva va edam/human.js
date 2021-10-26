class Human {
    name;
    weight;
    gender;

    constructor(_name, _weight, _gender) { //hàm khởi tạo
        this.name = _name;
        this.weight = _weight;
        this.gender = _gender;
    }

    eat(_apple) {
        if(_apple.checkEmpty()){
            this.weight += 1;
            _apple.weight -= 1;
            console.log(this.weight);
            console.log(_apple.weight);
        }else {
            _apple.weight = 0;
            console.log("Ăn hết rồi");
        }

    }
}