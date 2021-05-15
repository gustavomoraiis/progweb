<template>
    <section>
        <div class="container ">


                
               
                   

                        
          
            
           <div class="row d-flex align-items-center">
               <div class="col-md-12 col-sm-12 col-lg-4"></div>
               <div class="col-md-12 col-sm-12 col-lg-4  margin">
                    <h1>Notes App</h1>
                    <p>Informe os dados abaixo para registrar um novo usuário.</p>
                    
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
                                        <a href="../login"><b-button block  variant="danger">VOLTAR</b-button></a>
                                    
                                </div>
                            </div>
                            
                           
                        </b-form>
                     
               </div>
           
                       <div class="col-md-12 col-sm-12 col-lg-4"></div> 
            </div>      
                
            
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

.margin{
    margin-top: 25%;
}

body {
  /* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(24,0,112,1) 100%); */

  background: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: auto;
}

</style>

