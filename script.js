let cursor = document.getElementById('cursor');

cursor.addEventListener('mousemove' , (e) => {
  cursor.style.top = "top :" + e.pageX;
});
