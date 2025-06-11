<script>
  const PASSWORD = "XBrownFuturo123"; // Cambia la contraseña si quieres

  function checkPassword() 
    const input = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    if (input === PASSWORD) 
      errorMsg.textContent = ""
      document.getElementById('login-container').style.display = "none";
      document.getElementById('private-content').style.display = "block";
    else {
      errorMsg.textContent = "Contraseña incorrecta. Intenta de nuevo."
    }
  
</script>

