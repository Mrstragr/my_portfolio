function startTypewriter(text) {
    const element = document.getElementById('typewriter-text');
    element.innerHTML = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, Math.random() * 50 + 30);
      }
    }
    
    type();
  }