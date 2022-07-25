window.onload = function () {
    window.addEventListener("scroll", (e) => {
        console.log(window.scrollY);
      });
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    });

    // Add animation bindings to elements
    lax.addElements('.item', {
      scrollY: {
        opacity: [
            [0, 100],
            [1, 0]
          ],
          opacity: [
            [100, 200],
            [0, 1]
          ],
      }
    })
  }
