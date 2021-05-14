<template>
    <section>
        <div class="container ">


                
               
                   

                        
          
            
           <div class="row">
               
               <div class="col-12 ">
                     
                    <h1>Notes App</h1>
                    <p>Informe os dados abaixo para registrar um novo usuário.</p>
               
                    <div class="div-form">

                   
                        <b-form @submit.prevent="login">

                            <b-form-group>
                                <b-form-input
                                    v-model="nome"
                                    type="text"
                                    placeholder="Nome"
                                    required
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group>
                                <b-form-input
                                    v-model="email"
                                    type="email"
                                    placeholder="E-mail"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group>
                                <b-form-input
                                    v-model="senha"
                                    type="password"
                                    placeholder="Senha" 
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div class="row">
                                <div class="col-6">
                                    <b-button block type="submit" variant="primary">CRIAR</b-button>
                                </div>
                                <div class="col-6">
                                    <b-button block type="submit" variant="danger">VOLTAR</b-button>
                                </div>
                            </div>
                            
                           
                        </b-form>
                     </div>
               </div>
           
                        
            </div>      
                
            
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.div-form{
    max-width: 500px;
}


body {
  /* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(24,0,112,1) 100%); */

  background: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: auto;
}

</style>

