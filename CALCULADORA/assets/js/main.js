function createCalculate(){

    return {
        display: document.querySelector('.display'),

        inicia(){
            this.clickButton();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode === 13){
                    this.finish();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        finish(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },

        clickButton(){
            document.addEventListener('click', (e) =>{
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.finish();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

    };
}

const calculadora = createCalculate();
calculadora.inicia();