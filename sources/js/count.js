document.addEventListener("DOMContentLoaded", () => {

  

    function isElementInViewport (el) {

        var rect = el.getBoundingClientRect();
        // console.log(rect.top);
    return (
        rect.top >= 0&&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight-40|| document.documentElement.clientHeight)&& /* or $(window).height() */
        rect.right <= (window.innerWidth -10||document.documentElement.clientWidth-10) /* or $(window).width() */
    );
}


  function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}


var handler = onVisibilityChange(document.getElementById('count1'), function() {
    /* Your code go here */
    
   
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
          clearInterval(timer);
          }
        }, step);
      }
      if(isElementInViewport(document.getElementById('count1')))
      {
        counter("count1", 0, 24, 1000);
        counter("count2", 0, 50, 1000);
        counter("count3", 0, 12, 1000);
      }
      else
      {
        counter("count1",0,1,1);
        counter("count2",0,1,1);
        counter("count3",0,1,1);
        
      }
    

    
});

//console.log(handler);

// // jQuery
$(window).on('DOMContentLoaded load resize scroll', handler);


 });