<script>
export default {
  data() {
    return {
    }
  }
}
</script>


<template>
    <footer class="footer-info">

      <div class="footer-conteiner">  
        
        <div class="footer-left">
            <div class="info">Boolando s.r.l.</div>
            <p>Informazioni legali  Informativa sulla privacy  Diritto di recesso</p>
        </div>

        <div class="footer-right">
            <div class="social">Trovaci anche su</div>
            <div class="loghi-social">
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-pinterest"></i>
                <i class="fa-brands fa-square-youtube"></i>
            </div>
        </div>

      </div>
    </footer>
</template>


<style>
/* FOOTER */
.footer-info {
    display: flex;
    width: 100%;
    height: 120px;
    background-color: #1a1a1a;
    color: white;
    justify-content: center;
  
  }
  
  .footer-conteiner {
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  }
  
  .footer-left {
    width: 50%;
  }
  
  .footer-right {
    display: flex;
    flex-direction: column;
    width: 122px;
    text-align: left;
  }
  
  .info {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .loghi-social {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin-top: 7px;
  }
  
</style>